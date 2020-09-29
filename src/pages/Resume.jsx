//#region ==================== IMPORTS ====================

import React from 'react';

// import { FullPage } from '../components/Page';
// import { BodyContainer } from '../components/BodyContainer';

import '../stylesheets/Resume.scss';
// import scssVars from '../stylesheets/Global.scss';


//#region -------------------- IMPORTS: DATA --------------------

import myData from '../data/MyData';

// import employerData from '../data/json/employers_http.json';
// import employerData from '../data/json/employers_https.json';
// import workData from '../data/json/work.json';
// import aboutData from '../data/json/about.json';

// import employerData from '../data/EmployerData';
// import workData from '../data/WorkData';
// import aboutData from '../data/AboutData';

// import employers from '../data/json/employers_http.json';
// import work from '../data/json/work.json';
// import work from '../../data/json/work_json/work_ax.json';
// import work_ax from '../../data/json/work_json/work_ax.json';

//#endregion -------------------- IMPORTS: DATA --------------------

//#endregion ==================== IMPORTS ====================



// console.log('');
// console.log('=========================  Resume.jsx  =========================');



//#region ==================== CONSTANTS ====================

//#region -------------------- DATA --------------------

const employerData = myData[0];
// const workData = myData[1];
// const aboutData = myData[2];
const skillData = myData[3];

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

// console.log('skillData = ' + skillData);
// console.log('skillData');
// console.log(skillData);
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


//#region ==================== SkillList ====================

function SkillItem(props) {

    return (
        <div className='skillItem'>

            <p>
                {/* {props.key}<br />
                {props.category}<br /> */}
                {props.skill}<br />
                {/* {props.level}<br />
                {props.level_difference} */}
            </p>

            <svg version='1.1' className='skillBar' id='skillBarID' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 100 5'>

                <defs>

                    <linearGradient id='fillGradient01ID' x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' style={{ stopColor: 'rgb(255, 255, 255)', stopOpacity: '1' }}/>
                        <stop offset='100%' style={{ stopColor: 'rgb(200, 200, 200)', stopOpacity: '1' }} />
                        {/* <stop offset='100%' style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '1' }} /> */}
                    </linearGradient>

                    <linearGradient id='fillGradient02ID' x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' style={{ stopColor: 'rgb(225, 225, 225)', stopOpacity: '1' }} />
                        <stop offset='100%' style={{ stopColor: 'rgb(150, 150, 150)', stopOpacity: '1' }} />
                        {/* <stop offset='100%' style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '1' }} /> */}
                    </linearGradient>

                </defs>

                {/* <rect className='skillBarRect01' id='skillBarRect01ID' width='100%' height='100%' fill='#000000' />
                <rect className='skillBarRect02' id='skillBarRect02ID' width={props.level} height='100%' fill='#cccccc' /> */}

                {/* <rect className='skillBarRect01' id='skillBarRect01ID' width={props.level} height='100%' fill='#url(#fillGradient01ID)' /> */}
                <rect className='skillBarRect01' id='skillBarRect01ID' width='100%' height='100%' fill='url(#fillGradient01ID)' />
                <rect className='skillBarRect02' id='skillBarRect02ID' width={props.level} height='100%' fill='url(#fillGradient02ID)' />

            </svg>

        </div>
    )
}

function SkillList(props) {

    const skillItems = skillData.filter(thisCategory => thisCategory.category === props.category).map((skill) =>
        <SkillItem
            key={skill.index}
            category={skill.category}
            skill={skill.skill}
            level={skill.level}
            level_difference={skill.level_difference}
        />
    );

    return (
        <>
            <h2 className='skillCatHed'>{props.category}</h2>

            <div className='skillList'>
                {skillItems}
            </div>
        </>
    );
}

//#endregion ==================== SkillList ====================

// export default EmployerList;

// export const Resume = () => {
export const Resume = ({ locID }) => {
// export const Resume = ({ locID, loadStatus }) => {

    localStorage.setItem('navLoc', locID);
    // localStorage.setItem('loadStatus', loadStatus);

    return (

        <div className='employerContainer'>

            <EmployerList />

            <h1 className='skillHed'>Skills</h1>
            {/* <SkillList /> */}
            <SkillList category='discipline' />
            <SkillList category='software' />
            <SkillList category='dev' />
            <SkillList category='3d' />

            {/* <h1>Hello, locID = {locID}</h1> */}

        </div>
    )
}
