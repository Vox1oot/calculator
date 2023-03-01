const getNormalize = (seq: string): string => seq.replaceAll(',', '.').replaceAll('x', '*');
export default getNormalize;
