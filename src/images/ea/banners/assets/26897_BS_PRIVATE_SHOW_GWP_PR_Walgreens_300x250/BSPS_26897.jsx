//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

import '../banners.scss';
import './BSPS_26897.scss';


//#region -------------------- IMPORTS: ASSETS --------------------

import bg from './images/BSPS_bg01.jpg';
import model from './images/BSPS_image.jpg';
import bottle from './images/BSPS_bottle.png';
import vendorLogo from './images/logo_walgreens.svg'

import LOGO_BSPS_private from './images/LOGO_BSPS_private.svg';
import LOGO_BSPS_show from './images/LOGO_BSPS_show.svg';
import LOGO_BSPS_britney from './images/LOGO_BSPS_britney.svg';
import LOGO_BSPS_spears from './images/LOGO_BSPS_spears.svg';
import LOGO_BSPS_nueva from './images/LOGO_BSPS_nueva.svg';

import LOGO_BSPS_private_ko from './images/LOGO_BSPS_private_ko.svg';
import LOGO_BSPS_show_ko from './images/LOGO_BSPS_show_ko.svg';
import LOGO_BSPS_britney_ko from './images/LOGO_BSPS_britney_ko.svg';
import LOGO_BSPS_spears_ko from './images/LOGO_BSPS_spears_ko.svg';
import LOGO_BSPS_nueva_ko from './images/LOGO_BSPS_nueva_ko.svg';

//#endregion -------------------- IMPORTS: ASSETS --------------------


//#region -------------------- GSAP: REGISTER PLUGINS --------------------

gsap.registerPlugin(CSSPlugin);

//#endregion -------------------- GSAP: REGISTER PLUGINS --------------------

//#endregion ==================== IMPORTS ====================


