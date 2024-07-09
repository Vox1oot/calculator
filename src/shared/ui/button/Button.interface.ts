import { HTMLAttributes } from 'react';
import { LabelType } from '../../../config';

export interface IButton extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  label: LabelType;
  onClick: (label: LabelType) => void;
  styles?: { background: string; color: string };
}
