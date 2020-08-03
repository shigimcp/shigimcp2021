import React from 'react';
import { useRef } from 'react';

import '../stylesheets/Home.scss';

import { FullPage } from '../components/FullPage';
// import { BodyContainer } from '../components/BodyContainer';

import SquirrelBitVid from '../images/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.mp4';

// const remoteLoc = 'https://www.shigimcp.com/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';

export const Home = () => {

    const videoRef = useRef(null);

    return (
        <FullPage title='Home'>
            {/* Home Page */}

            {/* <img className='homeImgHolder' src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.jpg' alt='SquirrelBit_Single_Ladies' /> */}
            {/* <img className='homeImgHolder' src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/SquirrelBit_3D.jpg' alt='SquirrelBit_3D' /> */}

            <video autoPlay muted poster='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.jpg' alt='SquirrelBit_Single_Ladies'>
                <source src={SquirrelBitVid} type='video/mp4' ref={videoRef} />
            </video>

        </FullPage>
    )
}