import { generateRPN } from '../generateRPN';
import { calculate } from './calculate';

describe('Correct algebraic operations', () => {
  test('simple operations', () => {
    const data1 = generateRPN('9+1');
    const data2 = generateRPN('10-5');
    const data3 = generateRPN('20*5');
    const data4 = generateRPN('100/2');

    expect(calculate(data1)).toBe(10);
    expect(calculate(data2)).toBe(5);
    expect(calculate(data3)).toBe(100);
    expect(calculate(data4)).toBe(50);
  });

  test('priority operations', () => {
    const data1 = generateRPN('95+5*10');
    const data2 = generateRPN('6-6/2');
    const data3 = generateRPN('6-√9*2');
    const data4 = generateRPN('50+20%');

    expect(calculate(data1)).toBe(145);
    expect(calculate(data2)).toBe(3);
    expect(calculate(data3)).toBe(0);
    expect(calculate(data4)).toBe(60);
  });

  test('operations with fractional nums', () => {
    const data1 = generateRPN('1.2+2.34');
    const data2 = generateRPN('0.111*6.3');

    expect(calculate(data1)).toBe(3.54);
    expect(calculate(data2)).toBe(0.699);
  });

  test('incorrect expressions', () => {
    const data1 = generateRPN('');
    const data2 = generateRPN('10+');
    const data3 = generateRPN('9-');
    const data4 = generateRPN('10/0');
    expect(calculate(data1)).toBe(0);
    expect(calculate(data2)).toBe(10);
    expect(calculate(data3)).toBe(-9);
    expect(() => calculate(data4)).toThrow();
  });
});
