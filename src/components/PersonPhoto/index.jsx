import React from 'react';
import PropTypes from 'prop-types';

import styles from './PersonPhoto.module.css';

export const PersonPhoto = ({ imgSrc, alt }) => {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={imgSrc} alt={alt} />
    </div>
  );
};

PersonPhoto.propTypes = {
  imgSrc: PropTypes.string,
  alt: PropTypes.string,
};
