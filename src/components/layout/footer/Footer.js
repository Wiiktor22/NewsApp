import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { MyThemeContext } from './../../context/ThemeContext';

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2vh 0 3vh;
`;

const Text = styled.p`
    font-size: ${({ big }) => big ? '1.2rem' : '1rem'};
    color: ${({ big }) => big ? big : 'black'};
`;

const Reference = styled.a`
    text-decoration: none;
    color: ${({ color }) => color ? color : 'black'};
`;

const Footer = () => {
    const date = new Date();
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
        <FooterWrapper>
            <Text big>
                <Reference 
                    href="http://wiktorszlegier.pl/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    color={getTheme()}
                    >
                    Wiktor Szlegier 
                    </Reference>
                     © {date.getFullYear()}
            </Text>
            <Text>
                Powered by News <Reference href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">API</Reference>
            </Text>
            <Text>
                Icons source <Reference href="https://icons8.com/" target="_blank" rel="noopener noreferrer">icons8</Reference>
            </Text>
        </FooterWrapper>
    );
}
 
export default Footer;