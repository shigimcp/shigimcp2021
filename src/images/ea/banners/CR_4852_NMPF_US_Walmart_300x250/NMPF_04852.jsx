//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { useCallback } from 'react';

import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import * as PIXI from 'pixi.js';


import '../banners.scss';
import './NMPF_04852.scss';
// import './fonts/fonts.css';


//#region -------------------- IMPORTS: ASSETS --------------------

// import bg from './images/bg.jpg';
// import bg_ko from './images/bg_ko.png';
import skyline from './images/skyline.png';

import model from './images/model.png';
import bottle from './images/bottle.png';

// import logo_NMPF from './images/logo.png';
import logo_NM from './images/logo_NM.png';
import logo_PF from './images/logo_PF.png';

import tag from './images/tag.png';

// import cta from './images/btn_buy.png';
import cta from './images/btn_buy.svg';

// import starspin from './images/starspin.png';
import starspin from './images/starspin.svg';
// import starspin_mask_01 from './images/starspin_mask_01.png';
// import starspin_mask_02 from './images/starspin_mask_02.png';

import particle from './images/sparkle.png';

//#endregion -------------------- IMPORTS: ASSETS --------------------


//#region -------------------- GSAP: REGISTER PLUGINS --------------------

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

//#endregion -------------------- GSAP: REGISTER PLUGINS --------------------


//#endregion ==================== IMPORTS ====================


