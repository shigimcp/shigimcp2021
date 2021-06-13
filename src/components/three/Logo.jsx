// #region ==================== IMPORTS ====================

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef, useMemo } from 'react';

import { Box3, Vector3 } from "three";

// import { isBrowser } from "react-device-detect";
import { isMobile } from "react-device-detect";
// import { isBrowser, isMobile } from "react-device-detect";
// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import { useLoader } from 'react-three-fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { useFrame } from 'react-three-fiber';

// #endregion ==================== IMPORTS ====================



// #region ==================== CONSTANTS / VARS ====================

const remoteGitImageLoc = 'https://raw.githubusercontent.com/shigimcp/threejs-experiment-01/main/src/.github/images/';

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

const getHeight = () => window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

// #endregion ==================== CONSTANTS / VARS ====================



// #region ==================== FUNCTIONS ====================

// #region -------------------- FUNCTION: scaleObject(thisObject) --------------------

function scaleObject(thisObject) {

    let thisScale;

    if (getHeight() < getWidth()) {

        thisScale = 1;

    } else {

        thisScale = 0.5;
    }

    thisObject.scale.x = thisScale;
    thisObject.scale.y = thisScale;
    thisObject.scale.z = thisScale;
}

// #endregion -------------------- FUNCTION: scaleObject(thisObject) --------------------

// #endregion ==================== FUNCTIONS ====================



// #region ==================== LOGOMESH: EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================

function LogoMesh(props) {

    const meshScaleFactor = 0.05;
    const meshColor = "#0000ff";


    // #region -------------------- LOGOMESH extrudeSettings - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------

    let extrudeSettings = {
        curveSegments: 7,
        steps: 1,
        depth: 5,
        bevelEnabled: false,
    };


    if (props.extrudeDir === 'negative') {
        extrudeSettings.depth = extrudeSettings.depth * -1;
    };

    // #endregion -------------------- LOGOMESH extrudeSettings - REF: https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry --------------------


    return (
        <mesh id={props.id} scale={[meshScaleFactor, -meshScaleFactor, meshScaleFactor]} castShadow receiveShadow>
            <meshNormalMaterial attach="material" color={meshColor} wireframe={true} depthWrite={true} transparent opacity={props.fillOpacity} />
            <extrudeBufferGeometry attach="geometry" args={[[props.shape], extrudeSettings]} />
        </mesh>
    );
}

// #endregion ==================== LOGOMESH: EXTRUDE - REF: https://spectrum.chat/react-three-fiber/general/hole-from-imported-svg-is-reversing-should-be-a-donut-instead-is-a-dot~d235bb19-8d5c-4c4b-af74-faae8484204f ====================



// #region ==================== LOGOSHAPE: SVG - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================

