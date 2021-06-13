// #region ==================== IMPORTS ====================

import React, { useRef, useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import * as THREE from 'three';
import { useLoader, useUpdate } from 'react-three-fiber';

// import { isBrowser } from "react-device-detect";
import { isMobile } from "react-device-detect";
// import { isBrowser, isMobile } from "react-device-detect";
// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

// import { gsap } from 'gsap';

// #endregion ==================== IMPORTS ====================



// #region ==================== CONSTANTS / VARS ====================

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

const getHeight = () => window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

// #endregion ==================== CONSTANTS / VARS ====================


// #region ==================== FUNCTION: Text - REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef ====================

function Text({ children, hAlign = 'center', vAlign = 'center', size = 1, color = '#0000ff', ...props }) {
// function Text({ children, hAlign = 'right', vAlign = 'center', size = 1, color = '#0000ff', ...props }) {

    // console.log('');
    // console.log('==================== FUNCTION: Text ====================');
    // console.log('isMobile = ' + isMobile);
    

    // const font = useLoader(THREE.FontLoader, 'https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/fonts/ChaleParNinSix.json')
    // const font = useLoader(THREE.FontLoader, 'https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/fonts/ChaletParNineteenSixty/ChaleParNinSix.json')
    // const font = useLoader(THREE.FontLoader, 'https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/fonts/AvenirNext/AvenirNext-Regular.json')

    // const font = useLoader(THREE.FontLoader, 'https://raw.githubusercontent.com/shigimcp/shigimcp2020-react/master/src/.github/fonts/ChaletParNineteenSixty/ChaleParNinSix.json')
    // const font = useLoader(THREE.FontLoader, 'https://raw.githubusercontent.com/shigimcp/shigimcp2020-react/master/src/.github/fonts/AvenirNext/AvenirNext-Regular.json')
    // const font = useLoader(THREE.FontLoader, 'https://raw.githubusercontent.com/shigimcp/shigimcp2020-react/master/src/.github/fonts/AvenirNext/AvenirNext-UltraLight.json')
    // const font = useLoader(THREE.FontLoader, 'https://raw.githubusercontent.com/shigimcp/shigimcp2020-react/master/src/.github/fonts/AvenirNext/AvenirNextCyr-Light_Regular.json')
    const font = useLoader(THREE.FontLoader, 'https://raw.githubusercontent.com/shigimcp/shigimcp2020-react/master/src/.github/fonts/AvenirNext/AvenirNextCyr-Thin_Regular.json')

    const config = useMemo(
        () => ({ font, size: 1, height: 0.125, curveSegments: 10, bevelEnabled: true, bevelThickness: 0, bevelSize: 0, bevelOffset: 0, bevelSegments: 0 }),
        [font]
    )

    // const configDesktop = useMemo(
    //     () => ({ font, size: 1, height: 0.125, curveSegments: 10, bevelEnabled: true, bevelThickness: 0, bevelSize: 0, bevelOffset: 0, bevelSegments: 0 }),
    //     [font]
    // )

    // const configMobile = useMemo(
    //     () => ({ font, size: 0.5, height: 0.0625, curveSegments: 10, bevelEnabled: true, bevelThickness: 0, bevelSize: 0, bevelOffset: 0, bevelSegments: 0 }),
    //     [font]
    // )


    const meshRef = useUpdate(

        self => {
            const size = new THREE.Vector3()
            self.geometry.computeBoundingBox()
            self.geometry.boundingBox.getSize(size)
            self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
            self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
        },

        [children]
    )


    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh ref={meshRef} castShadow>
                <textGeometry attach="geometry" args={[children, config]} />
                {/* <textGeometry attach="geometry" args={isMobile && (window.innerWidth > window.innerHeight) ? [children, configMobile] : [children, configDesktop]} /> */}
                <meshStandardMaterial attach="material" color="#000000" />
            </mesh>
        </group>
    )
}

// #endregion ==================== FUNCTION: Text - REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef ====================


