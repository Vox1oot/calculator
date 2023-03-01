interface Ioperators {
    [key: string]: number;
}

const genertaeRPN = (input: string): string[] => {
    if (input.length === 0) {
        return [];
    }

    /* Приоритеты операторов */
    const operators: Ioperators = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '√': 3,
        '%': 3,
    };

    const output: string[] = [];
    const stack: string[] = [];

    const tokens: string[] | null = input.match(/\d+\.{0,1}\d*|[+\-*\\/%√]/g); // разбиваем строку на операторы и операнды

    if (tokens == null) {
        throw new Error('Unexpected operations');
    }

    for (let i = 0; i < tokens.length; i += 1) {
        const token = tokens[i];

        if (/\d+/.test(token)) {
            output.push(token); // операнды int и float кладем в output
        } else {
            while (stack.length > 0
                && operators[token] <= operators[stack[stack.length - 1]]) {
                const operation = stack.pop();
                if (operation !== undefined) {
                    output.push(operation);
                }
            }
            stack.push(token);
        }
    }

    while (stack.length > 0) {
        const operation = stack.pop();
        if (operation !== undefined) {
            output.push(operation);
        }
    }

    return output;
};

export default genertaeRPN;
