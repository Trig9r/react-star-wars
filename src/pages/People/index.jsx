import React from 'react';

import { getApiResource, changeHTTP } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImg, getPeoplePageId } from '@services/getPeopleData';
import { PeopleBlock } from '@components/PeopleBlock';
import { Navigation } from '@components/PeopleBlock/Navigation';
import { PeopleSkeleton } from '@components/PeopleBlock/PeopleSkeleton';
import { ErrorMessage } from '@components/ErrorMessage';
import { useQueryParams } from '@hooks/useQueryParams';

export const People = () => {
  const [people, setPeople] = React.useState([]);
  const [prevPage, setPrevPage] = React.useState(null);
  const [nextPage, setNextPage] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const [errorApi, setErrorApi] = React.useState(false);
  const [counterPage, setCounterPage] = React.useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

  const getResource = async (url) => {
    setLoading(true);
    const data = await getApiResource(url);
    const { results } = data;
    if (results) {
      const peopleList = results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);
        return { id, name, img };
      });
      setPeople(peopleList);
      setNextPage(changeHTTP(data.next));
      setPrevPage(changeHTTP(data.previous));
      setCounterPage(getPeoplePageId(url));
      setLoading(false);
    } else {
      setLoading(true);
      setErrorApi(true);
    }
  };

  React.useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      {!errorApi && (
        <Navigation
          getResource={getResource}
          nextPage={nextPage}
          prevPage={prevPage}
          counterPage={counterPage}
        />
      )}

      {errorApi ? (
        <ErrorMessage />
      ) : isLoading ? (
        Array(10)
          .fill('')
          .map(() => <PeopleSkeleton key={Math.random()} />)
      ) : (
        <>
          <PeopleBlock people={people} />
        </>
      )}
    </>
  );
};
