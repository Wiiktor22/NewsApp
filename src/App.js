import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageWrapper from './components/elements/PageWrapper/PageWrapper';
import MyThemeContextProvider from './components/context/ThemeContext';
import NewsPreview from './components/views/NewsPreview.js/NewsPreview';
import NewsList from './components/views/NewsList/NewsList';

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
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <GlobalStyle />
            <MyThemeContextProvider>
            <Wrapper>
                <PageWrapper>
                    <Switch>
                        <Route exact path='/' component={NewsList} />
                        <Route path='/news/:id' component={NewsPreview} />
                        <Route path='/business/:id' component={NewsPreview} />
                        <Route path='/entertaiment/:id' component={NewsPreview} />
                        <Route path='/health/:id' component={NewsPreview} />
                        <Route path='/science/:id' component={NewsPreview} />
                        <Route path='/sports/:id' component={NewsPreview} />
                        <Route path='/technology/:id' component={NewsPreview} />
                        <Route path='/(business|entertaiment|health|science|sports|technology)/' component={NewsList} />
                        <Route component={NewsList} />
                    </Switch>
                </PageWrapper>
            </Wrapper>
            </MyThemeContextProvider>
        </BrowserRouter>
    );
}
 
export default App;