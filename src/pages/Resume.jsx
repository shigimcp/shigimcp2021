//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
// import { useState } from 'react';
import Moment from 'moment';

import '../stylesheets/Resume.scss';

import myData from '../data/MyData';

//#endregion ==================== IMPORTS ====================


//#region ==================== CONSTANTS ====================

//#region -------------------- DATA --------------------

const employerData = myData[0];
const skillData = myData[3];

//#endregion -------------------- DATA --------------------


//#region -------------------- RESUME URLs --------------------

const remoteResumeLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/';

// const resumePDFurl = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/smcpherson_resume_2021.pdf';
// const resumeDOCXurl = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/smcpherson_resume_2021.docx';
// const resumeSimpleDOCXurl = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/smcpherson_resume_2021_simplified.docx';
// const resumeTXTurl = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/smcpherson_resume_2021.txt';
// const resumeZIPurl = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/resume/smcpherson_resume_2021.zip';

const resumePDFurl = remoteResumeLoc + 'smcpherson_resume_2021.pdf';
const resumeDOCXurl = remoteResumeLoc + 'smcpherson_resume_2021.docx';
const resumeSimpleDOCXurl = remoteResumeLoc + 'smcpherson_resume_2021_simplified.docx';
const resumeTXTurl = remoteResumeLoc + 'smcpherson_resume_2021.txt';
const resumeZIPurl = remoteResumeLoc + 'smcpherson_resume_2021.zip';

const resumePDFfilename = 'smcpherson_resume_2021.pdf';
const resumeDOCXfilename = 'smcpherson_resume_2021.docx';
const resumeSimpleDOCXfilename = 'smcpherson_resume_2021_simplified.docx';
const resumeTXTfilename = 'smcpherson_resume_2021.txt';
const resumeZIPfilename = 'smcpherson_resume_2021.zip';

//#endregion -------------------- RESUME URLs --------------------

//#endregion ==================== CONSTANTS ====================



//#region ==================== EmployerItem ====================

// const remoteImgLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';
const remoteImgLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/resume/';


function EmployerItem(props) {

    if (props.availability) {

        return (
            <div className='employerItem'>

                {/* <img className='logo' src={remoteImgLoc + props.employerLogo} alt={'Employer: ' + props.employer} /> */}
                {props.employerLogo ? <img className='logo' src={remoteImgLoc + props.employerLogo} alt={'Employer: ' + props.employer} /> : <img className='logo logoMissing' src={remoteImgLoc + 'shigeru_logo_transparent.svg'} alt={'Employer: ' + props.employer} />}

                <div className='employerInfoContainer'>
                    <h1>{props.employer}</h1>
                    <h2>{props.title}</h2>

                    {/* <div className='employerDates'>{props.dateStart} - {props.dateEnd}</div> */}
                    {/* <div className='employerDates'>{Moment(props.dateStart).format('MM/YY')} - {Moment(props.dateEnd).format('MM/YY')}</div> */}
                    {props.dateEnd ? <div className='employerDates'>{Moment(props.dateStart).format('MM/YY')} - {Moment(props.dateEnd).format('MM/YY')}</div> : <div className='employerDates'>{Moment(props.dateStart).format('MM/YY')}</div>}

                    <ul>
                        {props.info.split('\n').map((thisInfo, key) => {
                            return <li className='employerInfo' key={key}>{thisInfo}</li>
                        })}
                    </ul>

                    {props.otherType ? <p dangerouslySetInnerHTML={ {__html: props.otherHtml} }></p> : ''}
                    {props.software ? <p><b>Software:</b> {props.software}</p> : ''}
                    {props.languages ? <p><b>Languages:</b> {props.languages}</p> : ''}
                </div>
            </div>
        )

    } else {
        return null;
    }
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
            otherHtml={employer.other_html}
            otherType={employer.other_type}
            other={employer.other}
            software={employer.software}
            languages={employer.languages}
            employerLogoPath={employer.logopath}
            employerLogo={employer.logo}
            availability={employer.availability}
        />
    );

    return (
        <div className='employerList'>
            {employerItems}
        </div>
    );
}

//#endregion ==================== EmployerList ====================



//#region ==================== SkillChartItem ====================

function SkillChartItem(props) {

    // if (props.skill) {
    if (props.skill && props.availability) {

        return (
            <div className='chartItem'>

                <div className='chartCell'>
                    <p>{props.skill}</p>
                </div>

                <div className='chartCell'>
                    {props.notes.split('\n').map((thisInfo, key) => {
                        return <p key={key}>{thisInfo}</p>
                    })}
                </div>

            </div>
        )

    } else {
        return null;
    }
}

//#endregion ==================== SkillChartItem ====================


//#region ==================== SkillChart ====================

function SkillChart(props) {

    const skillItems = skillData.filter(thisCategory => thisCategory.category === props.category).map((skill) =>

        <SkillChartItem
            key={skill.index}
            category={skill.category}
            skill={skill.skill}
            level={skill.level}
            level_difference={skill.level_difference}
            exp={skill.exp}
            notes={skill.notes}
            availability={skill.availability}
        />
    );

    return (
        <>
            <h2 className='skillCatHed'>{props.category}</h2>

            <div className='skillChart'>
                {skillItems}
            </div>
        </>
    );
}

//#endregion ==================== SkillChart ====================


//#region ==================== SkillSet ====================

function SkillSet() {

    return (
        <>
            <SkillChart category='discipline' />
            <SkillChart category='software' />
            <SkillChart category='dev' />
            <SkillChart category='3d' />
            {/* <SkillChart category='info' /> */}
        </>
    );
}

//#endregion ==================== SkillSet ====================



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

                <div className='eduContainer'>

                    <h1 className='sectHed'>Education</h1>

                    <img className='logo' id='eduLogoID' src={remoteImgLoc + 'logo_cu_seas.svg'} alt={'Education: Columbia University, School of Engineering and Applied Science'} />

                    <div className='eduInfo'>
                        <h1>Columbia University</h1>
                        <h2>School of Engineering and Applied Science</h2>
                        {/* <p className='eduDate'><b>BS Mechanical Engineering</b> - May 1990</p> */}
                        <p className='eduDate'>BS Mechanical Engineering</p>
                    </div>
                </div>

                <div className='skillContainer'>
                    <h1 className='sectHed'>Skills</h1>
                    <SkillSet />
                </div>

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
                        <p>or download ALL...</p>
                    </div>

                    <div className='dialogMenu dialogMenu02' id='dialogMenu02ID'>
                        <a href={resumeZIPurl} download target='_blank' rel='noreferrer'>{resumeZIPfilename}</a>
                    </div>

                </div>

            </div>
        </>
    )
}
