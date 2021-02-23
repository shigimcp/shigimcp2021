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

                <img className='logo' src={remoteImgLoc + props.employerLogo} alt={'Employer: ' + props.employer} />

                <div className='employerInfo'>
                    <h1>{props.employer}</h1>
                    <h2>{props.title}</h2>

                    <div className='employerDates'>{props.dateStart} - {props.dateEnd}</div>

                    <ul>
                        {props.info.split('\n').map((thisInfo, key) => {
                            return <li key={key}>{thisInfo}</li>
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



//#region ==================== SkillList ====================

// function SkillList(props) {

//     const skillItems = skillData.filter(thisCategory => thisCategory.category === props.category).map((skill) =>

//         <SkillChartItem
//             key={skill.index}
//             category={skill.category}
//             skill={skill.skill}
//             level={skill.level}
//             level_difference={skill.level_difference}
//         />
//     );

//     return (
//         <>
//             <h2 className='skillCatHed'>{props.category}</h2>

//             <div className='skillList'>
//                 {skillItems}
//             </div>
//         </>
//     );
// }

//#endregion ==================== SkillList ====================



//#region ==================== SkillChart ====================

// function SkillChart() {

//     const skillItems = skillData.map((skill) =>

//         <SkillChartItem
//             key={skill.index}
//             skill={skill.skill}
//             skillInfo={skill.skill_info}
//             skillExtra={skill.skill_extra}
//         />
//     );

//     return (
//         <>
//             {/* <h2 className='skillCatHed'>{props.category}</h2> */}

//             <div className='skillList'>
//                 CHART{skillItems}
//             </div>
//         </>
//     );
// }

//#endregion ==================== SkillChart ====================


//#region ==================== SkillList ====================

// function SkillList() {

//     const skillItems = skillData.map((skill) =>

//         <SkillListItem
//             key={skill.index}
//             skill={skill.skill}
//             skillInfo={skill.skill_info}
//             skillExtra={skill.skill_extra}
//         />
//     );

//     return (
//         <>
//             {/* <h2 className='skillCatHed'>{props.category}</h2> */}

//             <div className='skillList'>
//                 LIST{skillItems}
//             </div>
//         </>
//     );
// }

//#endregion ==================== SkillList ====================



//#region ==================== SkillChartItem ====================

function SkillChartItem(props) {

    // if (props.skill) {
    if (props.skill && props.availability) {

        return (
            <div className='chartItem'>

                <div className='chartCell'>
                    <p>{props.skill}</p>
                    {/* {props.skillInfo}
                    {props.skillExtra} */}
                </div>

                <div className='chartCell'>
                    {props.skillInfo.split('\n').map((thisInfo, key) => {
                        return <p key={key}>{thisInfo}</p>
                        {/* return <p className='pInline' key={key}>{thisInfo}</p> */}
                    })}
                </div>

            </div>
        )

    } else {
        return null;
    }
}

//#endregion ==================== SkillChartItem ====================


//#region ==================== SkillListItem ====================

function SkillListItem(props) {

    return (
        // <div className='listItem'>

        //     <ul className='listCell'>
        //         {/* <li>{props.skill}</li>
        //         <li>{props.skillInfo}</li> */}
        //         <li>{props.skillExtra}</li>
        //     </ul>

        // </div>

        <li className='listItem'>{props.skillExtra}</li>
    )
}

//#endregion ==================== SkillListItem ====================


//#region ==================== SkillSet ====================

function SkillSet() {

    const chartItems = skillData.map((skill) =>

        <SkillChartItem
            key={skill.index}
            skill={skill.skill}
            skillInfo={skill.skill_info}
            skillExtra={skill.skill_extra}
            availability={skill.availability}
        />
    );

    const listItems = skillData.map((skill) =>

        <SkillListItem
            key={skill.index}
            skill={skill.skill}
            skillInfo={skill.skill_info}
            skillExtra={skill.skill_extra}
            availability={skill.availability}
        />
    );

    return (
        <>
            <div className='skillChart'>
                <p className='chartHed'>SnapChart...</p>
                {chartItems}
            </div>

            {/* <div className='skillList'>
                {listItems}
            </div> */}

            <ul className='skillList'>
            {/* <ul className='skillList --grid-col:17; --grid-col-2:9; --grid-col-3:6; --grid-col-4:5;'> */}
                {listItems}
            </ul>
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
                        <p className='eduDate'><b>BS Mechanical Engineering</b> - May 1990</p>
                    </div>
                </div>

                <div className='skillContainer'>
                    <h1 className='sectHed'>Skills</h1>

                    {/* <SkillList category='discipline' />
                    <SkillList category='software' />
                    <SkillList category='dev' />
                    <SkillList category='3d' /> */}

                    {/* <SkillChart />
                    <SkillList /> */}
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
