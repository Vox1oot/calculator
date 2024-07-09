import React from 'react';
import { Button } from '../../../shared/ui/button';
import { Display } from '../../../feature/ui/display';
import styles from './calculator.module.css';
import { CONFIG_BUTTONS } from '../../../config';
import { useControls } from '../../hooks/useControls/useControls';

export const Calculator = (): JSX.Element => {
  const { operations, result, getHandler } = useControls();

  return (
    <section className={styles.calculator}>
      <Display operations={operations} result={result} />

      <div className={styles['button-panel']}>
        {CONFIG_BUTTONS.map((label) => (
          <Button key={label} label={label} onClick={getHandler(label)} />
        ))}
      </div>

      <div className={styles['calculator-outline']} />
    </section>
  );
};
