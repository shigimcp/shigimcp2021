import React from 'react';

// import { BodyContainer } from '../components/BodyContainer';
// import { FullPage } from '../components/FullPage';

import '../stylesheets/NotFound.scss';


// export const NotFound = () => {
export const NotFound = ({ locID }) => {
// export const NotFound = ({ locID, loadStatus }) => {

    localStorage.setItem('navLoc', locID);
    // localStorage.setItem('loadStatus', loadStatus);

    return (
        <div className="bodyContainer" title="Not Found">
        {/* <> */}
            <h1>OOPS!</h1>
            <h2>The page you're looking for is Not Found... Page</h2>
        {/* </> */}
        </div>
    )
}