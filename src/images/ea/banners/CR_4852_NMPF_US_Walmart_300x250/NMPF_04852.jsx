//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
// import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
// import { useCallback } from 'react';

import { gsap } from 'gsap';
// import * as PIXI from 'pixi.js';
// import { PixiPlugin } from 'gsap/PixiPlugin';
// import { render, Text } from '@inlet/react-pixi';
// import { Application } from 'pixi.js';


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

// import particle from './images/sparkle.png';

//#endregion -------------------- IMPORTS: ASSETS --------------------


//#region -------------------- GSAP: REGISTER PLUGINS --------------------

// gsap.registerPlugin(PixiPlugin);
// PixiPlugin.registerPIXI(PIXI);

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
    const animDuration05 = 5.00;
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

    // function randRange(min, max) {
    //     let thisIndex = min + Math.round(Math.random() * (max - min));
    //     //	console.log('thisIndex = ' + thisIndex);

    //     return thisIndex;
    // }

    //#endregion -------------------- FUNCTION: randRange(min:Number, max:Number) - integers --------------------


    //#region -------------------- FUNCTION: randRange2(min:Number, max:Number) - real numbers --------------------

    // function randRange2(min, max) {
    //     let thisIndex = min + Math.random() * (max - min);
    //     //	console.log('thisIndex = ' + thisIndex);

    //     return thisIndex;
    // }

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

    // // const particleAnim = useCallback((thisParticle) => {
    // const particleAnim = useCallback((thisContainer) => {

    //     console.log('');
    //     console.log('------------------------- particleAnim(thisParticle) triggered! -------------------------');

    //     // console.log('thisParticle.id = ' + thisParticle.id);
    //     // console.log('thisParticle.width = ' + thisParticle.width);

    //     // gsap.to([thisParticle], animDuration00_5, { autoAlpha: 1, repeat: 1, yoyo: true, ease: 'sine.inOut', delay: randRange2(0, 1.5) });
    //     // gsap.to([thisParticle], animDuration00_5, { autoAlpha: 1, repeat: 1, yoyo: true, ease: 'sine.inOut', delay: randRange2(0, 1.5), onComplete: removeParticle, onCompleteParams: [thisParticle] });

    //     // TweenLite.to(mc_empty.getInstanceAtDepth(n), 1, { _xscale: 100, _yscale: 100, _alpha: 100, delay: .1 + (.0375 * n), ease: Cubic.easeOut });
    //     // gsap.to([thisParticle], animDuration01, { scale: 1, autoAlpha: 1, ease: 'power3.out', delay: randRange2(0, 1.5) });

    //     // gsap.fromTo([thisParticle], { scale: randRange2(0.75, 1), rotation: randRange(-15, 15), autoAlpha: 0 }, { scale: 1, rotation: 0, autoAlpha: 0.75, ease: 'power3.out', duration: animDuration01, delay: randRange2(0.5, 1.5) });


    //     gsap.fromTo([bottle_Ref.current], { scale: 0, autoAlpha: 0 }, { scale: 2, autoAlpha: 1, ease: 'power3.out', duration: animDuration02 });
    //     // gsap.to([bottle_Ref.current], { pixi: {scale: 0.5}, duration: animDuration02 });

    //     // gsap.to(bottle_Ref.current, {
    //     //     duration: 1,
    //     //     pixi: {
    //     //         scale: 0.2,
    //     //         rotation: 60
    //     //     }
    //     // });

    //     console.log('thisContainer.id = ' + thisContainer.id);

    //     const speed = 0.25;
    //     const gravity = -200;

    //     for (let i = 0; i < thisContainer.children.length; i++) {

    //         const animAngle = Math.random() * Math.PI * 2;
    //         console.log('animAngle = ' + animAngle);

    //         // gsap.to(thisContainer.children[i], speed + Math.random(), {
    //         //     alpha: 0,

    //         //     // scaleX: thisScale,
    //         //     // scaleY: thisScale,

    //         //     physics2D: {
    //         //         animAngle: animAngle * 180 / Math.PI, 				//translate radians to degrees
    //         //         // animAngle: animAngle * 90 / Math.PI, 					//translate radians to degrees
    //         //         // velocity: (100 + Math.random() * 250) * speed, 	//initial velocity
    //         //         velocity: (50 + Math.random() * 500) * speed, 	//initial velocity
    //         //         // gravity: 500 * gravity 						//you could increase/decrease this to give gravity more or less pull
    //         //         // velocity: speed,
    //         //         gravity: gravity
    //         //     }

    //         //     //if you'd rather not do physics, you could just animate out directly by using the following 2 lines instead of the physics2D:
    //         //     //x:Math.cos(animAngle) * length * 6, 
    //         //     //y:Math.sin(animAngle) * length * 6

    //         // }, 0);

    //     }
    // }, []);
    // // }, [removeParticle]);

    //#endregion - - - - - - - - - - - FUNCTION: particleAnim(thisParticle) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: positionParticle(thisContainer) - - - - - - - - - - -

    // const positionParticle = useCallback((thisContainer) => {
    // // const positionParticle = useCallback((thisContainer, particleWidth) => {

    //     // console.log('');
    //     // console.log('------------------------- positionParticle(thisContainer) triggered! -------------------------');

    //     // console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);
    //     // console.log('thisContainer.offsetWidth = ' + thisContainer.offsetWidth + '     thisContainer.offsetHeight = ' + thisContainer.offsetHeight);
    //     // console.log('thisContainer.id = ' + thisContainer.id + '     thisContainer.offsetWidth = ' + thisContainer.offsetWidth + '     thisContainer.offsetHeight = ' + thisContainer.offsetHeight + '     numParticle = ' + numParticle);

    //     // console.log('thisContainer.offsetWidth = ' + thisContainer.offsetWidth + '     thisContainer.offsetHeight = ' + thisContainer.offsetHeight + '     particleWidth = ' + particleWidth);


    //     // const displacementFactor = 0.5;

    //     for (let i = 0; i < thisContainer.children.length; i++) {

    //         // console.log('');
    //         // // console.log('thisContainer.children[' + i + '].id = ' + thisContainer.children[i].id);
    //         // // console.log('thisContainer.children[' + i + '].offsetLeft = ' + thisContainer.children[i].offsetLeft);
    //         // // console.log('thisContainer.children[' + i + '].offsetTop = ' + thisContainer.children[i].offsetTop);
    //         // // console.log('thisContainer.children[' + i + '].width = ' + thisContainer.children[i].width);
    //         // console.log('thisContainer.children[' + i + '].id = ' + thisContainer.children[i].id + '     thisContainer.children[' + i + '].x = ' + thisContainer.children[i].x + '     thisContainer.children[' + i + '].y = ' + thisContainer.children[i].y + '     thisContainer.children[' + i + '].width = ' + thisContainer.children[i].width);
    //         // console.log('thisContainer.children[' + i + '].id = ' + thisContainer.children[i].id + '     thisContainer.children[' + i + '].offsetLeft = ' + thisContainer.children[i].offsetLeft + '     thisContainer.children[' + i + '].offsetTop = ' + thisContainer.children[i].offsetTop + '     thisContainer.children[' + i + '].width = ' + thisContainer.children[i].width);


    //         // const thisX = -150;
    //         // const thisY = 125;

    //         const thisX = -(thisContainer.children[i].width * 0.5);
    //         const thisY = thisContainer.offsetHeight * 0.5;

    //         // const thisX = randRange(-thisContainer.offsetWidth * displacementFactor, thisContainer.offsetWidth * displacementFactor);
    //         // const thisY = randRange(-thisContainer.offsetHeight * displacementFactor, thisContainer.offsetHeight * displacementFactor);

    //         // const thisX = randRange(-thisContainer.offsetWidth * 0.75, thisContainer.offsetWidth * 0.5);
    //         // const thisY = randRange(-thisContainer.offsetHeight * 0.25, thisContainer.offsetHeight * 0.875);


    //         // const thisScale = 1;
    //         // const thisScale = 0.125;
    //         const thisScale = randRange(5, 15) / 100;

    //         // console.log('thisScale = ' + thisScale);
    //         // console.log('thisX = ' + thisX + '     thisY = ' + thisY + '     thisScale = ' + thisScale);


    //         // gsap.set([thisContainer.children[i]], { x: thisX, y: thisY });
    //         gsap.set([thisContainer.children[i]], { x: thisX, y: thisY, scale: thisScale });
    //     }

    //     // particleAnim(thisContainer.children[i]);
    //     particleAnim(thisContainer);

    // // }, []);
    // }, [particleAnim]);

    //#endregion - - - - - - - - - - - FUNCTION: positionParticle(thisContainer) - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: addParticle = useCallback(() - - - - - - - - - - -

    // const addParticle = useCallback((thisContainer, numParticle) => {

    //     // console.log('');
    //     // console.log('------------------------- addParticle(thisContainer, numParticle) triggered! -------------------------');

    //     // console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);

    //     for (let i = 0; i < numParticle; i++) {

    //         const thisParticle = new Image();
    //         thisParticle.src = particle;
    //         thisParticle.key = i;
    //         thisParticle.className = 'particle';
    //         thisParticle.id = 'particle_' + i;
    //         thisParticle.alt = 'particle_' + i;

    //         thisContainer.append(thisParticle);

    //         // console.log('thisParticle.width = ' + thisParticle.width);
    //     }


    //     // console.log('thisContainer.lastChild = ' + thisContainer.lastChild);

    //     // let particleWidth = 0;

    //     thisContainer.lastChild.onload = function () {

    //         // particleWidth = thisContainer.lastChild.width;
    //         // console.log('particleWidth = ' + particleWidth);

    //         positionParticle(thisContainer);
    //         // positionParticle(thisContainer, particleWidth);
    //     }

    //     // positionParticle(thisContainer);

    // // }, []);
    // }, [positionParticle]);

    //#endregion - - - - - - - - - - - FUNCTION: addParticle = useCallback(() - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: addRandomParticle = useCallback(() - - - - - - - - - - -

    // const addRandomParticle = useCallback((thisContainer, numParticle) => {

    //     // console.log('');
    //     // console.log('------------------------- addRandomParticle(thisContainer, numParticle) triggered! -------------------------');

    //     // console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);

    //     const particles = [
    //         flower_01,
    //         flower_02,
    //         flower_03,
    //         flower_04,
    //         flower_05
    //     ];

    //     // console.log('particles = ' + particles);

    //     for (let i = 0; i < numParticle; i++) {

    //         let particleIndex = randRange(0, 4);

    //         // console.log('particleIndex = ' + particleIndex);

    //         const thisParticle = new Image();
    //         thisParticle.src = particles[particleIndex];
    //         thisParticle.key = i;
    //         thisParticle.className = 'particle';
    //         thisParticle.id = 'flower' + i;
    //         thisParticle.alt = 'flower' + i;

    //         // console.log('particles[' + particleIndex + '] = ' + particles[particleIndex]);
    //         // console.log('thisParticle = ' + thisParticle.id);

    //         thisContainer.append(thisParticle);
    //     }

    //     positionParticle(thisContainer);

    // }, [positionParticle]);

    //#endregion - - - - - - - - - - - FUNCTION: addRandomParticle = useCallback(() - - - - - - - - - - -


    //#region - - - - - - - - - - - FUNCTION: addPixi = useCallback(() - - - - - - - - - - -

    // const addPixi = useCallback((thisContainer, numParticle) => {

    //     console.log('');
    //     console.log('------------------------- addPixi(thisContainer, numParticle) triggered! -------------------------');

    //     console.log('thisContainer.id = ' + thisContainer.id + '     numParticle = ' + numParticle);

    //     // Setup PIXI app
    //     const app = new Application({
    //         width: 300,
    //         height: 250,
    //         backgroundColor: 0x10bb99,
    //         view: document.getElementById('container'),
    //     })

    //     // Use the custom renderer to render a valid PIXI object into a PIXI container.
    //     render(<Text text="Hello World" x={200} y={200} />, app.stage)

    //     // //DEFINE VARIABLES
    //     // // let vw = window.innerWidth;
    //     // // let vh = window.innerHeight;
    //     // let vw = 300;
    //     // let vh = 250;
    //     // // let count = 0;

    //     // //INITIALIZE PIXI
    //     // const app = new PIXI.Application(vw, vh, {
    //     //     autoResize: true,
    //     //     resolution: devicePixelRatio || 1,
    //     //     antialias: true, 
    //     //     transparent: true
    //     // });

    //     // thisContainer.appendChild(app.view);


    //     // thisContainer.lastChild.onload = function () {

    //     //     for (let i = 0; i < numParticle; i++) {

    //     //         const thisParticle = new Image();
    //     //         thisParticle.src = particle;
    //     //         thisParticle.key = i;
    //     //         thisParticle.className = 'particle';
    //     //         thisParticle.id = 'particle_' + i;
    //     //         thisParticle.alt = 'particle_' + i;

    //     //         // app.append(thisParticle);
    //     //         app.stage.addChild(thisParticle);

    //     //         console.log('thisParticle.width = ' + thisParticle.width);
    //     //     }
    //     // }

    // }, []);

    //#endregion - - - - - - - - - - - FUNCTION: addPixi = useCallback(() - - - - - - - - - - -

    //#endregion -------------------- FUNCTION: PARTICLES - addParticle(thisContainer), positionParticle(thisContainer), particleAnim(thisParticle) --------------------


    //#region -------------------- FUNCTION: handleClick() - GSAP timeline control --------------------

    function handleClick() {
    // const handleClick = useCallback(() => {

        // console.log('');
        // console.log('------------------------- handleClick() -------------------------');

        removeAllChildNodes(particleContainer_Ref.current);

        tl.pause(0);
        tl.restart();
    }
    // }, [tl]);

    //#endregion -------------------- FUNCTION: handleClick() - GSAP timeline control --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== useEffect / useLayoutEffect ====================

    // const numParticle = 40;

    const tl = gsap.timeline({ delay: 0 });


    // useEffect(() => {
    useLayoutEffect(() => {

        // addParticle(particleContainer_Ref.current, numParticle);
        // addRandomParticle(particleContainer_Ref.current, numParticle);
        // addPixi(particleContainer_Ref.current, numParticle);

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            //#region -------------------- autoAlpha --------------------

            // .set([bg_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([bg_ko_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([skyline_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([model_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([model_mask_Ref.current], { autoAlpha: 0 }, 'frame00')

            .set([bottle_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([logo_NMPF_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([logo_NM_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([logo_PF_Ref.current], { autoAlpha: 0 }, 'frame00')

            .set([tag_Ref.current], { autoAlpha: 0 }, 'frame00')

            .set([cta_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([starspin_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([starspin_mask_01_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([starspin_mask_02_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([clickTag_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([particleContainer_Ref.current], { autoAlpha: 0 }, 'frame00')

            //#endregion -------------------- autoAlpha --------------------


            //#region -------------------- SET TRANSFORMS --------------------

            //#region -------------------- SET TRANSFORM ORIGiNS --------------------

            // .set([bottle_Ref.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            .set([model_mask_Ref.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')
            // .set([starspin_Ref.current.children], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')
            .set([starspin01_Ref.current, starspin02_Ref.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')
            // .set([bg_Ref.current], { transformOrigin: '50% 25%', immediateRender: true }, 'frame00')

            //#endregion -------------------- SET TRANSFORM ORIGiNS --------------------


            //#region -------------------- FRAME01 --------------------

            .set([starspin01_Ref.current, starspin02_Ref.current], { autoAlpha: 0.25 }, 'frame00')

            // .set([model_mask_Ref.current], { scale: 5 }, 'frame00')
            // .set([copy01_Ref.current], { x: -73.75, y: 85.5, scale: 0.529411764705882 }, 'frame00')
            // .set([LOGO_VLJref.current], { x: -72.5, y: 230, scale: 0.558823529411765 }, 'frame00')
            // .set([copy01_Ref.current, LOGO_VLJref.current], { x: 0, y: 0, scale: 1 }, 'frame00')

            //#endregion -------------------- FRAME01 --------------------

            //#endregion -------------------- SET TRANSFORMS --------------------

            //#endregion ==================== INITIALIZE OBJECTS ====================



            //#region ==================== FRAME 01 ====================

            // .call(addRandomParticle, [particleContainer_Ref.current, numParticle], 'frame01 +=0')

            .fromTo([starspin_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration01_5 }, 'frame01 +=0')

            // .staggerTo(starspin_Ref.current.children, animDuration03, { cycle: { rotation: ['20', '-20'] }, ease: 'none', delay: 0.5 }, 'frame01 +=0')
            // .to([starspin_Ref.current.children], { duration: animDuration03, rotation: [20, -20], ease: 'none', stagger: 0.5 }, 'frame01 +=0')

            .fromTo([starspin01_Ref.current], { rotation: -20 }, { rotation: 0, ease: 'none', duration: animDuration05 }, 'frame01 +=0')
            .fromTo([starspin02_Ref.current], { rotation: 20 }, { rotation: 0, ease: 'none', duration: animDuration05 }, 'frame01 +=0')

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
        console.log('');
        console.log('tl timing = ' + tl.duration() + ' secs');

    // }, []);
    }, [tl]);
    // }, [tl, addParticle]);
    // }, [tl, addRandomParticle]);
    // }, [tl, addRandomParticle, nextPos]);
    // }, [tl, addPixi]);

    //#endregion ==================== useEffect / useLayoutEffect ====================


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
