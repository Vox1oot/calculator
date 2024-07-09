import React, { useState, useCallback } from 'react';
import genertaeRPN from '../../utils/generateRPN';
import getNormalize from '../../utils/getNormalize';
import calculate from '../../utils/calculate';
import { Button } from '../../shared/ui/button';
import { Display } from '../../feature/ui/display';
import styles from './calculator.module.css';
import { CONFIG_BUTTONS, LabelType } from '../../config';

export const Calculator = (): JSX.Element => {
  const [operations, setOperations] = useState('');
  const [result, setResult] = useState('');

  const handleChange = useCallback((value: string): void => {
    setOperations(value);
  }, []);

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
      const operationsRPN = genertaeRPN(normalizeOperations);
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

  const getHandler = (label: LabelType) => {
    switch (label) {
      case 'C':
        return handleClear;
      case '=':
        return handleCalculate;
      default:
        return handleClick;
    }
  };

  return (
    <section className={styles.calculator}>
      <Display operations={operations} result={result} onChange={handleChange} />

      <div className={styles['button-panel']}>
        {CONFIG_BUTTONS.map((label) => (
          <Button key={label} label={label} onClick={getHandler(label)} />
        ))}
      </div>

      <div className={styles['calculator-outline']} />
    </section>
  );
};
