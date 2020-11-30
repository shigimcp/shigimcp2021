//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useLayoutEffect } from 'react';

import { gsap } from 'gsap';
import { RoughEase } from 'gsap/EasePack';
import { PixiPlugin } from 'gsap/PixiPlugin';
import * as PIXI from 'pixi.js';

import '../banners.scss';
import './NMMN_11155.scss';


//#region -------------------- IMPORTS: ASSETS --------------------

import bg from './images/bg.jpg';
import model from './images/IMAGE.jpg';
import bottle from './images/bottle.png';
import cta from './images/btn_walmart.svg';

import LOGO_NM_Minajesty_hed from './images/ffffff/LOGO_NM_Minajesty_hed.svg';
import LOGO_NM_Minajesty_nicki from './images/ffffff/LOGO_NM_Minajesty_nicki.svg';
import LOGO_NM_Minajesty_minaj from './images/ffffff/LOGO_NM_Minajesty_minaj.svg';
import LOGO_NM_Minajesty_sultry from './images/ffffff/LOGO_NM_Minajesty_sultry.svg';

//#endregion -------------------- IMPORTS: ASSETS --------------------


//#region -------------------- GSAP: REGISTER PLUGINS --------------------

gsap.registerPlugin(RoughEase);
gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

//#endregion -------------------- GSAP: REGISTER PLUGINS --------------------

//#endregion ==================== IMPORTS ====================


//#region ==================== ANIMATION DURATIONs ====================

// const staggerDuration = 0.75;
// const staggerDelay = 0.0625;

// const animDuration00 = 0.125;
// const animDuration00_5 = 0.50;
const animDuration01 = 1.00;
// const animDuration01_5 = 1.50;
const animDuration02 = 2.00;
// const animDuration02_5 = 2.50;
// const animDuration03 = 3.00;
// const animDuration03_5 = 3.50;
const animDuration04 = 4.00;
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

//#region -------------------- FUNCTION: removeNode(thisNode) --------------------

function removeNode(thisNode) {

    // console.log('');
    // console.log('------------------------- removeNode(thisNode) triggered! -------------------------');

    // console.log('thisNode = ' + thisNode);
    // console.log('thisNode.id = ' + thisNode.id);

    thisNode.remove();
}

//#endregion -------------------- FUNCTION: removeNode(thisContainer) --------------------

//#endregion ==================== FUNCTIONS ====================


//#region ==================== SVG LOGO ====================

//#region -------------------- SVG LOGO: const LogoNMMinajestyRef = React.forwardRef --------------------

const LogoNMMinajestyRef = React.createRef();

const LogoNMMinajesty = React.forwardRef((props, LogoNMMinajestyRef) => {

    // console.log('-------------------- const LogoNMMinajesty --------------------');
    // console.log('props = ' + props);
    // console.log(props);


    return (

        <svg className='logo_NM_Minajesty' id='logo_NM_MinajestyID' width='300' height='125' version='1.1' baseProfile='full' space='preserve' overflow='visible' ref={LogoNMMinajestyRef}>

            <defs>

                <filter xmlns='http://www.w3.org/2000/svg' x='-100%' y='-100%' width='300%' height='300%' id='dsFilter1'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation='5' result='dsBlur' />
                    <feColorMatrix
                        in='SourceGraphic'
                        in2='dsBlur'
                        type='matrix'
                        values='0.933333333333333 0 0 0 0
                                0 0.309803921568627 0 0 0
                                0 0 0.309803921568627 0 0
                                0 0 0 1 0' />
                    <feDropShadow dx='0' dy='0' floodColor='#ee4f80' floodOpacity='1' stdDeviation='10' result='dsDropShadow' />
                    <feComponentTransfer>
                        <feFuncA type='linear' slope='3' />
                    </feComponentTransfer>
                </filter>

            </defs>

            <g className='logo_NM_Minajesty_ds' id='logo_NM_Minajesty_dsID' filter='url(#dsFilter1)'>
                <image href={LOGO_NM_Minajesty_hed} x='26' y='37' width='250' height='75' />
                <image href={LOGO_NM_Minajesty_nicki} x='26' y='37' width='250' height='75' />
                <image href={LOGO_NM_Minajesty_minaj} x='26' y='37' width='250' height='75' />
            </g>

            <g className='logo_NM_Minajesty_base' id='logo_NM_Minajesty_baseID'>
                <image href={LOGO_NM_Minajesty_hed} x='26' y='37' width='250' height='75' />
                <image href={LOGO_NM_Minajesty_nicki} x='26' y='37' width='250' height='75' />
                <image href={LOGO_NM_Minajesty_minaj} x='26' y='37' width='250' height='75' />
            </g>
        </svg>
    );

}, [LogoNMMinajestyRef]);

