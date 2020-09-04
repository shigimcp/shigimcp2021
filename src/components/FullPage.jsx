import React from 'react';

// import '../stylesheets/FullPage.scss';


export const FullPage = ({title, children}) => {
    return (
        <div className='fullPage'>
            {/* <h2>{title}</h2> */}
            {children}
        </div>
    )
}