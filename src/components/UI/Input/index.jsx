import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import cancelIcon from './img/cancel.svg';

import '../index.css';
import styles from './Input.module.scss';

export const Input = ({ value, handleInputChange, placeholder, classes }) => {
  const inputRef = React.useRef(null);

  const onClickClear = () => {
    handleInputChange('');
    inputRef.current?.focus();
  };
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
        className={cn(styles.input, classes)}
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <img onClick={onClickClear} className={styles.clear} src={cancelIcon} alt="Clear.svg" />
      )}
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
};
