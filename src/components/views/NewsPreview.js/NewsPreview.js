import React, { useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MyThemeContext } from './../../context/ThemeContext';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
`;

const ImgWrapper = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 0 0 15px 15px;
`;

const ColorElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({ marginLength }) => marginLength};
    padding-top: 1vh;
    height: 12vh;
    border-radius: 0 0 15px 15px;
    background-color: ${({ color }) => color};
`;

const Text = styled.p`
    color: ${({ white }) => white ? 'white' : 'black'};
    font-size: 1.4rem;
    text-align: ${({ white }) => white ? 'center' : 'left'};
    font-weight: 400;
    margin-bottom: ${({ white }) => white ? 0 : '4vh'};
`;

const TextWrapper = styled.div`
    padding: 3vh 7vw;
`;

const Title = styled.h4`
    font-size: 2rem;
    color: ${({ color }) => color};
    font-weight: 400;
    margin-bottom: 2vh;
`;

const ReadMoreBtn = styled.a`
    margin-top: 2vh;
    color: white;
    text-decoration: none;
    background-color: ${({ color }) => color};
    padding: 7px 12px;
    font-size: 1.4rem;
    border-radius: 20px;
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 1vh;
    right: 3vw;
    color: ${({ color }) => color};
    font-size: 2.5rem;
    border: none;
    background-color: transparent;
    outline: none;
`;

const NewsPreview = (props) => {
    const [imageHeight, setImageHeight] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        setImageHeight(ref.current.clientHeight);
    }, [imageHeight])

    const id = Number(props.match.params.id);
    const article = props.data.find((item, index) => index === id);

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

    const getContent = () => {
        const index = article.content.lastIndexOf('[');
        const text = article.content.slice(0, index);
        return text
    }

    return ( 
        <Wrapper>
            <ImgWrapper src={article.urlToImage} ref={ref} />
            <ColorElement color={getTheme()} marginLength={`${imageHeight - 15}px`}>
                <div>
                    <Text white>{article.source.name.toLowerCase()}</Text>
                    <Text white>{article.publishedAt.slice(0,10)}</Text>
                </div>
            </ColorElement>
            <TextWrapper>
                <Title color={getTheme()}>{article.title}</Title>
                <Text>{getContent()}</Text>
                <ReadMoreBtn 
                    color={getTheme()}
                    href={article.url}
                    target="_blank"
                    >
                    źródło
                    </ReadMoreBtn>
            </TextWrapper>
            <CloseBtn 
                color={getTheme()}
                onClick={() => props.history.goBack()}
            >
            x
            </CloseBtn>
        </Wrapper>
    );
}

const mapStateToProps = state => {
    return {
        data: state.storeData
    }
}
 
export default connect(mapStateToProps)(NewsPreview);