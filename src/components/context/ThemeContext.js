import React, { createContext } from 'react';

export const MyThemeContext = createContext();

class MyThemeContextProvider extends React.Component {
    state = {
        colors: {
            main: '#FA4D61',
            business: '#6d4c41',
            entertaiment: '#ffa726',
            health: '#38c942',
            science: '#7e57c2',
            sports: '#26a69a',
            technology: '#2196f3'
        }
    }
    render() {
        return (
            <MyThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </MyThemeContext.Provider>
        )
    }
}

export default MyThemeContextProvider;