import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Video.module.css';

export const Video = ({ src, classes, playbackRate = 1.0 }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <video loop autoPlay muted className={cn(styles.video, classes)} ref={videoRef}>
      <source src={src} />
    </video>
  );
};

Video.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
  playbackRate: PropTypes.number,
};
