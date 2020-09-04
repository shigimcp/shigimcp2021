import React from 'react';

// import '../stylesheets/Wrapper.scss';


export const Wrapper = ({children}) => {
    return (
        <div className='wrapper'>
            {children}
        </div>
    )
}