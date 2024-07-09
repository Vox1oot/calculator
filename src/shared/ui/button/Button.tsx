import React from 'react';
import clsx from 'clsx';
import { IButton } from './Button.interface';
import styles from './Button.module.css';

export const Button = ({ className, label, onClick }: IButton) => (
  <button type="button" className={clsx(className, styles.btn)} onClick={() => onClick(label)}>
    {label}
  </button>
);

Button.displayName = 'Button';
