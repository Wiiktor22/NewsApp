import React from 'react';
import styled from 'styled-components';
import Date from './Date/Date';
import NewsImg from './../../../assets/news.svg';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    height: 90px;
    width: 100%;
    background-color: #FA4D61;
    border-radius: 0 0 15px 15px;
`;

const Logo = styled.img`
    height: 48px;
    width: 48px;
`;

const Header = () => {
    return ( 
        <HeaderWrapper>
            <Logo src={NewsImg} />
            <Date />
        </HeaderWrapper>
    );
}
 
export default Header;