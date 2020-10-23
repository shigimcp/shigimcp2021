//#region ==================== IMPORTS ====================

//#region -------------------- HED: PLAIN TEXT GEOMTRY - REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef --------------------

import React, { useRef } from 'react';

import { DoubleSide } from "three";

import Text from './Text';

import Logo from "./Logo";

//#endregion -------------------- HED: PLAIN TEXT GEOMTRY - REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef --------------------

//#endregion ==================== IMPORTS ====================


// export default () => {
export default function Scene() {

    //#region ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================

    //#region -------------------- GROUNDPLANE --------------------

    function GroundPlane() {
        return (
            <mesh rotation={[5, 0, 0]} position={[0, -5, 0]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} />
            </mesh>
        );
    }

    //#endregion -------------------- GROUNDPLANE --------------------


    //#region -------------------- BACKDROP --------------------

    function BackDrop() {

        return (
            <mesh position={[0, -1, -5]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshStandardMaterial attach="material" color="white" side={DoubleSide} metalness={0.4} />
            </mesh>
        );
    }

    //#endregion -------------------- BACKDROP --------------------

    //#endregion ==================== SCENE - REF: https://codeworkshop.dev/blog/2019-12-31-learn-the-basics-of-react-three-fiber-by-building-a-three-point-lighting-setup/ ====================


    //#region ==================== HED: PLAIN TEXT GEOMTRY - REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef ====================

    function Hed() {
        const hedRef = useRef()

        return (
            <group ref={hedRef}>
                <Text hAlign="left" position={[0.7625, 1.5, -4]} children="Shigeru McPherson" size={5} />
                <Text hAlign="left" position={[0, 0.8125, -4]} children="digital designer • art director" size={3} />
            </group>
        )
    }

    //#endregion ==================== HED: PLAIN TEXT GEOMTRY - REF: https://spectrum.chat/react-three-fiber/general/best-way-to-render-text~8597ed37-45e2-4d9a-998d-7351ad5b08ef ====================


    return (
        <group>
            <Hed />
            <Logo />
            <BackDrop />
            <GroundPlane />
        </group>
    )
}
