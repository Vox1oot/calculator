import React from 'react';
import styled from 'styled-components';

type Props = {
    operations: string[]
}

const StyledOptionalDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 6rem;
    font-size: 1.5rem;
    color: #fff;
`;

const OptionalDisplay: React.FC<Props> = ({ operations }) => {
    const result = operations.join('');

    return (
        <StyledOptionalDisplay>{result}</StyledOptionalDisplay>
    );
};

export default OptionalDisplay;
