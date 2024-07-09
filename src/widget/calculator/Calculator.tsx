import React, { useState, useCallback } from 'react';
import genertaeRPN from '../../utils/generateRPN';
import getNormalize from '../../utils/getNormalize';
import calculate from '../../utils/calculate';
import { Button } from '../../shared/ui/button';
import { Display } from '../../feature/ui/display';
import styles from './calculator.module.css';

export const Calculator = () => {
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

  return (
    <section className={styles.calculator}>
      <Display operations={operations} result={result} onChange={handleChange} />
      <div className={styles['button-panel']}>
        <Button label="C" handleClick={handleClear} />
        <Button label="√" handleClick={handleClick} />
        <Button label="%" handleClick={handleClick} />
        <Button label="/" handleClick={handleClick} />
        <Button label="7" handleClick={handleClick} />
        <Button label="8" handleClick={handleClick} />
        <Button label="9" handleClick={handleClick} />
        <Button label="x" handleClick={handleClick} />
        <Button label="4" handleClick={handleClick} />
        <Button label="5" handleClick={handleClick} />
        <Button label="6" handleClick={handleClick} />
        <Button label="-" handleClick={handleClick} />
        <Button label="1" handleClick={handleClick} />
        <Button label="2" handleClick={handleClick} />
        <Button label="3" handleClick={handleClick} />
        <Button label="+" handleClick={handleClick} />
        <Button label="00" handleClick={handleClick} />
        <Button label="0" handleClick={handleClick} />
        <Button label="," handleClick={handleClick} />
        <Button
          label="="
          handleClick={handleCalculate}
          styles={{ background: '#fff', color: '#4a79be' }}
        />
      </div>

      <div className={styles['calculator-outline']} />
    </section>
  );
};
