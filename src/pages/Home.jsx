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



export const Home = ({ locID }) => {

    localStorage.setItem('navLoc', locID);

    window.scene = new THREE.Scene();
    window.THREE = THREE;


    return (

        <Canvas title='Home' shadowMap>
            <Suspense fallback={null}>
                <Lights />
                <Camera />
                {/* <Camera position={[0, 0, 7.5]} fov={40} /> */}
                <Scene />
            </Suspense>
        </Canvas>
    )
}
