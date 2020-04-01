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
        margin: 0 auto 2vh;
    }
`;

const ImgWrapper = styled.img`
    position: absolute;
    height: 100%;
    width: 30vw;
    border-radius: 10px 0 0 10px;
`;

const Content = styled.div`
    position: relative;
    height: 100%;
    margin-left: 30vw;
    padding: 5px 10px;
`;

const Title = styled.h5`
    font-weight: 400;
    font-size: 1.3rem;
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
`;

const NoPhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 30vw;
    font-size: 1.1rem;
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
        } else if (window.innerHeight > 750 && window.innerHeight < 1024) {
            return (
                title.length < 100 ? title : `${title.slice(0, 95)}...`
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