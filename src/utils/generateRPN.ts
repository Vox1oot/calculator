type Operator = '+' | '-' | '*' | '/' | '√' | '%'

/* Приоритеты операторов */
const operators: Record<Operator, number> = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '√': 3,
    '%': 3,
};

const generateRPN = (input: string): string[] => {
    if (input.length === 0) {
        return [];
    }

    const output: string[] = [];
    const stack: Operator[] = [];
    const tokens: string[] | null = input.match(/\d+\.{0,1}\d*|[+\-*\\/%√]/g); // разбиваем строку на операторы и операнды

    const moveStackToOutput = (stackOperators: Operator[], outputs: string[]) => {
        const operation = stackOperators.pop();

        if (operation !== undefined) {
            outputs.push(operation);
        }
    };

    if (tokens == null) {
        throw new Error('Unexpected operations');
    }

    tokens.forEach((token) => {
        if (/\d+/.test(token)) {
            output.push(token); // операнды int и float кладем в output
        } else {
            while (stack.length > 0
                && operators[token as Operator] <= operators[stack[stack.length - 1]]) {
                moveStackToOutput(stack, output);
            }
            stack.push(token as Operator);
        }
    });

    while (stack.length > 0) {
        moveStackToOutput(stack, output);
    }

    return output;
};

export default generateRPN;
