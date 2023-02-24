import React from 'react';
import styled from 'styled-components';

type Props = {
    result: number | string
}

const StyledMainDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 5rem;
    font-size: 4rem;
    font-weight: 900;
    color: #fff;
    border-bottom: 2px solid #7897c5;
`;

const MainDisplay: React.FC<Props> = ({ result }) => (
    <StyledMainDisplay>{result}</StyledMainDisplay>
);

export default MainDisplay;
