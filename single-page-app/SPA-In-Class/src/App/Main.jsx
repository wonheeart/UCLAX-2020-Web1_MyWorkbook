import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <Mainstyled>
            <h1>Page Title</h1>
            <h2>Subtitle</h2>
            <h3>Sub Subtitle</h3>
        </Mainstyled>
    );
}

export default Main;

const Mainstyled = styled.main`
    h1 { 
        background-color: orange;
        font-size: 75px;
    }
    h2 {
        background-color: yellow;
        padding: 20px;
    }
    h3 {
        background-color: teal;
        border: solid 10px red;
    }
`;