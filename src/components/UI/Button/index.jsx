import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import '../index.css';
import styles from './Button.module.scss';

export const Button = ({ text, handleChange, disabled, theme = 'dark' }) => {
  return (
    <button
      className={cn(styles.button, styles[theme])}
      onClick={handleChange}
      disabled={!disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  handleChange: PropTypes.func,
  page: PropTypes.bool,
  theme: PropTypes.string,
};
