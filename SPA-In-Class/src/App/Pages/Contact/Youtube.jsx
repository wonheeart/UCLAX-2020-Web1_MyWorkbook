import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import YoutubePackage from './Youtube/YoutubePackage.jsx';

const Youtube = () => {

    return (
        <YoutubeStyled className='Youtube'>
            <YoutubePackage />
        </YoutubeStyled>
    );
}

export default Youtube;

const YoutubeStyled = styled.div`
    
`;