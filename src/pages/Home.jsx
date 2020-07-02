import React from 'react';

import '../stylesheets/Home.scss';

import { FullPage } from '../components/FullPage';
// import { BodyContainer } from '../components/BodyContainer';


// const remoteLoc = 'https://www.shigimcp.com/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';

export const Home = () => {
    return (
        <FullPage title="Home">
            <img className="homeImgHolder" src="https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.jpg" alt="SquirrelBit_Single_Ladies" />
            {/* <img className="homeImgHolder" src="https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/SquirrelBit_3D.jpg" alt="SquirrelBit_3D" /> */}
            {/* Home Page */}
        </FullPage>
    )
}