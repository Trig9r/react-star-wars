import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PeopleBlock.module.css';

export const PeopleBlock = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, img }) => (
        <li className={styles.list__item} key={id}>
          <Link to={`/people/${id}`}>
            <img className={styles.person__photo} src={img} alt={name} />
            <p className={styles.person__text}>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

PeopleBlock.propTypes = {
  people: PropTypes.array,
};