// #region ==================== FUNCTION: Hed ====================

// function HedText() {

//     const hedRef = useRef(null);

//     // <div className='threeHed' id='threeHedID'>
//         <group ref={hedRef}>
//             <Text hAlign="left" position={[1.125, 0.75, -4]} children="Shigeru McPherson" size={5} />
//             <Text hAlign="left" position={[0.3875, 0.03125, -4]} children="digital designer &middot; art director" size={3} />
//             <Text hAlign="left" position={[-2.05, -0.5625, -4]} children="( a work in progress... )" size={2} />
//         </group>
//     // </div>
// }

// #endregion ==================== FUNCTION: Hed ====================




export default function Hed() {

    //#region ==================== ASSETS _Ref ====================

    const hedRef = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================


    //#region ==================== useState DEFs ====================

    const [isMobilePortrait, setIsMobilePortrait] = useState(false);

    //#endregion ==================== useState DEFs ====================



    //#region ==================== useEffect: isMobilePortrait ====================

    useEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: isMobilePortrait ====================');
        // console.log('isMobile = ' + isMobile);

        if (isMobile && getHeight() > getWidth()) {
            setIsMobilePortrait(true);
        } else {
            setIsMobilePortrait(false);
        }

        // console.log('isMobilePortrait = ' + isMobilePortrait);

    }, [])
    // }, [isMobilePortrait])

    //#endregion ==================== useEffect: isMobilePortrait ====================



    //#region ==================== useEffect: shiftHed ====================

    // useEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: shiftHed ====================');
        // // console.log('isMobile = ' + isMobile);

    //     console.log('hedRef.current = ' + hedRef.current);
    //     console.log(hedRef.current);


    //     if (isMobile && window.innerHeight > window.innerWidth) {
    //         console.log('isMobile = ' + isMobile);
    //         console.log('window.innerWidth = ' + window.innerWidth);
    //     }

    //     // let workNavWidth = employerNav_Ref.current.getBoundingClientRect().width;
    //     // let workNavHeight = employerNav_Ref.current.getBoundingClientRect().height;

    //     // // console.log('workNavWidth = ' + workNavWidth);
    //     // // console.log('workNavHeight = ' + workNavHeight);


    //     // if (isBrowser === true) {
    //     //     workNavTL
    //     //         .fromTo([employerNav_Ref.current], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
    //     //         .fromTo([typeNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 0, duration: 0.5 }, 'frame01')
    //     //     // .fromTo([activeEmplDiv_Ref.current], { height: 0 }, { height: workNavHeight, duration: 0.5 }, 'frame01')
    //     // } else {
    //     //     workNavTL
    //     //         .fromTo([employerNav_Ref.current], { x: -workNavWidth, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
    //     //         .fromTo([typeNav_Ref.current], { x: 0, autoAlpha: 1 }, { x: -workNavWidth, autoAlpha: 0, duration: 0.5 }, 'frame01')
    //     //     // .fromTo([activeEmplDiv_Ref.current], { width: 0 }, { width: workNavHeight, duration: 0.5 }, 'frame01')
    //     // }


    //     // if (workNavToggleBtn) {
    //     //     workNavTL.restart();
    //     // }

    //     // gsap.set([hedRef.current], { x: 0, y: 0, width: 200 });

    // }, [])

    //#endregion ==================== useEffect: shiftHed ====================



    // console.log('');
    // console.log('==================== export default function Hed() ====================');
    // console.log('isMobile = ' + isMobile);
    // console.log('getWidth() = ' + getWidth());
    // console.log('getHeight() = ' + getHeight());

    return (

        <group ref={hedRef}>

            {/* <Text hAlign="left" position={[0.7625, 1.5, -4]} children="Shigeru McPherson" size={5} />
            <Text hAlign="left" position={[0, 0.8125, -4]} children="digital designer • art director" size={3} />
            <Text hAlign="left" position={[-3.0625, 0.25, -4]} children="(work-in-progress)" size={2} /> */}

            {/* <Text hAlign="left" position={[1.2625, 0.75, -4]} children="Shigeru McPherson" size={5} />
            <Text hAlign="left" position={[0.5, 0.03125, -4]} children="digital designer • art director" size={3} />
            <Text hAlign="left" position={[-2.03125, -0.5625, -4]} children="( a work in progress... )" size={2} /> */}

            {/* <Text hAlign="left" position={[1.125, 0.75, -4]} children="Shigeru McPherson" size={5} />
            <Text hAlign="left" position={[0.5, 0.03125, -4]} children="digital designer &middot; art director" size={3} />
            <Text hAlign="left" position={[0.3875, 0.03125, -4]} children="digital designer &middot; art director" size={3} />
            <Text hAlign="left" position={[-2.05, -0.5625, -4]} children="( a work in progress... )" size={2} /> */}

            {/* <Text hAlign="left" position={[1.125, 0.75, -4]} children="Shigeru McPherson" size={isMobile && (window.innerWidth > window.innerHeight) ? 3 : 5} />
            <Text hAlign="left" position={[0.3875, 0.03125, -4]} children="digital designer &middot; art director" size={isMobile && (window.innerWidth > window.innerHeight) ? 1 : 3} />
            <Text hAlign="left" position={[-2.05, -0.5625, -4]} children="( a work in progress... )" size={isMobile && (window.innerWidth > window.innerHeight) ? 0.5 : 2} /> */}

            {/* <Text hAlign="left" position={isMobile && (window.innerWidth > window.innerHeight) ? [1.125, 0.75, -5] : [1.125, 0.75, -4]} children="Shigeru McPherson" size={5} />
            <Text hAlign="left" position={isMobile && (window.innerWidth > window.innerHeight) ? [0.3875, 0.03125, -5] : [0.3875, 0.03125, -4]} children="digital designer &middot; art director" size={3} />
            <Text hAlign="left" position={isMobile && (window.innerWidth > window.innerHeight) ? [-2.05, -0.5625, -5] : [-2.05, -0.5625, -4]} children="( a work in progress... )" size={2} /> */}

            {/* <Text hAlign="left" position={isMobile ? [getWidth() * 0.4125 / 100, -1, -5] : [1.125, 0.75, -4]} children="Shigeru McPherson" size={isMobile ? 3 : 5} />
            <Text hAlign="left" position={isMobile ? [getWidth() * 0.375 / 100, -1.4375, -5] : [0.4125, 0.03125, -4]} children="digital designer &middot; art director" size={isMobile ? 1.8 :3} />
            <Text hAlign="left" position={isMobile ? [getWidth() * 0.18725 / 100, -1.875, -5] : [-2.05, -0.5625, -4]} children="( a work in progress... )" size={isMobile ? 1.2 : 2} />
            <Text hAlign="left" position={isMobile ? [getWidth() * 0.25 / 100, -1.75, -5] : [-1.40375, -0.5625, -4]} children="(dizzy... so very, very dizzy...)" size={isMobile ? 1.2 : 2} /> */}

            <Text hAlign="left" position={isMobilePortrait ? [getWidth() * 0.4125 / 100, -1, -5] : [1.125, 0.75, -4]} children="Shigeru McPherson" size={isMobilePortrait ? 3 : 5} />
            <Text hAlign="left" position={isMobilePortrait ? [getWidth() * 0.375 / 100, -1.4375, -5] : [0.4125, 0.03125, -4]} children="digital designer &middot; art director" size={isMobilePortrait ? 1.8 : 3} />
            <Text hAlign="left" position={isMobilePortrait ? [getWidth() * 0.25 / 100, -1.75, -5] : [-1.40375, -0.5625, -4]} children="(dizzy... so very, very dizzy...)" size={isMobilePortrait ? 1.2 : 2} />

            {/* <HedText /> */}

        </group>

        // <>
        //     <HedText />
        // </>
    );
}
