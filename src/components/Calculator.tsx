import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div``;

const Substrate = styled.div`
    padding: 30px;
    background-color: #f9a8a8;
    border-radius: 1rem;
`;

const Wrapper = styled.div`
    border-radius: 1rem;
    background: linear-gradient(135deg, #285290, #3975ce) ;
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

const OptionalDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 6rem;
    font-size: 1.5rem;
    color: #fff;
`;

const MainDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 5rem;
    font-size: 4rem;
    font-weight: 900;
    color: #fff;
    border-bottom: 2px solid #7897c5;
`;

const Calculator: React.FC<{}> = () => (
    <Container>
        <Substrate>
            <Wrapper>
                <OptionalDisplay>123 + 2323</OptionalDisplay>
                <MainDisplay>42</MainDisplay>
                <Grid>
                    <Button label="C" />
                    <Button label="√" />
                    <Button label="%" />
                    <Button label="/" />
                    <Button label="7" />
                    <Button label="8" />
                    <Button label="9" />
                    <Button label="x" />
                    <Button label="4" />
                    <Button label="5" />
                    <Button label="6" />
                    <Button label="-" />
                    <Button label="1" />
                    <Button label="2" />
                    <Button label="3" />
                    <Button label="+" />
                    <Button label="00" />
                    <Button label="0" />
                    <Button label="," />
                    <Button label="=" />
                </Grid>
            </Wrapper>
        </Substrate>
    </Container>
);

export default Calculator;
