//#region ==================== IMPORTS ====================

import React from 'react';

// import { FullPage } from '../components/Page';
// import { BodyContainer } from '../components/BodyContainer';

import '../stylesheets/Resume.scss';
// import scssVars from '../stylesheets/Global.scss';


//#region -------------------- IMPORTS: DATA --------------------

// import employerData from '../data/json/employers_http.json';
// import employerData from '../data/json/employers_https.json';
// import workData from '../data/json/work_complete.json';
// import aboutData from '../data/json/about.json';


// import employerData from '../data/EmployerData';
// import workData from '../data/WorkData';
// import aboutData from '../data/AboutData';

import myData from '../data/MyData';


// import employers from '../data/json/employers_http.json';
// import work from '../data/json/work_complete.json';
// import work from '../data/json/work_json/work_ax.json';
// import work_ax from '../data/json/work_json/work_ax.json';

//#endregion -------------------- IMPORTS: DATA --------------------

//#endregion ==================== IMPORTS ====================



// console.log('');
// console.log('=========================  Resume.jsx  =========================');



//#region ==================== CONSTANTS ====================

//#region -------------------- DATA --------------------

const employerData = myData[0];
// const workData = myData[1];
// const aboutData = myData[2];


// console.log('==========  Resume.jsx  ==========');

// // console.log('myData = ' + myData);
// // console.log(myData);
// // console.log('');

// // console.log('employerData = ' + employerData);
// console.log('employerData');
// console.log(employerData);
// console.log('');

// // console.log('workData = ' + workData);
// console.log('workData');
// console.log(workData);
// console.log('');

// // console.log('aboutData = ' + aboutData);
// console.log('aboutData');
// console.log(aboutData);
// console.log('');

//#endregion -------------------- DATA --------------------

//#endregion ==================== CONSTANTS ====================


//#region ==================== EmployerList ====================

// const remoteLoc = 'https://www.shigimcp.com/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020/img/';
const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';


function EmployerItem(props) {

    return (
        <div className='employerItem'>

            <img className='logo' src={remoteLoc + props.employerLogo} alt={'employer: ' + props.employer} />

            <div className='employerInfo'>
                <h1>{props.employer}</h1>
                <h2>{props.title}</h2>

                <div className='employerDates'>{props.dateStart} - {props.dateEnd}</div>

                <ul>
                    {props.info.split('\n').map((thisInfo, key) => {
                        return <li key={key}>{thisInfo}</li>
                    })}
                </ul>

                {/* <p>{props.languages}</p> */}
                {/* <p>languages: {props.languages}</p> */}
                <p>
                    {(() => {
                        if (props.languages) {
                            return 'languages: ';
                        } else {
                            return '';
                        }
                    })()}
                    {props.languages}
                </p>

                <p>{props.otherInfo}</p>
            </div>
        </div>
    )
}

function EmployerList() {

    // const employerItems = employers.map((employer) =>
    const employerItems = employerData.map((employer) =>
        <EmployerItem
            key={employer.album_id}
            album_id={employer.album_id}
            employer={employer.employer}
            title={employer.title}
            dateStart={employer.date_start}
            dateEnd={employer.date_end}
            info={employer.info}
            otherInfo={employer.info_other}
            languages={employer.languages}
            employerLogo={employer.logopath}
        />
    );

    return (
        <div className='employerList'>
            {employerItems}
        </div>
    );
}

//#endregion ==================== EmployerList ====================

// export default EmployerList;

export const Resume = () => {
    return (
        // <BodyContainer title='Resume'>
        <div className='employerContainer'>
            {/* Resume Page */}
            <EmployerList />
        </div>
        // </BodyContainer>
    )
}
