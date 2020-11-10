//#region ==================== IMPORTS ====================

import React from 'react';

import '../stylesheets/Resume.scss';

import myData from '../data/MyData';

//#endregion ==================== IMPORTS ====================


//#region ==================== CONSTANTS ====================

//#region -------------------- DATA --------------------

const employerData = myData[0];
const skillData = myData[3];

//#endregion -------------------- DATA --------------------

//#endregion ==================== CONSTANTS ====================


//#region ==================== EmployerList ====================

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


export const Resume = ({ locID }) => {

    localStorage.setItem('navLoc', locID);

    return (

        <div className='employerContainer'>

            <EmployerList />

            <h1 className='skillHed'>Skills</h1>
            <SkillList category='discipline' />
            <SkillList category='software' />
            <SkillList category='dev' />
            <SkillList category='3d' />

        </div>
    )
}
