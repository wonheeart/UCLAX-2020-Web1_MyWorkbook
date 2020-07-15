import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
                <title>Welcome :: SPA App</title>
            </Helmet>
            Home 
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;