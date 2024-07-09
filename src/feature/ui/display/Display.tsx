import React, { ChangeEvent, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { IDisplay } from './Display.interface';
import styles from './Display.module.css';

export const Display = ({ operations, result, onChange }: IDisplay): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect((): void => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        value={operations}
        className={clsx(styles['display-input'])}
      />
      <div className={styles['display-result']}>{result}</div>
    </>
  );
};
