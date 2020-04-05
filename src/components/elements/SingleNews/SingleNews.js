import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { MyThemeContext } from './../../context/ThemeContext';

const Wrapper = styled.article`
    position: relative;
    margin: 0 auto 3vh;
    height: 14vh;
    border-radius: 10px;
    background-color: #fafafa;
    box-shadow: 0px 0px 8px rgba(209,209,209,0.7);
    animation: .4s show linear;
    @keyframes show {
        from {
            transform: scale(.75);
        }
        to {
            transform: scale(1);
        }
    }
    @media (min-height: 633px) {
        height: 12vh;
    }
    @media (min-width: 768px) {
        height: 14vh;
    }
    @media (min-width: 768px) {
        height: 15vh;
        width: 40vw;
    }
    @media (min-width: 1366px) {
        height: 20vh;
        width: 37vw;
    }
    @media (min-width: 1536px) {
        height: 20vh;
        width: 32vw;
    }
    @media (min-width: 1536px) {
        height: 18vh;
        width: 29vw;
    }
`;

const ImgWrapper = styled.img`
    position: absolute;
    height: 100%;
    width: 30vw;
    border-radius: 10px 0 0 10px;
    @media (min-width: 768px) {
        height: 45%;
        width: auto;
        border-radius: 10px;
    }
    @media (min-width: 1024px) {
        width: 20vw;
        height: 15vh;
    }
    @media (min-width: 1366px) {
        width: 15vw;
        height: 20vh;
        padding: 1.5vh 1vw;
        border-radius: 20px;
    }
    @media(min-width: 1800px) {
        height: 18vh;
    }
`;

const Content = styled.div`
    position: relative;
    height: 100%;
    margin-left: 30vw;
    padding: 5px 10px;
    @media (min-width: 768px) {
        margin-left: 0;
        margin-top: 65px;
    }
    @media (min-width: 1024px) {
        margin-top: 0;
        margin-left: 20vw;
    }
    @media (min-width: 1366px) {
        margin-left: 15vw;
        margin-top: 1vh;
    }
`;

const Title = styled.h5`
    font-weight: 400;
    font-size: 1.3rem;
    @media (min-width: 768px) {
        font-size: 1.4rem;
    }
    @media (min-width: 1366px) {
        font-size: 1.5rem;
    }
`;

const Button = styled.button`
    position: absolute;
    bottom: 5px;
    left: 10px;
    background: transparent;
    border: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1rem;
    color: ${({ color }) => color };
    margin-top: 1vh;
    cursor: pointer;
    @media (min-width: 768px) {
        left: auto;
        right: 40px;
        top: -200px;
        font-size: 1.3rem;
    }
    @media (min-width: 1024px) {
        height: 20px;
        left: 10px;
        top: 80px;
    }
    @media (min-width: 1024px) {
        font-size: 1.3rem;
        top: 100px;
    }
`;

const NoPhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 30vw;
    font-size: 1.1rem;
    @media (min-width: 1024px){
        width: 20vw;
    }
    @media (min-width: 1366px){
        width: 15vw;
        font-size: 1.3rem;
    }
`;

const SingleNews = ({ src, title, index }) => {
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

    const defineMaxLenght = (title) => {
        if (window.innerHeight <= 640) {
            return (
                title.length < 70 ? title : `${title.slice(0, 66)}...`
            )
        } else if (window.innerHeight > 640 && window.innerHeight < 750) {
            return (
                title.length < 80 ? title : `${title.slice(0, 76)}...`
            )
        } else {
            return (
                title.length < 90 ? title : `${title.slice(0, 85)}...`
            )
        }
    }
    const getPath = () => {
        if (location.pathname === '/') {
            return '/news'
        } else {
            return location.pathname
        }
    }
    const correctPath = `${getPath()}/${index}`
    
    return ( 
        <Wrapper>
            {src ? <ImgWrapper src={src} /> : <NoPhoto>Brak zdjęcia</NoPhoto>}
            <Content>
                <Title>{defineMaxLenght(title)}</Title>
                <Link to={correctPath}>
                    <Button color={getTheme()}>czytaj więcej...</Button>
                </Link>
            </Content>
        </Wrapper>
    );
}
 
export default SingleNews;