//#endregion -------------------- SVG LOGO: const LogoNMMinajestyRef = React.forwardRef --------------------


//#region -------------------- SVG LOGO: const LogoNMMinajestySultryRef = React.forwardRef --------------------

const LogoNMMinajestySultryRef = React.createRef();

const LogoNMMinajestySultry = React.forwardRef((props, LogoNMMinajestySultryRef) => {

    // console.log('-------------------- const LogoNMMinajestySultry --------------------');
    // console.log('props = ' + props);
    // console.log(props);


    return (

        <svg className='logo_NM_Minajesty_Sultry' id='logo_NM_Minajesty_SultryID' width='250' height='75' version='1.1' baseProfile='full' space='preserve' overflow='visible' ref={LogoNMMinajestySultryRef}>

            <defs>

                <filter xmlns='http://www.w3.org/2000/svg' x='-100%' y='-100%' width='300%' height='300%' id='dsFilter2'>
                    {/* <feDropShadow dx='0' dy='0' floodColor='#ffffff' floodOpacity='1' stdDeviation='0.0625' /> */}
                    <feDropShadow dx='0' dy='0' floodColor='#ffffff' floodOpacity='1' stdDeviation='0.375' />
                    <feOffset dx='0' dy='0' result='blurOffset01' />
                    <feComponentTransfer>
                        <feFuncA type='linear' slope='2' />
                    </feComponentTransfer>
                </filter>

            </defs>

            <g className='logo_NM_Minajesty_sultry' id='logo_NM_Minajesty_sultryID' filter='url(#dsFilter2)'>
                <image href={LOGO_NM_Minajesty_sultry} width='250' height='75' />
            </g>

        </svg>
    );

}, [LogoNMMinajestySultryRef]);

//#endregion -------------------- SVG LOGO: const LogoNMMinajestySultryRef = React.forwardRef --------------------

//#endregion ==================== SVG LOGO ====================



