import React from 'react';

import { ChooseSide } from '@components/ChooseSide';

import styles from './Home.module.css';

export const Home = () => {
  return (
    <div>
      <h1 className="header__text">Home</h1>
      <ChooseSide />
    </div>
  );
};
