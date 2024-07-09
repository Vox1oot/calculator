import { generateRPN } from './generateRPN';

test('Reverse polish notation tests', () => {
  expect(generateRPN('')).toStrictEqual([]);
  expect(generateRPN('1+1')).toStrictEqual(['1', '1', '+']);
  expect(generateRPN('10-5*5')).toStrictEqual(['10', '5', '5', '*', '-']);
  expect(generateRPN('100*5.12-√9')).toStrictEqual(['100', '5.12', '*', '9', '√', '-']);
  expect(generateRPN('1000+20%')).toStrictEqual(['1000', '20', '%', '+']);
  expect(generateRPN('123.544*0.9')).toStrictEqual(['123.544', '0.9', '*']);
  expect(generateRPN('√16+10%')).toStrictEqual(['16', '√', '10', '%', '+']);
});
