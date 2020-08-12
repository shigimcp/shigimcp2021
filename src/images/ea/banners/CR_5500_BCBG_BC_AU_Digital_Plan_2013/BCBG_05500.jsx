//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
// import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
// import { useCallback } from 'react';

import { gsap } from 'gsap';

import '../banners.scss';
import './BCBG_05500.scss';
// import './fonts/fonts.css';


//#region -------------------- IMPORTS: ASSETS --------------------

import bg from './images/bg.jpg';

import model_ctr from './images/model_ctr.jpg';
import model_lf from './images/model_lf.jpg';
import model_rt from './images/model_rt.jpg';

import bottle from './images/bottle.png';

import logo_BCBG_BC from './images/logo_BCBG_BC.png';

import cta from './images/cta.png';

//#endregion -------------------- IMPORTS: ASSETS --------------------


//#region -------------------- GSAP: REGISTER PLUGINS --------------------

// gsap.registerPlugin(PixiPlugin);
// PixiPlugin.registerPIXI(PIXI);

//#endregion -------------------- GSAP: REGISTER PLUGINS --------------------


//#endregion ==================== IMPORTS ====================


export default function BCBG_02342() {

    //#region ==================== ASSETS _Ref ====================

    const bg_Ref = useRef(null);

    const model_Ref = useRef(null);
    const model_ctr_Ref = useRef(null);
    const model_lf_Ref = useRef(null);
    const model_rt_Ref = useRef(null);

    const filter_Ref = useRef(null);
    const turbulence_Ref = useRef(null);

    const bottle_Ref = useRef(null);

    const logo_BCBG_BC_Ref = useRef(null);

    const maskSVG_Ref = useRef(null);
    const mask_Ref = useRef(null);
    const mask01_Ref = useRef(null);
    const mask02_Ref = useRef(null);

    const cta_Ref = useRef(null);

    // const particleContainer_Ref = useRef(null);
    const clickTag_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================


    //#region ==================== ANIMATION DURATIONs ====================

    // const staggerDuration = 0.125;
    // const staggerDelay = 0.0375;

    const waveDuration = 10;

    // const animDuration00 = 0.125;
    // const animDuration00_5 = 0.50;
    // const animDuration01 = 1.00;
    // const animDuration01_25 = 1.25;
    // const animDuration01_5 = 1.50;
    const animDuration02 = 2.00;
    // const animDuration02_5 = 2.50;
    // const animDuration03 = 3.00;
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

    // // const removeAllChildNodes = useCallback((parent) => {
    // function removeAllChildNodes(parent) {

    //     // console.log('');
    //     // console.log('------------------------- removeAllChildNodes(parent) triggered! -------------------------');

    //     // console.log('parent = ' + parent);
    //     // console.log('parent.id = ' + parent.id);

    //     while (parent.firstChild) {
    //         parent.removeChild(parent.firstChild);
    //     }
    // }
    // // }, []);

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

        // removeAllChildNodes(particleContainer_Ref.current);

        tl.pause(0);
        tl.restart();
    }
    // }, [tl]);

    //#endregion -------------------- FUNCTION: handleClick() - GSAP timeline control --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== useEffect / useLayoutEffect ====================

    // const numParticle = 40;

    const tl = gsap.timeline({ delay: 0 });
    // const tl = gsap.timeline({ delay: 0, paused: true });
    // const tl = gsap.timeline({ delay: 0, repeat: 2 });


    // useEffect(() => {
    useLayoutEffect(() => {

        // addParticle(particleContainer_Ref.current, numParticle);
        // addRandomParticle(particleContainer_Ref.current, numParticle);
        // addPixi(particleContainer_Ref.current, numParticle);

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            //#region -------------------- autoAlpha --------------------

            // .set([bg_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([model_ctr_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([model_lf_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([model_rt_Ref.current], { autoAlpha: 0 }, 'frame00')

            .set([bottle_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([logo_BCBG_BC_Ref.current], { autoAlpha: 0 }, 'frame00')
            .set([mask01_Ref.current, mask02_Ref.current], { x: -500 }, 'frame00')

            .set([cta_Ref.current], { autoAlpha: 0 }, 'frame00')

            // .set([particleContainer_Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([clickTag_Ref.current], { autoAlpha: 0 }, 'frame00')

            //#endregion -------------------- autoAlpha --------------------


            //#region -------------------- SET TRANSFORMS --------------------

            //#region - - - - - - - - - - - SET TRANSFORM ORIGiNS - - - - - - - - - - -

            // .set([model_Ref.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            .set([bg_Ref.current, model_Ref.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')

            //#endregion - - - - - - - - - - - SET TRANSFORM ORIGiNS - - - - - - - - - - -


            //#region - - - - - - - - - - - FRAME01 - - - - - - - - - - -

            // .set([bg_Ref.current], { x: -11.25, y: -17.5, scale: 2.3125 }, 'frame00')

            //#endregion - - - - - - - - - - - FRAME01 - - - - - - - - - - -

            //#endregion -------------------- SET TRANSFORMS --------------------

            //#endregion ==================== INITIALIZE OBJECTS ====================



            //#region ==================== FRAME 01 ====================

            // .call(addRandomParticle, [particleContainer_Ref.current, numParticle], 'frame01 +=0')

            // .fromTo([model_Ref.current], { x: -11.25, y: -17.5, scale: 2.3125, autoAlpha: 0 }, { x: 0, y: 0, scale: 1, autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=0')
            .fromTo([bg_Ref.current, model_Ref.current], { x: -11.25, y: -17.5, scale: 2.3125, autoAlpha: 0 }, { x: 0, y: 0, scale: 1, autoAlpha: 1, ease: 'power3.out', duration: animDuration05 }, 'frame01 +=0')

            .to([turbulence_Ref.current], { attr: { baseFrequency: '0.008 0.002' }, yoyo: true, repeat: 2, ease: 'none', duration: waveDuration }, 'frame01 +=0')

            .fromTo([mask01_Ref.current], { x: -500 }, { x: 0, ease: 'power3.out', duration: animDuration05 }, 'frame01 +=0')
            .fromTo([mask02_Ref.current], { x: -500 }, { x: 0, ease: 'power3.out', duration: animDuration05 }, 'frame01 +=2')
            .fromTo([bottle_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=4')
            .fromTo([cta_Ref.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=4.25')

            //#endregion ==================== FRAME 01 ====================
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
        <div className='banner300x250 bcbg_05500' id='bcbg_05500ID'>
            {/* <h1>BCBG_02342 300x250 Component</h1> */}
  
        {/* #region -------------------- SVG: Turbulence Filter - REF: https://redstapler.co/realistic-water-effect-svg-turbulence-filter/  &  https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/ -------------------- */}
            {/* -------------------- REF: https://redstapler.co/realistic-water-effect-svg-turbulence-filter/ -------------------- */}
            {/* -------------------- REF: https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/ -------------------- */}
            {/* -------------------- REF: https://www.youtube.com/watch?v=XYdDiZa_O3k -------------------- */}

            {/* <svg className='modelDiv' id='modelDivID' version='1.1' baseProfile='full' x='0' y='0' width='300' height='250' space='preserve' ref={model_Ref}> */}
            <svg className='modelDiv' id='filterID' version='1.1' baseProfile='full' x='0' y='0' width='300' height='250' space='preserve' ref={filter_Ref}>

                <filter id='turbulenceFilterID' x='0' y='0' width='100%' height='100%'>
                    <feTurbulence id='turbulenceID' type='fractalNoise' numOctaves='1' seed='2' baseFrequency='0.002 0.008' result='turbulenceResult' ref={turbulence_Ref}></feTurbulence>
                    <feDisplacementMap in='SourceGraphic' in2='turbulenceResult' scale='60'></feDisplacementMap>
                </filter>

                {/* <animate href='#turbulenceID' attributeName='baseFrequency' dur='10s' keyTimes='0; 0.5; 1' values='0.002 0.006; 0.004 0.008; 0.002 0.006' repeatCount='indefinite' /> */}
                {/* <animate href='#turbulenceID' attributeName='baseFrequency' dur='10s' keyTimes='0; 1; 2' values='0.002 0.006; 0.004 0.008; 0.002 0.006' repeatCount='indefinite' /> */}

            </svg>

        {/* #endregion -------------------- SVG: Turbulence Filter - REF: https://redstapler.co/realistic-water-effect-svg-turbulence-filter/  &  https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/ -------------------- */}


            <img src={bg} className='bg' id='bgID' alt='bg' ref={bg_Ref} />

            <div className='modelDiv' id='modelDivID' ref={model_Ref}>
                <img src={model_lf} className='model_lf' id='model_lfID' alt='model_lf' ref={model_lf_Ref} />
                <img src={model_rt} className='model_rt' id='model_rtID' alt='model_rt' ref={model_rt_Ref} />
                <img src={model_ctr} className='model_ctr' id='model_ctrID' alt='model_ctr' ref={model_ctr_Ref} />
            </div>

            {/* <div className='particleContainer' id='particleContainerID' ref={particleContainer_Ref}></div> */}

            <img src={bottle} className='bottle' id='bottleID' alt='bottle' ref={bottle_Ref} />


        {/* #region -------------------- SVG: mask(s) -------------------- */}

            <svg className='mask' id='maskID' version='1.1' baseProfile='full' x='0' y='0' width='300' height='250' space='preserve' ref={maskSVG_Ref}>

                <defs>

                    {/* <linearGradient id='gradientID' gradientUnits='userSpaceOnUse' x1='0' y1='250' x2='300' y2='250' gradientTransform='rotate(90)'> */}
                    <linearGradient id='gradientID' spreadMethod='pad' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='600' y2='0'>

                        <stop offset='0.5' style={{ stopColor: '#ffffff' }} />
                        <stop offset='0.75' style={{ stopColor: '#000000' }} />

                    </linearGradient>

                    <mask id='maskID' ref={mask_Ref}>
                        <rect className='maskClass' id='mask01ID' fill='url(#gradientID)' x='0' y='180' width='600' height='20' ref={mask01_Ref} />
                        <rect className='maskClass' id='mask02ID' fill='url(#gradientID)' x='0' y='200' width='600' height='20' ref={mask02_Ref} />
                    </mask>

                </defs>
            {/* 
                <g ref={mask_Ref}>
                    <rect className='maskClass' id='mask01ID' fill='url(#gradientID)' x='0' y='170' width='600' height='20' ref={mask01_Ref} />
                    <rect className='maskClass' id='mask02ID' fill='url(#gradientID)' x='0' y='190' width='600' height='30' ref={mask02_Ref} />
                </g>
            */}
                <g mask='url(#maskID)' ref={mask_Ref}>
                    <image href={logo_BCBG_BC} x='15' y='180' width='270' height='38' ref={logo_BCBG_BC_Ref} />
                </g>

            </svg>

        {/* #endregion -------------------- SVG: mask(s) -------------------- */}


            {/* <img src={logo_BCBG_BC} className='logo' id='logoID' alt='logo' ref={logo_BCBG_BC_Ref} /> */}
 
            {/* <img src={tag} className='tag' id='tagID' alt='bottle' ref={tag_Ref} /> */}

            <img src={cta} className='cta' id='ctaID' alt='cta' ref={cta_Ref} />

            {/* <div className='clickTag' id='clickTagID' ref={clickTag_Ref} onClick={() => handleClick()}></div> */}
            <div className='clickTag' id='clickTagID' ref={clickTag_Ref} onClick={handleClick}></div>

        </div>
    );
}
