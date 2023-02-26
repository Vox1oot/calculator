const parse = (seq: string): string => {
    let normalize = seq.slice();
    const sqrts: Array<string> | null = seq.match(/√\d*.?\d+/gi);

    if (sqrts) {
        for (let i = 0; i < sqrts.length; i += 1) {
            normalize = normalize.replace(sqrts[i], `Math.sqrt(${sqrts[i].slice(1)})`);
        }
    }

    return normalize
        .replaceAll(',', '.')
        .replaceAll('x', '*')
        .replaceAll('%', '/100');
};

const calculate = (sequence: string): number => {
    const parsed = parse(sequence);
    // eslint-disable-next-line no-new-func
    const result = new Function(`return ${parsed}`)();
    return result;
};

export default calculate;
