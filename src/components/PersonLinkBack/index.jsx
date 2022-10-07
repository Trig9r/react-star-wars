import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import iconBack from './img/back.svg';

import styles from './PersonLinkBack.module.scss';

export const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Link to="#" onClick={handleGoBack} className={styles.link}>
      <img className={styles.link__img} src={iconBack} alt="Back.svg" />
      <span>Go Back</span>
    </Link>
  );
};
