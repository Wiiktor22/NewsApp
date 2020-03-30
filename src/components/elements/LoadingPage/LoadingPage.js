import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { MyThemeContext } from './../../context/ThemeContext';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 10vh - 90px);
`;

const AnimationContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`;

const AnimationElement = styled.div`
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${({ color }) => color};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    &:nth-of-type(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
    }
    &:nth-of-type(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-of-type(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-of-type(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }
`;

const LoadingPage = () => {
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
        <Wrapper>
            <AnimationContainer>
                <AnimationElement color={getTheme()}/>
                <AnimationElement color={getTheme()}/>
                <AnimationElement color={getTheme()}/>
                <AnimationElement color={getTheme()}/>
            </AnimationContainer>
        </Wrapper>
    );
}
 
export default LoadingPage;