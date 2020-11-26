//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { useCallback } from 'react';

import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import * as PIXI from 'pixi.js';
import * as particles from 'pixi-particles';

import '../banners.scss';
import './JBJA_10263.scss';
// import './fonts/fonts.css';


//#region -------------------- IMPORTS: ASSETS --------------------

// import bg from './images/bg.jpg';
// import bg_bug from './images/bg_bug.png';
import bottle from './images/bottle.png';
import copy01 from './images/copy01.png';
import copy02 from './images/copy02.png';
import cta from './images/cta.png';
import model from './images/image.jpg';
import logo from './images/logo.png';

// import particle from './images/sparkle.png';
// import particle from './images/sparkle360.png';
import particle from './images/particle.png';

// import displMap from './images/displacementMap.png';
// import displMap from './images/displacementMap2.png';
import displMap from './images/displacementMap3.png';

//#endregion -------------------- IMPORTS: ASSETS --------------------


//#region -------------------- GSAP: REGISTER PLUGINS --------------------

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

//#endregion -------------------- GSAP: REGISTER PLUGINS --------------------

//#endregion ==================== IMPORTS ====================


export default function JBJA_10263() {

    //#region ==================== ASSETS _Ref ====================

    const model_Ref = useRef(null);
    const modelSVG_Ref = useRef(null);
    const modelMask_Ref = useRef(null);

    const bottle_Ref = useRef(null);

    const logo_Ref = useRef(null);

    const bug_Ref = useRef(null);
    // const cta_Ref = useRef(null);

    const copy01_Ref = useRef(null);
    const copy02_Ref = useRef(null);
    // const copy02wave_Ref = useRef(null);

    const pixiContainer_Ref = useRef(null);
    // const waveContainer_Ref = useRef(null);

    const clickTag_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================


    //#region ==================== ANIMATION DURATIONs ====================

    // const staggerDuration = 0.125;
    // const staggerDelay = 0.0375;

    const animDuration00 = 0.125;
    // const animDuration00_5 = 0.50;
    const animDuration00_75 = 0.75;
    // const animDuration01 = 1.00;
    // const animDuration01_25 = 1.25;
    const animDuration01_5 = 1.50;
    const animDuration02 = 2.00;
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
    // const animDurationLong = 75.00;

    //#endregion ==================== ANIMATION DURATIONs ====================


    //#region ==================== FUNCTIONS ====================

    //#region -------------------- FUNCTION: removeAllChildNodes(parent) --------------------

    function removeAllChildNodes(parent) {

        // console.log('');
        // console.log('------------------------- removeAllChildNodes(parent) triggered! -------------------------');

        // console.log('parent = ' + parent);
        // console.log('parent.id = ' + parent.id);

        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    //#endregion -------------------- FUNCTION: removeAllChildNodes(thisContainer) --------------------



    //#region -------------------- FUNCTION: addPixi = useCallback((thisContainer) --------------------

    const app = new PIXI.Application({
        width: 300,
        height: 250,
        backgroundColor: 0x000000,
        view: document.getElementById('pixiContainer'),

        autoResize: true,
        resolution: devicePixelRatio || 1,
        antialias: true,
        // transparent: true,
    })

    const addPixi = useCallback((thisContainer) => {

        thisContainer.appendChild(app.view);

    }, [app.view]);

    //#endregion -------------------- FUNCTION: addPixi = useCallback((thisContainer) --------------------


    //#region -------------------- FUNCTION: pixiParticle = useCallback((thisContainer) --------------------
    //       -------------------- REF: https://pixijs.download/dev/docs/PIXI.ParticleContainer.html --------------------
    //       -------------------- REF: https://github.com/pixijs/pixi-particles/blob/master/docs/examples/js/ParticleExample.js --------------------
    //       -------------------- REF: https://pixijs.io/pixi-particles-editor/ --------------------

    const pixiParticle = useCallback((thisContainer) => {

        // console.log('');
        // console.log('------------------------- pixiParticle(thisContainer) triggered! -------------------------');

        // console.log('thisContainer.id = ' + thisContainer.id);
        // console.log(thisContainer);

        // console.log(pixiContainer_Ref.current);


        //#region -------------------- PARTICLES: container (ParticleContainer) --------------------

        let container = new PIXI.ParticleContainer();

        app.stage.addChild(container);

        //#endregion -------------------- PARTICLES: container (ParticleContainer) --------------------


        //#region -------------------- PARTICLES: emitter --------------------

        // Create a new emitter

        let emitter = new particles.Emitter(

            // The PIXI.Container to put the emitter in 
            // if using blend modes, it's important to put this on top of a bitmap, and not use the root stage Container

            container,
            [particle],


            //#region -------------------- EMITTER CONFIG: Canvas - REF: https://pixijs.io/pixi-particles-editor/ --------------------

            // Emitter configuration: edit this to change the look of the emitter

            {
                'alpha': {
                    'start': 0.6,
                    'end': 0
                },
                'scale': {
                    'start': 0.05,
                    'end': 0.75,
                    'minimumScaleMultiplier': 1
                },
                'color': {
                    'start': '#e4f9ff',
                    'end': '#ffffff'
                },
                'speed': {
                    'start': 25,
                    'end': 0,
                    'minimumSpeedMultiplier': 5
                },
                'acceleration': {
                    'x': 0,
                    'y': 0
                },
                'maxSpeed': 0,
                'startRotation': {
                    'min': 0,
                    'max': 360
                },
                'noRotation': false,
                'rotationSpeed': {
                    'min': 0,
                    'max': 0
                },
                'lifetime': {
                    'min': 1,
                    'max': 5
                },
                'blendMode': 'normal',
                'frequency': 0.0125,
                'emitterLifetime': 2,
                'maxParticles': 250,
                'pos': {
                    'x': 150,
                    'y': 125
                    // 'x': 0,
                    // 'y': 0
                },
                'addAtBack': true,
                'spawnType': 'ring',
                'spawnCircle': {
                    'x': 0,
                    'y': 0,
                    'r': 50,
                    'minR': 0
                },
            }

            //#endregion -------------------- EMITTER CONFIG: Canvas - REF: https://pixijs.io/pixi-particles-editor/ --------------------
        );

        //#endregion -------------------- PARTICLES: emitter --------------------


        //#region -------------------- PARTICLES: playOnceAndDestroy - REF: https://github.com/pixijs/pixi-particles/issues/139 --------------------

        emitter.playOnceAndDestroy(() => {
        // emitter.playOnce(() => {

            // console.log('');
            // console.log('-------------------- emitter.playOnceAndDestroy --------------------');
            console.log('-------------------- SEE end of pixiWave for cleanup code --------------------');

            // pixiWave();
            // setTimeout(pixiWave, -2000);

            // removeAllChildNodes(pixiContainer_Ref.current);
        })

        //#endregion -------------------- PARTICLES: playOnceAndDestroy - REF: https://github.com/pixijs/pixi-particles/issues/139 --------------------

    // }, []);
    }, [app.stage]);

    //#endregion -------------------- FUNCTION: pixiPartcle = useCallback((thisContainer) --------------------


    //#region -------------------- FUNCTION: pixiWave = useCallback((thisContainer) -  REF: https://codepen.io/shigimcp/pen/VwjoYVx --------------------

    const pixiWave = useCallback((thisContainer) => {

        // console.log('');
        // console.log('------------------------- pixiWave(thisContainer) triggered! -------------------------');

        var vw = 300;
        var vh = 250;

        const copy02Sprite = PIXI.Sprite.from(copy02);

        copy02Sprite.scale.x = 1.5;
        copy02Sprite.skew.x = -0.875;
        copy02Sprite.anchor.set(-0.4375, -3.5);


        const displacementSprite = new PIXI.Sprite.from(displMap);
        let displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

        app.stage.filterArea = new PIXI.Rectangle(0, 0, vw, vh);
        app.stage.filters = [displacementFilter];
        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;


        app.stage.addChild(copy02Sprite);

        gsap.fromTo([copy02Sprite], { alpha: 0 }, { alpha: 0.5, ease: 'power3.out', duration: animDuration01_5, delay: 3 })
        // gsap.to([copy02Sprite], { alpha: 0, ease: 'power3.out', duration: animDuration01_5, delay: 7 })
        gsap.to([copy02Sprite], { alpha: 0, ease: 'power3.out', duration: animDuration01_5, delay: 7, onComplete: removeAllChildNodes, onCompleteParams: [thisContainer] })


        app.stage.addChild(displacementSprite);

        gsap.to([displacementSprite], { x: 512, y: 512, ease: 'none', repeat: -1, duration: 15 });

    }, [app.stage]);

    //#endregion -------------------- FUNCTION: addPixi = useCallback(() --------------------



    //#region -------------------- FUNCTION: handleClick() - GSAP timeline control --------------------

    function handleClick() {
    // const handleClick = useCallback(() => {

        // console.log('');
        // console.log('------------------------- handleClick() -------------------------');

        removeAllChildNodes(pixiContainer_Ref.current);

        tl.pause(0);
        tl.restart();

        gsap.globalTimeline.pause();
        gsap.globalTimeline.resume();

        addPixi(pixiContainer_Ref.current);
        pixiParticle(pixiContainer_Ref.current);
        pixiWave(pixiContainer_Ref.current);
    }
    // }, []);
    // }, [tl, addPixi, pixiParticle, pixiWave]);

    //#endregion -------------------- FUNCTION: handleClick() - GSAP timeline control --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== TIMELINE tl: useEffect / useLayoutEffect ====================

    const tl = gsap.timeline({ delay: 0 });


    // useEffect(() => {
    useLayoutEffect(() => {

        addPixi(pixiContainer_Ref.current);
        pixiParticle(pixiContainer_Ref.current);
        pixiWave(pixiContainer_Ref.current);

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            //#region -------------------- autoAlpha --------------------

            // .set([copy01_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([copy02_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([copy02wave_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([logo_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([bottle_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([model_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([bug_Ref.current], { autoAlpha: 0 }, 'frame00')

            //#endregion -------------------- autoAlpha --------------------


            //#region -------------------- SET TRANSFORM ORIGiNS --------------------

            .set([logo_Ref.current, bug_Ref.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            .set([bottle_Ref.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')

            //#endregion -------------------- SET TRANSFORM ORIGiNS --------------------

            //#endregion ==================== INITIALIZE OBJECTS ====================



            //#region ==================== FRAME 01 ====================

            .fromTo([copy01_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration01_5 }, 'frame01 +=0')

            //#endregion ==================== FRAME 01 ====================


            //#region ==================== FRAME 02 ====================

            .to([copy01_Ref.current], { autoAlpha: 0, ease: 'power3.out', duration: animDuration01_5 }, 'frame02 +=1.5')

            .fromTo([copy02_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration01_5 }, 'frame02 +=1.5')

            //#endregion ==================== FRAME 02 ====================


            //#region ==================== FRAME 03 ====================

            .to([copy02_Ref.current], { autoAlpha: 0, ease: 'power3.out', duration: animDuration01_5 }, 'frame03 +=2.5')

            .fromTo([bottle_Ref.current], { y: -100, scale: 3, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame03 +=2.5')
            .fromTo([logo_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration01_5 }, 'frame03 +=3')

            //#endregion ==================== FRAME 03 ====================


            //#region ==================== FRAME 04 ====================

            .fromTo([clickTag_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration00 }, 'frame04 +=0')

            .fromTo([modelMask_Ref.current], { y: -300 }, { y: 0, ease: 'power3.out', duration: animDuration01_5 }, 'frame04 +=1')
            .fromTo([bug_Ref.current], { y: 90 }, { y: 0, ease: 'power3.out', duration: animDuration00_75 }, 'frame04 +=1.25')

            //#endregion ==================== FRAME 04 ====================
        ;

        //tl.duration(1.5);
        // console.log('');
        // console.log('tl timing = ' + tl.duration() + ' secs');

    // }, []);
    }, [tl, addPixi, pixiParticle, pixiWave]);

    //#endregion ==================== TIMELINE tl: useEffect / useLayoutEffect ====================


    return (

        <div className='banner300x250 jbja_10263' id='jbja_10263ID'>

            <div className='pixiContainer' id='pixiContainerID' ref={pixiContainer_Ref}></div>
            {/* <div className='waveContainer' id='waveContainerID' ref={waveContainer_Ref}></div> */}

            <img className='copy' id='copy01ID' src={copy01} alt='copy01' ref={copy01_Ref} />
            <img className='copy' id='copy02ID' src={copy02} alt='copy02' ref={copy02_Ref} />
            {/* <img className='copy' id='copy02waveID' src={copy02} alt='copy02wave' ref={copy02wave_Ref} /> */}

            <img className='logo' id='logoID' src={logo} alt='logo' ref={logo_Ref} />

            <img className='bottle' id='bottleID' src={bottle} alt='bottle' ref={bottle_Ref} />


        {/* #region -------------------- SVG: model (masks) -------------------- */}

            <svg className='modelSVG' id='modelSVGID' version='1.1' baseProfile='full' width='300' height='250' space='preserve' ref={modelSVG_Ref}>

                <defs>

                    <linearGradient className='maskGradient' id='maskGradientID' gradientUnits='userSpaceOnUse' x1='300' y1='0' x2='300' y2='300'>
                        <stop offset='0.75' style={{ stopColor: '#ffffff' }} />
                        <stop offset='1' style={{ stopColor: '#000000' }} />
                    </linearGradient>

                    <mask id='modelMaskID'>
                        <rect className='modelMaskRect' fill='url(#maskGradientID)' x='0' y='0' width='300' height='300' ref={modelMask_Ref} />
                    </mask>

                </defs>

                <g className='maskedModel' id='maskedModelID' mask='url(#modelMaskID)' width='300' height='250'>
                    <image href={model} alt='model' width='300' height='250' ref={model_Ref} />
                </g>

            </svg>

        {/* #endregion -------------------- SVG: model (masks) -------------------- */}


        {/* #region -------------------- BUG -------------------- */}

            <div className='bug' id='bugID' ref={bug_Ref}>
                <img className='bottle' id='bottle01ID' src={bottle} alt='bottle' />
                <img className='bottle' id='bottle02ID' src={bottle} alt='bottle' />

                <img className='logo' id='logo01ID' src={logo} alt='logo' />
                <img className='logo' id='logo02ID' src={logo} alt='logo' />
                {/* <img className='logo' id='logo03ID' src={logo} alt='logo' /> */}
                <img className='logo' id='logo_ds01ID' src={logo} alt='logo' />
                <img className='logo' id='logo_ds02ID' src={logo} alt='logo' />

                <img className='cta' id='ctaID' src={cta} alt='cta' />
            </div>

        {/* #endregion -------------------- BUG -------------------- */}


            {/* <div className='clickTag' id='clickTagID' ref={clickTag_Ref}></div> */}
            <div className='border' id='borderID'></div>
            <div className='clickTag' id='clickTagID' ref={clickTag_Ref} onClick={handleClick}></div>

        </div>
    );
}
