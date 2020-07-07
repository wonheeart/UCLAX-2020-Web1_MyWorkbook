import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled>My navigation</NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: yellow;
    font-size: 25px;
`