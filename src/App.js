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
// import Resume from './pages/Resume';
import { Contact } from './pages/Contact';

import { NotFound } from './pages/NotFound';

//#endregion ==================== IMPORTS ====================


//#region ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================

// const routes = {
//     '/': () => <Home locID={'homeID'} loadStatus={true} />,
//     '/shigimcp2020-react': () => <Home locID={'homeID'} loadStatus={true} />,
//     '/shigimcp2020-react/': () => <Home locID={'homeID'} loadStatus={true} />,
//     '/shigimcp2020-react/work/:currentEmployer': ({ currentEmployer }) => <Work currentEmployer={currentEmployer} locID={'workID'} loadStatus={true} />,
//     '/shigimcp2020-react/about': () => <About locID={'aboutID'} loadStatus={true} />,
//     // '/shigimcp2020-react/resume': () => <Resume locID={'resumeID'} loadStatus={true} />,
//     '/shigimcp2020-react/resume': () => <Resume locID={'resumeID'} loadStatus={true} resumeModalOpen={resumeModalOpen} />,
//     '/shigimcp2020-react/contact': () => <Contact locID={'contactID'} loadStatus={true} />,
//     '/shigimcp2020-react/notfound': () => <NotFound locID={'notFoundID'} loadStatus={true} />,
// }

//#endregion ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================


function App() {
// const App = (props) => {

    // console.log('');
    // console.log('==================== COMPONENT: App.jsx ====================');

    // // console.log('');
    // console.log('props = ' + props);
    // console.log(props);


    //#region ==================== use DEFs ====================

    // REF: https://stackoverflow.com/questions/61836485/passing-data-to-sibling-components-with-react-hooks
    // REF: https://stackoverflow.com/questions/62046448/toggle-two-components-using-react-hooks

    const [resumeModalOpen, setResumeModalOpen] = useState(false);

    // console.log('resumeModalOpen = ' + resumeModalOpen);

    //#endregion ==================== use DEFs ====================


    //#region ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================

    const routes = {
        '/': () => <Home locID={'homeID'} loadStatus={true} />,
        '/shigimcp2020-react': () => <Home locID={'homeID'} loadStatus={true} />,
        '/shigimcp2020-react/': () => <Home locID={'homeID'} loadStatus={true} />,
        '/shigimcp2020-react/work/:currentEmployer': ({ currentEmployer }) => <Work currentEmployer={currentEmployer} locID={'workID'} loadStatus={true} />,
        '/shigimcp2020-react/about': () => <About locID={'aboutID'} loadStatus={true} />,
        '/shigimcp2020-react/resume': () => <Resume locID={'resumeID'} loadStatus={true} resumeModalOpen={resumeModalOpen} setResumeModalOpen={setResumeModalOpen} />,
        '/shigimcp2020-react/contact': () => <Contact locID={'contactID'} loadStatus={true} />,
        '/shigimcp2020-react/notfound': () => <NotFound locID={'notFoundID'} loadStatus={true} />,
    }

    //#endregion ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================


    const match = useRoutes(routes);

    return (
        <Wrapper>

            <Header resumeModalOpen={resumeModalOpen} setResumeModalOpen={setResumeModalOpen} />

            {match || <NotFound locID={'notFoundID'} />}

        </Wrapper>
    )
}

export default App;
