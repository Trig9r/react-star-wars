import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import iconBookmark from './img/bookmark.svg';

import styles from './Favorite.module.css';

export const Favorite = () => {
  const [count, setCount] = React.useState(0);

  const store = useSelector((state) => state.favoriteReducer);

  React.useEffect(() => {
    const length = Object.keys(store).length;
    length.toString().length > 2 ? setCount('...') : setCount(length);
  }, [store]);

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={iconBookmark} alt="Favorites" />
      </Link>
    </div>
  );
};
