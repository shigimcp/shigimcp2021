//#region ==================== IMPORTS ====================

import React from 'react';
import { useRoutes } from 'hookrouter';

import '../stylesheets/Work.scss';

import { FullPage } from '../components/FullPage';
// import { BodyContainer } from '../components/BodyContainer';


import { Work000 } from '../work/Work_000';
// import Work000 from '../work/Work_000';

// import { WorkEmployer } from '../components/WorkEmployer';

import { WorkMiMi } from '../work/Work_MiMi';
import { WorkEA } from '../work/Work_EA';
import { WorkAX } from '../work/Work_AX';
import { WorkHearst } from '../work/Work_Hearst';
import { WorkDDB } from '../work/Work_DDB';
import { WorkMRM } from '../work/Work_MRM';
import { WorkHeeb } from '../work/Work_Heeb';
import { WorkHB } from '../work/Work_HB'
import { WorkLuminant } from '../work/Work_Luminant';
import { WorkDarwin } from '../work/Work_Darwin';
import { WorkOther } from '../work/Work_Other';

import { NotFound } from './NotFound';

//#endregion ==================== IMPORTS ====================


//#region ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================

const routes = {
    '/mimi': () => <WorkMiMi />,
    '/ea': () => <WorkEA />,
    '/ax': () => <WorkAX />,
    '/hearst': () => <WorkHearst />,
    '/ddb': () => <WorkDDB />,
    '/mrm': () => <WorkMRM />,
    '/heeb': () => <WorkHeeb />,
    '/hb': () => <WorkHB />,
    '/lum': () => <WorkLuminant />,
    '/dar': () => <WorkDarwin />,
    '/other': () => <WorkOther />,

    '/000': () => <Work000 />,
}

//#endregion ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================


export const Work = () => {

    const match = useRoutes(routes);

    return (
        <FullPage title="Work">

            <div className='workPage'>
                <div className='workList'>
                    {match || <NotFound />}
                </div>
            </div>

        </FullPage>
    )
}
