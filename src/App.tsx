import React from 'react';
import styled from 'styled-components';
import Calculator from './components/Calculator';

const Container = styled.div`
    background: #fe9999;
    display: flex;
    flex-direction: column;
    height: 100vh;
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
