import React from 'react';
import { useRef } from 'react';

import '../stylesheets/Home.scss';

import { FullPage } from '../components/FullPage';
// import { BodyContainer } from '../components/BodyContainer';

import SquirrelBitVid from '../images/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.mp4';

// const remoteLoc = 'https://www.shigimcp.com/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';


// export const Home = () => {
export const Home = ({ locID }) => {
// export const Home = ({ locID, loadStatus }) => {

    localStorage.setItem('navLoc', locID);
    // localStorage.setItem('loadStatus', loadStatus);

    const videoRef = useRef(null);

    return (
        <FullPage title='Home'>
            {/* Home Page */}

            {/* <h1>Hello, locID = {locID}</h1> */}

            {/* <video autoPlay muted poster='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.jpg' alt='SquirrelBit_Single_Ladies'> */}
            <video autoPlay poster='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.jpg' alt='SquirrelBit_Single_Ladies'>
                <source src={SquirrelBitVid} type='video/mp4' ref={videoRef} />
            </video>

            {/* <h1>Hello, locID = {locID}</h1> */}

            {/* <img className='homeImgHolder' src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.jpg' alt='SquirrelBit_Single_Ladies' /> */}
            {/* <img className='homeImgHolder' src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/SquirrelBit_3D.jpg' alt='SquirrelBit_3D' /> */}

        </FullPage>
    )
}