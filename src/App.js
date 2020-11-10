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

    // '/': () => <Home />,
    // '/work*': () => <Work />,
    // '/about*': () => <About />,
    // '/resume': () => <Resume />,
    // '/contact/:name': ({ name }) => <Contact name={name} />,
    // '/notfound': () => <NotFound />,

    // '/': () => <Home locID={'homeID'} />,
    // '/shigimcp2020-react': () => <Home locID={'homeID'} />,
    // '/shigimcp2020-react/work/:currentEmployer': ({ currentEmployer }) => <Work currentEmployer={currentEmployer} locID={'workID'} />,
    // '/shigimcp2020-react/about': () => <About locID={'aboutID'} />,
    // '/shigimcp2020-react/resume': () => <Resume locID={'resumeID'} />,
    // '/shigimcp2020-react/contact': () => <Contact locID={'contactID'} />,
    // '/shigimcp2020-react/notfound': () => <NotFound locID={'notFoundID'} />,

    '/': () => <Home locID={'homeID'} loadStatus={true} />,
    '/shigimcp2020-react': () => <Home locID={'homeID'} loadStatus={true} />,
    '/shigimcp2020-react/': () => <Home locID={'homeID'} loadStatus={true} />,
    '/shigimcp2020-react/work/:currentEmployer': ({ currentEmployer }) => <Work currentEmployer={currentEmployer} locID={'workID'} loadStatus={true} />,
    '/shigimcp2020-react/about': () => <About locID={'aboutID'} loadStatus={true} />,
    '/shigimcp2020-react/resume': () => <Resume locID={'resumeID'} loadStatus={true} />,
    '/shigimcp2020-react/contact': () => <Contact locID={'contactID'} loadStatus={true} />,
    '/shigimcp2020-react/notfound': () => <NotFound locID={'notFoundID'} loadStatus={true} />,

    // '/': () => <Home locID={'homeID'} loadStatus={true} />,
    // '/shigimcp2020-react': () => <Home locID={'homeID'} />,
    // '/shigimcp2020-react/': () => <Home locID={'homeID'} />,
    // '/work/:currentEmployer': ({ currentEmployer }) => <Work currentEmployer={currentEmployer} locID={'workID'} loadStatus={true} />,
    // '/about': () => <About locID={'aboutID'} loadStatus={true} />,
    // '/resume': () => <Resume locID={'resumeID'} loadStatus={true} />,
    // '/contact': () => <Contact locID={'contactID'} loadStatus={true} />,
    // '/notfound': () => <NotFound locID={'notFoundID'} loadStatus={true} />,
}

//#endregion ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================


function App() {

    const match = useRoutes(routes);

    return (
        <Wrapper>

            <Header />

            {/* {match || <Home />} */}
            {match || <NotFound locID={'notFoundID'} />}

        </Wrapper>
    )
}

export default App;
