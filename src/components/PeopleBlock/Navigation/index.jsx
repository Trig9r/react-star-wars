import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '@UI/Button';

import styles from './Navigation.module.css';

export const Navigation = ({ getResource, counterPage, nextPage, prevPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
        <Button text={'Previous'} handleChange={handleChangePrev} disabled={prevPage} />
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
        <Button text={'Next'} handleChange={handleChangeNext} disabled={nextPage} />
      </Link>
    </div>
  );
};

Navigation.propTypes = {
  getResource: PropTypes.func,
  counterPage: PropTypes.number,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
};
