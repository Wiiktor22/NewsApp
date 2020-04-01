import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Header from '../../layout/header/Header';
import Nav from '../../layout/nav/Nav';
import { MyThemeContext } from './../../context/ThemeContext';
import { connect } from 'react-redux';
import SingleNews from './../../elements/SingleNews/SingleNews';
import Button from './../../elements/ShowMoreButton/Button';
import LoadingPage from './../../elements/LoadingPage/LoadingPage';

const Wrapper = styled.div`
    padding: 2vh 7vw;
`;

const NewsList = ({ updateStoreData }) => {
    //Theme - get adequate color
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

    //Manage data in app
    const [data, setData] = useState([]);
    const [amountOfData, setAmountOfData] = useState(10);
    const getCorrectUrl = () => {
        switch (location.pathname) {
            case '/':
                return 'http://newsapi.org/v2/top-headlines?country=pl&apiKey=409c2cd5c18546cb8bedc9f5ea78b032'
            case '/business':
                return 'http://newsapi.org/v2/top-headlines?country=pl&category=business&apiKey=409c2cd5c18546cb8bedc9f5ea78b032'
            case '/entertaiment':
                return 'http://newsapi.org/v2/top-headlines?country=pl&category=entertainment&apiKey=409c2cd5c18546cb8bedc9f5ea78b032'
            case '/technology':
                return 'http://newsapi.org/v2/top-headlines?country=pl&category=technology&apiKey=409c2cd5c18546cb8bedc9f5ea78b032'
            case '/science':
                return 'http://newsapi.org/v2/top-headlines?country=pl&category=science&apiKey=409c2cd5c18546cb8bedc9f5ea78b032'
            case '/health':
                return 'http://newsapi.org/v2/top-headlines?country=pl&category=health&apiKey=409c2cd5c18546cb8bedc9f5ea78b032'
            case '/sports':
                return 'http://newsapi.org/v2/top-headlines?country=pl&category=sports&apiKey=409c2cd5c18546cb8bedc9f5ea78b032'
            default:
                return 'http://newsapi.org/v2/top-headlines?country=pl&apiKey=409c2cd5c18546cb8bedc9f5ea78b032'
        }
    }
    useEffect(() => {
        async function fetchData() {
            setData([]);
            const url = getCorrectUrl();
            const response = await fetch(url);
            const downloadedData = await response.json();
            setData(downloadedData.articles)
        }
        fetchData();
    }, [amountOfData, location.pathname])
    const showNews = () => {
        data.length = amountOfData;
        updateStoreData(data);
        return (
            data.map((item, index) => (
                <SingleNews 
                    key={item.title}
                    src={item.urlToImage}
                    title={item.title}
                    index={index}
                />
            ))
        )
    }
    const getMoreData = () => {
        if (amountOfData < 20) {
            setAmountOfData(amountOfData + 5)
        }
    }

    return (
        <> 
            <Header />
            <Nav />
            <Wrapper>
                {data.length > 0 ? showNews() : <LoadingPage />}
                {amountOfData < 20 ? (
                    <Button color={getTheme()} onClick={getMoreData}>
                        więcej informacji...
                    </Button>
                ) : (
                    <Button color={getTheme()} onClick={() => window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    })}>
                        przenieś na początek strony
                    </Button>
                )}
            </Wrapper>
        </>
    );
}
 
const mapDispatchToProps = dispatch => {
    return {
        updateStoreData: (data) => {dispatch({ type: "DOWNLOAD", storeData: data })}
    }
}
 
export default connect(null, mapDispatchToProps)(NewsList);