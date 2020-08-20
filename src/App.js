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
    '/': () => <Home />,
    '/work*': () => <Work />,
    '/about*': () => <About />,
    '/resume': () => <Resume />,
    '/contact/:name': ({name}) => <Contact name={name} />,
    '/notfound': () => <NotFound />,
}

//#endregion ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================


function App() {

    const match = useRoutes(routes);

    return (
        <Wrapper>

            <Header />

            {/* {match || <NotFound />} */}
            {match || <Home />}

        </Wrapper>
    )
}

export default App;
