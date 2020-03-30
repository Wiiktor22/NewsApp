import React, { useContext } from 'react';
import styled from 'styled-components';
import Date from './Date/Date';
import NewsImg from './../../../assets/news.svg';
import { useLocation } from 'react-router-dom';
import { MyThemeContext } from '../../context/ThemeContext';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    height: 90px;
    width: 100%;
    background-color: ${({ theme }) => theme};
    border-radius: 0 0 15px 15px;
`;

const Logo = styled.img`
    height: 48px;
    width: 48px;
`;

const Header = () => {
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
        <HeaderWrapper theme={getTheme()}>
            {console.log(colors)}
            <Logo src={NewsImg} />
            <Date />
        </HeaderWrapper>
    );
}
 
export default Header;