import React, { useState, useEffect, useContext } from 'react';
import SingleNews from '../elements/SingleNews/SingleNews';
import LoadingPage from '../elements/LoadingPage/LoadingPage';
import { useLocation } from 'react-router-dom';
import { MyThemeContext } from './../context/ThemeContext';
import Button from './../elements/ShowMoreButton/Button';

const Health = () => {
    const [data, setData] = useState([]);
    const [amountOfData, setAmountOfData] = useState(10);
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
    
    useEffect(() => {
        async function fetchData() {
            const url = 'http://newsapi.org/v2/top-headlines?country=pl&category=health&apiKey=409c2cd5c18546cb8bedc9f5ea78b032';
            const response = await fetch(url);
            const downloadedData = await response.json();
            setData(downloadedData.articles)
        }
        fetchData();
    }, [amountOfData])
    const showNews = () => {
        data.length = amountOfData;
        return (
            data.map(item => (
                <SingleNews
                    key={item.title}
                    src={item.urlToImage}
                    title={item.title}
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
        </>
    );
}
 
export default Health;