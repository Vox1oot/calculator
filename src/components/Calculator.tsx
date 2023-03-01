import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Button from './Button';
import MainDisplay from './MainDisplay';
import OptionalDisplay from './OptionalDisplay';
/* import calculate from '../utils/calc';
import getFormat from '../utils/getFormat'; */
import genertaeRPN from '../utils/generateRPN';
import getNormalize from '../utils/getNormalize';
import calculate from '../utils/calculate';

const Container = styled.div``;

const Substrate = styled.div`
    padding: 30px;
    background-color: #f9a8a8;
    border-radius: 1rem;
`;

const Wrapper = styled.div`
    max-width: 400px;
    border-radius: 1rem;
    background: linear-gradient(135deg, #285290, #3975ce);
    box-shadow: 0px 10px 20px #404040;
    padding: 3rem;
`;

const Grid = styled.div`
    padding: 20px 5px 0;
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(5, 80px);
    grid-template-columns: repeat(4, 80px);
`;

const Calculator: React.FC<{}> = () => {
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
            console.log(calculate(operationsRPN));
            /* const value = calculate(operations);
            const res = getFormat(value);
            setResult(res); */
        } catch (error) {
            setResult('Error');
        }
    }, [operations]);

    return (
        <Container>
            <Substrate>
                <Wrapper>
                    <OptionalDisplay operations={operations} onChange={handleChange} />
                    <MainDisplay result={result} />
                    <Grid>
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
                    </Grid>
                </Wrapper>
            </Substrate>
        </Container>
    );
};

export default Calculator;
