import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MyThemeContext } from './../../context/ThemeContext';

const NavWrapper = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 10vh;
    width: 100%;
    color: ${({ theme }) => theme };
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 1024px) {
        justify-content: center;
    }
    @media (min-width: 1366px) {
        position: absolute;
        top: 1vh;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (min-width: 1800px) {
        top: 0;
    }
`;

const SectionLink = styled(NavLink)`
    color: ${({ theme }) => theme };
    display: inline-block;
    text-decoration: none;
    font-size: 2.2rem;
    margin: 0 14px;
    font-weight: 400;
    outline: none;
    &.active {
        background-color: ${({ theme }) => theme };
        color: white;
        border-radius: 20px;
        padding: 3px 10px;
    }
    @media (min-width: 1366px) {
        color: white;
        &.active {
            color: ${({ theme }) => theme };
            background-color: white;
        }
    }
`;

const Nav = () => {
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
        <NavWrapper>
            <SectionLink exact to="/" theme={getTheme()}>newsy</SectionLink>
            <SectionLink to="/business" theme={getTheme()}>biznes</SectionLink>
            <SectionLink to="/entertaiment" theme={getTheme()}>rozrywka</SectionLink>
            <SectionLink to="/health" theme={getTheme()}>zdrowie</SectionLink>
            <SectionLink to="/science" theme={getTheme()}>nauka</SectionLink>
            <SectionLink to="/sports" theme={getTheme()}>sport</SectionLink>
            <SectionLink to="/technology" theme={getTheme()}>technologia</SectionLink>
        </NavWrapper>
    );
}
 
export default Nav;