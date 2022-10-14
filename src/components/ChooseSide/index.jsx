import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '@context/ThemeProvider';

import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';
import imgLightSide from './img/light-side.jpg';

import styles from './ChooseSide.module.scss';

const elements = [
  {
    text: 'Light Side',
    img: imgLightSide,
    theme: THEME_LIGHT,
    classes: styles.item__light,
  },
  {
    text: 'Dark Side',
    img: imgDarkSide,
    theme: THEME_DARK,
    classes: styles.item__dark,
  },
  {
    text: "I'm Han Solod",
    img: imgFalcon,
    theme: THEME_NEITRAL,
    classes: styles.item__neitral,
  },
];

const ChooseSideItem = ({ text, img, theme, classes }) => {
  const isTheme = useTheme();

  return (
    <div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)}>
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

export const ChooseSide = () => {
  return (
    <div className={styles.container}>
      {elements.map(({ text, img, theme, classes }) => (
        <ChooseSideItem key={text} text={text} img={img} theme={theme} classes={classes} />
      ))}
    </div>
  );
};

ChooseSideItem.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
  theme: PropTypes.string,
  classes: PropTypes.string,
};
