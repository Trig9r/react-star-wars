import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { PersonLinkBack } from '@components/PersonLinkBack';
import { PersonPhoto } from '@components/PersonPhoto';
import { PersonInfo } from '@components/PersonInfo';

import { Loading } from '@UI/Loading';

import { API_PERSON } from '@constants/api';
import { getPeopleImg } from '@services/getPeopleData';
import { getApiResource } from '@utils/network';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/PersonFilms'));

export const PersonPage = () => {
  const [personInfo, setPersonInfo] = React.useState([]);
  const [personName, setPersonName] = React.useState('');
  const [personPhoto, setPersonPhoto] = React.useState('');
  const [personFilms, setPersonFilms] = React.useState([]);
  const [errorApi, setErrorApi] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  const { id } = useParams();

  const getPersonResource = async (url) => {
    setLoading(true);
    const res = await getApiResource(url);
    if (res) {
      const person = [
        { title: 'Height', data: res.height },
        { title: 'Mass', data: res.mass },
        { title: 'Hair color', data: res.hair_color },
        { title: 'Skin color', data: res.skin_color },
        { title: 'Eye color', data: res.eye_color },
        { title: 'Birth year', data: res.birth_year },
        { title: 'Gender', data: res.gender },
      ];
      setPersonInfo(person);
      setPersonName(res.name);
      setPersonPhoto(getPeopleImg(id));
      res.films.length && setPersonFilms(res.films);
      setErrorApi(false);
      setLoading(false);
    } else {
      setErrorApi(true);
      setLoading(true);
    }
  };

  React.useEffect(() => {
    getPersonResource(`${API_PERSON}/${id}`);
  }, []);
  return (
    <>
      <PersonLinkBack />
      {errorApi ? (
        <h1>Ошибка</h1>
      ) : isLoading ? (
        <Loading />
      ) : (
        <div className={styles.wrapper}>
          <span className={styles.person__name}>{personName}</span>
          <div className={styles.container}>
            <PersonPhoto imgSrc={personPhoto} alt={personName} />
            <PersonInfo info={personInfo} />
            {personFilms && (
              <Suspense fallback={<Loading theme={'red'} />}>
                <PersonFilms films={personFilms} />
              </Suspense>
            )}
          </div>
        </div>
      )}
    </>
  );
};

PersonPage.propTypes = {};
