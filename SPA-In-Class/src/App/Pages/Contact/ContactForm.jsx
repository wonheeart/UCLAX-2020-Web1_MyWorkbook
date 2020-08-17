import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import API from '../../../common/axios.js';

/* Components ---------------------------*/
import FormGroup from '../../../common/Forms/FormGroup.jsx';
import Button from '../../../common/Forms/Button.jsx';

const formFields = {
    nameField: {
        id: 'userName',
        label: 'Name',
        inputType: 'text',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },
    emailField: {
        id: 'userEmail',
        label: 'Email',
        inputType: 'email',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },
    messageField: {
        id: 'userMessage',
        label: 'Message',
        inputType: 'textarea',
        value: '',
        validate: {
            required: false,
            valid: true,
            message: '',
        }
    },
}


const ContactForm = () => {

    const [userName, userNameUpdate] = useState( formFields.nameField );
    const [userEmail, userEmailUpdate] = useState( formFields.emailField) ;
    const [userMessage, userMessageUpdate] = useState( formFields.messageField );

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
        if (formField.id === 'userEmail') {
            userEmailUpdate(newField);
        }
        if (formField.id === 'userMessage') {
            userMessageUpdate(newField);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Captured Form Submit, we will take itr from here.');

        if (userName.validate.valid === true && userEmail.validate.valid === true) {
            console.log('Valid Submitting form.')

            // .. AJAX
            const postData = {
                userName: userName,
                userEmail: userEmail,
                userMessage: userMessage,
            }

            API.post('/sendEmail', postData).then((result) => {
                console.log('result', result);
            });
        }
    }
 
    return (
        <ContactFormStyled className='ContactForm'>
            <form onSubmit={ handleFormSubmit }>
                <FormGroup 
                    formField={ userName }
                    onChange={ handleOnChange }
                />
                <FormGroup 
                    formField={ userEmail }
                    onChange={ handleOnChange }
                />
                <FormGroup 
                    formField={ userMessage }
                    onChange={ handleOnChange }
                />

                <Button type='submit'>Send Email</Button>

            </form> 
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    
`;