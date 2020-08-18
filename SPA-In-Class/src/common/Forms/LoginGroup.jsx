import React from 'react';
import styled from 'styled-components';

import Input from './Input.jsx';
import Textarea from './Textarea.jsx';

const LoginGroup = ({loginField, onChange}) => {

    const Control = ( loginField.inputType === 'textarea') ? Textarea : Input;

    return (
        <LoginGroupStyled className='LoginGroup'>
                    <label htmlFor={ loginField.id }>{loginField.label}:</label>
                    {
                        (loginField.validate.message) &&
                        <div className="feedback">{ loginField.validate.message }</div>
                    }
                    <Control loginField={ loginField }onChange={ onChange }/>
        </LoginGroupStyled>
    );
}

export default LoginGroup;

const LoginGroupStyled = styled.div`
    margin: 20px 0px;
    label {
        font-weight: bold;
    }
    .feedback {
        color: red;
        margin: 5px 0px;
    }

    .Control {
        input, textarea {
            width: 100%;
            font-size: 18px;
            padding: 5px;
        }

        textarea {
            height: 200px;
        }
    }
`;