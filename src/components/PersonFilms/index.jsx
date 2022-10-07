import React from 'react';
import PropTypes from 'prop-types';

import { makeConcurrentRequest, changeHTTP } from '@utils/network';

import styles from './PersonFilms.module.css';

const PersonFilms = ({ films }) => {
  const [filmsName, setFilmsName] = React.useState([]);

  const getResourceFilms = async () => {
    const filmsHTTPS = films.map((url) => changeHTTP(url));
    const response = await makeConcurrentRequest(filmsHTTPS);
    setFilmsName(response);
  };

  React.useEffect(() => {
    getResourceFilms();
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => (
            <li className={styles.list__item} key={episode_id}>
              <span className={styles.item__episode}>Episode {episode_id}</span>
              <span className={styles.item__colon}>:</span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

PersonFilms.propTypes = {
  films: PropTypes.array,
};

export default PersonFilms;
