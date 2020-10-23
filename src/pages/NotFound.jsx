import React from 'react';

import '../stylesheets/NotFound.scss';


export const NotFound = ({ locID }) => {

    localStorage.setItem('navLoc', locID);

    return (
        <div className="bodyContainer" title="Not Found">
            <h1>OOPS!</h1>
            <h2>The page you're looking for is Not Found... Page</h2>
        </div>
    )
}