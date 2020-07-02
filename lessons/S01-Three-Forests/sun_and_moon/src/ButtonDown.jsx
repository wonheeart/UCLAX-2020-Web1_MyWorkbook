import React from 'react';

const ButtonDown = ( {onClick} ) => {
    return (
        <img onClick={ onClick } src="/images/down.png" alt="ButtonDown"/>
    );
}

export default ButtonDown;