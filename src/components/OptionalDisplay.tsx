import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
    operations: string;
    onChange: (value: string) => void;
};

const StyledOptionalDisplay = styled.input`
    width: 100%;
    font-size: 1.5rem;
    background: transparent;
    color: #fff;
    outline: none;
    border: none;
    text-align: right;
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
