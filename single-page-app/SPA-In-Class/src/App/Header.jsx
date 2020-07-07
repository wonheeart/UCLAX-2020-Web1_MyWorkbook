import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>My header</HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: brown;
    font-size: 45px;
`