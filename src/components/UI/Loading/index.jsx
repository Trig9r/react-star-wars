import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import loaderRed from './img/loader-red.svg';
import loaderBlue from './img/loader-blue.svg';
import loaderWhite from './img/loader-white.svg';

import styles from './Loading.module.css';

export const Loading = ({ theme = 'white', isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = React.useState('');

  React.useEffect(() => {
    switch (theme) {
      case 'blue':
        setLoaderIcon(loaderBlue);
        break;
      case 'red':
        setLoaderIcon(loaderRed);
        break;
      case 'white':
        setLoaderIcon(loaderWhite);
        break;
      default:
        setLoaderIcon(loaderWhite);
        break;
    }
  }, []);

  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt="loader"
    />
  );
};

Loading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
};
