import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="nested-wrapper">
                My Header
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: teal;
    padding: 20px;
    font-size: 30px;
`