function LogoShape(props) {

    //#region ==================== ASSETS _Ref ====================

    const logoShape_Ref = useRef();

    //#endregion ==================== ASSETS _Ref ====================


    //#region ==================== useState DEFs ====================

    // const [isMobilePortrait, setIsMobilePortrait] = useState(true);
    const [isMobileLandscape, setIsMobileLandscape] = useState(true);

    //#endregion ==================== useState DEFs ====================



    // #region ==================== LOGOSHAPE: shapes ====================

    const { paths } = useLoader(SVGLoader, props.url)

    const shapes = useMemo(() =>
        paths.flatMap((thisPath, i) =>
            thisPath.toShapes(true).map((shape) =>
                ({ shape, color: props.fillColor, fillOpacity: props.fillOpacity, extrudeDir: props.extrudeDir, nodeID: thisPath.userData.node.id })
            )
        ), [paths, props]
    );

    // #endregion ==================== LOGOSHAPE: shapes ====================



    //#region ==================== useEffect: isMobilePortrait ====================

    // useEffect(() => {

    //     console.log('');
    //     console.log('==================== useEffect: isMobilePortrait ====================');
    //     console.log('isMobile = ' + isMobile);
    //     console.log('getWidth() = ' + getWidth() + '     getHeight() = ' + getHeight());

    //     if (isMobile && getHeight() > getWidth()) {
    //         setIsMobilePortrait(true);
    //     } else {
    //         setIsMobilePortrait(false);
    //     }

    //     // console.log('isMobilePortrait = ' + isMobilePortrait);

    // }, [])
    // // }, [isMobilePortrait])

    //#endregion ==================== useEffect: isMobilePortrait ====================



    //#region ==================== useEffect: isMobileLandscape ====================

    useEffect(() => {

        console.log('');
        console.log('==================== useEffect: isMobileLandscape ====================');
        console.log('isMobile = ' + isMobile);
        console.log('getWidth() = ' + getWidth() + '     getHeight() = ' + getHeight());

        if (isMobile && getHeight() > getWidth()) {
            setIsMobileLandscape(true);
        } else {
            setIsMobileLandscape(false);
        }

        // console.log('isMobileLandscape = ' + isMobileLandscape);

    }, [])
    // }, [isMobileLandscape])

    //#endregion ==================== useEffect: isMobileLandscape ====================


    // #region ==================== useEffect: LOGOSHAPE position - REF: https://muffinman.io/three-js-extrude-svg-path/ ====================

    useEffect(() => {

        // scaleObject(logoShape_Ref.current);

        // if (isMobile && getHeight() > getWidth()) {
        //     setIsMobilePortrait(true);
        // } else {
        //     setIsMobilePortrait(false);
        // }

        // console.log('isMobilePortrait = ' + isMobilePortrait);

        // #region - - - - - - - - - - - boundingBox / boxSize - REF: https://muffinman.io/three-js-extrude-svg-path/ - - - - - - - - - - -

        let boundingBox = new Box3().setFromObject(logoShape_Ref.current);
        let boxSize = new Vector3();

        boundingBox.getSize(boxSize);

        let xOffset = boxSize.x * -0.5;
        // let yOffset = boxSize.y * 0.46875;
        // let yOffset = isMobile ? boxSize.y * 0.91275 : boxSize.y * 0.5;
        // let yOffset = isMobilePortrait ? boxSize.y * 0.91275 : boxSize.y * 0.5;
        let yOffset = isMobileLandscape ? boxSize.y * 0.91275 : boxSize.y * 0.5;

        logoShape_Ref.current.children.forEach(item => {
            item.position.x = xOffset;
            item.position.y = yOffset;
        })

        // #endregion - - - - - - - - - - - boundingBox / boxSize - REF: https://muffinman.io/three-js-extrude-svg-path/ - - - - - - - - - - -


        scaleObject(logoShape_Ref.current);


        // #region - - - - - - - - - - - RESPONSIVE: WINDOW RESIZE - resizeListener - - - - - - - - - - -

        let timeoutId = null;

        const resizeListener = () => {

            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => scaleObject(logoShape_Ref.current))
        }

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }

        // #endregion - - - - - - - - - - - RESPONSIVE: WINDOW RESIZE - resizeListener - - - - - - - - - - -


    // }, [])
    // }, [isMobilePortrait])
    }, [isMobileLandscape])

    // #endregion ==================== useEffect: LOGOSHAPE position - REF: https://muffinman.io/three-js-extrude-svg-path/ ====================


    // #region ==================== useFrame: LOGOSHAPE spin ====================

    useFrame(() => {
        logoShape_Ref.current.rotation.y += 0.025;
    });

    // #endregion ==================== useFrame: LOGOSHAPE spin ====================


    return (
        <group ref={logoShape_Ref}>
            {shapes.map((props) => (
                <LogoMesh key={props.shape.uuid} {...props} />
            ))}
        </group>
    )
};

// #endregion ==================== LOGOSHAPE: SVG - REF: https://codesandbox.io/s/react-three-fiber-react-spring-svg-parallax-forked-8hdg1 ====================


export default function Logo() {

    const logoSVG = remoteGitImageLoc + 'logo/shigeru_logo_extrude_stroke.svg';

    return (
        <LogoShape id="logoSVGid" url={logoSVG} fillOpacity="0.0625" extrudeDir="positive" />
    );
}
