import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: white;
    font-family: 'Russo One', sans-serif;
`;

const ShowData = styled.h2`
    font-size: ${({ small }) => small ? '2.8rem' : '3.6rem'};
    font-weight: 600;
    padding: 0;
    line-height: ${({ small }) => small ? '2.8rem' : '3.6rem'};
`;

const Date = () => {
    const today = new window.Date();
    const getDay = () => {
        switch (today.getDay()) {
            case 0:
                return "niedziela"
            case 1:
                return "poniedziałek"
            case 2:
                return "wtorek"
            case 3:
                return "środa"
            case 4:
                return "czwartek"
            case 5:
                return "piątek"
            case 6:
                return "sobota"
            default:
                return "error"
        }
    }
    const getMonth = () => {
        switch (today.getMonth()) {
            case 0:
                return "styczeń"
            case 1: 
                return "luty"
            case 2:
                return "marzec"
            case 3:
                return "kwiecień"
            case 4:
                return "maj"
            case 5:
                return "czerwiec"
            case 6:
                return "lipiec"
            case 7:
                return "sierpień"
            case 8: 
                return "wrzesień"
            case 9:
                return "październik"
            case 10: 
                return "listopad"
            case 11: 
                return "grudzień"
            default:
                return "error"
        }
    }
    const getData = () => {
        const day = today.getDate();
        const month = getMonth();
        const date = `${day} ${month}`
        return date
    }

    return ( 
        <Wrapper>
            <ShowData>{getDay().toUpperCase()}</ShowData>
            <ShowData small>{getData().toUpperCase()}</ShowData>
        </Wrapper>
    );
}
 
export default Date;