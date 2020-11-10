//#region ==================== IMPORTS ====================

import React from 'react';
// import { useRef } from 'react';
import { Suspense } from 'react';

// import { FullPage } from '../components/FullPage';
// import { BodyContainer } from '../components/BodyContainer';

import '../stylesheets/Home.scss';
// import scssVars from '../stylesheets/Home.scss';


//#region -------------------- IMPORTS: ASSETS --------------------

// import SquirrelBitVid from '../images/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.mp4';

import * as THREE from 'three';

import { Canvas } from 'react-three-fiber';
import Scene from '../components/three/Scene';
import Lights from '../components/three/Lights';
import Camera from '../components/three/Camera';

//#endregion -------------------- IMPORTS: ASSETS --------------------

//#endregion ==================== IMPORTS ====================



// export const Home = () => {
export const Home = ({ locID }) => {
// export const Home = ({ locID, loadStatus }) => {

    localStorage.setItem('navLoc', locID);
    // localStorage.setItem('loadStatus', loadStatus);

    window.scene = new THREE.Scene();
    window.THREE = THREE;


    return (

        <Canvas title='Home' shadowMap>
            <Suspense fallback={null}>
                <Lights />
                {/* <Camera /> */}
                <Camera position={[0, 0, 7.5]} fov={40} />
                <Scene />
            </Suspense>
        </Canvas>
    )
}




// export default function Home() {

//     window.scene = new THREE.Scene();
//     window.THREE = THREE;


//     return (
//         <Canvas shadowMap>
//             <Suspense fallback={null}>
//                 <Lights />
//                 {/* <Camera /> */}
//                 <Camera position={[0, 0, 7.5]} fov={40} />
//                 <Scene />
//             </Suspense>
//         </Canvas>
//     );
// }
