//#region ==================== IMPORTS ====================

import React from 'react';
import { useRoutes } from 'hookrouter';
// import { useState } from "react";

import './stylesheets/App.scss';

import { Wrapper } from './components/Wrapper';
import { Header } from './components/Header';

import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';

import { NotFound } from './pages/NotFound';

//#endregion ==================== IMPORTS ====================


//#region ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================

const routes = {
    // // '': () => <Home />,
    // '/': () => <Home />,
    // '/shigimcp2020-react': () => <Home />,
    // // '/work*': () => <Work />,
    // '/work/:currentEmployer': ({ currentEmployer }) => <Work currentEmployer={currentEmployer} />,
    // // '/about*': () => <About />,
    // '/about': () => <About />,
    // '/resume': () => <Resume />,
    // '/contact': () => <Contact />,
    // // '/contact/:name': ({ name }) => <Contact name={name} />,
    // '/notfound': () => <NotFound />,

    '/': () => <Home />,
    '/shigimcp2020-react': () => <Home />,
    '/shigimcp2020-react/work/:currentEmployer': ({ currentEmployer }) => <Work currentEmployer={currentEmployer} />,
    '/shigimcp2020-react/about': () => <About />,
    '/shigimcp2020-react/resume': () => <Resume />,
    '/shigimcp2020-react/contact': () => <Contact />,
    '/shigimcp2020-react/notfound': () => <NotFound />,
}

//#endregion ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================


function App() {

    const match = useRoutes(routes);

    return (
        <Wrapper>

            <Header />

            {match || <NotFound />}
            {/* {match || <Home />} */}

        </Wrapper>
    )
}

export default App;
