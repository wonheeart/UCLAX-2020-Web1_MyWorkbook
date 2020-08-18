import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import API from '../../../common/axios.js';

/* Components ---------------------------*/
import FormGroup from '../../../common/Forms/FormGroup.jsx';
import Button from '../../../common/Forms/Button.jsx';

const loginFields = {
    nameField: {
        id: 'userName',
        label: 'Username',
        inputType: 'text',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },
    passwordField: {
        id: 'userPassword',
        label: 'Password',
        inputType: 'text',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },
}

const LoginForm = () => {

    const [userName, userNameUpdate] = useState( loginFields.nameField );
    const [userPassword, userPasswordUpdate] = useState( loginFields.passwordField) ;

    const handleOnChange = (event, formField) => {
        // console.log(event.target.value, formField);

        const newField = {
            ...formField,
            value: event.target.value,
        }

        if (newField.validate.required === true ) {
            console.log('Validating: ', newField.label);

            if (newField.value.length < 4) {
                // Let them know there is an error
                newField.validate.valid = false;
                newField.validate.message = `You forgot to fill out the ${newField.label} field.`;
            } else {
                // Clear any errors.
                newField.validate.valid = true;
                newField.validate.message = ``;
            }
        }

        if (formField.id === 'userName') {
            userNameUpdate(newField);
        }
        if (formField.id === 'userPassword') {
            userPasswordUpdate(newField);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Captured Form Submit, we will take itr from here.');

        if (userName.validate.valid === true && userPassword.validate.valid === true) {
            console.log('Valid Submitting form.')

            // .. AJAX
            const postData = {
                userName: userName,
                userPassword: userPassword,
            }

            API.post('/sendEmail', postData).then((result) => {
                console.log('result', result);
            });
        }
    }
 
    return (
        <LoginFormStyled className='ContactForm'>
            <form onSubmit={ handleFormSubmit }>
                <FormGroup 
                    formField={ userName }
                    onChange={ handleOnChange }
                />
                <FormGroup 
                    formField={ userPassword }
                    onChange={ handleOnChange }
                />
                <Button type='submit'>Login</Button>

            </form> 
        </LoginFormStyled>
    );
}

export default LoginForm;

const LoginFormStyled = styled.div`
    
`;