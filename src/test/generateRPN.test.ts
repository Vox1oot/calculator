import genertaeRPN from '../utils/generateRPN';

test('Reverse polish notation tests', () => {
    expect(genertaeRPN('')).toStrictEqual([]);
    expect(genertaeRPN('1+1')).toStrictEqual(['1', '1', '+']);
    expect(genertaeRPN('10-5*5')).toStrictEqual(['10', '5', '5', '*', '-']);
    expect(genertaeRPN('100*5.12-√9')).toStrictEqual(['100', '5.12', '*', '9', '√', '-']);
    expect(genertaeRPN('1000+20%')).toStrictEqual(['1000', '20', '%', '+']);
    expect(genertaeRPN('123.544*0.9')).toStrictEqual(['123.544', '0.9', '*']);
    expect(genertaeRPN('√16+10%')).toStrictEqual(['16', '√', '10', '%', '+']);
});
