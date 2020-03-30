import styled from 'styled-components';

const Button = styled.button`
    color: ${({ color }) => color};
    font-size: 1.4rem;
    font-weight: 300;
    margin: 2vh 0;
    width: 100%;
    text-align: center;
    border: none;
    background-color: transparent;
    outline: none;
`;

export default Button;