export default function NMPF_04852() {

    //#region ==================== ASSETS _Ref ====================

    // const bg_Ref = useRef(null);
    // const bg_ko_Ref = useRef(null);
    const skyline_Ref = useRef(null);

    const model_Ref = useRef(null);
    const model_mask_Ref = useRef(null);

    const bottle_Ref = useRef(null);

    // const logo_NMPF_Ref = useRef(null);
    const logo_NM_Ref = useRef(null);
    const logo_PF_Ref = useRef(null);

    const tag_Ref = useRef(null);

    const cta_Ref = useRef(null);

    const starspin_Ref = useRef(null);
    const starspin01_Ref = useRef(null);
    const starspin02_Ref = useRef(null);

    const starspin_mask_Ref = useRef(null);
    // const starspin_mask_01_Ref = useRef(null);
    // const starspin_mask_02_Ref = useRef(null);

    const particleContainer_Ref = useRef(null);
    const clickTag_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================


    //#region ==================== ANIMATION DURATIONs ====================

    // const staggerDuration = 0.125;
    // const staggerDelay = 0.0375;

    // const animDuration00 = 0.125;
    // const animDuration00_5 = 0.50;
    // const animDuration01 = 1.00;
    // const animDuration01_25 = 1.25;
    const animDuration01_5 = 1.50;
    const animDuration02 = 2.00;
    // const animDuration02_5 = 2.50;
    const animDuration03 = 3.00;
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
    // const animDurationLong = 75.00;

    //#endregion ==================== ANIMATION DURATIONs ====================


    //#region ==================== FUNCTIONS ====================

    //#region -------------------- FUNCTION: removeAllChildNodes(parent) --------------------

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

    //#endregion -------------------- FUNCTION: removeAllChildNodes(thisContainer) --------------------


    //#region -------------------- FUNCTION: addPixi = useCallback(() --------------------

    const addPixi = useCallback((thisContainer, numParticle) => {

        console.log('');
        console.log('------------------------- addPixi(thisContainer, numParticle) triggered! -------------------------');

        console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);


        // Setup PIXI app
        const app = new PIXI.Application({
            width: 300,
            height: 250,
            backgroundColor: 0xdd8ea3,
            view: document.getElementById('particleContainer'),

            autoResize: true,
            resolution: devicePixelRatio || 1,
            antialias: true,
            transparent: true
        })

        particleContainer_Ref.current.appendChild(app.view);

        app.ticker.stop();

        // Now, we use 'tick' from gsap
        gsap.ticker.add(() => {
            app.ticker.update();
        });

        // const starTexture = PIXI.Texture.from('./images/sparkle.png');
        const starTexture = PIXI.Texture.from(particle);



        // const starAmount = 500;
        // const starAmount = numParticle;
        const starAmount = 100;
        let cameraZ = 0;
        const fov = 20;
        const baseSpeed = 1.5;
        let speed = 0;
        let warpSpeed = 0;
        const starStretch = 1;
        const starBaseSize = 0.05;


        // Create the stars
        const stars = [];

        for (let i = 0; i < starAmount; i++) {
            const star = {
                sprite: new PIXI.Sprite(starTexture),
                z: 0,
                x: 0,
                y: 0,
            };
            star.sprite.anchor.x = 0.5;
            star.sprite.anchor.y = 0.7;
            randomizeStar(star, true);
            app.stage.addChild(star.sprite);
            stars.push(star);
        }

        function randomizeStar(star, initial) {
            star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;

            // Calculate star positions with radial random coordinate so no star hits the camera.
            const deg = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 1;
            star.x = Math.cos(deg) * distance;
            star.y = Math.sin(deg) * distance;

        }


        // Listen for animate update
        app.ticker.add((delta) => {
            // Simple easing. This should be changed to proper easing function when used for real.
            speed += (warpSpeed - speed) / 10;
            cameraZ += delta * 10 * (speed + baseSpeed);
            for (let i = 0; i < starAmount; i++) {
                const star = stars[i];
                if (star.z < cameraZ) randomizeStar(star);

                // Map star 3d position to 2d with really simple projection
                const z = star.z - cameraZ;
                star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
                star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

                // Calculate star scale & rotation.
                const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
                const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
                const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
                const distanceScale = Math.max(0, (2000 - z) / 2000);

                // star.sprite.scale.x = distanceScale * starBaseSize;
                // // Star is looking towards center so that y axis is towards center.
                // // Scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.
                // star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;

                // star.sprite.scale.x = star.sprite.scale.y = 0.0625;
                star.sprite.scale.x = (distanceScale * starBaseSize) * 2;
                star.sprite.scale.y = (distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width) * 2;

                star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
            }
        });
    }, []);

    //#endregion -------------------- FUNCTION: addPixi = useCallback(() --------------------


    //#region -------------------- FUNCTION: handleClick() - GSAP timeline control --------------------

    function handleClick() {
    // const handleClick = useCallback(() => {

        // console.log('');
        // console.log('------------------------- handleClick() -------------------------');

        removeAllChildNodes(particleContainer_Ref.current);

        tl.pause(0);
        tl.restart();

        addPixi(particleContainer_Ref.current, numParticle);
    }
    // }, [tl]);

    //#endregion -------------------- FUNCTION: handleClick() - GSAP timeline control --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== TIMELINE tl: useEffect / useLayoutEffect ====================

    const numParticle = 40;

    const tl = gsap.timeline({ delay: 0 });


    // useEffect(() => {
    useLayoutEffect(() => {

        // addParticle(particleContainer_Ref.current, numParticle);
        // addRandomParticle(particleContainer_Ref.current, numParticle);
        addPixi(particleContainer_Ref.current, numParticle);

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            //#region -------------------- autoAlpha --------------------

            // .set([bottle_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([tag_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([cta_Ref.current], { autoAlpha: 0 }, 'frame00')

            //#endregion -------------------- autoAlpha --------------------


            //#region -------------------- SET TRANSFORMS --------------------

            //#region - - - - - - - - - - - SET TRANSFORM ORIGiNS - - - - - - - - - - -

            // .set([bottle_Ref.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            .set([model_mask_Ref.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')
            // .set([starspin_Ref.current.children], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')
            .set([starspin01_Ref.current, starspin02_Ref.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')
            // .set([bg_Ref.current], { transformOrigin: '50% 25%', immediateRender: true }, 'frame00')

            //#endregion - - - - - - - - - - - SET TRANSFORM ORIGiNS - - - - - - - - - - -


            //#region - - - - - - - - - - - FRAME01 - - - - - - - - - - -

            .set([starspin01_Ref.current, starspin02_Ref.current], { autoAlpha: 0.25 }, 'frame00')

            // .set([model_mask_Ref.current], { scale: 5 }, 'frame00')
            // .set([copy01_Ref.current], { x: -73.75, y: 85.5, scale: 0.529411764705882 }, 'frame00')
            // .set([LOGO_VLJref.current], { x: -72.5, y: 230, scale: 0.558823529411765 }, 'frame00')
            // .set([copy01_Ref.current, LOGO_VLJref.current], { x: 0, y: 0, scale: 1 }, 'frame00')

            //#endregion - - - - - - - - - - - FRAME01 - - - - - - - - - - -

            //#endregion -------------------- SET TRANSFORMS --------------------

            //#endregion ==================== INITIALIZE OBJECTS ====================



            //#region ==================== FRAME 01 ====================

            // .call(addRandomParticle, [particleContainer_Ref.current, numParticle], 'frame01 +=0')

            // .fromTo([starspin_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration01_5 }, 'frame01 +=0')
            .fromTo([starspin_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration01_5 }, 'frame01 +=0')

            // .staggerTo(starspin_Ref.current.children, animDuration03, { cycle: { rotation: ['20', '-20'] }, ease: 'none', delay: 0.5 }, 'frame01 +=0')
            // .to([starspin_Ref.current.children], { duration: animDuration03, rotation: [20, -20], ease: 'none', stagger: 0.5 }, 'frame01 +=0')

            // .fromTo([starspin01_Ref.current], { rotation: -20 }, { rotation: 0, ease: 'none', duration: animDuration05 }, 'frame01 +=0')
            // .fromTo([starspin02_Ref.current], { rotation: 20 }, { rotation: 0, ease: 'none', duration: animDuration05 }, 'frame01 +=0')

            .fromTo([starspin01_Ref.current], { rotation: -360 }, { rotation: 0, ease: 'none', duration: 75 }, 'frame01 +=0')
            .fromTo([starspin02_Ref.current], { rotation: 360 }, { rotation: 0, ease: 'none', duration: 75 }, 'frame01 +=0')

            .fromTo([particleContainer_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: 20 }, 'frame01 +=0.75')

            .fromTo([model_mask_Ref.current], { scale: 0 }, { scale: 5, ease: 'power3.out', duration: animDuration03 }, 'frame01 +=1.25')

            .fromTo([bottle_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=2.25')
            .fromTo([tag_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=2.5')

            .fromTo([cta_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=3')

            // .fromTo([copy01_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02, onComplete: nextPos, onCompleteParams: [copy01_Ref.current, -73.75, 85.5, 0.529411764705882, 0] }, 'frame01 +=1.5')

            //#endregion ==================== FRAME 01 ====================


            //#region ==================== FRAME 02 ====================

            // .to([copy01_Ref.current], { autoAlpha: 0, ease: 'power3.out', duration: animDuration02 }, 'frame02 +=0')

            // .fromTo([LOGO_VLJref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame02 +=0')

            //#endregion ==================== FRAME 02 ====================


            //#region ==================== FRAME 03 ====================

            // .to([LOGO_VLJref.current], { autoAlpha: 0, ease: 'power3.out', duration: animDuration02, onComplete: nextPos, onCompleteParams: [LOGO_VLJref.current, -72.5, 230, 0.558823529411765, 0] }, 'frame03 +=0.5')

            // .fromTo([copy02_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame03 +=0.5')

            //#endregion ==================== FRAME 03 ====================


            //#region ==================== FRAME 04 ====================

            // .set([copy01_Ref.current], { color: '#000000' }, 'frame04')

            // .set([LOGO_VLJ_noir_w_Ref.current], { autoAlpha: 0 }, 'frame04')
            // .set([LOGO_VLJ_noir_k_Ref.current], { autoAlpha: 1 }, 'frame04')
            // .set([LOGO_VLJ_jc_k_Ref.current], { autoAlpha: 1 }, 'frame04')

            // .to([copy02_Ref.current], { autoAlpha: 0, ease: 'power3.out', duration: animDuration02 }, 'frame04 +=0.5')

            // .fromTo([model_mask_Ref.current], { y: -1200 }, { y: 0, ease: 'power3.out', duration: animDuration02 }, 'frame04 +=0.5')
            // .fromTo([model_SVG_Ref.current], { y: 1200 }, { y: 0, ease: 'power3.out', duration: animDuration02 }, 'frame04 +=0.5')

            // .fromTo([copy01_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration01 }, 'frame04 +=0.5')
            // .fromTo([LOGO_VLJref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration01 }, 'frame04 +=0.75')
            // .fromTo([cta_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.in', duration: animDuration01 }, 'frame04 +=1')

            // // .staggerFromTo(copy01_Ref.current.children, staggerDuration, { autoAlpha: 0, rotationY: 90 }, { autoAlpha: 1, rotationY: 0 }, staggerDelay, 'frame04 +=1.5')
            // // .staggerFromTo(copy02_Ref.current.children, staggerDuration, { autoAlpha: 0, rotationY: 90 }, { autoAlpha: 1, rotationY: 0 }, staggerDelay, 'frame04 +=4')

            //#endregion ==================== FRAME 04 ====================
        ;

        //tl.duration(1.5);
        // console.log('');
        // console.log('tl timing = ' + tl.duration() + ' secs');

    // }, []);
    // }, [tl]);
    // }, [tl, addParticle]);
    // }, [tl, addRandomParticle]);
    // }, [tl, addRandomParticle, nextPos]);
    }, [tl, addPixi]);

    //#endregion ==================== TIMELINE tl: useEffect / useLayoutEffect ====================


    return (
        <div className='banner300x250 nmpf_04852' id='nmpf_04852ID'>
            {/* <h1>NMPF_04852 300x250 Component</h1> */}
  

        {/* #region -------------------- SVG: starspin (masks) -------------------- */}

            <svg className='starspinDiv' id='starspinDivID' version='1.1' baseProfile='full' x='0' y='0' width='300' height='250' space='preserve' ref={starspin_Ref}>

                <defs>

                    <radialGradient id='maskGrad_starspinID' gradientUnits='userSpaceOnUse' r='160'>
                        <stop offset='0.25' style={{ stopColor: '#FFFFFF' }} />
                        <stop offset='1' style={{ stopColor: '#000000' }} />
                    </radialGradient>

                    <mask id='mask_starspinID'>
                        <rect className='class_mask' fill='url(#maskGrad_starspinID)' x='0' y='0' width='300' height='250' />
                    </mask>

                </defs>

                {/* <g mask='url(#mask_starspinID)'> */}
                <g mask='url(#mask_starspinID)' ref={starspin_mask_Ref}>
                    {/* <image href={starspin} x='0' y='-10' width='300' height='322.8515625' /> */}
                    <image href={starspin} x='0' y='-10' width='300' height='322.8515625' ref={starspin01_Ref} />
                    <image href={starspin} x='0' y='-10' width='300' height='322.8515625' ref={starspin02_Ref} />
                </g>

            </svg>

        {/* #endregion -------------------- SVG: starspin (masks) -------------------- */}


            <div className='particleContainer' id='particleContainerID' ref={particleContainer_Ref}></div>

            <img className='skyline' id='skylineID' src={skyline} alt='skyline' ref={skyline_Ref} />

            {/* <img className='logo_NMPF' id='logo_PFID' src={logo_PF} alt='logo_PF' ref={logo_PF_Ref} /> */}

            {/* <img className='model' id='modelDiv' src={model} alt='model' ref={model_Ref} /> */}


        {/* #region -------------------- SVG: model (masks) -------------------- */}

            <svg className='modelDiv' id='modelDivID' version='1.1' baseProfile='full' width='92.5' height='225' space='preserve' ref={model_Ref}>
            {/* <svg className='modelDiv' id='modelDivID' version='1.1' baseProfile='full' x='50' width='165' height='225' space='preserve' ref={model_Ref}> */}

                <defs>

                    <radialGradient id='maskGrad_modelID' cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>
                        <stop offset='0.25' style={{ stopColor: '#FFFFFF' }} />
                        <stop offset='1' style={{ stopColor: '#000000' }} />
                    </radialGradient>

                    <mask id='mask_modelID'>
                        <rect className='class_mask' fill='url(#maskGrad_modelID)' x='36.25' y='0' width='92.5' height='225' ref={model_mask_Ref} />
                    </mask>

                </defs>

                <g mask='url(#mask_modelID)'>
                    <image href={logo_PF} x='0' y='0' width='165' height='50' ref={logo_PF_Ref} />
                    <image href={model} x='32.25' y='15' width='92.5' height='225' />
                    <image href={logo_NM} x='0' y='0' width='165' height='50' ref={logo_NM_Ref} />
                </g>

            </svg>

        {/* #endregion -------------------- SVG: model (masks) -------------------- */}


            {/* <img className='logo_NMPF' id='logo_NMID' src={logo_NM} alt='logo_NM' ref={logo_NM_Ref} /> */}


            <img src={bottle} className='bottle' id='bottleID' alt='bottle' ref={bottle_Ref} />
            <img src={tag} className='tag' id='tagID' alt='bottle' ref={tag_Ref} />

            <img src={cta} className='cta' id='ctaID' alt='cta' ref={cta_Ref} />

            {/* <div className='clickTag' id='clickTagID' ref={clickTag_Ref} onClick={() => handleClick()}></div> */}
            <div className='clickTag' id='clickTagID' ref={clickTag_Ref} onClick={handleClick}></div>

        </div>
    );
}
