//#region ==================== IMPORTS ====================

import React from 'react';

import '../stylesheets/Contact.scss';

//#endregion ==================== IMPORTS ====================


export const Contact = ({ locID }) => {

    localStorage.setItem('navLoc', locID);

    return (

        <div className='formContainer' id='formContainerID'>

                <h1>Hello, locID = {locID}</h1>
        </div>
    );
}
