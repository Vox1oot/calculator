import getNormalize from '../utils/getNormalize';

test('returns a normalized string', () => {
    expect(getNormalize('12,2x2')).toBe('12.2*2');
    expect(getNormalize('0,00+2,22x5x32/5+5%')).toBe('0.00+2.22*5*32/5+5%');
    expect(getNormalize('1232424242424,32')).toBe('1232424242424.32');
});
