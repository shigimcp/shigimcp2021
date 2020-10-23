import React from 'react';

import '../stylesheets/FullPage.scss';


export const FullPage = ({title, children}) => {
    return (
        <div className='fullPage'>
            {children}
        </div>
    )
}