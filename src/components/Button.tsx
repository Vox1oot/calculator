import React from 'react';
import styled from 'styled-components';

type Props = {
    label: string;
    handleClick: Function;
    styles?: {};
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
