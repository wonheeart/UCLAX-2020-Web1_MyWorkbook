import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Components ---------------------------*/
import LoginForm from './Login/LoginForm.jsx';

const Login = () => {

    return (
        <LoginStyled className='Login'>
              <Helmet>
                <title>Login :: SPA App</title>
            </Helmet>
            <div className="nested-wrapper">
                <div className="LoginForm">
                    <LoginForm />
                </div>
            </div>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    .nested-wrapper {
        display: flex;

        .LoginForm {
            padding: 100px;
            width: 50%;
        }
    }
`;