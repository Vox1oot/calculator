import { useCallback, useEffect, useState } from 'react';
import { LabelType } from '../../../config';
import { calculate } from '../../../utils/calculate';
import { generateRPN } from '../../../utils/generateRPN';
import { getNormalize } from '../../../utils/getNormalize';

export const useControls = () => {
  const [operations, setOperations] = useState('');
  const [result, setResult] = useState('');

  const handleClick = useCallback((value: string): void => {
    setOperations((prev) => prev + value);
  }, []);

  const handleClear = useCallback(() => {
    setOperations('');
    setResult('');
  }, []);

  const handleCalculate = useCallback(() => {
    try {
      const normalizeOperations = getNormalize(operations);
      const operationsRPN = generateRPN(normalizeOperations);
      const resultValue = calculate(operationsRPN);

      if (resultValue > 9999999999) {
        setResult(resultValue.toExponential(2).replace('.', ','));
      } else {
        setResult(resultValue.toString().replace('.', ','));
      }
    } catch (error) {
      setResult('Error');
    }
  }, [operations]);

  const getHandler = useCallback(
    (label: LabelType) => {
      switch (label) {
        case 'C':
          return handleClear;
        case '=':
          return handleCalculate;
        default:
          return handleClick;
      }
    },
    [handleClear, handleCalculate, handleClick],
  );

  useEffect(() => {
    const handleEnter = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleCalculate();
      }
    };

    document.addEventListener('keydown', handleEnter);

    return () => document.removeEventListener('keydown', handleEnter);
  }, [handleCalculate]);

  return { operations, result, getHandler };
};
