import React from 'react';
import { debounce } from 'lodash';

import { Input } from '@components/UI/Input';
import { SearchPageInfo } from '@components/SearchPageInfo';

import { Loading } from '@UI/Loading';
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';

import styles from './Search.module.css';

export const Search = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [errorApi, setErrorApi] = React.useState(false);
  const [people, setPeople] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  const getResource = async (param) => {
    setLoading(true);
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);

        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
      setLoading(false);
    } else {
      setLoading(true);
      setErrorApi(true);
    }
  };

  React.useEffect(() => {
    getResource('');
  }, []);

  const debounceGetResponce = React.useCallback(
    debounce((value) => getResource(value), 400),
    [],
  );

  const handleChangeInpVal = (value) => {
    setInputValue(value);
    debounceGetResponce(value);
  };

  return (
    <>
      {errorApi ? (
        <h1>Ошибка</h1>
      ) : (
        <div>
          <h1 className="header__text">Search</h1>
          <Input
            value={inputValue}
            handleInputChange={handleChangeInpVal}
            placeholder={'Введите персонажа'}
            classes={styles.input__search}
          />
          {isLoading ? <Loading classes={'center'} /> : <SearchPageInfo people={people} />}
        </div>
      )}
    </>
  );
};
