import React from 'react';
import styled from 'styled-components';

type Props = {
    label: string;
    handleClick: (value: string) => void;
    styles?: { background: string, color: string };
};

const StyledButton = styled.button`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 40px;
    font-weight: normal;
    border-radius: 50%;
    padding: 20px;

    &:hover {
        cursor: pointer;
        background-color: #4a79be;
    }

    @media (max-width: 500px) {
        font-size: 35px;
        padding: 10px;
    }

    @media (max-width: 425px) {
        padding: 5px;
    }
`;

// eslint-disable-next-line react/display-name
const Button: React.FC<Props> = React.memo(({ label, handleClick, styles }) => (
    <StyledButton
        style={styles}
        onClick={() => handleClick(label)}
    >
        {label}
    </StyledButton>
));

export default Button;
