export const CONFIG_BUTTONS = [
  'C',
  '√',
  '%',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '00',
  '0',
  ',',
  '=',
] as const;

export type LabelType = (typeof CONFIG_BUTTONS)[number];
