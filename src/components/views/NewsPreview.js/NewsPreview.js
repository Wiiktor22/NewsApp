import React, { useContext, useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { MyThemeContext } from './../../context/ThemeContext';

const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
`;

const SecondWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${({ height }) => `${height + 50}px`};
    z-index: 2;
    border-radius: 0 0 15px 15px;
    background-color: ${({ color }) => color};
`;

const ImgWrapper = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    border-radius: 0 0 15px 15px;
`;

const ColorWrapper = styled.div`
    margin-top: ${({ height }) => `${height + 5}px`};
`;

const PaddingWrapper = styled.div`
    padding: 2vh 7vw;
`;

const Text = styled.p`
    font-size: 1.3rem;

    ${({ white }) => (
        white && css`
            color: white;
            text-align: center;
        `
    )}
`;

const Title = styled.h4`
    font-size: 2rem;
    color: ${({ color }) => color};
    margin-top: 1vh;
    padding-bottom: 2vh;
`;

const SourceButton = styled.a`
    display: block;
    text-decoration: none;
    color: white;
    font-size: 1.3rem;
    border-radius: 20px;
    margin-top: 3vh;
    padding: 8px 0;
    width: 60px;
    text-align: center;
    background-color: ${({ color }) => color};
    outline: none;
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 2vh;
    right: 5vw;
    outline: none;
    background-color: transparent;
    color: ${({ color }) => color};
    font-size: 3rem;
    z-index: 9;
    border:none;
`;

const NewsPreview = props => {
    //Get correct article
    const id = Number(props.match.params.id);
    const currentArticle = props.data.find((item, index) => index === id);
    
    //Set image height
    const ref = useRef(null);
    const [imageHeight, setImageHeight] = useState(0);
    useEffect(() => {
        if (currentArticle.urlToImage !== null) {
            setImageHeight(ref.current.clientHeight);
        }
    }, [imageHeight])

    //Theme
    let location = props.match.path
    let currentLocation = location.slice(0, location.length - 4);
    const { colors } = useContext(MyThemeContext);
    const getTheme = () => {
        console.log(currentLocation)
        switch (currentLocation) {
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

    const getContent = () => {
        if (currentArticle.content === null) {
            return "Brak zawartości artykułu..."
        } else {
            const index = currentArticle.content.lastIndexOf('[');
            const text = currentArticle.content.slice(0, index);
            return text
        }
    }
    const getPhoto = () => {
        if (currentArticle.urlToImage === null) {
            return (
                <Text white>Brak fotografii</Text>
            )
        } else {
            return (
                <ImgWrapper src={currentArticle.urlToImage} ref={ref}/>
            )
        }
    }

    return ( 
        <Wrapper>
            {window.moveTo(0,0)}
            <CloseBtn 
                color={getTheme()}
                onClick={() => props.history.goBack()}
                >x</CloseBtn>
            <SecondWrapper color={getTheme()} height={imageHeight}>
                {getPhoto()}
                <ColorWrapper height={imageHeight}>
                    <Text white>{currentArticle.source.name.toLowerCase()}</Text>
                    <Text white>{currentArticle.publishedAt.slice(0,10)}</Text>
                </ColorWrapper>
                <PaddingWrapper>
                    <Title color={getTheme()}>{currentArticle.title}</Title>
                    <Text>{getContent()}</Text>
                    <SourceButton 
                        color={getTheme()}
                        href={currentArticle.url}
                        target="_blank"
                        >
                        źródło
                        </SourceButton>
                </PaddingWrapper>
            </SecondWrapper>
        </Wrapper>
    );
}

const mapStateToProps = state => {
    return {
        data: state.storeData
    }
}
 
export default connect(mapStateToProps)(NewsPreview);