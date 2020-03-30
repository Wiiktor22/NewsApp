import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { MyThemeContext } from './../../context/ThemeContext';

const Error = styled.h6`
    font-size: 400;
    font-size: 2.8rem;
    color: ${({ color }) => color};
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    margin-bottom: 3vh;
`;

const Text = styled.p`
    font-size: 1.4rem;
`;

const ErrorPage = () => {
    let location = useLocation();
    const { colors } = useContext(MyThemeContext);
    const getTheme = () => {
        switch (location.pathname) {
            case '/':
                return colors.main
            case '/business':
                return colors.business
            case '/entertaiment':
                return colors.entertaiment
            case '/technology':
                return colors.technology
            case '/science':
                return colors.science
            case '/health':
                return colors.health
            case '/sports':
                return colors.sports
            default:
                return colors.main
        }
    }
    return (
        <>
            <Error color={getTheme()}>Error</Error>
            <Text>Przepraszamy! Napotkaliśmy błąd...</Text>
            <Text>Prosimy odświeżyć stronę lub spróbować ponownie później.</Text>
        </>
    )
}
 
export default ErrorPage;