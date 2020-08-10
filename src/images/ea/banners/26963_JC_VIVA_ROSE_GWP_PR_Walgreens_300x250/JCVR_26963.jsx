//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
// import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { useCallback } from 'react';

import { gsap } from 'gsap';
// import { CSSPlugin } from 'gsap/CSSPlugin';

import '../banners.scss';
import './JCVR_26963.scss';
// import './fonts/fonts.css';


//#region -------------------- IMPORTS: ASSETS --------------------

import bg from './images/bg.jpg';

import flower01 from './images/flower01.png';
import flower02 from './images/flower02.png';
import flower03 from './images/flower03.png';

// import bottle from './images/bottle.jpg';
import bottle from './images/bottle.png';
// import bottle_ko from './images/bottle_ko.png';

// import gwp from './images/gwp.jpg';
// import gwp_ko from './images/gwp_ko.png';
import gwp from './images/gwp.png';

import copy01 from './images/copy01.png';
import legal from './images/legal.png';

import LOGO_JC from './images/LOGO_JC.svg';

// import logo from './images/logo.jpg';
import logo from './images/logo.png';
import logo_ko from './images/logo_ko.png';

import cta from './images/cta_sp.svg';
import vendorLogo from './images/logo_walgreens.svg';

//#endregion -------------------- IMPORTS: ASSETS --------------------


//#region -------------------- GSAP: REGISTER PLUGINS --------------------

// gsap.registerPlugin(CSSPlugin);

//#endregion -------------------- GSAP: REGISTER PLUGINS --------------------


//#endregion ==================== IMPORTS ====================


