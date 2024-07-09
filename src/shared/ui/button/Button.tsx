import React from 'react';
import clsx from 'clsx';
import { IButton } from './Button.interface';
import styles from './Button.module.css';

export const Button = ({ label, handleClick, className }: IButton) => (
  <button type="button" className={clsx(className, styles.btn)} onClick={() => handleClick(label)}>
    {label}
  </button>
);

Button.displayName = 'Button';
