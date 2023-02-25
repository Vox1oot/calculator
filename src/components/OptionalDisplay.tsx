import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
    operations: string;
    onChange: Function;
}

const StyledOptionalDisplay = styled.input`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.5rem;
    background: transparent;
    width: 100%;
    outline: none;
    border: none;
    text-align: right;
    color: #fff;
`;

const OptionalDisplay: React.FC<Props> = ({ operations, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    });

    return (
        <StyledOptionalDisplay
            ref={inputRef}
            onChange={(e) => onChange(e.target.value)}
            value={operations}
        />
    );
};

export default OptionalDisplay;
