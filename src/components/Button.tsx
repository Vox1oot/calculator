import React from 'react';
import styled from 'styled-components';

type Props = {
    label: string;
};

const StyledButton = styled.button`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 40px;
    font-weight: normal;
`;

const Button: React.FC<Props> = ({ label }) => (
    <StyledButton>{label}</StyledButton>
);

export default Button;
