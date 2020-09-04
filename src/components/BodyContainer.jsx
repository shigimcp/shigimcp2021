import React from 'react';

// import '../stylesheets/BodyContainer.scss';


export const BodyContainer = ({title, children}) => {
    return (
        <div className='bodyContainer'>
            {/* <h2>{title}</h2> */}
            {children}
        </div>
    )
}