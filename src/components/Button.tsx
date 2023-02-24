import React from 'react';
import styled from 'styled-components';

type Props = {
    label: string,
    handleClick: Function;
};

const StyledButton = styled.button`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 40px;
    font-weight: normal;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
        background-color: #4a79be;
    }
`;

const Button: React.FC<Props> = ({ label, handleClick }) => (
    <StyledButton
        onClick={() => handleClick(label)}
    >
        {label}
    </StyledButton>
);

export default Button;
