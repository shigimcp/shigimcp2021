//#region ==================== IMPORTS ====================

import React from 'react';
import { Suspense } from 'react';

import '../stylesheets/Home.scss';


//#region -------------------- IMPORTS: ASSETS --------------------

import * as THREE from 'three';

import { Canvas } from 'react-three-fiber';
import Scene from '../components/three/Scene';
import Lights from '../components/three/Lights';
import Camera from '../components/three/Camera';

//#endregion -------------------- IMPORTS: ASSETS --------------------

//#endregion ==================== IMPORTS ====================



// export const Home = ({ locID }) => {
export const Home = (props) => {

    // console.log('');
    // console.log('==================== COMPONENT: Home.jsx ====================');

    // // console.log('');
    // console.log('props = ' + props);
    // console.log(props);


    // localStorage.setItem('navLoc', locID);

    window.scene = new THREE.Scene();
    window.THREE = THREE;


    return (

        // <Canvas title='Home' shadowMap>
        <Canvas title='Home' shadowMap pixelRatio={window.devicePixelRatio}>
            <Suspense fallback={null}>
                <Lights />
                <Camera />
                {/* <Camera position={[0, 0, 7.5]} fov={40} /> */}
                <Scene />
            </Suspense>
        </Canvas>
    )
}
