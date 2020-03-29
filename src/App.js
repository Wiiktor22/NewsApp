import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/sections/header/Header';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;;
    }

    html {
        font-size: 10px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
    }
`;

const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
`;

const App = () => {
    return ( 
        <BrowserRouter>
            <GlobalStyle />
            <Wrapper>
                <Header />
            </Wrapper>
        </BrowserRouter>
    );
}
 
export default App;