//#region ==================== IMPORTS ====================

import React from 'react';
// import { useRef, useEffect } from 'react';
import { useRef } from 'react';
// import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

import { gsap } from 'gsap';
// import { CSSPlugin } from 'gsap/CSSPlugin';

import '../banners.scss';
import './NMTG_26903.scss';


//#region -------------------- IMPORTS: ASSETS --------------------

import LOGO_NMTG_sp from './images/LOGO_NMTG_sp.svg';

import bg01 from './images/bg01.jpg';
import bg02 from './images/bg02.jpg';

// import model from './images/BSPS_image.jpg';

import bottle from './images/bottle.png';
import gwp from './images/gwp.png';

import copy01 from './images/copy01.png';
import legal from './images/legal.png'

import cta from './images/cta_sp.svg';
import vendorLogo from './images/logo_walgreens.svg'

//#endregion -------------------- IMPORTS: ASSETS --------------------


//#region -------------------- GSAP: REGISTER PLUGINS --------------------

// gsap.registerPlugin(CSSPlugin);

//#endregion -------------------- GSAP: REGISTER PLUGINS --------------------

//#endregion ==================== IMPORTS ====================


export default function NMTG_26903() {

    //#region ==================== ANIMATION DURATIONs ====================

    // const staggerDuration = 0.75;
    // const staggerDelay = 0.0625;

    // const animDuration00 = 0.125;
    const animDuration00_5 = 0.50;
    const animDuration01 = 1.00;
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

    //#endregion ==================== ANIMATION DURATIONs ====================


    //#region ==================== ASSETS Ref ====================

    const logo_NMTG_spRef = useRef(null);

    const logo_NMTG_sp_baseRef = useRef(null);

    const logo_NMTG_sp_dsRef = useRef(null);
    const logo_NMTG_sp_dsRef01 = useRef(null);
    const logo_NMTG_sp_dsRef02 = useRef(null);

    const logo_bgRef = useRef(null);

    const bg01Ref = useRef(null);
    const bg02Ref = useRef(null);
    const bg02Ref01 = useRef(null);
    const bg02Ref02 = useRef(null);

    const bg02_mask01Ref = useRef(null);
    const bg02_mask02Ref = useRef(null);

    // const modelRef = useRef(null);

    const bottleRef = useRef(null);
    const gwpRef = useRef(null);

    const copy01Ref = useRef(null);
    const legalRef = useRef(null);

    const ctaRef = useRef(null);
    const vendorLogoRef = useRef(null);

    const clickTagRef = useRef(null);

    //#endregion ==================== ASSETS Ref ====================


    //#region ==================== FUNCTIONS ====================

    //#region -------------------- FUNCTION: handleClick() --------------------

    function handleClick() {

        // console.log('');
        // console.log('------------------------- handleClick() -------------------------');

        tl.pause(0);
        tl.restart();
    }

    //#endregion -------------------- FUNCTION: handleClick() --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== useEffect / useLayoutEffect ====================

    const tl = gsap.timeline({ delay: 0 });

    // useEffect(() => {
    useLayoutEffect(() => {

        // const tl = gsap.timeline({ delay: 0 });

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            //#region -------------------- autoAlpha --------------------

            // .set([logo_NMTG_spRef.current], { autoAlpha: 0 }, 'frame00')

            // .set([logo_NMTG_sp_baseRef.current], { autoAlpha: 0 }, 'frame00')

            // .set([logo_NMTG_sp_dsRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([logo_NMTG_sp_dsRef01.current], { autoAlpha: 0 }, 'frame00')
            // .set([logo_NMTG_sp_dsRef02.current], { autoAlpha: 0 }, 'frame00')

            .set([logo_bgRef.current], { autoAlpha: 0 }, 'frame00')

            // .set([bg01Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([bg02Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([bg02Ref01.current], { autoAlpha: 0 }, 'frame00')
            // .set([bg02Ref02.current], { autoAlpha: 0 }, 'frame00')

            // .set([bg02_mask01Ref.current], { autoAlpha: 0 }, 'frame00')
            // .set([bg02_mask02Ref.current], { autoAlpha: 0 }, 'frame00')

            // // .set([modelRef.current], { autoAlpha: 0 }, 'frame00')

            .set([bottleRef.current], { autoAlpha: 0 }, 'frame00')
            .set([gwpRef.current], { autoAlpha: 0 }, 'frame00')

            .set([copy01Ref.current], { autoAlpha: 0 }, 'frame00')
            .set([legalRef.current], { autoAlpha: 0 }, 'frame00')

            .set([ctaRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([vendorLogoRef.current], { autoAlpha: 0 }, 'frame00')

            //#endregion -------------------- autoAlpha --------------------


            //#region -------------------- SET TRANSFORMS --------------------

            //#region -------------------- SET TRANSFORM ORIGiNS --------------------

            .set([logo_NMTG_spRef.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')
            .set([bottleRef.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            // .set([logo_NMTG_spRef.current, bg02_mask01Ref.current, bg02_mask02Ref.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')

            //#endregion -------------------- SET TRANSFORM ORIGiNS --------------------

            // -------------------- FRAME01 --------------------

            // .set([logo_bgRef.current], { y: 15 }, 'frame00')

            // .set([logo_NMTG_spRef.current], { y: 95 }, 'frame00')
            // // .set([logo_NMTG_spRef.current], { x: 38, y: 95 }, 'frame00')

            // -------------------- FRAME02 --------------------

            // .set([logo_NMTG_spRef.current], { y: -80, scale: 0.7875 }, 'frame00')

            // .set([bottleRef.current], { x: 105, y: 13 }, 'frame01')
            // .set([bottleRef.current], { x: 105, y: 12 }, 'frame01')

            // -------------------- FRAME03 --------------------

            // .set([gwpRef.current], { x: -60, y: -12 }, 'frame00')
            // .set([copy01Ref.current], { x: 62.25, y: -25, scale: 0.5 }, 'frame00')
            // .set([legalRef.current], { x: 78, y: 6, scale: 0.5 }, 'frame01')

            // .set([gwpRef.current], { x: 5, y: -13 }, 'frame00')
            // .set([copy01Ref.current], { x: 62.5, y: -25.5, scale: 0.5 }, 'frame00')
            // .set([legalRef.current], { x: 95, y: 5, scale: 0.5 }, 'frame01')

            //#endregion -------------------- SET TRANSFORMS --------------------

            //#endregion ==================== INITIALIZE OBJECTS ====================



            //#region ==================== FRAME 01 ====================

            .fromTo([bg02Ref01.current], { y: 250 }, { y: -250, ease: 'power3.in', duration: animDuration02 }, 'frame01 +=0')
            .fromTo([bg02_mask01Ref.current], { y: -250 }, { y: 250, ease: 'power3.in', duration: animDuration02 }, 'frame01 +=0')

            .fromTo([bg02Ref02.current], { y: -250 }, { y: 250, ease: 'power3.in', duration: animDuration01_5 }, 'frame01 +=0.25')
            .fromTo([bg02_mask02Ref.current], { y: 250 }, { y: -250, ease: 'power3.in', duration: animDuration01_5 }, 'frame01 +=0.25')

            .fromTo([logo_NMTG_spRef.current], { scale: 0.5, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'back.inOut(1)', duration: animDuration01_5 }, 'frame01 +=0.5')

            //#endregion ==================== FRAME 01 ====================


            //#region ==================== FRAME 02 ====================

            .to([logo_NMTG_spRef.current], { y: -80, scale: 0.777777777777778, ease: 'power3.out', duration: animDuration01 }, 'frame02 +=1')
            .fromTo([bottleRef.current], { y: 20, scale: 1.5, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, ease: 'power3.out', duration: animDuration01 }, 'frame02 +=1')

            //#endregion ==================== FRAME 02 ====================


            //#region ==================== FRAME 03 ====================

            .to([logo_NMTG_sp_dsRef01.current, logo_NMTG_sp_dsRef02.current], { autoAlpha: 0, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=1')
            .fromTo([logo_bgRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=1')

            .to([bottleRef.current], { scale: 0.75, autoAlpha: 0, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=1')


            .fromTo([gwpRef.current], { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=1')
            .to([bg01Ref.current], { y: -85, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=1')

            .fromTo([copy01Ref.current], { x: -20, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=1.25')
            .fromTo([legalRef.current], { x: -20, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: 'power3.out', duration: animDuration01 }, 'frame03 +=1.25')

            .fromTo([ctaRef.current], { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: 'power3.out', duration: animDuration00_5 }, 'frame03 +=1.75')

            // #endregion ==================== FRAME 03 ====================
        ;

        //tl.duration(1.5);
        console.log('tl timing = ' + tl.duration() + ' secs');

    }, [tl]);

    //#endregion ==================== useEffect / useLayoutEffect ====================


    return (
        <div className='banner300x250 nmtg_26903'>
            {/* <h1>BSPS_26897 300x250 Component</h1> */}

            <div className='bgDiv' ref={bg01Ref}><img src={bg01} alt='bg01' /></div>


        {/* #region -------------------- SVG: bg02 (masks) -------------------- */}

            <svg className='bg02_svg' id='bg02_svgID' version='1.1' baseProfile='full' width='300' height='250' space='preserve' ref={bg02Ref}>

                <defs>

                    {/* <linearGradient id='maskGrad_NMTG_26903' gradientUnits='userSpaceOnUse' x1='0' y1='250' x2='300' y2='250' gradientTransform='rotate(90)'> */}
                    <linearGradient id='maskGrad_NMTG_26903' gradientUnits='userSpaceOnUse' x1='300' y1='0' x2='300' y2='250'>
                        <stop offset='.125' style={{stopColor: '#000000'}} />
                        <stop offset='0.4875' style={{stopColor: '#FFFFFF'}} />
                        <stop offset='0.5625' style={{stopColor: '#FFFFFF'}} />
                        <stop offset='0.875' style={{stopColor: '#000000'}} />
                    </linearGradient>

                    <mask id='mask_bg'>
                        <rect className='class_mask' fill='url(#maskGrad_NMTG_26903)' x='0' y='0' width='300' height='250' />
                    </mask>

                </defs>

                <g mask='url(#mask_bg)' ref={bg02_mask01Ref}>
                    <image href={bg02} width='300' height='250' ref={bg02Ref01} />
                </g>

                <g mask='url(#mask_bg)' ref={bg02_mask02Ref}>
                    <image href={bg02} width='300' height='250' ref={bg02Ref02} />
                </g>
            </svg>

        {/* #endregion -------------------- SVG: bg02 (masks) -------------------- */}


            <div className='logo_bg' ref={logo_bgRef} />


        {/* #region -------------------- SVG: logo_NMTG_sp (nmtg_dropshadows) -------------------- */}

            {/* <svg className='logo_NMTG_sp' id='logo_NMTG_spID' version='1.1' baseProfile='full' width='225' height='78.75' space='preserve' overflow='visible' ref={logo_NMTG_spRef}> */}
            <svg className='logo_NMTG_sp' id='logo_NMTG_spID' version='1.1' baseProfile='full' width='425' height='278.75' space='preserve' overflow='visible' ref={logo_NMTG_spRef}>

                <defs>

                    <filter id='nmtg_dropshadow01' x='-75%' y='-100%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'>

                        {/* RGB (255, 255, 0) */}
                        <feColorMatrix
                            in='SourceGraphic'
                            in2='dsYellow'
                            type='matrix'
                            values='1 0 0 0 1
                                    0 1 0 0 1
                                    0 0 1 0 0.5
                                    0 0 0 1 0'
                            result='CMyellow' />

                        <feGaussianBlur in='CMyellow' stdDeviation='40' result='dsYellow' />

                        <feDropShadow dx='0' dy='0' floodColor='#fff2d3' floodOpacity='1' stdDeviation='30' result='dsDropShadow01' />

                        <feOffset dx='0' dy='0' result='blurOffset01'/>

                        {/* <feBlend in='SourceGraphic' in2='dsYellow' mode='darken' /> */}

                        <feComponentTransfer>
                            <feFuncA type='linear' slope='5' intercept='0'/>
                        </feComponentTransfer>

                    </filter>

                    <filter id='nmtg_dropshadow02' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'>

                        <feColorMatrix
                            in='SourceGraphic'
                            in2='dsWhite'
                            type='matrix'
                            values='1 0 0 0 1
                                    0 1 0 0 1
                                    0 0 1 0 1
                                    0 0 0 1 0'
                            result='CMwhite' />

                        <feGaussianBlur in='CMwhite' stdDeviation='10' result='dsWhite' />

                        {/* <feDropShadow dx='0' dy='0' floodColor='#ffffff' floodOpacity='1' stdDeviation='5' result='dsDropShadow02' /> */}

                        <feOffset dx='0' dy='0' result='blurOffset02' />

                        {/* <feBlend in='SourceGraphic' in2='dsWhite' mode='darken' /> */}

                        <feComponentTransfer>
                            <feFuncA type='linear' slope='2' intercept='0' />
                        </feComponentTransfer>

                    </filter>

                </defs>

                <g className='logo_NMTG_sp_ds' id='logo_NMTG_sp_ds01ID' ref={logo_NMTG_sp_dsRef}>
                    {/* <image href={LOGO_NMTG_sp} width='225' height='78.75' ref={logo_NMTG_sp_dsRef01} /> */}
                    {/* <image href={LOGO_NMTG_sp} width='225' height='78.75' ref={logo_NMTG_sp_dsRef02} /> */}

                    {/* <image href={LOGO_NMTG_sp} width='225' height='78.75' filter='url(#nmtg_dropshadow01)' ref={logo_NMTG_sp_dsRef01} />
                    <image href={LOGO_NMTG_sp} width='225' height='78.75' filter='url(#nmtg_dropshadow02)' ref={logo_NMTG_sp_dsRef02} />
                    <image href={LOGO_NMTG_sp} width='225' height='78.75' ref={logo_NMTG_sp_baseRef} /> */}

                    <image href={LOGO_NMTG_sp} x='100' y='100' width='225' height='78.75' filter='url(#nmtg_dropshadow01)' ref={logo_NMTG_sp_dsRef01} />
                    <image href={LOGO_NMTG_sp} x='100' y='100' width='225' height='78.75' filter='url(#nmtg_dropshadow02)' ref={logo_NMTG_sp_dsRef02} />
                    <image href={LOGO_NMTG_sp} x='100' y='100' width='225' height='78.75' ref={logo_NMTG_sp_baseRef} />
                </g>

            </svg>

        {/* #endregion -------------------- SVG: logo_NMTG_sp (nmtg_dropshadows) -------------------- */}


            <div className='copy01' ref={copy01Ref}><img src={copy01} alt='copy01' /></div>
            <div className='legal' ref={legalRef}><img src={legal} alt='legal' /></div>

            <div className='bottleDiv' ref={bottleRef}><img src={bottle} alt='bottle' /></div>
            <div className='gwpDiv' ref={gwpRef}><img src={gwp} alt='gwp' /></div>

            <div className='cta' ref={ctaRef}><img src={cta} alt='cta' /></div>
            <div className='vendorTag' ref={vendorLogoRef}><img src={vendorLogo} alt='vendorLogo_Walgreens' /></div>

            {/* <div className='clickTag' id='clickTagID' ref={clickTagRef} onClick={() => handleClick()}></div> */}
            <div className='clickTag' id='clickTagID' ref={clickTagRef} onClick={handleClick}></div>

        </div>
    );
}
