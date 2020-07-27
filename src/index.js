import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './stylesheets/index.scss';

import App from './App';


ReactDOM.render(

    // <React.StrictMode>
        <App />,
        // <App bannersToShow={bannersToShow} />,
    // </React.StrictMode>,

    document.getElementById('root')
    // document.getElementById('rootContainer')
);


// If you want your app to work offline and load faster, you can change unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();
