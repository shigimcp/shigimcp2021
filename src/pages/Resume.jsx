//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
// import { useState } from 'react';

import '../stylesheets/Resume.scss';

import myData from '../data/MyData';

//#endregion ==================== IMPORTS ====================


//#region ==================== CONSTANTS ====================

//#region -------------------- DATA --------------------

const employerData = myData[0];
const skillData = myData[3];

//#endregion -------------------- DATA --------------------


//#region -------------------- RESUME URLs --------------------

// const remoteResumeLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/';

const resumePDFurl = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/smcpherson_resume_2021.pdf';
const resumeDOCXurl = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/smcpherson_resume_2021.docx';
const resumeSimpleDOCXurl = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/smcpherson_resume_2021_simplified.docx';
const resumeTXTurl = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/smcpherson_resume_2021.txt';
const resumeZIPurl = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/smcpherson_resume_2021.zip';

const resumePDFfilename = 'smcpherson_resume_2021.pdf';
const resumeDOCXfilename = 'smcpherson_resume_2021.docx';
const resumeSimpleDOCXfilename = 'smcpherson_resume_2021_simplified.docx';
const resumeTXTfilename = 'smcpherson_resume_2021.txt';
const resumeZIPfilename = 'smcpherson_resume_2021.zip';

//#endregion -------------------- RESUME URLs --------------------

//#endregion ==================== CONSTANTS ====================



//#region ==================== EmployerItem ====================

const remoteImgLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';


function EmployerItem(props) {

    return (
        <div className='employerItem'>

            <img className='logo' src={remoteImgLoc + props.employerLogo} alt={'employer: ' + props.employer} />

            <div className='employerInfo'>
                <h1>{props.employer}</h1>
                <h2>{props.title}</h2>

                <div className='employerDates'>{props.dateStart} - {props.dateEnd}</div>

                <ul>
                    {props.info.split('\n').map((thisInfo, key) => {
                        return <li key={key}>{thisInfo}</li>
                    })}
                </ul>

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

//#endregion ==================== EmployerItem ====================


//#region ==================== EmployerList ====================

function EmployerList() {

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


//#region ==================== SkillItem ====================

function SkillItem(props) {

    return (
        <div className='skillItem'>

            <p>
                {props.skill}<br />
            </p>

            <svg version='1.1' className='skillBar' id='skillBarID' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 100 5'>

                <defs>

                    <linearGradient id='fillGradient01ID' x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' style={{ stopColor: 'rgb(255, 255, 255)', stopOpacity: '1' }}/>
                        <stop offset='100%' style={{ stopColor: 'rgb(200, 200, 200)', stopOpacity: '1' }} />
                    </linearGradient>

                    <linearGradient id='fillGradient02ID' x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' style={{ stopColor: 'rgb(225, 225, 225)', stopOpacity: '1' }} />
                        <stop offset='100%' style={{ stopColor: 'rgb(150, 150, 150)', stopOpacity: '1' }} />
                    </linearGradient>

                </defs>

                <rect className='skillBarRect01' id='skillBarRect01ID' width='100%' height='100%' fill='url(#fillGradient01ID)' />
                <rect className='skillBarRect02' id='skillBarRect02ID' width={props.level} height='100%' fill='url(#fillGradient02ID)' />

            </svg>

        </div>
    )
}

//#endregion ==================== SkillItem ====================


//#region ==================== SkillList ====================

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



export const Resume = (props) => {

    // console.log('');
    // console.log('==================== COMPONENT: Resume.jsx ====================');

    // // console.log('');
    // console.log('props = ' + props);
    // console.log(props);


    // localStorage.setItem('navLoc', locID);


    //#region ==================== ASSETS _Ref ====================

    const dialogModal_Ref = useRef(null);
    const dialogHotspot_Ref = useRef(null);
    const dialogBox_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================



    return (
        <>
            <div className='employerContainer'>

                <EmployerList />

                <h1 className='skillHed'>Skills</h1>
                <SkillList category='discipline' />
                <SkillList category='software' />
                <SkillList category='dev' />
                <SkillList category='3d' />

            </div>

            <div className={props.resumeModalOpen === true ? 'dialogModal dialogModalOpen' : 'dialogModal dialogModalClosed'} id='dialogModalID' ref={dialogModal_Ref}>

                <div className='dialogHotspot' id='dialogHotspotID' onClick={() => {props.setResumeModalOpen(!props.resumeModalOpen)}} ref={dialogHotspot_Ref}></div>

                <div className='dialogBox' id='dialogBoxID' ref={dialogBox_Ref}>

                    <button className='dialogCloseBTN' onClick={() => {props.setResumeModalOpen(!props.resumeModalOpen)}}>X</button>

                    <div className='dialogHed' id='dialogHedID'>
                        <p>Choose your format...</p>
                    </div>

                    <div className='dialogMenu' id='dialogMenuID'>
                        {/* <a href={resumePDFurl} download target='_blank' rel='noreferrer'>*.pdf</a>
                        <a href={resumeDOCXurl} download target='_blank' rel='noreferrer'>*.docx</a>
                        <a href={resumeSimpleDOCXurl} download target='_blank' rel='noreferrer'>*.docx</a>
                        <a href={resumeTXTurl} download target='_blank' rel='noreferrer'>*.txt</a> */}

                        <a href={resumePDFurl} download target='_blank' rel='noreferrer'>{resumePDFfilename}</a>
                        <a href={resumeDOCXurl} download target='_blank' rel='noreferrer'>{resumeDOCXfilename}</a>
                        <a href={resumeSimpleDOCXurl} download target='_blank' rel='noreferrer'>{resumeSimpleDOCXfilename}</a>
                        <a href={resumeTXTurl} download target='_blank' rel='noreferrer'>{resumeTXTfilename}</a>
                    </div>

                    <div className='dialogHed dialogHed02' id='dialogHed02ID'>
                        <p>or Download all...</p>
                    </div>

                    <div className='dialogMenu dialogMenu02' id='dialogMenu02ID'>
                        <a href={resumeZIPurl} download target='_blank' rel='noreferrer'>{resumeZIPfilename}</a>
                    </div>

                </div>

            </div>
        </>
    )
}
