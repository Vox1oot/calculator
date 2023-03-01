import genertaeRPN from '../utils/generateRPN';
import calculate from '../utils/calculate';

describe('Correct algebraic operations', () => {
    test('simple operations', () => {
        const data1 = genertaeRPN('9+1');
        const data2 = genertaeRPN('10-5');
        const data3 = genertaeRPN('20*5');
        const data4 = genertaeRPN('100/2');

        expect(calculate(data1)).toBe(10);
        expect(calculate(data2)).toBe(5);
        expect(calculate(data3)).toBe(100);
        expect(calculate(data4)).toBe(50);
    });

    test('priority operations', () => {
        const data1 = genertaeRPN('95+5*10');
        const data2 = genertaeRPN('6-6/2');
        const data3 = genertaeRPN('6-√9*2');
        const data4 = genertaeRPN('50+20%');

        expect(calculate(data1)).toBe(145);
        expect(calculate(data2)).toBe(3);
        expect(calculate(data3)).toBe(0);
        expect(calculate(data4)).toBe(60);
    });

    test('operations with fractional nums', () => {
        const data1 = genertaeRPN('1.2+2.34');
        const data2 = genertaeRPN('0.111*6.3');

        expect(calculate(data1)).toBe(3.54);
        expect(calculate(data2)).toBe(0.699);
    });

    test('incorrect expressions', () => {
        const data1 = genertaeRPN('');
        const data2 = genertaeRPN('10+');
        const data3 = genertaeRPN('9-');
        const data4 = genertaeRPN('10/0');
        expect(calculate(data1)).toBe(0);
        expect(calculate(data2)).toBe(10);
        expect(calculate(data3)).toBe(-9);
        expect(() => calculate(data4)).toThrow();
    });
});
