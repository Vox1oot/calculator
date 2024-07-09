import React from 'react';
import { IDisplay } from './Display.interface';
import styles from './Display.module.css';

export const Display = ({ operations, result }: IDisplay): JSX.Element => (
  <div className={styles.display}>
    <div className={styles['display-operations']}>{operations}</div>
    <div className={styles['display-result']}>{result}</div>
  </div>
);
