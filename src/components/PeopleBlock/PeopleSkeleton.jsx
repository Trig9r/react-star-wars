import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './PeopleBlock.module.css';

export const PeopleSkeleton = () => (
  <ContentLoader
    className={styles.list__item}
    speed={2}
    width={200}
    height={327}
    viewBox="0 0 200 327"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" width="200" height="327" />
  </ContentLoader>
);