export default function JCVR_26963() {

    //#region ==================== ASSETS Ref ====================

    const bgRef = useRef(null);

    // const flower01Ref = useRef(null);
    // const flower02Ref = useRef(null);
    // const flower03Ref = useRef(null);

    const bottleRef = useRef(null);
    // const bottle_koRef = useRef(null);

    const gwpRef = useRef(null);
    // const gwp_koRef = useRef(null);

    const copy01Ref = useRef(null);
    const legalRef = useRef(null);

    const LOGO_JCRef = useRef(null);

    const logoRef = useRef(null);
    const logo_JCVRRef = useRef(null);
    const logo_koRef = useRef(null);

    const ctaRef = useRef(null);
    const vendorLogoRef = useRef(null);

    const particleContainerRef = useRef(null);
    const clickTagRef = useRef(null);

    //#endregion ==================== ASSETS Ref ====================


    //#region ==================== ANIMATION DURATIONs ====================

    // const staggerDuration = 0.125;
    // const staggerDelay = 0.0375;

    // const animDuration00 = 0.125;
    // const animDuration00_5 = 0.50;
    const animDuration01 = 1.00;
    // const animDuration01_25 = 1.25;
    // const animDuration01_5 = 1.50;
    // const animDuration02 = 2.00;
    // const animDuration02_5 = 2.50;
    // const animDuration03 = 3.00;
    // const animDuration03_5 = 3.50;
    // const animDuration04 = 4.00;
    // const animDuration04_5 = 4.50;
    // const animDuration05 = 5.00;
    // const animDuration05_5 = 5.50;
    // const animDuration06 = 6.00;
    // const animDuration06_5 = 6.50;
    // const animDuration07 = 7.00;
    // const animDuration07_5 = 7.50;
    // const animDuration08 = 8.00;
    // const animDuration08_5 = 8.50;
    // const animDuration09 = 9.00;
    // const animDuration09_5 = 9.50;
    // const animDuration10 = 10.00;

    //#endregion ==================== ANIMATION DURATIONs ====================


    //#region ==================== FUNCTIONS ====================

    //#region -------------------- FUNCTION: splitText(thisContainer, thisCopy) --------------------

    // function splitText(thisContainer, thisCopy, thisClassname) {

    //     // console.log('');
    //     // console.log('------------------------- splitText(thisContainer, thisCopy) triggered! -------------------------');
    //     // console.log('thisContainer.id = ' + thisContainer.id + '     thisCopy = ' + thisCopy);

    //     const thisCopyResponse = thisCopy.split('');
    //     // console.log('thisCopyResponse.length = ' + thisCopyResponse.length + '     thisCopyResponse = ' + thisCopyResponse)

    //     for (let c = 0; c < thisCopyResponse.length; c++) {

    //         // console.log('thisCopyResponse[c] = "' + thisCopyResponse[c] + '"');

    //         const node = document.createElement('p');
    //         node.className = thisClassname;

    //         if (thisCopyResponse[c] !== ' ') {
    //             node.innerHTML = thisCopyResponse[c];
    //             thisContainer.append(node);
    //         } else {
    //             // console.log('This is a space!');
    //             node.innerHTML = '&nbsp;';
    //             thisContainer.append(node);
    //         }
    //     }
    // }

    //#endregion -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------


    //#region -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------

    function randRange(min, max) {
        let thisIndex = min + Math.round(Math.random() * (max - min));
        //	console.log('thisIndex = ' + thisIndex);

        return thisIndex;
    }

    //#endregion -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------


    //#region -------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------

    function randRange2(min, max) {
        let thisIndex = min + Math.random() * (max - min);
        //	console.log('thisIndex = ' + thisIndex);

        return thisIndex;
    }

    //#endregion -------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------


    //#region -------------------- FUNCTION: nextPos(thisObj, thisX, thisY, thisScale) --------------------

    // const nextPos = useCallback((thisObj, thisX, thisY, thisScale, thisAlpha) => {

    //     // console.log('');
    //     // console.log('------------------------- nextPos(thisObj, thisX, thisY, thisScale, thisAlpha) triggered! -------------------------');
    //     // console.log('thisObj: ' + thisObj + ', thisX: ' + thisX + ', thisY: ' + thisY + ', thisScale: ' + thisScale + ', thisAlpha: ' + thisAlpha);

    //     gsap.set(thisObj, { x: thisX, y: thisY, scale: thisScale, alpha: thisAlpha });

    // }, []);

    //#endregion -------------------- FUNCTION: nextPos(thisObj, thisX, thisY, thisScale) --------------------


    //#region -------------------- FUNCTION: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------

    //#region - - - - - - - - - - - FUNCTION: removeAllChildNodes(parent) - - - - - - - - - - -

    // const removeAllChildNodes = useCallback((parent) => {
    function removeAllChildNodes(parent) {

        // console.log('');
        // console.log('------------------------- removeAllChildNodes(parent) triggered! -------------------------');

        // console.log('parent = ' + parent);
        // console.log('parent.id = ' + parent.id);

        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    // }, []);

    //#endregion - - - - - - - - - - - FUNCTION: removeAllChildNodes(thisContainer) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: removeParticle(thisParticle) - - - - - - - - - - -

    // const removeParticle = useCallback((thisParticle) => {

    //     // console.log('');
    //     // console.log('------------------------- removeParticle(thisParticle) triggered! -------------------------');
    //     // console.log('NOTE: the error check below does not work 100%');
    //     // console.log('It fails if I click before the full run of the particle animations(s) complete.');

    //     // console.log('thisParticle = ' + thisParticle);
    //     // console.log('thisParticle.id = ' + thisParticle.id);

    //     if (thisParticle == null) {
    //         console.log('***** NOPE! *****');
    //         console.error();
    //     } else {
    //         thisParticle.parentNode.removeChild(thisParticle);
    //     }

    // }, []);

    //#endregion - - - - - - - - - - - FUNCTION: removeParticle(thisParticle) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: particleAnim(thisParticle) - - - - - - - - - - -

    const particleAnim = useCallback((thisParticle) => {

        // console.log('');
        // console.log('------------------------- particleAnim(thisParticle) triggered! -------------------------');

        // console.log('thisParticle.id = ' + thisParticle.id);

        // gsap.to([thisParticle], animDuration00_5, { autoAlpha: 1, repeat: 1, yoyo: true, ease: 'sine.inOut', delay: randRange2(0, 1.5) });
        // gsap.to([thisParticle], animDuration00_5, { autoAlpha: 1, repeat: 1, yoyo: true, ease: 'sine.inOut', delay: randRange2(0, 1.5), onComplete: removeParticle, onCompleteParams: [thisParticle] });

        // TweenLite.to(mc_empty.getInstanceAtDepth(n), 1, { _xscale: 100, _yscale: 100, _alpha: 100, delay: .1 + (.0375 * n), ease: Cubic.easeOut });
        // gsap.to([thisParticle], animDuration01, { scale: 1, autoAlpha: 1, ease: 'power3.out', delay: randRange2(0, 1.5) });
        gsap.fromTo([thisParticle], { scale: randRange2(0.75, 1), rotation: randRange(-15, 15), autoAlpha: 0 }, { scale: 1.25, rotation: 0, autoAlpha: 0.75, ease: 'power3.out', duration: animDuration01, delay: randRange2(0.5, 1.5) });

    }, []);
    // }, [removeParticle]);

    //#endregion - - - - - - - - - - - FUNCTION: particleAnim(thisParticle) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: positionParticle(thisContainer) - - - - - - - - - - -

    const positionParticle = useCallback((thisContainer) => {

        // console.log('');
        // console.log('------------------------- positionParticle(thisContainer) triggered! -------------------------');

        // console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);
        // console.log('thisContainer.offsetWidth = ' + thisContainer.offsetWidth + '     thisContainer.offsetHeight = ' + thisContainer.offsetHeight);

        // console.log('thisContainer.children[1] = ' + thisContainer.children[1]);

        // const displacementFactor = 0.5;

        for (let i = 0; i < thisContainer.children.length; i++) {

            // console.log('thisContainer.children[i].id = ' + thisContainer.children[i].id);

            // const thisX = randRange(-thisContainer.offsetLeft * displacementFactor, thisContainer.offsetWidth * displacementFactor);
            // const thisY = randRange(-thisContainer.offsetTop * displacementFactor, thisContainer.offsetHeight * displacementFactor);

            // const thisX = randRange(-thisContainer.offsetWidth * displacementFactor, thisContainer.offsetWidth * displacementFactor);
            // const thisY = randRange(-thisContainer.offsetHeight * displacementFactor, thisContainer.offsetHeight * displacementFactor);

            const thisX = randRange(-thisContainer.offsetWidth * 0.75, thisContainer.offsetWidth * 0.5);
            const thisY = randRange(-thisContainer.offsetHeight * 0.25, thisContainer.offsetHeight * 0.875);

            const thisScale = randRange(25, 60) / 100;

            // console.log('thisX = ' + thisX + '     thisY = ' + thisY + '     thisScale = ' + thisScale);

            gsap.set([thisContainer.children[i]], { x: thisX, y: thisY, autoAlpha: 0, scale: thisScale });

            particleAnim(thisContainer.children[i]);
        }

    }, [particleAnim]);

    //#endregion - - - - - - - - - - - FUNCTION: positionParticle(thisContainer) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: addParticle = useCallback(() - - - - - - - - - - -

    // const addParticle = useCallback((thisContainer, numParticle) => {

    //     // console.log('');
    //     // console.log('------------------------- addParticle(thisContainer, numParticle) triggered! -------------------------');

    //     // console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);

    //     for (let i = 0; i < numParticle; i++) {

    //         const thisParticle = new Image();
    //         thisParticle.src = flower_01;
    //         thisParticle.key = i;
    //         thisParticle.className = 'particle';
    //         thisParticle.id = 'flower_01_' + i;
    //         thisParticle.alt = 'flower_01_' + i;

    //         thisContainer.append(thisParticle);
    //     }

    //     positionParticle(thisContainer);

    // }, [positionParticle]);

    //#endregion - - - - - - - - - - - FUNCTION: addParticle = useCallback(() - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: addRandomParticle = useCallback(() - - - - - - - - - - -

    const addRandomParticle = useCallback((thisContainer, numParticle) => {

        // console.log('');
        // console.log('------------------------- addRandomParticle(thisContainer, numParticle) triggered! -------------------------');

        // console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);

        const particles = [
            flower01,
            flower02,
            flower03
        ];

        // console.log('particles = ' + particles);
        console.log('particles.length = ' + particles.length);
        // console.log('particles = ' + particles + '     particles.length = ' + particles.length);

        for (let i = 0; i < numParticle; i++) {

            let particleIndex = randRange(0, particles.length - 1);

            // console.log('particleIndex = ' + particleIndex);

            const thisParticle = new Image();
            thisParticle.src = particles[particleIndex];
            thisParticle.key = i;
            thisParticle.className = 'particle';
            thisParticle.id = 'flower' + i;
            thisParticle.alt = 'flower' + i;

            // console.log('particles[' + particleIndex + '] = ' + particles[particleIndex]);
            // console.log('thisParticle = ' + thisParticle.id);

            thisContainer.append(thisParticle);
        }

        positionParticle(thisContainer);

    }, [positionParticle]);

    //#endregion - - - - - - - - - - - FUNCTION: addRandomParticle = useCallback(() - - - - - - - - - - -

    //#endregion -------------------- FUNCTION: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------


    //#region -------------------- FUNCTION: handleClick() - GSAP timeline control --------------------

    function handleClick() {
    // const handleClick = useCallback(() => {

        // console.log('');
        // console.log('------------------------- handleClick() -------------------------');

        removeAllChildNodes(particleContainerRef.current);

        tl.pause(0);
        tl.restart();
    }
    // }, [tl]);

    //#endregion -------------------- FUNCTION: handleClick() - GSAP timeline control --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== useEffect / useLayoutEffect ====================

    const numParticle = 40;

    const tl = gsap.timeline({ delay: 0 });


    // useEffect(() => {
    useLayoutEffect(() => {

        // const copy01Text = 'Introducing';
        // const copy02Text = 'The daring new fragrance';

        // splitText(copy01Ref.current, copy01Text, 'char01');
        // splitText(copy02Ref.current, copy02Text, 'char02');

        // addParticle(particleContainerRef.current, numParticle);
        // addRandomParticle(particleContainerRef.current, numParticle);

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            //#region -------------------- autoAlpha --------------------

            // .set([bgRef.current], { autoAlpha: 0 }, 'frame00')

            // .set([flower01Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([flower02Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([flower03Ref.current], { autoAlpha: 0 }, 'frame00')

            .set([bottleRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([bottle_koRef.current], { autoAlpha: 0 }, 'frame00')

            .set([gwpRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([gwp_koRef.current], { autoAlpha: 0 }, 'frame00')

            .set([copy01Ref.current], { autoAlpha: 0 }, 'frame00')
            .set([legalRef.current], { autoAlpha: 0 }, 'frame00')

            // .set([LOGO_JCRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([logoRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([logo_koRef.current], { autoAlpha: 0 }, 'frame00')

            .set([ctaRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([vendorLogoRef.current], { autoAlpha: 0 }, 'frame00')

            // .set([clickTagRef.current], { autoAlpha: 0 }, 'frame00')

            //#endregion -------------------- autoAlpha --------------------


            //#region -------------------- SET TRANSFORMS --------------------

            //#region -------------------- SET TRANSFORM ORIGiNS --------------------

            .set([logoRef.current, logo_JCVRRef.current, LOGO_JCRef.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            // .set([gwpRef.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')
            .set([ctaRef.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            .set([legalRef.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')

            //#endregion -------------------- SET TRANSFORM ORIGiNS --------------------


            //#region -------------------- FRAME02 --------------------

            // .set([logoRef.current], { x: -60, y: 10 }, 'frame00')
            // .set([logo_JCVRRef.current], { scale: 0.861538461538462 }, 'frame00')
            // .set([LOGO_JCRef.current], { y: -29 }, 'frame00')

            //#endregion -------------------- FRAME02 --------------------


            //#region -------------------- FRAME03 --------------------

            // .set([logoRef.current], { x: -70, y: -10 }, 'frame00')

            //#endregion -------------------- FRAME03 --------------------

            //#endregion -------------------- SET TRANSFORMS --------------------

            //#endregion ==================== INITIALIZE OBJECTS ====================



            //#region ==================== FRAME 01 ====================

            .call(addRandomParticle, [particleContainerRef.current, numParticle], 'frame01 +=0')

            .fromTo([bgRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration01 }, 'frame01 +=0.5')

            .fromTo([logoRef.current], { scale: 0.75, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'power3.out', transformOrigin: '50% 50%', immediateRender: true, duration: animDuration01 }, 'frame01 +=1')

            //#endregion ==================== FRAME 01 ====================


            //#region ==================== FRAME 02 ====================

            .to([logoRef.current], { x: -60, y: 10, ease: 'power3.out', duration: animDuration01 }, 'frame02 +=0.5')
            .to([logo_JCVRRef.current], { scale: 0.861538461538462, ease: 'power3.out', duration: animDuration01 }, 'frame02 +=0.5')
            .to([LOGO_JCRef.current], { y: -29, ease: 'power3.out', duration: animDuration01 }, 'frame02 +=0.5')

            .fromTo([bottleRef.current], { x: -20, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: 'power3.out', duration: animDuration01 }, 'frame02 +=0.5')

            //#endregion ==================== FRAME 02 ====================


            //#region ==================== FRAME 03 ====================

            .to([bottleRef.current], { scale: 0.75, autoAlpha: 0, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=1')

            .to([logoRef.current], { x: -70, y: -10, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=1')

            .fromTo([gwpRef.current], { scale: 0.75, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=1')

            .fromTo([copy01Ref.current], { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=1.25')

            .fromTo([ctaRef.current], { y: -10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=2')
            .fromTo([legalRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=2.25')

            //#endregion ==================== FRAME 03 ====================


            //#region ==================== FRAME 04 ====================

            // .set([copy01Ref.current], { color: '#000000' }, 'frame04')

            // .set([LOGO_VLJ_noir_wRef.current], { autoAlpha: 0 }, 'frame04')
            // .set([LOGO_VLJ_noir_kRef.current], { autoAlpha: 1 }, 'frame04')
            // .set([LOGO_VLJ_jc_kRef.current], { autoAlpha: 1 }, 'frame04')

            // .to([copy02Ref.current], { autoAlpha: 0, ease: 'power3.out', duration: animDuration02 }, 'frame04 +=0.5')

            // .fromTo([model_maskRef.current], { y: -1200 }, { y: 0, ease: 'power3.out', duration: animDuration02 }, 'frame04 +=0.5')
            // .fromTo([model_SVGRef.current], { y: 1200 }, { y: 0, ease: 'power3.out', duration: animDuration02 }, 'frame04 +=0.5')

            // .fromTo([copy01Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration01 }, 'frame04 +=0.5')
            // .fromTo([LOGO_VLJref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration01 }, 'frame04 +=0.75')
            // .fromTo([ctaRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration01 }, 'frame04 +=1')

            // // .staggerFromTo(copy01Ref.current.children, staggerDuration, { autoAlpha: 0, rotationY: 90 }, { autoAlpha: 1, rotationY: 0 }, staggerDelay, 'frame04 +=1.5')
            // // .staggerFromTo(copy02Ref.current.children, staggerDuration, { autoAlpha: 0, rotationY: 90 }, { autoAlpha: 1, rotationY: 0 }, staggerDelay, 'frame04 +=4')

            //#endregion ==================== FRAME 04 ====================
        ;

        //tl.duration(1.5);
        console.log('');
        console.log('tl timing = ' + tl.duration() + ' secs');

    // }, [tl]);
    }, [tl, addRandomParticle]);
    // }, [tl, addRandomParticle, nextPos]);

    //#endregion ==================== useEffect / useLayoutEffect ====================


    return (
        <div className='banner300x250 jcvr_26963' id='jcvr_26963ID'>
            {/* <h1>JCVR_26963 300x600 Component</h1> */}

            <div className='particleContainer' id='particleContainerID' ref={particleContainerRef}></div>

            <img src={bg} className='bg' id='bgID' alt='bg' ref={bgRef} />

        {/* 
            <div className='logoDiv' ref={logoRef}>
                <img src={logo} className='logo_JCVR' id='logo_JCVRID' alt='model' ref={logo_JCVRRef} />
                <img src={LOGO_JC} className='logo_JC' id='logo_JCID' alt='model' ref={LOGO_JCRef} />
            </div>
        */}

        {/* #region -------------------- SVG FILTERS (logo) -------------------- */}

            <svg className='logoDiv' version='1.1' baseProfile='full' id='logo_ds_svg' width='130' height='225' space='preserve' overflow='visible' ref={logoRef}>

                <defs>

                    <filter id='Finvert' x='0%' y='0%' width='100%' height='100%'>
                        <feColorMatrix 
                            in='SourceGraphic' 
                            type='matrix' 
                            values='-1 0 0 0 1 
                                    0 -1 0 0 1 
                                    0 0 -1 0 1 
                                    0 0 0 1 0'/>
                    </filter>

                    <filter id='logo_ds01' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'>
                        <feGaussianBlur in='SourceGraphic' stdDeviation='50' result='logo_blur01' />
                        <feOffset dx='0' dy='0' result='logo_blurOffset01'/>
                        <feComponentTransfer><feFuncA type='linear' slope='3'/></feComponentTransfer>
                    </filter>

                </defs>

                <g className='logoDiv' ref={logoRef} filter='url(#logo_ds01)'>
                    <image href={logo_ko} width='130' height='200' ref={logo_koRef} />
                    <image href={LOGO_JC} width='100' height='17' ref={LOGO_JCRef} filter='url(#Finvert)' />
                </g>

                <g className='logoDiv' ref={logoRef}>
                    <image href={logo} className='logo_JCVR' width='130' height='200' ref={logo_JCVRRef} />
                    <image href={LOGO_JC} className='logo_JC' x='15' y='205' width='100' height='17' ref={LOGO_JCRef} />
                </g>

            </svg>

        {/* #endregion -------------------- SVG FILTERS (logo) -------------------- */}

            <img src={bottle} className='bottle' id='bottleID' alt='bottle' ref={bottleRef} />

            <img src={gwp} className='gwp' id='gwpID' alt='gwp' ref={gwpRef} />

            <img src={copy01} className='copy01' id='copy01ID' alt='copy01' ref={copy01Ref} />
            <img src={legal} className='legal' id='legalID' alt='legal' ref={legalRef} />

            <img src={cta} className='cta' id='ctaID' alt='cta' ref={ctaRef} />

            <div className='vendorTag' ref={vendorLogoRef}><img src={vendorLogo} alt='vendorLogo_Walgreens' /></div>

            {/* <div className='clickTag' id='clickTagID' ref={clickTagRef} onClick={() => handleClick()}></div> */}
            <div className='clickTag' id='clickTagID' ref={clickTagRef} onClick={handleClick}></div>
        </div>
    );
}
