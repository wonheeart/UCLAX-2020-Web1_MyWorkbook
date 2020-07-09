import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <Mainstyled>
            <div className="nested-wrapper">
                <h1>Page Title</h1>
            </div>
        </Mainstyled>
    );
}

export default Main;

const Mainstyled = styled.main`
    h1 { 

        font-size: 75px;
    }

`;