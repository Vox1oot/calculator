import React from 'react';
import styled from 'styled-components';
import Calculator from './components/Calculator';

const Container = styled.div`
    background: linear-gradient(135deg, #fe9999, #f88484);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
`;

const App = () => (
    <Container>
        <Calculator />
    </Container>
);

export default App;
