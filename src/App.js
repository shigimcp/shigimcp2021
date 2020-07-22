//#region ==================== IMPORTS ====================

import React from 'react';
import { useRoutes } from 'hookrouter';
// import { useState } from "react";

// import AnimateCC from "react-adobe-animate";

import './stylesheets/App.scss';

import { Wrapper } from './components/Wrapper';
import { Header } from './components/Header';

import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// import BSPS_26897 from './images/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';

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


    // #region -   -   -   -   -   - react-adobe-animate: REF https://github.com/bibixx/react-adobe-animate#readme -   -   -   -   -   -

    // const [paused, setPaused] = useState(false);
    // const [, setAnimationObject] = useState(null);

    // // const getAnimationObject = obj => setAnimationObject(obj);
    // const onClick = () => setPaused(!paused);


    // const getAnimationObject = obj => (this.lis = obj, window.lis = obj)
    // // const onClick = () => this.setState({ paused: !this.state.paused })

    // #endregion -   -   -   -   -   - react-adobe-animate: REF https://github.com/bibixx/react-adobe-animate#readme -   -   -   -   -   -


    return (
        <Wrapper>


        {/* #region -   -   -   -   -   - react-adobe-animate: REF https://github.com/bibixx/react-adobe-animate#readme -   -   -   -   -   - */}
            {/*             
            <div className="sampleAnimate">

                <AnimateCC
                    animationName="CR_11155_MINAJESTY_2014_US_DIGITAL_300x600_HTML5"
                    getAnimationObject={getAnimationObject}
                    paused={paused}
                />

                <AnimateCC
                    animationName="CR_11155_MINAJESTY_2014_US_DIGITAL_300x600_HTML5"
                    composition="45A2D185DEBE4854A737F3CE82FD6355"
                    paused={paused}
                />

                <button onClick={onClick}>{paused ? "Unpause" : "Pause"}</button>
            </div>
            */}
        {/* #endregion -   -   -   -   -   - react-adobe-animate: REF https://github.com/bibixx/react-adobe-animate#readme -   -   -   -   -   - */}

            {/* <BSPS_26897 /> */}

            <Header />
            {/* {match || <NotFound />} */}
            {match || <Home />}
        </Wrapper>
    )
}

export default App;