export default function NMMN_11155() {

    //#region ==================== ASSETS Ref ====================

    const bgRef = useRef(null);
    const modelRef = useRef(null);
    const bottleRef = useRef(null);
    const ctaRef = useRef(null);

    const smokeContainerRef = useRef(null);

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



    //#region ==================== PIXIJS 5 SMOKE - REF: https://www.pixiplayground.com/#/edit/6ThqOOz-SVJe3AyvkbnaU ====================
    //        -------------------- BASE REF: https://www.html5gamedevs.com/topic/44542-need-help-of-migrating-shader-from-v4-to-v5/ --------------------

    function hexColorToVec3(hexString) {
        //check if valid hex value
        if (/^#([0-9A-F]{3}){1,2}$/i.test(hexString)) {
            // Extracted from: https://github.com/mrdoob/three.js/blob/dev/src/math/Color.js#L229

            // const match = /^\#([A-Fa-f0-9]+)$/.exec(hexString);
            const match = /^#([A-Fa-f0-9]+)$/.exec(hexString);

            const hex = match[1];
            const size = hex.length;

            if (size === 3) {

                // #ff0
                const output = [
                    parseInt(hex.charAt(0) + hex.charAt(0), 16) / 255,
                    parseInt(hex.charAt(1) + hex.charAt(1), 16) / 255,
                    parseInt(hex.charAt(2) + hex.charAt(2), 16) / 255,
                ];

                return output;

            } else if (size === 6) {

                // #ff0000
                const output = [
                    parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255,
                    parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255,
                    parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255,
                ];

                return output;

            }

        } else {
            throw new Error('The passed hex color is not valid.');
        }
    }


    const addPixi = useCallback((thisContainer) => {

        // console.log('');
        // console.log('------------------------- addPixi(thisContainer) triggered! -------------------------');

        // console.log('thisContainer = ' + thisContainer);
        // console.log('thisContainer.id = ' + thisContainer.id);

        // Adapted from: http://codepen.io/davidhartley/pen/seEki?editors=0010

        const width = 300;
        const height = 600;

        const app = new PIXI.Application({
            width: width,
            height: height,
            backgroundColor: 0xdd8ea3,

            autoResize: true,
            resolution: devicePixelRatio || 1,
            antialias: true,
            transparent: true
        });

        smokeContainerRef.current.appendChild(app.view);


        const frag = `
            // Original fragment shader extracted from:
            // https://gist.github.com/OmarShehata/9650b8ee419db3696ce555f10712d499
            precision mediump float;
            // Cant be named 'resolution' since it's a default uniform
            // provided by PIXI.Filter(), see: https://pixijs.download/dev/docs/PIXI.Filter.html
            // And the PIXI's resolution unifmor is the ratio of screen (CSS) pixels to real pixels.
            uniform vec2  dimensions;
            uniform float time;
            uniform vec2  speed;

            // Smoke colors
            uniform vec3  smoke1_color_a;
            uniform vec3  smoke1_color_b;

            uniform vec3  smoke2_color_a;
            uniform vec3  smoke2_color_b;

            // Used to increase the brightness of the image on transitions.
            uniform float brightness; // 0.5 by default.

            float rand(vec2 n) {
                // This is just a compounded expression to simulate a random number based on a seed given as n.
                // fract() returns the fractional part of x. This is calculated as x - floor(x).
                // This is like a (x % 1) operation.
                // see more in: https://thebookofshaders.com/10/
                return fract(cos(dot(n, vec2(2.9898, 10.1414))) * 15.5453);
            }

            float noise(vec2 n) {
                const vec2 d = vec2(0.0, 1.0);
                vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
                return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
            }


            float fbm(vec2 n) {
                // fbm stands for 'Fractal Brownian Motion',
                // see more in: https://thebookofshaders.com/13/
                // https://en.wikipedia.org/wiki/Fractional_Brownian_motion
                float gain = 0.5;
                // we successively increment the frequencies in regular steps (lacunarity).
                float lacunarity = 2.15; // this is a magic number to generate a little bit of distortion.

                float total = 0.0, amplitude = 1.0;
                for (int i = 0; i < 10; i++) {
                    total += noise(n) * amplitude;
                    // n += n; // lacunarity, increments 1 octave in each cycle.
                    // lacunarity increments frequency exponentially each cycle in a factor
                    // to genereta a litle of distortion.
                    n *= lacunarity;
                    // Decreases the amplitud by half each iteration.
                    amplitude *= gain;
                }
                return total;
            }

            void main() {
                // vec3 c1 = vec3(0.25, 0.0, 0.0);
                vec3 c1 = smoke1_color_a;
                // const vec3 c2 = vec3(255.0/255.0, 5.0/255.0, 5.0/255.0);
                vec3 c2 = smoke1_color_b;

                // const vec3 c3 = vec3(0.8, 1.0, 0.3);
                vec3 c3 = smoke2_color_a;
                // const vec3 c4 = vec3(0.95, 0.95, 0.95);
                vec3 c4 = smoke2_color_b;

                vec3 c5 = vec3(0.6);
                vec3 c6 = vec3(-1.5);

                // vec2 p = gl_FragCoord.xy * 3.0 / dimensions.xx;
                vec2 p = gl_FragCoord.xy * 3.0 / dimensions.xx;

                float q = fbm(p - time * 0.02);

                vec2 r = vec2(fbm(p + q + time * speed.x - p.x - p.y), fbm(p + q - time * speed.y));

                vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);

                // Just a cyclic number to multiply with the c color.
                // the name of this variable has nothing to do with the alpha-premultiply algorithm.
                // I'm no longer passing the shift as an uniform since I need magic numbers.
                // float premultiplier = 1.0 - sin(shift * gl_FragCoord.y / dimensions.y);
                float premultiplier = 1.0 - sin(0.9 * gl_FragCoord.y / dimensions.y);
                vec3 endColor = c * premultiplier;

            gl_FragColor = vec4(endColor * brightness, 0.0);
                // Uncomment the next line to debug colors and smoke effect without brightness parameters.
            // gl_FragColor = vec4(endColor * 1.0, 0.);

                // To produce the volumetric fog effect.
                // https://developer.nvidia.com/gpugems/gpugems3/part-ii-light-and-shadows/chapter-13-volumetric-light-scattering-post-process
                vec2 st = gl_FragCoord.xy/dimensions.xy;
                vec2 pos = vec2(0.15,0.1)-st;

                // when brightness <= 0.3, smoothstep returns: 0.0
                // when brightness in (0.3, 2.0) range, smoothstep returns: hermite interpolation between 0 and 1.
                // when brightness >= 2.0, smoothstep returns: 1.0
                // The brightnessSlider is used to make all the mask clear during transitions (hide the center circle from the mask).
                float brightnessSlider = smoothstep( 0.3, 2.0, brightness );
                float aperture = mix(0.4, -0.5, brightnessSlider);
                float centerMask = smoothstep( aperture, .56, distance(st, vec2(-0.1, 0.75)) ) * r.x;
                // Uncomment next line and comment the last one to debug only mask.
                gl_FragColor = vec4(vec3(centerMask), 1.);
                // gl_FragColor.xyz *= centerMask;
            }
        `;

        var smokeShader = new PIXI.Filter(undefined, frag);

        smokeShader.uniforms.dimensions = [width, 720];
        smokeShader.uniforms.time = 0;
        smokeShader.uniforms.speed = [0.5, 0.5];
        smokeShader.uniforms.brightness = 5;
        smokeShader.uniforms.smoke1_color_a = hexColorToVec3('#EC10FF');
        smokeShader.uniforms.smoke1_color_b = hexColorToVec3('#86D609');
        smokeShader.uniforms.smoke2_color_a = hexColorToVec3('#06D7F9');
        smokeShader.uniforms.smoke2_color_b = hexColorToVec3('#06D7F9');


        var smokeBG = new PIXI.Sprite();

        smokeBG.width = width;
        smokeBG.height = height;
        smokeBG.blendMode = PIXI.BLEND_MODES.SCREEN;
        smokeBG.filters = [smokeShader];

        app.stage.addChild(smokeBG);


        var count = 0;

        app.ticker.add(() => {
            count += 0.01
            smokeShader.uniforms.time = count;
        })

    }, []);

    //#endregion ==================== PIXIJS 5 SMOKE - REF: https://www.pixiplayground.com/#/edit/6ThqOOz-SVJe3AyvkbnaU ====================



    //#region ==================== useEffect / useLayoutEffect ====================

    const tl = gsap.timeline({ delay: 0 });

    // useEffect(() => {
    useLayoutEffect(() => {

        addPixi(smokeContainerRef.current);

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            //#region -------------------- autoAlpha --------------------

            .set([modelRef.current], { autoAlpha: 0 }, 'frame00')

            .set([bottleRef.current], { autoAlpha: 0 }, 'frame00')
            .set([ctaRef.current], { autoAlpha: 0 }, 'frame00')

            //#endregion -------------------- autoAlpha --------------------


            //#region -------------------- SET TRANSFORMS --------------------

            // -------------------- SET TRANSFORM ORIGiNS --------------------

            .set([bottleRef.current], { transformOrigin: '0 0', immediateRender: true }, 'frame00')


            // -------------------- FRAME01 --------------------

            // .set([LogoNMMinajestySultryRef.current], { x: 27, y: 450, scale: 1.3 }, 'frame00')
            .set([LogoNMMinajestySultryRef.current], { x: 50, y: 450, scale: 1.3 }, 'frame00')

            .set([smokeContainerRef.current], { zIndex: 0 }, 'frame00')

            //#endregion -------------------- SET TRANSFORMS --------------------

            //#endregion ==================== INITIALIZE OBJECTS ====================


            //#region ==================== FRAME 01 ====================

            .fromTo([LogoNMMinajestyRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: "rough({template: none.out, strength: 7.5, points: 50, taper: 'out', randomize: true, clamp: false})", duration: animDuration05 }, 'frame01 +=0')

            .fromTo([modelRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration04 }, 'frame01 +=2')

            .fromTo([ctaRef.current], { y: -25, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: 'power3.out', duration: animDuration01 }, 'frame01 +=3.5')

            .fromTo([bottleRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=2.5')
            .fromTo([LogoNMMinajestySultryRef.current], { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame01 +=2.5625')

            .fromTo([smokeContainerRef.current], { autoAlpha: 0.5 }, { autoAlpha: 0, ease: 'power3.out', duration: animDuration05, onComplete: removeNode, onCompleteParams: [smokeContainerRef.current] }, 'frame01 +=7.5')

            //#endregion ==================== FRAME 01 ====================
        ;

        //tl.duration(1.5);
        // console.log('tl timing = ' + tl.duration() + ' secs');

    }, [tl, addPixi]);

    //#endregion ==================== useEffect / useLayoutEffect ====================


    return (
        <div className='banner300x600 nmmn_11155'>

            <div className='bgDiv' ref={bgRef}><img src={bg} alt='bg' /></div>
            <div className='modelDiv' ref={modelRef}><img src={model} alt='model' /></div>

            <div className='smokeContainer' id='smokeContainerID' ref={smokeContainerRef}></div>

            <div className='bottleDiv' ref={bottleRef}><img src={bottle} alt='bottle' /></div>

            <LogoNMMinajesty className='LogoNMMinajesty' id='LogoNMMinajestyID' ref={LogoNMMinajestyRef} />
            <LogoNMMinajestySultry className='LogoNMMinajestySultry' id='LogoNMMinajestySultryID' ref={LogoNMMinajestySultryRef} />

            <div className='cta' ref={ctaRef}><img src={cta} alt='cta_Walgreens' /></div>

            <div className='clickTag' id='clickTagID' ref={clickTagRef} onClick={handleClick}></div>
        </div>
    );
}
