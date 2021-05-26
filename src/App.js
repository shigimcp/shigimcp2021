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
import { Contact } from './pages/Contact';

import { NotFound } from './pages/NotFound';

import { Isotope03 } from './pages/Isotope03';

// import { useContext } from 'react';

//#endregion ==================== IMPORTS ====================


//#region ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================

// const routes = {
//     '/': () => <Home locID={'homeID'} loadStatus={true} />,
//     '/shigimcp2021': () => <Home locID={'homeID'} loadStatus={true} />,
//     '/shigimcp2021/': () => <Home locID={'homeID'} loadStatus={true} />,
//     '/shigimcp2021/work/:currentEmployer': ({ currentEmployer }) => <Work currentEmployer={currentEmployer} locID={'workID'} loadStatus={true} />,
//     '/shigimcp2021/about': () => <About locID={'aboutID'} loadStatus={true} />,
//     // '/shigimcp2021/resume': () => <Resume locID={'resumeID'} loadStatus={true} />,
//     '/shigimcp2021/resume': () => <Resume locID={'resumeID'} loadStatus={true} resumeModalOpen={resumeModalOpen} />,
//     '/shigimcp2021/contact': () => <Contact locID={'contactID'} loadStatus={true} />,
//     '/shigimcp2021/notfound': () => <NotFound locID={'notFoundID'} loadStatus={true} />,
// }

//#endregion ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================


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

    // console.log('resumeModalOpen = ' + resumeModalOpen);

    //#endregion ==================== use DEFs ====================


    //#region ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================

    const routes = {
        '/': () => <Home locID={'homeID'} loadStatus={true} />,
        '/shigimcp2021': () => <Home locID={'homeID'} loadStatus={true} />,
        '/shigimcp2021/': () => <Home locID={'homeID'} loadStatus={true} />,
        '/shigimcp2021/work/:currentEmployer': ({ currentEmployer }) => <Work currentEmployer={currentEmployer} locID={'workID'} loadStatus={true} />,
        // '/shigimcp2021/work/:currentEmployer': ({ currentEmployer }) => <Work currentEmployer={currentEmployer} locID={'workID'} loadStatus={true} clearContent={clearContent} />,
        '/shigimcp2021/about': () => <About locID={'aboutID'} loadStatus={true} />,
        '/shigimcp2021/isotope': () => <Isotope03 locID={'isotopeID'} loadStatus={true} />,
        '/shigimcp2021/resume': () => <Resume locID={'resumeID'} loadStatus={true} resumeModalOpen={resumeModalOpen} setResumeModalOpen={setResumeModalOpen} />,
        '/shigimcp2021/contact': () => <Contact locID={'contactID'} loadStatus={true} />,
        '/shigimcp2021/notfound': () => <NotFound locID={'notFoundID'} loadStatus={true} />,
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

            {match || <NotFound locID={'notFoundID'} />}

            {/* <ParentNum /> */}

        </Wrapper>
    )
}




//#region ==================== useContext: REF https://programmingwithmosh.com/javascript/learn-the-usecontext-hook-in-react/ ====================

// const numInfo = {
//     numInfo01: {
//         num01: 36,
//         num02: 50
//     },
//     numInfo02: {
//         num01: 37,
//         num02: 51
//     }
// };

// const NumberContext = React.createContext(numInfo);

// function ParentNum(){
//     return (
//         <NumberContext.Provider value={numInfo}>
//             <h2>Use Context Example Component</h2>
//             <NumDetailComponent />
//             <MyOtherNumInfoComponent />
//         </NumberContext.Provider>
//     );
// }

// function NumDetailComponent(){

//     const numDetails = useContext(NumberContext);

//     return (
//         <div className='display' id='display01'>
//             <h3>numInfo01 Details</h3>
//             <p>num01: {numDetails.numInfo01.num01}</p>
//             <p>num02: {numDetails.numInfo01.num02}</p>
//         </div>
//     );
// }

// function MyOtherNumInfoComponent(){

//     const numDetails = useContext(NumberContext);

//     return (
//         <div className='display' id='display02'>
//             <h3>numInfo02 Details</h3>
//             <p>num01: {numDetails.numInfo02.num01}</p>
//             <p>num02: {numDetails.numInfo02.num02}</p>
//         </div>
//     );
// }

//#endregion ==================== useContext: REF https://programmingwithmosh.com/javascript/learn-the-usecontext-hook-in-react/ ====================




export default App;
