import React from 'react';
import { NavLink } from 'react-router-dom';
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '@context/ThemeProvider';

import { Favorite } from '@components/Favorite';

import iconDroid from './img/droid.svg';
import iconSaber from './img/lightsaber.svg';
import iconSpaceStation from './img/space-station.svg';

import styles from './Header.module.css';

export const Header = () => {
  const [icon, setIcon] = React.useState(iconDroid);
  const isTheme = useTheme();

  React.useEffect(() => {
    switch (isTheme.theme) {
      case THEME_DARK:
        setIcon(iconSpaceStation);
        break;
      case THEME_LIGHT:
        setIcon(iconSaber);
        break;
      case THEME_NEITRAL:
        setIcon(iconDroid);
        break;
      default:
        setIcon(iconDroid);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="logoIcon" />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};
