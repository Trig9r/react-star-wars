import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import iconFavorite from './img/icon-favorite.svg';
import iconFavoriteFill from './img/icon-favorite-fill.svg';

import { setPesonToFavorite, removePesonToFavorite } from '@redux/actions';

import styles from './PersonPhoto.module.css';

export const PersonPhoto = ({ imgSrc, alt, personId, isFavorite, setFavorite }) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (isFavorite) {
      dispatch(removePesonToFavorite(personId));
      setFavorite(false);
    } else {
      dispatch(
        setPesonToFavorite({
          [personId]: {
            name: alt,
            img: imgSrc,
          },
        }),
      );
      setFavorite(true);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.photo} src={imgSrc} alt={alt} />
      <img
        className={styles.favorite}
        src={isFavorite ? iconFavoriteFill : iconFavorite}
        alt="Add to favorite"
        onClick={dispatchFavoritePeople}
      />
    </div>
  );
};

PersonPhoto.propTypes = {
  imgSrc: PropTypes.string,
  personId: PropTypes.string,
  alt: PropTypes.string,
  isFavorite: PropTypes.bool,
  setFavorite: PropTypes.func,
};
