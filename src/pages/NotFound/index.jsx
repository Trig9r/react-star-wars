import React from 'react';
import { useLocation } from 'react-router';

import img from './img/404.png';

import styles from './NotFound.module.css';

export const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <img className={styles.img} src={img} alt="Not found" />
      <p className={styles.text}>
        Not match for <u>{location.pathname}</u>
      </p>
    </>
  );
};
