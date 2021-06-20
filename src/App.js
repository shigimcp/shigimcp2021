//#region ==================== IMPORTS ====================

import React from 'react';
import { useState } from 'react';
import { useRoutes } from 'hookrouter';

import './stylesheets/App.scss';

import { Wrapper } from './components/Wrapper';
import { Header } from './components/Header';

import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
// import { Contact } from './pages/Contact';

import { NotFound } from './pages/NotFound';

// import { SuspenseExample } from './pages/SuspenseExample';

// import { useContext } from 'react';

//#endregion ==================== IMPORTS ====================


function App() {
// const App = (props) => {

    // console.log('');
    // console.log('==================== COMPONENT: App.jsx ====================');

    // // // console.log('');
    // // console.log('props = ' + props);
    // // console.log(props);


    //#region ==================== use DEFs ====================

    // REF: https://stackoverflow.com/questions/61836485/passing-data-to-sibling-components-with-react-hooks
    // REF: https://stackoverflow.com/questions/62046448/toggle-two-components-using-react-hooks

    const [resumeModalOpen, setResumeModalOpen] = useState(false);
    // const [workNavEmplOpen, setWorkNavEmplOpen] = useState(false);

    // console.log('resumeModalOpen = ' + resumeModalOpen);

    //#endregion ==================== use DEFs ====================


    //#region ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================

    const routes = {

        '': () => <Home locID={'homeID'} loadStatus={true} />,
        '/': () => <Home locID={'homeID'} loadStatus={true} />,
        // '/shigimcp.com': () => <Home locID={'homeID'} loadStatus={true} />,
        // '/shigimcp.com/': () => <Home locID={'homeID'} loadStatus={true} />,
        '/work': () => <Work locID={'workID'} loadStatus={true} />,
        '/about': () => <About locID={'aboutID'} loadStatus={true} />,
        '/resume': () => <Resume locID={'resumeID'} loadStatus={true} resumeModalOpen={resumeModalOpen} setResumeModalOpen={setResumeModalOpen} />,
        // '/contact': () => <Contact locID={'contactID'} loadStatus={true} />,

        '/notfound': () => <NotFound locID={'notFoundID'} loadStatus={true} />,

        // '/': () => <Home locID={'homeID'} loadStatus={true} />,
        // '/shigimcp2021': () => <Home locID={'homeID'} loadStatus={true} />,
        // '/shigimcp2021/': () => <Home locID={'homeID'} loadStatus={true} />,
        // '/shigimcp2021/work': () => <Work locID={'workID'} loadStatus={true} />,
        // '/shigimcp2021/about': () => <About locID={'aboutID'} loadStatus={true} />,
        // '/shigimcp2021/resume': () => <Resume locID={'resumeID'} loadStatus={true} resumeModalOpen={resumeModalOpen} setResumeModalOpen={setResumeModalOpen} />,
        // // '/shigimcp2021/contact': () => <Contact locID={'contactID'} loadStatus={true} />,

        // '/shigimcp2021/notfound': () => <NotFound locID={'notFoundID'} loadStatus={true} />,
    }

    //#endregion ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================


    const match = useRoutes(routes);

    // // console.log('');
    // console.log('match = ' + match);
    // console.log(match);

    // // console.log('');
    // console.log('match.props = ' + match.props);
    // console.log(match.props);


    return (
        <Wrapper>

            <Header resumeModalOpen={resumeModalOpen} setResumeModalOpen={setResumeModalOpen} />
            {/* <Header resumeModalOpen={resumeModalOpen} setResumeModalOpen={setResumeModalOpen} workNavEmplOpen={workNavEmplOpen} setWorkNavEmplOpen={setWorkNavEmplOpen} /> */}

            {match || <NotFound locID={'notFoundID'} />}

            {/* <ParentNum /> */}

        </Wrapper>
    )
}


export default App;