export default function BSPS_26897() {

    //#region ==================== ANIMATION DURATIONs ====================

    // var staggerDuration = 0.75;
    // var staggerDelay = 0.0625;

    // var animDuration00 = 0.125;
    // var animDuration01 = 0.5;
    var animDuration02 = 1;
    var animDuration03 = 1.5;
    var animDuration04 = 2;
    var animDuration05 = 2.5;
    var animDuration06 = 3;
    // var animDuration07 = 3.5;
    // var animDuration08 = 4;
    // var animDuration09 = 4.5;
    var animDuration10 = 5;

    //#endregion ==================== ANIMATION DURATIONs ====================


    //#region ==================== ASSETS Ref ====================

    const bgRef = useRef(null);
    const modelRef = useRef(null);
    const bottleRef = useRef(null);
    const vendorLogoRef = useRef(null);

    const logoBSPSref = useRef(null);

    const logoBSPS_baseref = useRef(null);
    const logoBSPS_privateRef = useRef(null);
    const logoBSPS_showRef = useRef(null);
    const logoBSPS_britneyRef = useRef(null);
    const logoBSPS_spearsRef = useRef(null);
    const logoBSPS_nuevaRef = useRef(null);

    const logoBSPS_dsRef = useRef(null);
    const logoBSPS_private_koRef = useRef(null);
    const logoBSPS_show_koRef = useRef(null);
    const logoBSPS_britney_koRef = useRef(null);
    const logoBSPS_spears_koRef = useRef(null);
    const logoBSPS_nueva_koRef = useRef(null);

    //#endregion ==================== ASSETS Ref ====================


    useEffect(() => {

        // const tl = gsap.timeline({ delay: 0, paused: 'true' });
        const tl = gsap.timeline({ delay: 0 });

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            // -------------------- SET TRANSFORM ORIGiNS --------------------

            .set([logoBSPSref.current, logoBSPS_baseref.current, bottleRef.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            .set([logoBSPS_dsRef.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')
            .set([logoBSPS_privateRef.current, logoBSPS_showRef.current, logoBSPS_britneyRef.current, logoBSPS_spearsRef.current, logoBSPS_nuevaRef.current], { transformOrigin: '50% 50%', immediateRender: true }, 'frame00')

            // -------------------- FRAME01 --------------------

            // .set([bgRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([modelRef.current], { x: -194, y: 6, scale: 1.05882352941176 }, 'frame00')
            .set([logoBSPSref.current], { x: 35, y: 85 }, 'frame00')

            // -------------------- FRAME02 --------------------

            // // .set([logoBSPS_dsRef.current], { autoAlpha: 0 }, 'frame00')
            // .set([logoBSPSref.current], { x: 35, y: 20, scale: 0.7875 }, 'frame00')
            // .set([bottleRef.current], { x: 70, y: -17.5 }, 'frame01')

            // -------------------- FRAME03 --------------------

            // .set([logoBSPSref.current], { x: 95, y: 35, scale: 0.7 }, 'frame00')
            // .set([bottleRef.current], { x: 126, y: -7, scale: 0.95 }, 'frame01')
            // .set([modelRef.current], { x: 0, y: 0, scale: 1}, 'frame00')

            //#endregion ==================== INITIALIZE OBJECTS ====================


            //#region ==================== FRAME 01 ====================

            .fromTo([bgRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power0.out', repeat: 1, yoyo: true, duration: animDuration03 }, 'frame01 +=0')

            .fromTo([logoBSPS_britneyRef.current], { scale: 0.75, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'power3.out', duration: animDuration04 }, 'frame01 +=0')
            .fromTo([logoBSPS_spearsRef.current], { scale: 0.75, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'power3.out', duration: animDuration04 }, 'frame01 +=0.5')
            .fromTo([logoBSPS_privateRef.current, logoBSPS_showRef.current], { scale: 0.75, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'back.inOut(2)', duration: animDuration05 }, 'frame01 +=0')

            .fromTo([logoBSPS_dsRef.current], { scale: 0.75, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'back.inOut(2)', duration: animDuration05 }, 'frame01 +=0')

            .fromTo([logoBSPS_nuevaRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration06 }, 'frame01 +=2')

            //#endregion ==================== FRAME 01 ====================


            //#region ==================== FRAME 02 ====================

            .to([logoBSPSref.current], { y: 20, scale: 0.8, ease: 'power3.out', duration: animDuration02 }, 'frame02 -=1.5')
            .fromTo([bottleRef.current], { x:70, y: 5, autoAlpha: 0 }, { y: -15, autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame02 -=1.5')

            //#endregion ==================== FRAME 02 ====================


            //#region ==================== FRAME 03 ====================

            .to([logoBSPSref.current], { x: 95, y: 35, scale: 0.7, ease: 'power2.out', duration: animDuration02 }, 'frame03 +=0.75')
            .to([bottleRef.current], { x: 126, y: -7, scale: 0.95, ease: 'power2.out', duration: animDuration02 }, 'frame03 +=0.75')
            .fromTo([modelRef.current], { x: -194, y: 6, scale: 1.05882352941176, ease: 'power2.out' }, { x: 0, y: 0, scale: 1, ease: 'power2.out', duration: animDuration02 }, 'frame03 +=0.75')

            // #endregion ==================== FRAME 03 ====================
        ;

    // }, []);
    }, [animDuration02, animDuration03, animDuration04, animDuration05, animDuration06, animDuration10]);


    return (
        <div className='banner300x250 bsps_26897'>
            {/* <h1>BSPS_26897 300x250 Component</h1> */}

            <div className='bannerImg image_300x250' ref={modelRef}><img src={model} alt='model' /></div>
            <div className='bannerImg bg_300x250' ref={bgRef}><img src={bg} alt='bg' /></div>


        {/* #region -------------------- SVG: logo_NMTG_sp (bsps_dropshadows) -------------------- */}

            <svg className='logoBSPS' ref={logoBSPSref} version='1.1' baseProfile='full' id='logo_ko_svg' width='230' height='92' space='preserve' overflow='visible'>

                <defs>
                    <filter xmlns='http://www.w3.org/2000/svg' id='bsps_dropshadow01' x='-100%' y='-100%' width='300%' height='300%'>
                        <feGaussianBlur in='SourceGraphic' stdDeviation='45' result='blur_logo01' />
                        <feOffset dx='0' dy='0' result='blurOffset01' />
                        <feComponentTransfer>
                            <feFuncA type='linear' slope='5' />
                        </feComponentTransfer>
                    </filter>

                    <filter xmlns='http://www.w3.org/2000/svg' id='bsps_dropshadow02' x='-100%' y='-100%' width='300%' height='300%'>
                        <feGaussianBlur in='SourceGraphic' stdDeviation='20' result='blur_logo02' />
                        <feOffset dx='0' dy='0' result='blurOffset02' />
                        <feComponentTransfer>
                            <feFuncA type='linear' slope='7.5' />
                        </feComponentTransfer>
                    </filter>
                </defs>

                {/* <g className='logoBSPS_ds' ref={logoBSPS_dsRef}> */}
                <g className='logoBSPS_ds' filter='url(#bsps_dropshadow01)' ref={logoBSPS_dsRef}>
                    <image href={LOGO_BSPS_show_ko} width='230' height='92' ref={logoBSPS_show_koRef} />
                    <image href={LOGO_BSPS_private_ko} width='230' height='92' ref={logoBSPS_private_koRef} />
                    <image href={LOGO_BSPS_spears_ko} width='230' height='92' ref={logoBSPS_spears_koRef} />
                    <image href={LOGO_BSPS_britney_ko} width='230' height='92' ref={logoBSPS_britney_koRef} />
                    <image href={LOGO_BSPS_nueva_ko} width='230' height='92' filter='url(#bsps_dropshadow02)' ref={logoBSPS_nueva_koRef} />
                </g>

                <g className='logoBSPS_base' ref={logoBSPS_baseref}>
                    <image href={LOGO_BSPS_show} width='230' height='92' ref={logoBSPS_showRef} />
                    <image href={LOGO_BSPS_private} width='230' height='92' ref={logoBSPS_privateRef} />
                    <image href={LOGO_BSPS_spears} width='230' height='92' ref={logoBSPS_spearsRef} />
                    <image href={LOGO_BSPS_britney} width='230' height='92' ref={logoBSPS_britneyRef} />
                    <image href={LOGO_BSPS_nueva} width='230' height='92' ref={logoBSPS_nuevaRef} />
                </g>

            </svg>

        {/* #endregion -------------------- SVG: logo_NMTG_sp (bsps_dropshadows) -------------------- */}


            <div className='bannerImg bottle_300x250' ref={bottleRef}><img src={bottle} alt='bottle' /></div>
            <div className='vendorTag' ref={vendorLogoRef}><img src={vendorLogo} alt='vendorLogo_Walgreens' /></div>
        </div>
    );
}
