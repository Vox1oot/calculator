const calculate = (tokens: string[]): number => {
  const stack: Array<number | string> = [0];

  const handleToken = (token: string): void => {
    // если число, то кладем в стек
    if (!Number.isNaN(parseFloat(token))) {
      stack.push(parseFloat(token));
      return;
    }

    if (stack.length === 1) {
      return;
    }

    let right = null;
    let left = null;

    switch (token) {
      case '+':
        right = parseFloat(stack.pop() as string);
        left = parseFloat(stack.pop() as string);
        stack.push(left + right);
        return;
      case '-':
        right = parseFloat(stack.pop() as string);
        left = parseFloat(stack.pop() as string);
        stack.push(left - right);
        return;
      case '*':
        right = parseFloat(stack.pop() as string);
        left = parseFloat(stack.pop() as string);
        stack.push(left * right);
        return;
      case '/':
        right = parseFloat(stack.pop() as string);
        left = parseFloat(stack.pop() as string);
        stack.push(left / right);
        return;
      case '√':
        right = parseFloat(stack.pop() as string);
        stack.push(Math.sqrt(right));
        return;
      case '%':
        right = parseFloat(stack.pop() as string);
        left = parseFloat(stack[stack.length - 1] as string);
        stack.push((left / 100) * right);
        return;
      default:
        throw new Error(`Invalid token: ${token}`);
    }
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const token of tokens) {
    handleToken(token);
  }

  const resultValue = +(stack.pop() as number).toFixed(3);

  if (!Number.isFinite(resultValue)) {
    throw new Error('Calculation Error. Not divided by zero');
  }

  return resultValue;
};

export default calculate;
