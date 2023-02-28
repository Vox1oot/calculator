import genertaeRPN from '../utils/generateRPN';

test('1 + 1', () => {
    expect(genertaeRPN('1+1')).toStrictEqual(['1', '1', '+'])
})