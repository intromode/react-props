import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorDisplay.css';

export default function ColorDisplay({ currentColor }) {
  return (
    <span className={styles.Span}>
      <div style={{ background: currentColor }} className={styles.currentColor}></div>
    </span>
  );
}

ColorDisplay.propTypes = {
  currentColor: PropTypes.string.isRequired
};


