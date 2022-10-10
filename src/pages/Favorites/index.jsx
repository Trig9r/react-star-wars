import React from 'react';
import { useSelector } from 'react-redux';

import { PeopleBlock } from '@components/PeopleBlock';

import styles from './Favorites.module.css';
import '@styles/index.css';

export const Favorites = () => {
  const [people, setPeople] = React.useState([]);

  const data = useSelector((state) => state.favoriteReducer);

  React.useEffect(() => {
    const arr = Object.entries(data);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });
      setPeople(res);
    }
  }, []);

  return (
    <>
      <h1 className="header__text">Favorites</h1>
      {people.length ? (
        <PeopleBlock people={people} />
      ) : (
        <h2 className={styles.comment}>No data</h2>
      )}
    </>
  );
};
