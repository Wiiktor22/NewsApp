import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Nav from './components/layout/nav/Nav';
import PageWrapper from './components/elements/PageWrapper/PageWrapper';
import Main from './components/views/Main';
import Business from './components/views/Business';
import Entertaiment from './components/views/Entertaiment';
import Health from './components/views/Health';
import Science from './components/views/Science';
import Sports from './components/views/Sports';
import Technology from './components/views/Technology';
import MyThemeContextProvider from './components/context/ThemeContext';
import Footer from './components/layout/footer/Footer';
import NewsPreview from './components/views/NewsPreview.js/NewsPreview';

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
        width: 100%;
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
            <MyThemeContextProvider>
            <Wrapper>
                <Header />
                <Nav />
                <PageWrapper>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/news/:id' component={NewsPreview} />
                        <Route path='/business' component={Business} />
                        <Route path='/entertaiment' component={Entertaiment} />
                        <Route path='/health' component={Health} />
                        <Route path='/science' component={Science} />
                        <Route path='/sports' component={Sports} />
                        <Route path='/technology' component={Technology} />
                        <Route component={Main} />
                    </Switch>
                </PageWrapper>
                <Footer />
            </Wrapper>
            </MyThemeContextProvider>
        </BrowserRouter>
    );
}
 
export default App;