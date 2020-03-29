import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const NavWrapper = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 10vh;
    width: 100%;
    color: #FA4D61;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
`;

const Nav = () => {
    return ( 
        <NavWrapper>
            <NavLink exact to="/" activeClassName="selected" >newsy</NavLink>
            <NavLink to="/business" activeClassName="selected">biznes</NavLink>
            <NavLink to="/entertaiment" activeClassName="selected">rozrywka</NavLink>
            <NavLink to="/health" activeClassName="selected">zdrowie</NavLink>
            <NavLink to="/science" activeClassName="selected">nauka</NavLink>
            <NavLink to="/sports" activeClassName="selected">sport</NavLink>
            <NavLink to="/technology" activeClassName="selected">technologia</NavLink>
        </NavWrapper>
    );
}
 
export default Nav;