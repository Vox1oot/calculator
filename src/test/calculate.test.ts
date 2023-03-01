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

    test('empty operations', () => {
        const data1 = genertaeRPN('');
        expect(calculate(data1)).toBe(0);
    });
});
