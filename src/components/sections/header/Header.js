import React from 'react';
import styled from 'styled-components';
import Date from './Date/Date';

const HeaderWrapper = styled.div`
    padding: 10px;
    height: 14vh;
    width: 100%;
    background-color: #FA4D61;
    border-radius: 0 0 15px 15px;
`;

const Header = () => {
    return ( 
        <HeaderWrapper>
            <Date />
        </HeaderWrapper>
    );
}
 
export default Header;