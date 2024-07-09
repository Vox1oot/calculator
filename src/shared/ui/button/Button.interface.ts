import { HTMLAttributes } from 'react';

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  handleClick: (value: string) => void;
  styles?: { background: string; color: string };
}
