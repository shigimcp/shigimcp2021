//#region ==================== IMPORTS ====================

import React from 'react';
import { useRoutes } from 'hookrouter';

import '../stylesheets/Work.scss';

import { FullPage } from '../components/FullPage';
// import { BodyContainer } from '../components/BodyContainer';

// import { WorkEmployer } from '../components/WorkEmployer';
import { WorkMiMi } from '../components/Work_MiMi';
import { WorkEA } from '../components/Work_EA';
import { WorkAX } from '../components/Work_AX';
import { WorkHearst } from '../components/Work_Hearst';
import { WorkDDB } from '../components/Work_DDB';
import { WorkMRM } from '../components/Work_MRM';
import { WorkHeeb } from '../components/Work_Heeb';
import { WorkHB } from '../components/Work_HB'
import { WorkLuminant } from '../components/Work_Luminant';
import { WorkDarwin } from '../components/Work_Darwin';
import { WorkOther } from '../components/Work_Other';

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
