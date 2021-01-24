//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';

import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import '../stylesheets/About.scss';
import myData from '../data/MyData';

//#endregion ==================== IMPORTS ====================


//#region ==================== GSAP: Register Plugins ====================

gsap.registerPlugin(MotionPathPlugin);

//#endregion ==================== GSAP: Register Plugins ====================



//#region ==================== CONSTANTS ====================

const aboutData = myData[2];

//#region -------------------- ANIMATION DURATIONs --------------------

// const staggerDuration = 0.125;
// const staggerDelay = 0.0375;

// const waveDuration = 10;

// const animDuration00 = 0.125;
const animDuration00_25 = 0.25;
const animDuration00_5 = 0.50;
// const animDuration01 = 1.00;
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

//#endregion -------------------- ANIMATION DURATIONs --------------------

//#endregion ==================== CONSTANTS ====================



//#region ==================== MyThoughts ====================

function CurlLB(props) {
    return (
        <svg className='curlSvg' id={props.curlSvgID} brain={props.brain} thought={props.thought} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 100' enableBackground='0 0 50 100'>
            <path className='curlPath' id={props.curlPathID} d='M10.164 93.706c7.735 9.34 24.605 8.114 30.362-2.544 2.813-5.207 3.003-11.594.186-16.84-2.904-5.41-9.065-8.555-15.283-9.188-6.42-.654-13.07 1.684-16.955 6.63-3.9 4.967-4.607 12.137.127 16.854 4.535 4.52 11.862 4.53 17.812 3.054 6.502-1.612 12.996-5.167 17.53-9.865 4.63-4.8 7.284-11.432 4.872-17.805-2.334-6.168-8.464-10.812-15.243-12.04-7.614-1.38-15.903.72-22.15 4.97C5.73 60.8.578 67.626 3.315 74.5c2.442 6.14 9.84 8.83 16.37 8.567 6.803-.276 13.363-3.14 18.18-7.65 4.74-4.442 7.87-10.615 7.76-16.987-.11-6.344-3.21-12.58-8.088-16.92-5.093-4.53-11.966-6.99-18.977-6.173-7.487.872-14.26 5.337-16.427 12.352-2.057 6.655 1.092 13.196 7.015 16.996 5.61 3.6 13.084 4.383 19.476 2.346 12.553-4.002 21.796-17.54 16.672-29.843-4.598-11.04-18.768-18.508-31.07-14.477C7.755 24.835 1.95 29.95.402 36.403c-1.618 6.75 1.804 13.23 7.733 17.036 13.012 8.35 31.07-.39 36.818-12.777 2.867-6.175 3.01-13.057-.23-19.13-2.94-5.506-8.712-10.04-15.203-11.203C15.903 7.89 1.992 21.103 8.207 33.824c2.564 5.248 8.34 8.883 14.24 10.03 6.566 1.274 13.086-.264 18.328-4.177 10.726-8.007 12.62-23.19 2.918-32.612-9.492-9.22-25.55-9.655-34.78.106-4.303 4.55-7.036 10.72-6.447 16.883.608 6.364 4.23 11.872 9.602 15.683 5.374 3.812 11.683 4.92 18.234 4.07 1.675-.22 2.557-2.22 2.17-3.603-.474-1.693-2.168-2.26-3.823-2.045C19.87 39.3 10.05 32.028 9.307 23.75 8.565 15.478 15.746 6.9 24.715 6.412c8.967-.49 18.345 6.243 18.482 15.054.128 8.205-7.13 16.42-16.13 16.4-8.49-.02-17.22-7.44-11.98-15.537 2.38-3.68 6.917-6.18 11.535-5.852 4.436.314 8.528 3.002 10.93 6.45 5.758 8.263 1.267 18.96-7.085 23.972-4.61 2.766-10.65 4.208-15.927 2.308-4.212-1.516-7.828-5.308-7.577-9.743.25-4.418 3.944-8.158 8.02-9.97 4.015-1.786 8.713-1.543 12.785-.068C36 32.41 41.685 40.547 39.008 48.822c-2.68 8.275-12.49 14.607-21.66 12.234-4.223-1.092-8.56-4.08-8.876-8.52-.35-4.902 3.66-8.895 8.41-10.203 9.777-2.69 19.336 4.31 21.423 13.225 2.078 8.875-5.134 17.536-13.882 20.112-4.005 1.18-9.16 1.445-12.698-1.087-4.502-3.223-1.064-8.445 2.16-11.16 7.48-6.3 22.26-8.297 27.79 1.364 5.072 8.86-6.388 16.947-13.93 19.792-3.786 1.427-8.92 2.65-12.772.775-4.126-2.008-3.626-6.896-1.337-10.037 5.212-7.15 17.96-5.482 22.176 1.703 4.825 8.224-1.31 18.583-11.122 19.276-4.643.328-9.373-1.22-12.64-4.367-1.235-1.193-2.912.538-1.886 1.776z' fill='#0000ff' />
            <rect className='curlRect' id={props.curlRectID} width='100%' height='100%' fill='rgba(255,0,255,0.5)' onClick={(e) => handleThought(e.target)}></rect>
        </svg>
    );
}

function CurlRB(props) {
    return (
        <svg className='curlSvg' id={props.curlSvgID} brain={props.brain} thought={props.thought} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 100' enableBackground='0 0 50 100'>
            <path className='curlPath' id={props.curlPathID} d='M39.836 93.706c-7.735 9.34-24.605 8.114-30.362-2.544-2.813-5.207-3.003-11.594-.186-16.84 2.904-5.41 9.065-8.555 15.283-9.188 6.42-.654 13.07 1.684 16.955 6.63 3.9 4.967 4.607 12.137-.127 16.854-4.535 4.52-11.862 4.53-17.812 3.054-6.502-1.612-12.996-5.167-17.53-9.865-4.63-4.8-7.284-11.432-4.872-17.805 2.334-6.168 8.464-10.812 15.243-12.04 7.614-1.38 15.903.72 22.15 4.97 5.692 3.87 10.844 10.695 8.108 17.57-2.442 6.14-9.84 8.83-16.37 8.567-6.803-.276-13.363-3.14-18.18-7.65-4.74-4.442-7.87-10.615-7.76-16.987.11-6.344 3.21-12.58 8.088-16.92 5.093-4.53 11.966-6.99 18.977-6.173 7.488.872 14.26 5.337 16.428 12.352 2.057 6.655-1.092 13.196-7.015 16.996-5.61 3.6-13.084 4.383-19.476 2.346-12.555-4-21.797-17.54-16.673-29.842 4.598-11.04 18.768-18.51 31.07-14.478 6.472 2.12 12.278 7.237 13.825 13.688 1.618 6.75-1.804 13.23-7.733 17.037-13.012 8.35-31.07-.39-36.818-12.777-2.867-6.175-3.01-13.057.23-19.13 2.94-5.506 8.712-10.04 15.203-11.203 13.615-2.44 27.526 10.774 21.31 23.495-2.564 5.248-8.34 8.883-14.24 10.03-6.566 1.274-13.086-.264-18.328-4.177C-1.5 31.668-3.395 16.486 6.307 7.065c9.492-9.22 25.55-9.655 34.78.106 4.303 4.55 7.036 10.72 6.447 16.883-.608 6.364-4.23 11.872-9.602 15.683-5.374 3.812-11.683 4.92-18.234 4.07-1.675-.22-2.557-2.22-2.17-3.603.474-1.693 2.168-2.26 3.823-2.045C30.13 39.3 39.95 32.028 40.693 23.75c.744-8.27-6.437-16.848-15.407-17.337-8.968-.49-18.345 6.24-18.483 15.053-.128 8.205 7.13 16.42 16.13 16.4 8.49-.02 17.22-7.44 11.98-15.537-2.38-3.68-6.917-6.18-11.535-5.852-4.436.314-8.528 3.002-10.93 6.45-5.757 8.264-1.266 18.96 7.086 23.972 4.61 2.766 10.65 4.208 15.927 2.308 4.212-1.516 7.828-5.308 7.577-9.743-.25-4.418-3.944-8.158-8.02-9.97-4.015-1.786-8.713-1.543-12.785-.068C14 32.41 8.315 40.547 10.992 48.822c2.68 8.275 12.49 14.607 21.66 12.234 4.223-1.092 8.56-4.08 8.876-8.52.35-4.902-3.66-8.895-8.41-10.203-9.777-2.69-19.336 4.31-21.423 13.225-2.078 8.875 5.134 17.536 13.882 20.112 4.005 1.18 9.16 1.445 12.698-1.087 4.502-3.223 1.064-8.445-2.16-11.16-7.48-6.3-22.26-8.297-27.79 1.364-5.072 8.86 6.388 16.947 13.93 19.792 3.786 1.427 8.92 2.65 12.772.775 4.126-2.008 3.626-6.896 1.337-10.037-5.212-7.15-17.96-5.482-22.176 1.703-4.825 8.224 1.31 18.583 11.122 19.276 4.643.328 9.373-1.22 12.64-4.367 1.235-1.193 2.912.538 1.886 1.776z' fill='#0000ff' />
            <rect className='curlRect' id={props.curlRectID} width='100%' height='100%' fill='rgba(0,255,255,0.5)' onClick={(e) => handleThought(e.target)}></rect>
        </svg>
    );
}


function MyThoughts() {

    const leftCurls = aboutData.filter(isLeft => isLeft.brain === 'left').map((thought) =>

        <CurlLB
            key={thought.about_index}
            keyProxy={thought.brain + '_' + thought.about_index}
            brain={thought.brain}
            thought={thought.thought}
            format={thought.format}
            format_src={thought.format_src}
            link={thought.link}
            aWidth={thought.aWidth}
            aHeight={thought.aHeight}

            curlSvgID={'curlSvg' + thought.about_index}
            curlPathID={'curlPath' + thought.about_index}
            curlRectID={'curlRect' + thought.about_index}
        />,
    );

    const rightCurls = aboutData.filter(isRight => isRight.brain === 'right').map((thought) =>

        <CurlRB
            key={thought.about_index}
            keyProxy={thought.brain + '_' + thought.about_index}
            brain={thought.brain}
            thought={thought.thought}
            format={thought.format}
            format_src={thought.format_src}
            link={thought.link}
            aWidth={thought.aWidth}
            aHeight={thought.aHeight}

            curlSvgID={'curlSvg' + thought.about_index}
            curlPathID={'curlPath' + thought.about_index}
            curlRectID={'curlRect' + thought.about_index}
        />,
    );

    return (
        <>
            {leftCurls}
            {rightCurls}
        </>
    );
}

//#endregion ==================== MyThoughts ====================



//#region ==================== FUNCTIONS ====================

//#region -------------------- FUNCTION: randomize2x() --------------------

function randomize2x() {
    Math.random();
    return Math.random();
}

//#endregion -------------------- FUNCTION: randomize2x() --------------------


//#region -------------------- FUNCTION: getDimensions(thisObject) --------------------

function getDimensions(thisObject) {

    let thisObject_x = document.getElementById(thisObject.id).offsetLeft;
    let thisObject_y = document.getElementById(thisObject.id).offsetTop;
    let thisObject_w = document.getElementById(thisObject.id).offsetWidth;
    let thisObject_h = document.getElementById(thisObject.id).offsetHeight;

    return [thisObject_x, thisObject_y, thisObject_w, thisObject_h];
}

//#endregion -------------------- FUNCTION: getDimensions(thisContainer) --------------------


//#region -------------------- FUNCTION: addGuides(refContainer) --------------------

function addGuides(refContainer) {

    let refContainerDims = getDimensions(refContainer);


    //#region -------------------- AFRO GUIDE (guideSVG): outerEllipse / innerEllipse --------------------

    //#region - - - - - - - - - - - outerEllipse - - - - - - - - - - -

    const outerEllipse = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const outerEllipsePath = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');

    let posFactor = 0.5;
    let scaleFactor = 0.5;

    let outer_cx = refContainerDims[2] * posFactor;
    let outer_cy = refContainerDims[3] * posFactor;
    let outer_rx = refContainerDims[2] * scaleFactor;
    let outer_ry = refContainerDims[3] * scaleFactor;
    let outer_stroke = 'red';
    let outer_stroke_width = 2;
    let outer_fill = 'green';

    outerEllipse.setAttributeNS(null, 'version', '1.1');
    outerEllipse.setAttributeNS(null, 'class', 'guideSVG');
    outerEllipse.setAttributeNS(null, 'id', 'outerEllipseID');
    outerEllipse.setAttributeNS(null, 'viewBox', '0 0 ' + refContainerDims[2] + ' ' + refContainerDims[3]);
    outerEllipse.setAttributeNS(null, 'enable-background', '0 0 ' + refContainerDims[2] + ' ' + refContainerDims[3]);

    outerEllipsePath.setAttributeNS(null, 'id', 'outerEllipsePathID');
    outerEllipsePath.setAttribute('cx', outer_cx);
    outerEllipsePath.setAttribute('cy', outer_cy);
    outerEllipsePath.setAttribute('rx', outer_rx);
    outerEllipsePath.setAttribute('ry', outer_ry);
    outerEllipsePath.setAttribute('stroke', outer_stroke);
    outerEllipsePath.setAttribute('stroke-width', outer_stroke_width);
    outerEllipsePath.setAttribute('fill', outer_fill);


    outerEllipse.appendChild(outerEllipsePath);

    //#endregion - - - - - - - - - - - outerEllipse - - - - - - - - - - -


    //#region - - - - - - - - - - - innerEllipse - - - - - - - - - - -

    const innerEllipse = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const innerEllipsePath = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');

    posFactor = 0.5;
    scaleFactor = 0.2625;

    let inner_cx = refContainerDims[2] * posFactor;
    let inner_cy = refContainerDims[3] * posFactor * 1.475;
    let inner_rx = refContainerDims[2] * scaleFactor;
    let inner_ry = refContainerDims[3] * scaleFactor;
    let inner_stroke = 'red';
    let inner_stroke_width = 2;
    let inner_fill = 'green';

    innerEllipse.setAttributeNS(null, 'version', '1.1');
    innerEllipse.setAttributeNS(null, 'class', 'guideSVG');
    innerEllipse.setAttributeNS(null, 'id', 'innerEllipseID');
    innerEllipse.setAttributeNS(null, 'viewBox', '0 0 ' + refContainerDims[2] + ' ' + refContainerDims[3]);
    innerEllipse.setAttributeNS(null, 'enable-background', '0 0 ' + refContainerDims[2] + ' ' + refContainerDims[3]);

    innerEllipsePath.setAttributeNS(null, 'id', 'innerEllipsePathID');
    innerEllipsePath.setAttribute('cx', inner_cx);
    innerEllipsePath.setAttribute('cy', inner_cy);
    innerEllipsePath.setAttribute('rx', inner_rx);
    innerEllipsePath.setAttribute('ry', inner_ry);
    innerEllipsePath.setAttribute('stroke', inner_stroke);
    innerEllipsePath.setAttribute('stroke-width', inner_stroke_width);
    innerEllipsePath.setAttribute('fill', inner_fill);


    innerEllipse.appendChild(innerEllipsePath);

    //#endregion - - - - - - - - - - - innerEllipse - - - - - - - - - - -

    //#endregion -------------------- AFRO GUIDE (guideSVG): outerEllipse / innerEllipse --------------------


    return [outerEllipse, innerEllipse];
}

//#endregion -------------------- FUNCTION: addGuides(refContainer) --------------------


//#region -------------------- FUNCTION: disperseChildren(parentContainer) --------------------

function disperseChildren(parentContainer) {

    //#region - - - - - - - - - - - SETUP - - - - - - - - - - -

    const outerSVGDims = document.getElementById('outerEllipsePathID').getBoundingClientRect();
    const innerSVGDims = document.getElementById('innerEllipsePathID').getBoundingClientRect();

    const outerRadius = outerSVGDims.width;
    const innerRadius = innerSVGDims.width;

    //#endregion - - - - - - - - - - - SETUP - - - - - - - - - - -


    for (let p = 0; p < parentContainer.children.length; p++) {

        let thisCurl = parentContainer.children[p];


        if (thisCurl.getAttribute('brain') === 'left') {

            let minAngleDegrees = -90;
            let maxAngleDegrees = -20;

            const thisAngle = (randomize2x() * (maxAngleDegrees - minAngleDegrees) + minAngleDegrees) / 180 * Math.PI;
            const thisRadius = ((randomize2x() * (outerRadius - innerRadius)) + innerRadius);

            const curlX = (Math.cos(thisAngle) * (thisRadius * 0.5)) + outerRadius * 0.5;
            const curlY = (Math.sin(thisAngle) * (thisRadius * 0.5)) + outerRadius * 0.5;
            const curlAngle = thisAngle * (180 / Math.PI) + 90;

            gsap.set([thisCurl], { x: curlX, y: curlY, rotation: curlAngle });

        } else {

            let minAngleDegrees = -150;
            let maxAngleDegrees = -90;

            const thisAngle = (randomize2x() * (maxAngleDegrees - minAngleDegrees) + minAngleDegrees) / 180 * Math.PI;
            const thisRadius = ((randomize2x() * (outerRadius - innerRadius)) + innerRadius);

            const curlX = (Math.cos(thisAngle) * (thisRadius * 0.5)) + outerRadius * 0.5;
            const curlY = (Math.sin(thisAngle) * (thisRadius * 0.5)) + outerRadius * 0.5;
            const curlAngle = thisAngle * (180 / Math.PI) + 90;

            gsap.set([thisCurl], { x: curlX, y: curlY, rotation: curlAngle });
        }
    }
}

//#endregion -------------------- FUNCTION: disperseChildren(parentContainer) --------------------


//#region -------------------- FUNCTION: handleThought(thisThought) --------------------

let thoughtAnimTL = gsap.timeline({ delay: 0, paused: true });

function handleThought(thisCurl) {

    //#region -------------------- define objects --------------------

    const thisCurlPath = thisCurl.parentElement.children[0];
    const thisBrain = thisCurl.parentElement.getAttribute('brain');
    const thisThought = thisCurl.parentElement.getAttribute('thought');
    const thoughtBubble = document.getElementById('thoughtBubbleDivID');
    const boing = document.getElementById('boingSvgID');
    const boingPath = document.getElementById('boingPathID');

    thoughtBubble.children[1].innerHTML = thisThought;

    //#endregion -------------------- define objects --------------------


    //#region -------------------- position boing and thoughtBubble --------------------

    const thisCurlDims = thisCurl.getBoundingClientRect();
    const outerEllipseDims = document.getElementById('outerEllipsePathID').getBoundingClientRect();
    const boingDims = document.getElementById('boingSvgID').getBoundingClientRect();

    let thisBoingX;
    let thisBoingY;

    if (thisBrain === 'left') {
        gsap.set([boing], { rotationY: 0 });
        thisBoingX = thisCurlDims.x + thisCurlDims.width * 0.5 - outerEllipseDims.x;
        thisBoingY = thisCurlDims.y - thisCurlDims.height * 0.5 - outerEllipseDims.y - boingDims.height * 0.5;
    } else {
        gsap.set([boing], { rotationY: 180 });
        thisBoingX = thisCurlDims.x - thisCurlDims.width * 0.5 - boingDims.width;
        thisBoingY = thisCurlDims.y - outerEllipseDims.y - boingDims.height * 0.5 - thisCurlDims.height * 0.5;
    }

    gsap.set([boing], { x: thisBoingX, y: thisBoingY });
    gsap.set([thoughtBubble], { motionPath: { path: boingPath, align: boingPath, alignOrigin: [0.5, 0.5], start: 1 } });


    //#region - - - - - - - - - - - compensation for thoughtBubble going beyond left/right edges of viewport - - - - - - - - - - -

    const thoughtBubbleDims = thoughtBubble.getBoundingClientRect();

    // console.log('');
    // console.log('handleThought(thisCurl) =>   thoughtBubbleDims = ' + thoughtBubbleDims);
    // console.log('handleThought(thisCurl) =>   thoughtBubbleDims.x = ' + thoughtBubbleDims.x + '     thoughtBubbleDims.y = ' + thoughtBubbleDims.y + '     thoughtBubbleDims.width = ' + thoughtBubbleDims.width + '     thoughtBubbleDims.height = ' + thoughtBubbleDims.height);


    let thisThoughtBubbleX;

    if (thisBrain === 'right' && thoughtBubbleDims.x <= 0) {

        thisThoughtBubbleX = -outerEllipseDims.x * 0.75;
        gsap.set([thoughtBubble], { x: thisThoughtBubbleX });

    } else if (thisBrain === 'left' && (thoughtBubbleDims.x + thoughtBubbleDims.width) >= window.innerWidth) {

        thisThoughtBubbleX = outerEllipseDims.x + outerEllipseDims.width - thoughtBubbleDims.width - outerEllipseDims.x * 0.25;
        gsap.set([thoughtBubble], { x: thisThoughtBubbleX });

    }

    //#endregion - - - - - - - - - - - compensation for thoughtBubble going beyond left/right edges of viewport - - - - - - - - - - -

    //#endregion -------------------- position boing and thoughtBubble --------------------


    thoughtAnimTL = gsap.timeline({ delay: 0, paused: true });

    thoughtAnimTL
        .to([thisCurlPath], { motionPath: { path: boingPath, align: boingPath, alignOrigin: [0.5, 0.5], autoRotate: 90 }, duration: animDuration00_5, ease: 'power3.out' }, 'frame00')

        .set([thisCurl.parentElement], { autoAlpha: 0 }, 'frame01 -=0.125')
        .fromTo([thoughtBubble], { scale: 0.875, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: animDuration00_5, ease: 'elastic.out(1, 0.75)' }, 'frame01 -=0.125')

        .set([thisCurlPath], { transform: 'matrix(1, 0, 0, 1, 0, 0)' }, 'frame02')
    ;

    thoughtAnimTL.play();
}

//#endregion -------------------- FUNCTION: handleThought(thisCurlPath) --------------------


//#region -------------------- FUNCTION: closeThought(thoughtBubble) --------------------

function closeThought(thoughtBubble) {
    gsap.to([thoughtBubble], animDuration00_25, { autoAlpha: 0, ease: 'power1.out' });
}

//#endregion -------------------- FUNCTION: handleThought(thisCurlPath) --------------------


//#region -------------------- FUNCTION: resetThoughts(parentContainer, thoughtBubble) --------------------

function resetThoughts(parentContainer, thoughtBubble) {

    closeThought(thoughtBubble);


    for (let p = 0; p < parentContainer.children.length; p++) {

        let thisCurl = parentContainer.children[p];

        gsap.set([thisCurl], { autoAlpha: 1 });
    }

    disperseChildren(parentContainer);
}

//#endregion -------------------- FUNCTION: resetThoughts(parentContainer, thoughtBubble) --------------------

//#endregion ==================== FUNCTIONS ====================



//#region ==================== EXPORT ABOUT ====================

// export const About = ({ locID }) => {
export const About = (props) => {

    // console.log('');
    // console.log('==================== COMPONENT: About.jsx ====================');

    // // console.log('');
    // console.log('props = ' + props);
    // console.log(props);


    // localStorage.setItem('navLoc', locID);


    //#region ==================== ASSETS _Ref ====================

    const aboutContainer_Ref = useRef(null);
    const aboutAfro_Ref = useRef(null);
    const afroContainer_Ref = useRef(null);

    const curlContainer_Ref = useRef(null);
    const thoughtBubble_Ref = useRef(null);
    const boing_Ref = useRef(null);

    const guideContainer_Ref = useRef(null);

    const haiku_Ref = useRef(null);
    const resetThoughts_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================


    //#region ==================== useEffect / useLayoutEffect ====================

    useLayoutEffect(() => {

        //#region -------------------- ADD [AFRO] GUIDES --------------------

        let thisEllipse = addGuides(afroContainer_Ref.current);

        guideContainer_Ref.current.appendChild(thisEllipse[0]);
        guideContainer_Ref.current.appendChild(thisEllipse[1]);

        //#endregion -------------------- ADD [AFRO] GUIDES --------------------


        disperseChildren(curlContainer_Ref.current);


        //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

        const resizeListener = () => {
            disperseChildren(curlContainer_Ref.current);
        };

        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            window.removeEventListener('resize', resizeListener);
        }

        //#endregion -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

    }, []);

    //#endregion ==================== useEffect / useLayoutEffect ====================


    return (

        <div className='aboutContainer' id='aboutContainerID' ref={aboutContainer_Ref}>

            <div className='haiku' onClick={() => closeThought(thoughtBubble_Ref.current)} ref={haiku_Ref}>

                <h1>I have thoughts...</h1>
                <h2>I keep them in my curls.</h2>
                <h3>Sometimes, they try to escape.</h3>
                <p className='credit'>Bad haiku, by Shigeru McPherson</p>
                <p className='plea'>(This isn't even haiku... Someone, *please* take her crayon away!)</p>
            </div>


        {/* #region ==================== SVG: AboutAfro ==================== */}

            <div className='afroContainer' id='afroContainerID' onClick={() => closeThought(thoughtBubble_Ref.current)} ref={afroContainer_Ref}>

                <svg version='1.1' className='aboutAfro' id='aboutAfroID' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1000 880' ref={aboutAfro_Ref}>

                    <defs>

                        <clipPath id='shigeru_logo_afro_k_mask'>
                            <rect id='header_mask_afro_k' x='0' y='0367.5' width='100%' height='517.5' fill='white' />
                        </clipPath>

                        <clipPath id='shigeru_logo_afro_w_mask'>
                            <rect id='header_mask_afro_w' x='0' y='0' width='100%' height='367.5' fill='white' />
                        </clipPath>

                        <clipPath id='shigeru_logo_glasses_k_mask'>
                            <rect id='header_mask_glasses_k' x='0' y='367.5' width='100%' height='517.5' fill='white' />
                        </clipPath>

                        <clipPath id='shigeru_logo_glasses_w_mask'>
                            <rect id='header_mask_glasses_w' x='0' y='0' width='100%' height='367.5' fill='white' />
                        </clipPath>

                        <clipPath id='shigeru_logo_kanji_w_mask'>
                            <rect id='header_mask_kanji' x='0' y='367.5' width='100%' height='367.5' fill='white' />
                        </clipPath>


                        <clipPath id='bg_mask'>
                            <rect id='bg_mask_rect' x='0' y='60' width='200%' height='125%' fill='white' stroke='blue' />
                        </clipPath>

                    </defs>

                    <g id='shigeru_logo_afro'>
                        <path id='shigeru_logo_afro_k' d='M983.409,470.499c9.111-0.163,16.494-7.511,16.59-16.647c0.107-9.107-7.092-16.608-16.175-16.993c9.044-0.951,15.75-8.896,15.074-17.984c-0.677-9.078-8.474-15.944-17.556-15.569c8.918-1.721,14.918-10.193,13.459-19.195c-1.449-8.992-9.826-15.166-18.841-14.021c8.744-2.472,14.001-11.425,11.779-20.263c-2.242-8.905-11.218-14.367-20.165-12.328c8.619-3.136,13.17-12.579,10.184-21.254c-2.976-8.655-12.339-13.328-21.054-10.608c8.271-3.875,11.971-13.617,8.28-21.993c-3.681-8.348-13.353-12.233-21.788-8.857c7.855-4.549,10.715-14.522,6.358-22.542c-4.339-8.001-14.261-11.088-22.378-7.068c7.421-5.175,9.45-15.32,4.474-22.946c-4.966-7.616-15.063-9.914-22.832-5.299c6.957-5.742,8.165-15.983,2.618-23.186c-5.536-7.193-15.759-8.703-23.141-3.539c6.474-6.251,6.89-16.532,0.822-23.282c-6.059-6.742-16.349-7.482-23.306-1.808c5.952-6.713,5.585-16.974-0.957-23.244c-6.599-6.328-17.025-6.261-23.537,0.067c5.594-7.136,4.522-17.454-2.513-23.282c-7.044-5.838-17.44-5.01-23.47,1.76c5.073-7.51,3.276-17.723-4.164-23.051c-7.431-5.318-17.731-3.77-23.276,3.404c4.531-7.838,2.019-17.897-5.769-22.696c-7.787-4.789-17.962-2.529-22.976,5.01c3.98-8.136,0.782-18.002-7.315-22.253c-8.097-4.25-18.078-1.308-22.581,6.549c3.42-8.376-0.444-18.002-8.803-21.695c-8.357-3.702-18.106-0.106-22.078,8.011c2.831-8.578-1.652-17.907-10.242-21.041c-8.581-3.135-18.078,1.096-21.489,9.472c2.27-8.751-2.831-17.782-11.604-20.349c-8.764-2.568-17.943,2.261-20.813,10.829c1.68-8.867-3.99-17.532-12.9-19.532c-8.918-1.99-17.769,3.414-20.068,12.146c1.101-8.953-5.111-17.243-14.136-18.666c-9.025-1.423-17.508,4.54-19.247,13.397c0.541-9.011-6.194-16.888-15.286-17.743c-9.083-0.846-17.17,5.616-18.349,14.55c-0.048-9.011-7.256-16.435-16.378-16.723c-9.141-0.288-16.812,6.693-17.402,15.704c-0.59-9.011-8.252-16.003-17.383-15.733c-9.121,0.279-16.339,7.684-16.406,16.695C465.5,7.769,457.431,1.287,448.34,2.124v0.009c-9.092,0.837-15.837,8.703-15.315,17.705C431.305,10.981,422.831,5,413.798,6.413h0.009c-9.035,1.413-15.266,9.684-14.174,18.637c-2.281-8.732-11.122-14.156-20.04-12.175c-8.919,1.991-14.609,10.646-12.938,19.522c-2.841-8.578-12.03-13.425-20.803-10.876c-8.773,2.558-13.894,11.579-11.633,20.33c-3.402-8.386-12.88-12.636-21.48-9.511c-8.589,3.125-13.102,12.463-10.271,21.051c-3.942-8.145-13.701-11.761-22.069-8.078c-8.368,3.683-12.242,13.3-8.841,21.686c-4.483-7.866-14.464-10.828-22.561-6.588c-8.106,4.232-11.324,14.089-7.363,22.234c-5.005-7.549-15.17-9.819-22.967-5.049c-7.788,4.78-10.329,14.829-5.817,22.687c-5.517-7.184-15.817-8.752-23.266-3.443c-7.44,5.308-9.266,15.521-4.203,23.042c-6.02-6.79-16.416-7.636-23.46-1.808c-7.14,5.885-8.174,16.396-2.348,23.551c-6.474-6.578-17.083-6.751-23.779-0.356c-6.677,6.377-6.948,16.897-0.657,23.61c-6.957-6.03-17.518-5.415-23.702,1.443c-6.174,6.846-5.671,17.349,1.082,23.58c-7.392-5.471-17.856-4.049-23.489,3.25c-5.614,7.271-4.338,17.657,2.812,23.369c-7.788-4.818-18.059-2.568-23.093,5.116c-5.015,7.664-2.957,17.877,4.57,23.042c-8.136-4.135-18.156-1.077-22.533,6.963c-4.377,8.011-1.526,17.993,6.329,22.561c-8.435-3.395-18.117,0.471-21.808,8.818c-3.681,8.309-0.058,18.002,8.097,21.926c-8.677-2.635-17.943,2.029-20.919,10.626c-2.967,8.559,1.42,17.878,9.817,21.148c-8.831-1.837-17.614,3.568-19.836,12.358c-2.242,8.837,2.995,17.8,11.73,20.291c-9.015-1.173-17.392,4.992-18.871,13.983c-1.469,8.991,4.512,17.483,13.43,19.224c-9.082-0.394-16.89,6.453-17.585,15.531c-0.696,9.117,6.039,17.09,15.121,18.022c-9.121,0.327-16.378,7.828-16.29,16.964c0.077,9.136,7.45,16.493,16.561,16.676c-9.044,1.115-15.614,9.193-14.754,18.291c0.86,9.088,8.851,15.81,17.953,15.204c-8.928,1.875-14.783,10.492-13.15,19.474c1.643,8.992,10.184,15.012,19.199,13.628c-8.735,2.616-13.837,11.704-11.431,20.522c2.406,8.828,11.431,14.098,20.31,11.944c-8.493,3.346-12.812,12.829-9.662,21.416c3.15,8.588,12.58,13.079,21.238,10.194c-8.174,4.038-11.672,13.848-7.817,22.137c3.855,8.29,13.623,11.982,22.01,8.405c-7.817,4.684-10.503,14.743-5.981,22.695v-0.009c4.522,7.954,14.561,10.848,22.62,6.597c-7.401,5.289-9.276,15.521-4.136,23.09c5.131,7.568,15.373,9.646,23.064,4.779c-6.966,5.857-8.039,16.195-2.319,23.34c5.701,7.136,16.058,8.433,23.354,3.001c-6.483,6.356-6.764,16.742-0.532,23.426c6.232,6.693,16.648,7.203,23.508,1.25c-5.99,6.819-5.488,17.185,1.218,23.388c6.706,6.212,17.121,5.963,23.518-0.461c-5.459,7.222-4.203,17.512,2.927,23.224c7.131,5.703,17.489,4.713,23.412-2.135c-4.928,7.587-2.947,17.753,4.57,22.946c7.508,5.183,17.759,3.471,23.19-3.76c-4.377,7.905-1.691,17.907,6.164,22.561c7.865,4.664,17.982,2.241,22.889-5.376c-3.845,8.193-0.483,18.002,7.682,22.119c8.165,4.126,18.098,1.019,22.465-6.915c-3.285,8.434,0.734,17.993,9.16,21.561c8.416,3.568,18.117-0.193,21.943-8.386c-2.705,8.626,1.932,17.896,10.57,20.897v0.01c8.812,3.058,18.456-1.568,21.537-10.348c0.032-0.091,0.051-0.182,0.081-0.273c0.23,0.072,0.462,0.139,0.692,0.211c-0.139,0.485-0.27,0.975-0.367,1.467c-0.106,0.539-0.193,1.088-0.242,1.626c-0.058,0.548-0.087,1.106-0.087,1.654c0,0.558,0.029,1.116,0.087,1.664c0.049,0.538,0.136,1.087,0.242,1.625c0.107,0.539,0.252,1.077,0.406,1.606c0.165,0.519,0.348,1.039,0.56,1.549c0.213,0.501,0.444,1.01,0.706,1.49c0.26,0.481,0.541,0.962,0.85,1.414c0.31,0.461,0.638,0.903,0.986,1.327c0.347,0.432,0.725,0.846,1.12,1.23c0.387,0.385,0.802,0.76,1.228,1.116c0.425,0.347,0.879,0.673,1.343,0.971c0.454,0.308,0.928,0.596,1.42,0.847c0.483,0.259,0.986,0.5,1.498,0.702c0.502,0.211,1.024,0.404,1.555,0.558c0.522,0.163,1.063,0.298,1.604,0.404c0.542,0.116,1.092,0.193,1.643,0.25c0.551,0.058,1.112,0.086,1.662,0.086c0.551,0,1.112-0.028,1.663-0.086c0.55-0.057,1.101-0.134,1.642-0.25c0.542-0.106,1.082-0.24,1.604-0.404c0.522-0.154,1.053-0.347,1.556-0.558c0.512-0.202,1.014-0.442,1.497-0.702c0.483-0.251,0.966-0.539,1.42-0.847c0.464-0.298,0.909-0.625,1.333-0.971c0.435-0.356,0.851-0.731,1.237-1.116c0.396-0.384,0.763-0.798,1.121-1.23c0.348-0.424,0.677-0.866,0.985-1.327c0.3-0.453,0.59-0.933,0.851-1.414c0.251-0.481,0.493-0.99,0.705-1.49c0.212-0.51,0.396-1.029,0.56-1.549c0.155-0.529,0.29-1.067,0.406-1.606c0.107-0.538,0.184-1.087,0.242-1.625c0.059-0.548,0.087-1.106,0.087-1.664c0-0.548-0.028-1.105-0.087-1.654c-0.058-0.538-0.135-1.087-0.242-1.626c-0.116-0.538-0.251-1.076-0.406-1.606c-0.164-0.519-0.348-1.039-0.56-1.548c-0.212-0.501-0.454-1.011-0.705-1.491c-0.261-0.481-0.551-0.962-0.851-1.413c-0.309-0.452-0.637-0.903-0.985-1.327c-0.348-0.433-0.725-0.846-1.121-1.231c-0.386-0.384-0.802-0.76-1.227-1.115c-0.435-0.346-0.879-0.673-1.344-0.972c-0.454-0.307-0.937-0.596-1.42-0.846c-0.483-0.259-0.985-0.5-1.497-0.702c-0.503-0.212-1.034-0.404-1.556-0.558c-0.522-0.163-1.062-0.299-1.604-0.404c-0.541-0.115-1.092-0.193-1.642-0.251c-1.102-0.105-2.223-0.105-3.324,0c-0.551,0.058-1.101,0.135-1.643,0.251c-0.541,0.105-1.082,0.24-1.604,0.404c-0.531,0.154-1.053,0.346-1.555,0.558c-0.512,0.202-1.015,0.442-1.498,0.702c-0.493,0.25-0.966,0.539-1.43,0.846c-0.454,0.299-0.909,0.625-1.333,0.972c-0.087,0.073-0.167,0.154-0.253,0.228c-0.182-0.225-0.366-0.447-0.547-0.673c7.28-5.472,8.912-15.744,3.592-23.184h-0.009c-5.335-7.448-15.633-9.255-23.206-4.169c-0.159-0.247-0.314-0.498-0.472-0.746c7.842-4.689,10.53-14.781,5.967-22.743c-4.565-7.958-14.661-10.784-22.725-6.441c-0.134-0.259-0.265-0.519-0.398-0.779c8.258-3.987,11.827-13.832,7.972-22.169c-3.856-8.341-13.706-12.022-22.123-8.367c-0.112-0.268-0.222-0.538-0.333-0.806c8.557-3.329,12.901-12.881,9.702-21.495c-3.201-8.627-12.754-13.065-21.433-10.044c-0.091-0.274-0.18-0.549-0.27-0.823c8.791-2.71,13.811-11.933,11.239-20.763c-2.581-8.829-11.783-13.937-20.672-11.53c-0.073-0.284-0.143-0.568-0.215-0.853c8.96-2.092,14.616-10.954,12.656-19.938c-1.961-8.993-10.799-14.716-19.832-12.924c-0.052-0.286-0.104-0.571-0.155-0.857c9.085-1.476,15.334-9.927,14.006-19.022c-1.338-9.102-9.746-15.415-18.875-14.252c-0.032-0.291-0.065-0.583-0.097-0.874c9.155-0.822,15.998-8.781,15.349-17.945c-0.659-9.16-8.574-16.071-17.746-15.596c-0.009-0.29-0.015-0.578-0.024-0.867c9.171-0.087,16.631-7.441,16.747-16.619c0.113-9.152-7.147-16.674-16.297-17.006c0.018-0.285,0.039-0.566,0.057-0.85c0.536,0.052,1.069,0.084,1.601,0.084c8.396,0,15.681-6.223,16.754-14.733c1.144-9.022-5.127-17.252-14.074-18.687c0.056-0.277,0.112-0.555,0.169-0.831c1.374,0.34,2.755,0.516,4.109,0.516c7.275,0,13.99-4.703,16.194-11.993c2.591-8.612-2.094-17.666-10.505-20.66c0.108-0.254,0.22-0.503,0.329-0.755c2.419,1.212,5.013,1.798,7.577,1.798c5.797,0,11.45-2.982,14.6-8.328c4.525-7.682,2.22-17.45-5.062-22.386c0.17-0.214,0.339-0.429,0.51-0.641c3.227,2.978,7.348,4.496,11.479,4.496c4.136,0,8.281-1.501,11.547-4.529v-0.01c6.531-6.068,7.12-16.086,1.57-22.887c0.223-0.157,0.447-0.312,0.672-0.468c3.149,5.159,8.712,8.074,14.445,8.074c2.677,0,5.392-0.625,7.914-1.962c7.985-4.216,11.162-13.893,7.393-21.948c0.304-0.123,0.605-0.248,0.91-0.369c0.103,0.293,0.196,0.59,0.316,0.872c0.212,0.509,0.444,1.01,0.706,1.49c0.26,0.481,0.541,0.962,0.85,1.413c0.299,0.462,0.638,0.904,0.985,1.327c0.348,0.433,0.725,0.846,1.112,1.231c0.396,0.394,0.811,0.76,1.236,1.116c0.426,0.347,0.879,0.673,1.334,0.98c0.463,0.299,0.937,0.587,1.43,0.847c0.483,0.25,0.986,0.49,1.488,0.702c0.512,0.211,1.034,0.394,1.565,0.558c0.522,0.154,1.062,0.288,1.604,0.404c0.541,0.106,1.092,0.183,1.643,0.24c0.55,0.057,1.111,0.086,1.662,0.086s1.111-0.029,1.662-0.086c0.542-0.057,1.102-0.134,1.643-0.24c0.531-0.115,1.073-0.25,1.604-0.404c0.522-0.163,1.044-0.347,1.555-0.558c0.512-0.211,1.015-0.452,1.498-0.702c0.483-0.26,0.966-0.548,1.42-0.847c0.463-0.307,0.908-0.634,1.333-0.98c0.435-0.356,0.85-0.721,1.237-1.116c0.386-0.385,0.763-0.798,1.121-1.231c0.347-0.423,0.676-0.865,0.985-1.327c0.098-0.147,0.191-0.301,0.286-0.454c0.191,0.114,0.379,0.232,0.571,0.346c-0.048,0.083-0.104,0.159-0.151,0.243c-4.512,8.145-1.547,18.377,6.637,22.868h-0.009c2.59,1.424,5.401,2.097,8.155,2.097c5.962,0,11.739-3.136,14.822-8.704c0.049-0.088,0.084-0.179,0.131-0.268c0.199,0.101,0.397,0.205,0.597,0.305c-0.043,0.089-0.096,0.171-0.138,0.261c-3.942,8.424-0.271,18.435,8.203,22.359c2.31,1.068,4.735,1.567,7.112,1.567c6.377,0,12.484-3.606,15.353-9.742c0.042-0.09,0.071-0.183,0.111-0.273c0.203,0.086,0.406,0.173,0.61,0.259c-0.038,0.093-0.086,0.179-0.122,0.274c-3.353,8.675,0.995,18.407,9.71,21.753c2,0.76,4.049,1.125,6.068,1.125c6.793,0,13.199-4.106,15.788-10.79c0.036-0.094,0.059-0.19,0.094-0.285c0.209,0.072,0.419,0.143,0.628,0.215c-0.032,0.095-0.073,0.185-0.103,0.281c-2.764,8.877,2.232,18.301,11.15,21.052c1.671,0.509,3.353,0.749,5.005,0.749c7.217,0,13.904-4.635,16.146-11.858c0.028-0.09,0.043-0.18,0.069-0.269c0.215,0.059,0.433,0.113,0.648,0.172c-0.024,0.092-0.057,0.179-0.08,0.272c-2.165,9.039,3.439,18.118,12.532,20.272c1.314,0.307,2.628,0.461,3.933,0.461c7.643,0,14.58-5.203,16.435-12.935c0.022-0.094,0.032-0.187,0.052-0.281c0.216,0.044,0.43,0.091,0.646,0.135c-0.017,0.092-0.045,0.18-0.061,0.272c-1.565,9.164,4.628,17.858,13.837,19.416c0.956,0.163,1.913,0.24,2.85,0.24c8.097,0,15.257-5.809,16.658-14.012c0.017-0.097,0.02-0.193,0.034-0.289c0.219,0.03,0.439,0.059,0.658,0.089c-0.012,0.097-0.035,0.19-0.045,0.288c-0.966,9.241,5.788,17.512,15.074,18.474c0.589,0.067,1.188,0.096,1.768,0.096c8.551,0,15.894-6.443,16.802-15.099c0.009-0.087,0.006-0.173,0.014-0.26c0.219,0.016,0.439,0.029,0.658,0.044c-0.005,0.089-0.021,0.175-0.024,0.264c-0.367,9.29,6.899,17.119,16.232,17.484c0.223,0.009,0.454,0.019,0.677,0.019c9.034,0,16.522-7.106,16.88-16.165c0.004-0.095-0.005-0.188-0.003-0.283c0.226,0.002,0.452,0.004,0.678,0.006c0.001,0.096-0.01,0.19-0.008,0.286c0.212,9.156,7.739,16.435,16.9,16.435c0.135,0,0.27-0.009,0.406-0.009c9.333-0.222,16.716-7.924,16.503-17.224c-0.002-0.09-0.016-0.177-0.02-0.267c0.222-0.012,0.445-0.019,0.667-0.032c0.006,0.09,0.002,0.179,0.01,0.27c0.773,8.761,8.154,15.368,16.832,15.368c0.493,0,0.985-0.02,1.488-0.068c9.305-0.808,16.184-8.973,15.373-18.233c-0.008-0.094-0.029-0.184-0.039-0.277c0.244-0.029,0.487-0.061,0.73-0.09c0.049,0.345,0.091,0.691,0.158,1.031c0.107,0.538,0.242,1.077,0.406,1.596c0.164,0.529,0.348,1.048,0.56,1.548c0.212,0.51,0.444,1.01,0.705,1.49c0.261,0.491,0.542,0.962,0.851,1.424c0.309,0.452,0.637,0.904,0.985,1.327c0.348,0.424,0.725,0.837,1.112,1.231c0.395,0.384,0.811,0.76,1.236,1.105c0.426,0.347,0.879,0.683,1.333,0.981c0.464,0.308,0.938,0.587,1.43,0.846c0.483,0.259,0.985,0.49,1.488,0.702c0.512,0.211,1.034,0.393,1.565,0.557c0.522,0.154,1.062,0.299,1.604,0.405c0.541,0.105,1.092,0.192,1.642,0.24c0.551,0.057,1.112,0.086,1.663,0.086c0.55,0,1.111-0.029,1.662-0.086c0.036-0.003,0.073-0.01,0.109-0.013c-6.443,3.445-10.126,10.808-8.545,18.285c1.614,7.606,8.146,12.924,15.586,13.338c-7.112,2.414-11.972,9.358-11.402,17.157c0.58,7.895,6.542,14.117,14.049,15.377c-7.478,1.606-13.14,8.155-13.314,16.099c-0.164,7.982,5.294,14.791,12.753,16.666c-7.642,0.98-13.874,7.106-14.647,15.069c-0.783,7.982,4.173,15.194,11.517,17.609c-7.72,0.423-14.397,6.125-15.721,14.031c-1.324,7.905,3.121,15.444,10.271,18.349c-7.73-0.068-14.744,5.174-16.59,12.983c-1.846,7.799,2.097,15.617,9.054,18.983c-7.71-0.586-15.073,4.193-17.44,11.858c-2.358,7.665,1.053,15.724,7.778,19.542c-7.652-1.106-15.325,3.144-18.204,10.626h-0.009c-2.88,7.473-0.048,15.733,6.367,20.013c-7.536-1.655-15.479,2.01-18.919,9.241c-3.42,7.203-1.265,15.608,4.744,20.359c-7.333-2.212-15.498,0.779-19.518,7.655c-4,6.857-2.6,15.359,2.918,20.609c-7.063-2.837-15.411-0.644-20.059,5.779c-4.619,6.399-4.069,14.916,0.82,20.675c-0.477-0.255-0.972-0.492-1.477-0.691c-0.503-0.212-1.034-0.404-1.556-0.558c-0.522-0.163-1.062-0.299-1.604-0.404c-0.541-0.115-1.092-0.193-1.642-0.251c-1.102-0.105-2.223-0.105-3.324,0c-0.551,0.058-1.101,0.135-1.643,0.251c-0.541,0.105-1.082,0.24-1.604,0.404c-0.522,0.154-1.053,0.346-1.555,0.558c-0.512,0.202-1.014,0.442-1.497,0.702c-0.493,0.25-0.966,0.539-1.421,0.846c-0.463,0.299-0.917,0.625-1.343,0.972c-0.426,0.355-0.841,0.731-1.228,1.115c-0.395,0.385-0.773,0.798-1.12,1.231c-0.348,0.424-0.677,0.875-0.986,1.327s-0.589,0.933-0.85,1.413c-0.26,0.481-0.493,0.991-0.705,1.491c-0.213,0.509-0.396,1.028-0.56,1.548c-0.164,0.53-0.3,1.068-0.406,1.606c-0.107,0.539-0.193,1.088-0.252,1.626c-0.048,0.548-0.077,1.106-0.077,1.654c0,0.558,0.029,1.116,0.077,1.664c0.058,0.538,0.145,1.087,0.252,1.625c0.106,0.539,0.242,1.077,0.406,1.606c0.164,0.519,0.347,1.039,0.56,1.549c0.212,0.501,0.444,1.01,0.705,1.49c0.261,0.481,0.541,0.962,0.85,1.414c0.31,0.461,0.638,0.903,0.986,1.327c0.347,0.432,0.725,0.846,1.12,1.23c0.387,0.385,0.802,0.76,1.228,1.116c0.426,0.347,0.879,0.673,1.343,0.971c0.455,0.308,0.928,0.596,1.421,0.847c0.483,0.259,0.985,0.5,1.497,0.702c0.502,0.211,1.033,0.404,1.555,0.558c0.522,0.163,1.063,0.298,1.604,0.404c0.542,0.116,1.092,0.193,1.643,0.25c0.551,0.058,1.112,0.086,1.662,0.086c0.551,0,1.112-0.028,1.663-0.086c0.55-0.057,1.101-0.134,1.642-0.25c0.542-0.106,1.082-0.24,1.604-0.404c0.522-0.154,1.053-0.347,1.556-0.558c0.512-0.202,1.014-0.442,1.497-0.702c0.493-0.251,0.966-0.539,1.42-0.847c0.464-0.298,0.918-0.625,1.344-0.971c0.425-0.356,0.841-0.731,1.227-1.116c0.396-0.384,0.773-0.798,1.121-1.23c0.348-0.424,0.677-0.866,0.986-1.327c0.309-0.453,0.589-0.933,0.85-1.414c0.26-0.481,0.493-0.99,0.705-1.49c0.212-0.51,0.396-1.029,0.56-1.549c0.155-0.529,0.3-1.067,0.406-1.606c0.107-0.538,0.193-1.087,0.242-1.625c0.059-0.548,0.087-1.106,0.087-1.664c0-0.548-0.028-1.105-0.087-1.654c-0.048-0.538-0.135-1.087-0.242-1.626c-0.053-0.271-0.117-0.543-0.186-0.813c2.524,6.74,8.958,10.949,15.83,10.949c1.846,0,3.71-0.298,5.556-0.933h-0.009c8.647-2.991,13.305-12.271,10.599-20.907c3.806,8.213,13.507,11.993,21.943,8.434c8.435-3.549,12.454-13.118,9.179-21.561c4.348,7.953,14.291,11.078,22.465,6.962c8.174-4.106,11.547-13.915,7.71-22.119c4.88,7.636,15.015,10.069,22.89,5.424c7.885-4.665,10.58-14.714,6.146-22.638c5.401,7.308,15.701,9.068,23.247,3.876c7.536-5.193,9.527-15.397,4.571-22.994c5.903,6.905,16.29,7.924,23.45,2.221c7.16-5.712,8.416-16.031,2.918-23.273c6.387,6.482,16.833,6.761,23.567,0.548c6.725-6.212,7.237-16.608,1.217-23.427c6.841,6.001,17.296,5.52,23.547-1.173c6.251-6.684,5.991-17.079-0.503-23.446c7.285,5.462,17.654,4.183,23.373-2.953c5.729-7.136,4.676-17.474-2.281-23.339c7.691,4.885,17.934,2.817,23.084-4.741h-0.009c5.159-7.559,3.294-17.811-4.107-23.109c8.048,4.269,18.106,1.404,22.648-6.55h-0.009c4.531-7.934,1.865-17.993-5.923-22.695c8.368,3.587,18.145-0.086,22.01-8.367c3.865-8.279,0.387-18.089-7.768-22.148c8.648,2.885,18.079-1.586,21.248-10.155c3.16-8.578-1.13-18.061-9.594-21.426c8.86,2.145,17.875-3.106,20.3-11.915c2.425-8.809-2.657-17.907-11.401-20.542c9.024,1.404,17.576-4.596,19.228-13.588h0.009c1.652-8.982-4.184-17.608-13.092-19.503c9.091,0.616,17.073-6.087,17.953-15.175C999.003,479.721,992.453,471.624,983.409,470.499z' />
                        <path id='shigeru_logo_afro_w' d='M983.409,470.499c9.111-0.163,16.494-7.511,16.59-16.647c0.107-9.107-7.092-16.608-16.175-16.993c9.044-0.951,15.75-8.896,15.074-17.984c-0.677-9.078-8.474-15.944-17.556-15.569c8.918-1.721,14.918-10.193,13.459-19.195c-1.449-8.992-9.826-15.166-18.841-14.021c8.744-2.472,14.001-11.425,11.779-20.263c-2.242-8.905-11.218-14.367-20.165-12.328c8.619-3.136,13.17-12.579,10.184-21.254c-2.976-8.655-12.339-13.328-21.054-10.608c8.271-3.875,11.971-13.617,8.28-21.993c-3.681-8.348-13.353-12.233-21.788-8.857c7.855-4.549,10.715-14.522,6.358-22.542c-4.339-8.001-14.261-11.088-22.378-7.068c7.421-5.175,9.45-15.32,4.474-22.946c-4.966-7.616-15.063-9.914-22.832-5.299c6.957-5.742,8.165-15.983,2.618-23.186c-5.536-7.193-15.759-8.703-23.141-3.539c6.474-6.251,6.89-16.532,0.822-23.282c-6.059-6.742-16.349-7.482-23.306-1.808c5.952-6.713,5.585-16.974-0.957-23.244c-6.599-6.328-17.025-6.261-23.537,0.067c5.594-7.136,4.522-17.454-2.513-23.282c-7.044-5.838-17.44-5.01-23.47,1.76c5.073-7.51,3.276-17.723-4.164-23.051c-7.431-5.318-17.731-3.77-23.276,3.404c4.531-7.838,2.019-17.897-5.769-22.696c-7.787-4.789-17.962-2.529-22.976,5.01c3.98-8.136,0.782-18.002-7.315-22.253c-8.097-4.25-18.078-1.308-22.581,6.549c3.42-8.376-0.444-18.002-8.803-21.695c-8.357-3.702-18.106-0.106-22.078,8.011c2.831-8.578-1.652-17.907-10.242-21.041c-8.581-3.135-18.078,1.096-21.489,9.472c2.27-8.751-2.831-17.782-11.604-20.349c-8.764-2.568-17.943,2.261-20.813,10.829c1.68-8.867-3.99-17.532-12.9-19.532c-8.918-1.99-17.769,3.414-20.068,12.146c1.101-8.953-5.111-17.243-14.136-18.666c-9.025-1.423-17.508,4.54-19.247,13.397c0.541-9.011-6.194-16.888-15.286-17.743c-9.083-0.846-17.17,5.616-18.349,14.55c-0.048-9.011-7.256-16.435-16.378-16.723c-9.141-0.288-16.812,6.693-17.402,15.704c-0.59-9.011-8.252-16.003-17.383-15.733c-9.121,0.279-16.339,7.684-16.406,16.695C465.5,7.769,457.431,1.287,448.34,2.124v0.009c-9.092,0.837-15.837,8.703-15.315,17.705C431.305,10.981,422.831,5,413.798,6.413h0.009c-9.035,1.413-15.266,9.684-14.174,18.637c-2.281-8.732-11.122-14.156-20.04-12.175c-8.919,1.991-14.609,10.646-12.938,19.522c-2.841-8.578-12.03-13.425-20.803-10.876c-8.773,2.558-13.894,11.579-11.633,20.33c-3.402-8.386-12.88-12.636-21.48-9.511c-8.589,3.125-13.102,12.463-10.271,21.051c-3.942-8.145-13.701-11.761-22.069-8.078c-8.368,3.683-12.242,13.3-8.841,21.686c-4.483-7.866-14.464-10.828-22.561-6.588c-8.106,4.232-11.324,14.089-7.363,22.234c-5.005-7.549-15.17-9.819-22.967-5.049c-7.788,4.78-10.329,14.829-5.817,22.687c-5.517-7.184-15.817-8.752-23.266-3.443c-7.44,5.308-9.266,15.521-4.203,23.042c-6.02-6.79-16.416-7.636-23.46-1.808c-7.14,5.885-8.174,16.396-2.348,23.551c-6.474-6.578-17.083-6.751-23.779-0.356c-6.677,6.377-6.948,16.897-0.657,23.61c-6.957-6.03-17.518-5.415-23.702,1.443c-6.174,6.846-5.671,17.349,1.082,23.58c-7.392-5.471-17.856-4.049-23.489,3.25c-5.614,7.271-4.338,17.657,2.812,23.369c-7.788-4.818-18.059-2.568-23.093,5.116c-5.015,7.664-2.957,17.877,4.57,23.042c-8.136-4.135-18.156-1.077-22.533,6.963c-4.377,8.011-1.526,17.993,6.329,22.561c-8.435-3.395-18.117,0.471-21.808,8.818c-3.681,8.309-0.058,18.002,8.097,21.926c-8.677-2.635-17.943,2.029-20.919,10.626c-2.967,8.559,1.42,17.878,9.817,21.148c-8.831-1.837-17.614,3.568-19.836,12.358c-2.242,8.837,2.995,17.8,11.73,20.291c-9.015-1.173-17.392,4.992-18.871,13.983c-1.469,8.991,4.512,17.483,13.43,19.224c-9.082-0.394-16.89,6.453-17.585,15.531c-0.696,9.117,6.039,17.09,15.121,18.022c-9.121,0.327-16.378,7.828-16.29,16.964c0.077,9.136,7.45,16.493,16.561,16.676c-9.044,1.115-15.614,9.193-14.754,18.291c0.86,9.088,8.851,15.81,17.953,15.204c-8.928,1.875-14.783,10.492-13.15,19.474c1.643,8.992,10.184,15.012,19.199,13.628c-8.735,2.616-13.837,11.704-11.431,20.522c2.406,8.828,11.431,14.098,20.31,11.944c-8.493,3.346-12.812,12.829-9.662,21.416c3.15,8.588,12.58,13.079,21.238,10.194c-8.174,4.038-11.672,13.848-7.817,22.137c3.855,8.29,13.623,11.982,22.01,8.405c-7.817,4.684-10.503,14.743-5.981,22.695v-0.009c4.522,7.954,14.561,10.848,22.62,6.597c-7.401,5.289-9.276,15.521-4.136,23.09c5.131,7.568,15.373,9.646,23.064,4.779c-6.966,5.857-8.039,16.195-2.319,23.34c5.701,7.136,16.058,8.433,23.354,3.001c-6.483,6.356-6.764,16.742-0.532,23.426c6.232,6.693,16.648,7.203,23.508,1.25c-5.99,6.819-5.488,17.185,1.218,23.388c6.706,6.212,17.121,5.963,23.518-0.461c-5.459,7.222-4.203,17.512,2.927,23.224c7.131,5.703,17.489,4.713,23.412-2.135c-4.928,7.587-2.947,17.753,4.57,22.946c7.508,5.183,17.759,3.471,23.19-3.76c-4.377,7.905-1.691,17.907,6.164,22.561c7.865,4.664,17.982,2.241,22.889-5.376c-3.845,8.193-0.483,18.002,7.682,22.119c8.165,4.126,18.098,1.019,22.465-6.915c-3.285,8.434,0.734,17.993,9.16,21.561c8.416,3.568,18.117-0.193,21.943-8.386c-2.705,8.626,1.932,17.896,10.57,20.897v0.01c8.812,3.058,18.456-1.568,21.537-10.348c0.032-0.091,0.051-0.182,0.081-0.273c0.23,0.072,0.462,0.139,0.692,0.211c-0.139,0.485-0.27,0.975-0.367,1.467c-0.106,0.539-0.193,1.088-0.242,1.626c-0.058,0.548-0.087,1.106-0.087,1.654c0,0.558,0.029,1.116,0.087,1.664c0.049,0.538,0.136,1.087,0.242,1.625c0.107,0.539,0.252,1.077,0.406,1.606c0.165,0.519,0.348,1.039,0.56,1.549c0.213,0.501,0.444,1.01,0.706,1.49c0.26,0.481,0.541,0.962,0.85,1.414c0.31,0.461,0.638,0.903,0.986,1.327c0.347,0.432,0.725,0.846,1.12,1.23c0.387,0.385,0.802,0.76,1.228,1.116c0.425,0.347,0.879,0.673,1.343,0.971c0.454,0.308,0.928,0.596,1.42,0.847c0.483,0.259,0.986,0.5,1.498,0.702c0.502,0.211,1.024,0.404,1.555,0.558c0.522,0.163,1.063,0.298,1.604,0.404c0.542,0.116,1.092,0.193,1.643,0.25c0.551,0.058,1.112,0.086,1.662,0.086c0.551,0,1.112-0.028,1.663-0.086c0.55-0.057,1.101-0.134,1.642-0.25c0.542-0.106,1.082-0.24,1.604-0.404c0.522-0.154,1.053-0.347,1.556-0.558c0.512-0.202,1.014-0.442,1.497-0.702c0.483-0.251,0.966-0.539,1.42-0.847c0.464-0.298,0.909-0.625,1.333-0.971c0.435-0.356,0.851-0.731,1.237-1.116c0.396-0.384,0.763-0.798,1.121-1.23c0.348-0.424,0.677-0.866,0.985-1.327c0.3-0.453,0.59-0.933,0.851-1.414c0.251-0.481,0.493-0.99,0.705-1.49c0.212-0.51,0.396-1.029,0.56-1.549c0.155-0.529,0.29-1.067,0.406-1.606c0.107-0.538,0.184-1.087,0.242-1.625c0.059-0.548,0.087-1.106,0.087-1.664c0-0.548-0.028-1.105-0.087-1.654c-0.058-0.538-0.135-1.087-0.242-1.626c-0.116-0.538-0.251-1.076-0.406-1.606c-0.164-0.519-0.348-1.039-0.56-1.548c-0.212-0.501-0.454-1.011-0.705-1.491c-0.261-0.481-0.551-0.962-0.851-1.413c-0.309-0.452-0.637-0.903-0.985-1.327c-0.348-0.433-0.725-0.846-1.121-1.231c-0.386-0.384-0.802-0.76-1.227-1.115c-0.435-0.346-0.879-0.673-1.344-0.972c-0.454-0.307-0.937-0.596-1.42-0.846c-0.483-0.259-0.985-0.5-1.497-0.702c-0.503-0.212-1.034-0.404-1.556-0.558c-0.522-0.163-1.062-0.299-1.604-0.404c-0.541-0.115-1.092-0.193-1.642-0.251c-1.102-0.105-2.223-0.105-3.324,0c-0.551,0.058-1.101,0.135-1.643,0.251c-0.541,0.105-1.082,0.24-1.604,0.404c-0.531,0.154-1.053,0.346-1.555,0.558c-0.512,0.202-1.015,0.442-1.498,0.702c-0.493,0.25-0.966,0.539-1.43,0.846c-0.454,0.299-0.909,0.625-1.333,0.972c-0.087,0.073-0.167,0.154-0.253,0.228c-0.182-0.225-0.366-0.447-0.547-0.673c7.28-5.472,8.912-15.744,3.592-23.184h-0.009c-5.335-7.448-15.633-9.255-23.206-4.169c-0.159-0.247-0.314-0.498-0.472-0.746c7.842-4.689,10.53-14.781,5.967-22.743c-4.565-7.958-14.661-10.784-22.725-6.441c-0.134-0.259-0.265-0.519-0.398-0.779c8.258-3.987,11.827-13.832,7.972-22.169c-3.856-8.341-13.706-12.022-22.123-8.367c-0.112-0.268-0.222-0.538-0.333-0.806c8.557-3.329,12.901-12.881,9.702-21.495c-3.201-8.627-12.754-13.065-21.433-10.044c-0.091-0.274-0.18-0.549-0.27-0.823c8.791-2.71,13.811-11.933,11.239-20.763c-2.581-8.829-11.783-13.937-20.672-11.53c-0.073-0.284-0.143-0.568-0.215-0.853c8.96-2.092,14.616-10.954,12.656-19.938c-1.961-8.993-10.799-14.716-19.832-12.924c-0.052-0.286-0.104-0.571-0.155-0.857c9.085-1.476,15.334-9.927,14.006-19.022c-1.338-9.102-9.746-15.415-18.875-14.252c-0.032-0.291-0.065-0.583-0.097-0.874c9.155-0.822,15.998-8.781,15.349-17.945c-0.659-9.16-8.574-16.071-17.746-15.596c-0.009-0.29-0.015-0.578-0.024-0.867c9.171-0.087,16.631-7.441,16.747-16.619c0.113-9.152-7.147-16.674-16.297-17.006c0.018-0.285,0.039-0.566,0.057-0.85c0.536,0.052,1.069,0.084,1.601,0.084c8.396,0,15.681-6.223,16.754-14.733c1.144-9.022-5.127-17.252-14.074-18.687c0.056-0.277,0.112-0.555,0.169-0.831c1.374,0.34,2.755,0.516,4.109,0.516c7.275,0,13.99-4.703,16.194-11.993c2.591-8.612-2.094-17.666-10.505-20.66c0.108-0.254,0.22-0.503,0.329-0.755c2.419,1.212,5.013,1.798,7.577,1.798c5.797,0,11.45-2.982,14.6-8.328c4.525-7.682,2.22-17.45-5.062-22.386c0.17-0.214,0.339-0.429,0.51-0.641c3.227,2.978,7.348,4.496,11.479,4.496c4.136,0,8.281-1.501,11.547-4.529v-0.01c6.531-6.068,7.12-16.086,1.57-22.887c0.223-0.157,0.447-0.312,0.672-0.468c3.149,5.159,8.712,8.074,14.445,8.074c2.677,0,5.392-0.625,7.914-1.962c7.985-4.216,11.162-13.893,7.393-21.948c0.304-0.123,0.605-0.248,0.91-0.369c0.103,0.293,0.196,0.59,0.316,0.872c0.212,0.509,0.444,1.01,0.706,1.49c0.26,0.481,0.541,0.962,0.85,1.413c0.299,0.462,0.638,0.904,0.985,1.327c0.348,0.433,0.725,0.846,1.112,1.231c0.396,0.394,0.811,0.76,1.236,1.116c0.426,0.347,0.879,0.673,1.334,0.98c0.463,0.299,0.937,0.587,1.43,0.847c0.483,0.25,0.986,0.49,1.488,0.702c0.512,0.211,1.034,0.394,1.565,0.558c0.522,0.154,1.062,0.288,1.604,0.404c0.541,0.106,1.092,0.183,1.643,0.24c0.55,0.057,1.111,0.086,1.662,0.086s1.111-0.029,1.662-0.086c0.542-0.057,1.102-0.134,1.643-0.24c0.531-0.115,1.073-0.25,1.604-0.404c0.522-0.163,1.044-0.347,1.555-0.558c0.512-0.211,1.015-0.452,1.498-0.702c0.483-0.26,0.966-0.548,1.42-0.847c0.463-0.307,0.908-0.634,1.333-0.98c0.435-0.356,0.85-0.721,1.237-1.116c0.386-0.385,0.763-0.798,1.121-1.231c0.347-0.423,0.676-0.865,0.985-1.327c0.098-0.147,0.191-0.301,0.286-0.454c0.191,0.114,0.379,0.232,0.571,0.346c-0.048,0.083-0.104,0.159-0.151,0.243c-4.512,8.145-1.547,18.377,6.637,22.868h-0.009c2.59,1.424,5.401,2.097,8.155,2.097c5.962,0,11.739-3.136,14.822-8.704c0.049-0.088,0.084-0.179,0.131-0.268c0.199,0.101,0.397,0.205,0.597,0.305c-0.043,0.089-0.096,0.171-0.138,0.261c-3.942,8.424-0.271,18.435,8.203,22.359c2.31,1.068,4.735,1.567,7.112,1.567c6.377,0,12.484-3.606,15.353-9.742c0.042-0.09,0.071-0.183,0.111-0.273c0.203,0.086,0.406,0.173,0.61,0.259c-0.038,0.093-0.086,0.179-0.122,0.274c-3.353,8.675,0.995,18.407,9.71,21.753c2,0.76,4.049,1.125,6.068,1.125c6.793,0,13.199-4.106,15.788-10.79c0.036-0.094,0.059-0.19,0.094-0.285c0.209,0.072,0.419,0.143,0.628,0.215c-0.032,0.095-0.073,0.185-0.103,0.281c-2.764,8.877,2.232,18.301,11.15,21.052c1.671,0.509,3.353,0.749,5.005,0.749c7.217,0,13.904-4.635,16.146-11.858c0.028-0.09,0.043-0.18,0.069-0.269c0.215,0.059,0.433,0.113,0.648,0.172c-0.024,0.092-0.057,0.179-0.08,0.272c-2.165,9.039,3.439,18.118,12.532,20.272c1.314,0.307,2.628,0.461,3.933,0.461c7.643,0,14.58-5.203,16.435-12.935c0.022-0.094,0.032-0.187,0.052-0.281c0.216,0.044,0.43,0.091,0.646,0.135c-0.017,0.092-0.045,0.18-0.061,0.272c-1.565,9.164,4.628,17.858,13.837,19.416c0.956,0.163,1.913,0.24,2.85,0.24c8.097,0,15.257-5.809,16.658-14.012c0.017-0.097,0.02-0.193,0.034-0.289c0.219,0.03,0.439,0.059,0.658,0.089c-0.012,0.097-0.035,0.19-0.045,0.288c-0.966,9.241,5.788,17.512,15.074,18.474c0.589,0.067,1.188,0.096,1.768,0.096c8.551,0,15.894-6.443,16.802-15.099c0.009-0.087,0.006-0.173,0.014-0.26c0.219,0.016,0.439,0.029,0.658,0.044c-0.005,0.089-0.021,0.175-0.024,0.264c-0.367,9.29,6.899,17.119,16.232,17.484c0.223,0.009,0.454,0.019,0.677,0.019c9.034,0,16.522-7.106,16.88-16.165c0.004-0.095-0.005-0.188-0.003-0.283c0.226,0.002,0.452,0.004,0.678,0.006c0.001,0.096-0.01,0.19-0.008,0.286c0.212,9.156,7.739,16.435,16.9,16.435c0.135,0,0.27-0.009,0.406-0.009c9.333-0.222,16.716-7.924,16.503-17.224c-0.002-0.09-0.016-0.177-0.02-0.267c0.222-0.012,0.445-0.019,0.667-0.032c0.006,0.09,0.002,0.179,0.01,0.27c0.773,8.761,8.154,15.368,16.832,15.368c0.493,0,0.985-0.02,1.488-0.068c9.305-0.808,16.184-8.973,15.373-18.233c-0.008-0.094-0.029-0.184-0.039-0.277c0.244-0.029,0.487-0.061,0.73-0.09c0.049,0.345,0.091,0.691,0.158,1.031c0.107,0.538,0.242,1.077,0.406,1.596c0.164,0.529,0.348,1.048,0.56,1.548c0.212,0.51,0.444,1.01,0.705,1.49c0.261,0.491,0.542,0.962,0.851,1.424c0.309,0.452,0.637,0.904,0.985,1.327c0.348,0.424,0.725,0.837,1.112,1.231c0.395,0.384,0.811,0.76,1.236,1.105c0.426,0.347,0.879,0.683,1.333,0.981c0.464,0.308,0.938,0.587,1.43,0.846c0.483,0.259,0.985,0.49,1.488,0.702c0.512,0.211,1.034,0.393,1.565,0.557c0.522,0.154,1.062,0.299,1.604,0.405c0.541,0.105,1.092,0.192,1.642,0.24c0.551,0.057,1.112,0.086,1.663,0.086c0.55,0,1.111-0.029,1.662-0.086c0.036-0.003,0.073-0.01,0.109-0.013c-6.443,3.445-10.126,10.808-8.545,18.285c1.614,7.606,8.146,12.924,15.586,13.338c-7.112,2.414-11.972,9.358-11.402,17.157c0.58,7.895,6.542,14.117,14.049,15.377c-7.478,1.606-13.14,8.155-13.314,16.099c-0.164,7.982,5.294,14.791,12.753,16.666c-7.642,0.98-13.874,7.106-14.647,15.069c-0.783,7.982,4.173,15.194,11.517,17.609c-7.72,0.423-14.397,6.125-15.721,14.031c-1.324,7.905,3.121,15.444,10.271,18.349c-7.73-0.068-14.744,5.174-16.59,12.983c-1.846,7.799,2.097,15.617,9.054,18.983c-7.71-0.586-15.073,4.193-17.44,11.858c-2.358,7.665,1.053,15.724,7.778,19.542c-7.652-1.106-15.325,3.144-18.204,10.626h-0.009c-2.88,7.473-0.048,15.733,6.367,20.013c-7.536-1.655-15.479,2.01-18.919,9.241c-3.42,7.203-1.265,15.608,4.744,20.359c-7.333-2.212-15.498,0.779-19.518,7.655c-4,6.857-2.6,15.359,2.918,20.609c-7.063-2.837-15.411-0.644-20.059,5.779c-4.619,6.399-4.069,14.916,0.82,20.675c-0.477-0.255-0.972-0.492-1.477-0.691c-0.503-0.212-1.034-0.404-1.556-0.558c-0.522-0.163-1.062-0.299-1.604-0.404c-0.541-0.115-1.092-0.193-1.642-0.251c-1.102-0.105-2.223-0.105-3.324,0c-0.551,0.058-1.101,0.135-1.643,0.251c-0.541,0.105-1.082,0.24-1.604,0.404c-0.522,0.154-1.053,0.346-1.555,0.558c-0.512,0.202-1.014,0.442-1.497,0.702c-0.493,0.25-0.966,0.539-1.421,0.846c-0.463,0.299-0.917,0.625-1.343,0.972c-0.426,0.355-0.841,0.731-1.228,1.115c-0.395,0.385-0.773,0.798-1.12,1.231c-0.348,0.424-0.677,0.875-0.986,1.327s-0.589,0.933-0.85,1.413c-0.26,0.481-0.493,0.991-0.705,1.491c-0.213,0.509-0.396,1.028-0.56,1.548c-0.164,0.53-0.3,1.068-0.406,1.606c-0.107,0.539-0.193,1.088-0.252,1.626c-0.048,0.548-0.077,1.106-0.077,1.654c0,0.558,0.029,1.116,0.077,1.664c0.058,0.538,0.145,1.087,0.252,1.625c0.106,0.539,0.242,1.077,0.406,1.606c0.164,0.519,0.347,1.039,0.56,1.549c0.212,0.501,0.444,1.01,0.705,1.49c0.261,0.481,0.541,0.962,0.85,1.414c0.31,0.461,0.638,0.903,0.986,1.327c0.347,0.432,0.725,0.846,1.12,1.23c0.387,0.385,0.802,0.76,1.228,1.116c0.426,0.347,0.879,0.673,1.343,0.971c0.455,0.308,0.928,0.596,1.421,0.847c0.483,0.259,0.985,0.5,1.497,0.702c0.502,0.211,1.033,0.404,1.555,0.558c0.522,0.163,1.063,0.298,1.604,0.404c0.542,0.116,1.092,0.193,1.643,0.25c0.551,0.058,1.112,0.086,1.662,0.086c0.551,0,1.112-0.028,1.663-0.086c0.55-0.057,1.101-0.134,1.642-0.25c0.542-0.106,1.082-0.24,1.604-0.404c0.522-0.154,1.053-0.347,1.556-0.558c0.512-0.202,1.014-0.442,1.497-0.702c0.493-0.251,0.966-0.539,1.42-0.847c0.464-0.298,0.918-0.625,1.344-0.971c0.425-0.356,0.841-0.731,1.227-1.116c0.396-0.384,0.773-0.798,1.121-1.23c0.348-0.424,0.677-0.866,0.986-1.327c0.309-0.453,0.589-0.933,0.85-1.414c0.26-0.481,0.493-0.99,0.705-1.49c0.212-0.51,0.396-1.029,0.56-1.549c0.155-0.529,0.3-1.067,0.406-1.606c0.107-0.538,0.193-1.087,0.242-1.625c0.059-0.548,0.087-1.106,0.087-1.664c0-0.548-0.028-1.105-0.087-1.654c-0.048-0.538-0.135-1.087-0.242-1.626c-0.053-0.271-0.117-0.543-0.186-0.813c2.524,6.74,8.958,10.949,15.83,10.949c1.846,0,3.71-0.298,5.556-0.933h-0.009c8.647-2.991,13.305-12.271,10.599-20.907c3.806,8.213,13.507,11.993,21.943,8.434c8.435-3.549,12.454-13.118,9.179-21.561c4.348,7.953,14.291,11.078,22.465,6.962c8.174-4.106,11.547-13.915,7.71-22.119c4.88,7.636,15.015,10.069,22.89,5.424c7.885-4.665,10.58-14.714,6.146-22.638c5.401,7.308,15.701,9.068,23.247,3.876c7.536-5.193,9.527-15.397,4.571-22.994c5.903,6.905,16.29,7.924,23.45,2.221c7.16-5.712,8.416-16.031,2.918-23.273c6.387,6.482,16.833,6.761,23.567,0.548c6.725-6.212,7.237-16.608,1.217-23.427c6.841,6.001,17.296,5.52,23.547-1.173c6.251-6.684,5.991-17.079-0.503-23.446c7.285,5.462,17.654,4.183,23.373-2.953c5.729-7.136,4.676-17.474-2.281-23.339c7.691,4.885,17.934,2.817,23.084-4.741h-0.009c5.159-7.559,3.294-17.811-4.107-23.109c8.048,4.269,18.106,1.404,22.648-6.55h-0.009c4.531-7.934,1.865-17.993-5.923-22.695c8.368,3.587,18.145-0.086,22.01-8.367c3.865-8.279,0.387-18.089-7.768-22.148c8.648,2.885,18.079-1.586,21.248-10.155c3.16-8.578-1.13-18.061-9.594-21.426c8.86,2.145,17.875-3.106,20.3-11.915c2.425-8.809-2.657-17.907-11.401-20.542c9.024,1.404,17.576-4.596,19.228-13.588h0.009c1.652-8.982-4.184-17.608-13.092-19.503c9.091,0.616,17.073-6.087,17.953-15.175C999.003,479.721,992.453,471.624,983.409,470.499z' />
                    </g>

                    <g id='shigeru_logo_glasses'>
                        <path id='shigeru_logo_glasses_k' d='M683.583,658.185c21.768-25.116,36.743-63.418,17.696-85.395c-16.87-19.465-158.908-27.628-182.853,0c-2.859,3.298-4.938,6.735-6.367,10.262c-3.866-0.51-7.894-0.78-12.054-0.78s-8.189,0.27-12.054,0.78c-1.429-3.527-3.509-6.964-6.367-10.262c-23.945-27.628-165.982-19.465-182.853,0c-19.047,21.977-4.072,60.279,17.696,85.395s124.079,19.674,141.493-0.419c11.203-12.926,27.693-32.956,31.656-52.956c3.237-0.46,6.72-0.72,10.429-0.72s7.191,0.26,10.429,0.72c3.964,20,20.453,40.029,31.656,52.956C559.504,677.859,661.815,683.301,683.583,658.185z' />
                        <path id='shigeru_logo_glasses_w' d='M683.583,658.185c21.768-25.116,36.743-63.418,17.696-85.395c-16.87-19.465-158.908-27.628-182.853,0c-2.859,3.298-4.938,6.735-6.367,10.262c-3.866-0.51-7.894-0.78-12.054-0.78s-8.189,0.27-12.054,0.78c-1.429-3.527-3.509-6.964-6.367-10.262c-23.945-27.628-165.982-19.465-182.853,0c-19.047,21.977-4.072,60.279,17.696,85.395s124.079,19.674,141.493-0.419c11.203-12.926,27.693-32.956,31.656-52.956c3.237-0.46,6.72-0.72,10.429-0.72s7.191,0.26,10.429,0.72c3.964,20,20.453,40.029,31.656,52.956C559.504,677.859,661.815,683.301,683.583,658.185z' />
                    </g>

                    <g id='shigeru_logo_kanji'>
                        <path id='shigeru_logo_kanji_k' d='M853.449,463.52c-0.17-0.341-0.341-0.682-0.511-1.023C853.595,463.182,853.357,462.73,853.449,463.52z M811.763,232.332c8.615,7.241,17.914,15.785,26.341,24.039c9.071,8.885,17.239,23.264,6.393,32.99c-1.312,1.177-8.154,1.933-10.23,2.557c-1.227-3.355-4.161-0.642-6.649-2.302c-2.427-1.618-3.985-3.845-6.905-5.626c-5.887-3.59-5.904-11.058-13.043-13.043c-7.251-2.016-19.978-1.076-26.085,1.534c-0.132,0.056-3.172,1.672-3.58,0.512c-0.764,0.729-3.101,2.925-5.115,2.302c11.32-6.07,22.883-13.451,32.223-22.249c-2.725-9.317-22.976-26.146-30.433-34.525c0.597,0.171,1.194,0.341,1.79,0.511c-0.085-0.256-0.17-0.511-0.256-0.767c-1.303-0.843-1.637-0.896-2.557-2.557c3.95,0.424,7.66,2.804,10.741,4.348c3.41,0.938,6.82,1.875,10.23,2.813C799.774,226.22,807.01,228.337,811.763,232.332z M784.655,368.897c-0.171-0.085-0.341-0.171-0.511-0.256c-0.171-0.256-0.341-0.512-0.511-0.767C784.578,368.352,784.165,367.993,784.655,368.897z M783.121,369.153c-0.979-0.669-1.246-0.864-1.534-2.302C782.098,367.618,782.609,368.385,783.121,369.153z M778.773,376.313c-0.341,0-0.682,0-1.023,0c-0.17-0.341-0.341-0.682-0.511-1.023c0.833-1.022,0.645-0.316,0.511-1.279c-0.996-0.431-0.389,0.25-0.767-0.767c0.085,0.17,0.17,0.341,0.256,0.511c0.17,0.085,0.341,0.17,0.511,0.256c0.597,0.426,1.194,0.852,1.79,1.279C778.481,376.006,778.925,375.044,778.773,376.313z M775.96,372.477c-0.426-0.597-0.852-1.194-1.279-1.79c1.331,0.422,1.517,0.922,2.302,1.79C776.642,372.477,776.301,372.477,775.96,372.477zM558.582,449.71c-3.81,6.172-4.996,11.819-8.184,16.367c-2.919-0.781-2.733,0.559-4.859,1.79c-7.242-0.825-15.485-2.671-18.925-6.393c0.173-3.109-5.093-6.301-6.649-8.951c-0.17-2.983-0.341-5.968-0.511-8.951c-1.933-6.477-4.839-14.122-5.371-21.994c-0.291-4.304,13.787-25.124,16.879-31.967c7.122-15.763,11.094-33.234,14.321-48.846c1.501-7.262-1.299-12.935,0.256-18.925c6.118,0.625,16.26,4.846,20.715,10.23c1.394,1.684,2.229,4.737,4.092,6.649c-0.171,0.511-0.341,1.023-0.511,1.534c0.004,3.245,2.097,10.166,3.58,14.321c1.464,4.103,0.519,9.244,1.79,13.81C583.13,396.843,572.047,427.896,558.582,449.71z M604.871,439.225c-0.085-0.17-0.17-0.341-0.256-0.511c-0.511-0.341-1.023-0.682-1.534-1.023C604.144,438.005,605.172,438.231,604.871,439.225z M616.123,445.363c0-0.171,0-0.341,0-0.511c0.085,0.085,0.17,0.17,0.256,0.256c1.025,0.356,0.445-0.086,0.767,0.767C616.805,445.704,616.464,445.533,616.123,445.363z M665.992,443.317c-1.705,0.284-4.539,2.114-7.416,1.023c0.767-0.597,1.535-1.194,2.302-1.79c0.852,0.256,1.705,0.511,2.557,0.767c0.085-0.426,0.171-0.852,0.256-1.279c0.852,0.085,1.705,0.171,2.557,0.256C665.417,442.943,665.476,442.397,665.992,443.317z M853.449,497.789c0.085,1.023,0.171,2.046,0.256,3.069c-7.219,3.477-14.395,9.235-24.039,7.161c-0.468-0.101-2.151-0.361-2.557,0.511c-1.849-1.783-15.094-4.007-19.436-5.626c-3.414-1.273-9.276-5.271-13.298-7.416c-22.93-12.231-42.817-27.263-61.377-44.499c-6.649-6.989-13.299-13.981-19.948-20.971c-2.34-2.933-4.805-8.199-7.928-9.462c-4.347,3.324-8.695,6.65-13.043,9.974c-2.649,2.129-7.501,2.322-10.485,5.371c-0.767-0.171-1.535-0.341-2.302-0.511c-3.486,1.97-4.326,3.984-8.439,6.138c-3.604,1.888-7.02-1.976-12.02,0c-6.142,2.427-12.08,6.042-19.18,6.649c-1.937-1.539-2.511-1.669-5.626-1.023c0,0.085,0,0.17,0,0.256c0.682,0.256,1.364,0.511,2.046,0.767c-7.025,0.052-25.91-5.14-30.177-8.695c0.067-1.779-12.016-9.64-15.089-10.997c0-0.085,0-0.17,0-0.256c0.341-0.256,0.682-0.511,1.023-0.767c1.184,1.162,0.232,0.771,1.79,0.767c-1.153-2.935-3.408-4.857-4.859-6.905c0.085,0,0.171,0,0.256,0c5.74,2.986,9.552,3.566,16.367,5.626c-0.426-0.682-0.852-1.364-1.279-2.046c12.987,7.766,26.23-1.133,38.872-3.069c-0.171-0.085-0.341-0.17-0.512-0.256c-0.597-0.17-1.194-0.341-1.79-0.511c2.299-1.002,4.74-0.577,6.905-1.279c5.609-1.819,12.154-9.048,18.157-8.439c-0.239-1.039,0.326-0.282-0.511-1.023c6.2-3.905,11.339-7.811,16.367-12.787c-0.597,0.085-1.194,0.171-1.79,0.256c0.085-0.256,0.17-0.511,0.256-0.767c10.221-2.868-0.155-15.619-3.836-22.505c-10.049-18.8-19.81-42.31-29.666-62.4c-3.188-0.303-13.189,3.267-15.856,4.092c-17.224,5.329-49.61,1.357-56.007-11.764c12.284-0.351,23.368-8.661,30.433-9.974c0.738-1.288,1.081-2.018,2.046-2.557c-0.085,0.341-0.17,0.682-0.256,1.023c3.239-1.364,6.479-2.728,9.718-4.092c-0.365-0.953-0.487-0.583,0-1.79c-1.493,0.328-0.928,0.308-2.302-0.256c0.085,0.426,0.17,0.852,0.256,1.279c-2.526,0.202-2.836,1.839-5.115,1.279c0.81-0.536,9.496-7.202,8.439-9.207c-0.085,0.171-0.17,0.341-0.256,0.511c-0.426,0.426-0.852,0.852-1.279,1.279c-0.341-0.085-0.682-0.17-1.023-0.256c0.17-0.426,0.341-0.852,0.511-1.279c-0.341,0-0.682,0-1.023,0c-0.341,0.767-0.682,1.535-1.023,2.302c0.907,0.166,0.956-0.391,0.767,0.512c-0.426,0.682-0.852,1.364-1.279,2.046c-0.341-0.171-0.682-0.341-1.023-0.511c0.085-0.256,0.17-0.511,0.256-0.767c-0.852,0.511-1.705,1.023-2.557,1.534c0-0.085,0-0.171,0-0.256c0.085-0.341,0.171-0.682,0.256-1.023c2.27-0.886,1.433-1.23,3.325-0.767c-0.171-0.597-0.341-1.194-0.511-1.79c3.777-3.539,7.634-7.819,9.974-12.02c0.341,0.341,0.682,0.682,1.023,1.023c0.085-0.341,0.17-0.682,0.256-1.023c-0.437-3.637,2.446-3.214,4.092-5.882c-0.426,0-0.852,0-1.279,0c0.852-0.852,1.705-1.705,2.557-2.557c0.035-0.132-5.882-30.433-5.882-30.433c8.906-0.113,13.085,5.842,20.459,9.974c0.17,0,0.341,0,0.511,0c-0.203-2.223,7.733-13.009,10.23-15.344c-1.192-0.464-0.548,0.322-1.023-0.767c1.103-0.206,0.589,0.333,1.279-0.767c-0.511,0.005-0.241-0.061,0-0.511c0.773-6.169,8.349-13.007,11.253-19.436c6.527-14.452,15.008-29.685,19.436-46.8c0-0.085,0-0.171,0-0.256c-8.038-0.162-45.994,4.783-49.102,7.928c-5.976,6.047-7.88,28.317-9.718,34.269c-1.119,3.623,1.525,8.772,1.023,11.508c-0.505,2.752-5.502,7.684-4.348,11.253c-1.875,1.534-3.751,3.069-5.626,4.603c-18.336,9.107-30.361-23.083-36.059-29.666c-0.256,0.085-0.511,0.171-0.767,0.256c-7.505,20.458-21.062,32.756-43.476,22.249c-7.957-3.73-15.725-4.666-21.738-10.485c-0.622-0.602-3.731-0.585-5.371-1.534c-1.79-1.705-3.581-3.41-5.37-5.115c-0.941-0.787-1.982,0.68-2.813,0.256c-4.029-2.057-8.509-6.405-9.718-11.764c4.67-4.781,22.502-8.329,29.154-5.882c11.216-3.023,24.695-4.159,33.758-9.462c2.391-1.4,17.071-5.222,16.623-6.905c1.229-2.031-0.466-4.013-1.023-6.138c-2.04-7.779-5.17-29.944-1.023-35.036c-0.256,0-0.511,0-0.767,0c0-0.085,0-0.17,0-0.256c9.5,0.881,23.17,17.056,28.131,23.528c2.048,2.672,3.459,7.501,6.138,8.695c9.461-2.301,18.926-4.604,28.387-6.905c2.503-0.445,8.22-0.044,11.253-1.79c1.705-2.216,3.41-4.433,5.115-6.649c-0.938,2.046-1.876,4.092-2.813,6.138c14.053-1.107,31.082-4.261,44.243-5.371c3.237-10.728,7.673-22.862,10.485-33.246c1.705-6.296,1.513-15.959,0.511-20.459c-0.1-0.447-0.604-2.349-0.767-1.79c-0.819-5.018,1.981-7.226-0.511-13.043c0.085-0.085,0.17-0.17,0.256-0.256c0.938,0.682,1.875,1.364,2.813,2.046c-0.256-1.108-0.511-2.216-0.767-3.325c0.682,0.426,1.364,0.852,2.046,1.279c-0.17-0.256-0.341-0.511-0.511-0.767c0-0.256,0-0.511,0-0.767c3.403,1.174,5.334,4.333,7.416,6.905c0.578,0.714,3.401,1.108,4.092,2.046c10.429,14.166,20.959,26.554,25.318,43.22c1.321,5.051-5.667,15.935-5.882,18.669c0.727,0.505,0.327,0.371,1.023,0.511c3.458,1.033,9.311-1.645,13.043,0.767c3.737,2.416,8.527,2.916,12.531,4.859c7.164,3.476,22.668,14.79,25.83,19.948c1.907,3.111,3.291,5.711,4.603,9.207c0.085,1.364,0.171,2.728,0.256,4.092c-1.966,3.424-5.117,8.164-8.439,10.741c-12.594,9.767-33.069-12.27-36.315-17.646c-1.787-2.96-7.899-10.49-12.531-9.207c-1.329,0.368-14.485,4.785-14.577,4.859c-3.368,2.689-3.584,8.768-6.649,11.764c-5.043,4.929-8.83,12.247-14.577,18.669c-0.597,1.96-1.194,3.922-1.79,5.882c-0.369,0.627-5.753,7.174-6.649,5.37c-2.472,3.324-4.945,6.65-7.416,9.974c0.341,0.17,0.682,0.341,1.023,0.511c-4.983,0.592-8.936,10.137-13.043,12.787c-0.992,0.26-0.197,0.334-1.279-0.256c-1.289,5.647-2.498,5.705-8.695,10.23c1.227,0.815-0.188,0.424-1.023,1.279c0.256,0.597,0.511,1.194,0.767,1.79c0.511-0.512,1.023-1.023,1.534-1.534c-0.085,0.171-0.17,0.341-0.256,0.511c-0.767,1.023-1.535,2.046-2.302,3.069c1.772,3.005,4.603,5.747,7.161,7.416c2.387-1.364,4.774-2.728,7.161-4.092c1.313-1.141,1.463-3.134,3.069-4.092c11.454-6.831,21.473-9.889,36.315-10.741c14.84-0.852,32.731,21.586,9.207,29.41c0.853,1.36,0.875,1.419-0.256,2.557c-11.369,0.627-23.171,13.91-31.712,19.436c-3.008,1.946-13.306,4.158-14.066,5.882c-2.36,5.357,3.424,13.178,3.836,18.669c0.594,7.924,13.026,45.452,20.459,51.404c0.085-0.085,0.17-0.171,0.256-0.256c5.771-15.143,15.191-31.323,21.226-46.544c2.677-6.753-1.162-17.288,1.023-20.971c7.442,1.681,12.332,7.665,15.856,10.997c8.461,7.999,12.96,15.625,16.112,25.574c0.848,2.677-1.21,7.622-1.279,10.997c-0.597,0.938-1.194,1.875-1.79,2.813c-2.504,8.034-7.357,14.869-12.531,21.226c-0.426,1.108-0.852,2.216-1.279,3.325c-5.213,6.059-12.579,14.067-15.856,21.994c16.458,18.744,36.254,34.247,56.263,48.59c4.609,3.304,12.618,7.516,16.879,10.23c2.579,1.642,5.812,1.627,7.416,3.58c0.341-0.085,0.682-0.17,1.023-0.256c0.341-3.41,0.682-6.82,1.023-10.23c-0.682-3.154-1.364-6.309-2.046-9.462c0.663,1.179,0.613,2.087,1.79,2.813c-6.047-20.825-7.51-31.956-17.39-49.358c-1.364-2.813-2.728-5.627-4.092-8.439c-0.085,0.256-0.171,0.511-0.256,0.767c-2.319-3.803-2.448-5.069-4.859-8.951c0.085,0,0.171,0,0.256,0c1.642,0.436,2.813,0.256,2.813,0.256c1.141,2.598,1.362,5.063,3.069,7.161c0.985-0.377,0.123-0.383,1.023-0.256c0.747-1.286-0.535-0.563-0.767-1.534c-0.256,0-0.511,0-0.767,0c1.225-0.729,0.757-0.607,2.046,0c-1.023-2.046-2.046-4.092-3.069-6.138c0.341-0.085,0.682-0.17,1.023-0.256c4.603,6.904,9.207,13.811,13.81,20.715c-0.701-8.608-10.484-18.442-14.066-27.62c0.341-0.085,0.682-0.171,1.023-0.256c0.085,0,0.17,0,0.256,0c1.228,3.986,13.102,16.46,16.623,21.994c8.288,13.026,17.493,25.38,27.876,38.105c0.597-0.256,1.194-0.511,1.79-0.767c0.085,0.256,0.171,0.511,0.256,0.767c-0.17,0.341-0.341,0.682-0.511,1.023c-0.17-0.341-0.341-0.682-0.511-1.023c-0.085,0.341-0.17,0.682-0.256,1.023c0.767,0.426,1.535,0.852,2.302,1.279c0.171,0.597,0.341,1.194,0.511,1.79c1.52-0.702,7.879,16.51,9.718,15.856c0.677,0.337,1.474,1.59,1.79,1.023c3.32,4.083,1.487,10.871,6.905,13.043c-0.17-0.682-0.341-1.364-0.511-2.046c0.256,0,0.511,0,0.767,0c0.793,1.975,1.096,1.321,2.302,2.813c1.279,4.432,2.557,8.866,3.836,13.298c0.852,0.682,1.705,1.364,2.557,2.046C862.36,483.385,855.427,496.909,853.449,497.789z M601.546,425.415c-1.472,0.311-4.167-1.041-5.371-2.302C597.966,423.88,599.756,424.648,601.546,425.415z M598.733,422.602c2.12,0.329,3.588,0.694,4.859,1.79C601.973,423.795,600.352,423.199,598.733,422.602z M606.149,424.648c0.256,0.085,0.511,0.17,0.767,0.256C606.551,424.811,606.636,425.016,606.149,424.648z M651.927,416.72c0.085-0.17,0.171-0.341,0.256-0.511c0.256,0.085,0.511,0.17,0.767,0.256C652.609,416.549,652.268,416.635,651.927,416.72z M656.018,414.418c0.256,0,0.511,0,0.767,0C656.066,414.685,656.656,414.795,656.018,414.418z M661.133,411.605c0.256,0,0.511,0,0.767,0C661.214,411.949,661.252,411.703,661.133,411.605z M664.202,409.559c0.341,0.171,0.682,0.341,1.023,0.511c-0.256,0-0.511,0-0.767,0C664.373,409.9,664.287,409.73,664.202,409.559z M672.13,404.7c-0.719,0.266-0.13,0.377-0.767,0C671.619,404.7,671.874,404.7,672.13,404.7z M671.619,403.677c1.108-0.597,2.216-1.194,3.325-1.79c0.256,0.085,0.511,0.17,0.767,0.256c-1.256,0.977-2.918,1.811-3.58,2.046C671.96,404.018,671.789,403.848,671.619,403.677zM601.802,292.942c0.256,0.171,0.511,0.341,0.767,0.511C601.654,293.337,601.909,293.582,601.802,292.942z M605.382,292.942c-0.085-0.341-0.17-0.682-0.256-1.023C605.925,292.608,605.877,292.011,605.382,292.942z M605.126,290.641c0.256-0.256,0.511-0.511,0.767-0.767C605.894,289.873,606.133,291.047,605.126,290.641z M609.73,288.083c0-0.426,0-0.852,0-1.279c0.341,0.341,0.682,0.682,1.023,1.023c-0.085,0.085-0.17,0.17-0.256,0.256C610.241,288.083,609.985,288.083,609.73,288.083zM772.891,275.808c-0.426,0.17-0.852,0.341-1.279,0.511c0.256-0.256,0.511-0.511,0.767-0.767C772.55,275.637,772.721,275.723,772.891,275.808z M689.52,219.034c0-0.085,0-0.17,0-0.256c0.597-0.767,1.194-1.534,1.79-2.302C692.322,217.07,690.625,218.448,689.52,219.034z M675.71,234.89c-0.537,0.881-0.207,0.622-1.279,1.023c0.256-0.341,0.512-0.682,0.767-1.023C675.369,234.89,675.54,234.89,675.71,234.89z M673.664,237.703c-0.426,0.256-0.852,0.511-1.279,0.767c0.085-0.341,0.171-0.682,0.256-1.023c0.426-0.511,0.852-1.023,1.279-1.534C674.501,236.312,674.066,236.848,673.664,237.703z M714.838,276.831c-0.597,0.511-1.194,1.023-1.79,1.534c0.341-0.511,0.682-1.023,1.023-1.534C714.327,276.831,714.583,276.831,714.838,276.831z M707.166,282.201c0.085-0.341,0.17-0.682,0.256-1.023C707.344,281.73,707.587,281.629,707.166,282.201z M792.327,408.025c0.341,0.171,0.682,0.341,1.023,0.511c-0.256,0-0.511,0-0.767,0C792.498,408.366,792.412,408.195,792.327,408.025zM784.144,374.012c0.988,0.56,0.825,0.431,1.023,1.79c-0.17-0.341-0.341-0.682-0.511-1.023C784.485,374.523,784.314,374.267,784.144,374.012z M612.543,178.627c3.521-0.988,10.992-6.833,11.508-9.718c-2.609,2.121-9.623,3.171-13.043,6.649C611.52,176.581,612.031,177.604,612.543,178.627z M633.769,273.506c-0.785,2.136-7.978,4.11-6.649,6.905c-2.742,0.661-3.127,2.715-5.115,2.557c0.085-0.085,0.17-0.17,0.256-0.256c0.597-0.682,1.194-1.364,1.79-2.046c-0.171,0.171-0.341,0.341-0.511,0.511c-1.591,0.588-2.699,2.031-3.58,3.325c1.532-0.587,1.337-1.133,2.557-0.256c-1.414,0.323-4.294,2.96-5.626,4.348c7.057-1.085,14.227-5.842,18.413-8.695c-0.341-0.085-0.682-0.17-1.023-0.256c0.535-0.792,1.004-1.242,1.023-1.279C635.633,277.109,635.016,274.227,633.769,273.506zM616.89,278.109c0.664,0.462,0.312,0.083,0.256,0.767c0.085,0.085,0.17,0.17,0.256,0.256c0.511-0.511,1.023-1.023,1.534-1.534C618.255,277.768,617.572,277.939,616.89,278.109z M625.586,278.621c-0.256,0.426-0.511,0.852-0.767,1.279c0.597-0.341,1.194-0.682,1.79-1.023C626.268,278.791,625.927,278.706,625.586,278.621z M619.192,279.132c-0.17,0.17-0.341,0.341-0.511,0.511C618.944,279.614,619.9,278.986,619.192,279.132z M787.724,385.776c0.759,0.252,0.114,0.37,1.023,0c-1.325-0.56-1.567-1.058-2.557-1.79C786.6,385.251,786.556,385.261,787.724,385.776zM637.094,425.159c0.597-0.341,1.194-0.682,1.79-1.023c-0.341,0-0.682,0-1.023,0C637.605,424.477,637.35,424.818,637.094,425.159zM669.317,437.435c-0.511,0.341-1.023,0.682-1.534,1.023c0.597,0.085,1.194,0.17,1.79,0.256c0.35-0.555-0.164-0.253,0.511-0.511C669.581,437.338,670.17,437.944,669.317,437.435z M664.458,440.248c0.341-0.085,0.682-0.17,1.023-0.256c-0.171-0.085-0.341-0.17-0.511-0.256C664.799,439.907,664.628,440.077,664.458,440.248z' />
                        <path id='shigeru_logo_kanji_w' d='M853.449,463.52c-0.17-0.341-0.341-0.682-0.511-1.023C853.595,463.182,853.357,462.73,853.449,463.52z M811.763,232.332c8.615,7.241,17.914,15.785,26.341,24.039c9.071,8.885,17.239,23.264,6.393,32.99c-1.312,1.177-8.154,1.933-10.23,2.557c-1.227-3.355-4.161-0.642-6.649-2.302c-2.427-1.618-3.985-3.845-6.905-5.626c-5.887-3.59-5.904-11.058-13.043-13.043c-7.251-2.016-19.978-1.076-26.085,1.534c-0.132,0.056-3.172,1.672-3.58,0.512c-0.764,0.729-3.101,2.925-5.115,2.302c11.32-6.07,22.883-13.451,32.223-22.249c-2.725-9.317-22.976-26.146-30.433-34.525c0.597,0.171,1.194,0.341,1.79,0.511c-0.085-0.256-0.17-0.511-0.256-0.767c-1.303-0.843-1.637-0.896-2.557-2.557c3.95,0.424,7.66,2.804,10.741,4.348c3.41,0.938,6.82,1.875,10.23,2.813C799.774,226.22,807.01,228.337,811.763,232.332z M784.655,368.897c-0.171-0.085-0.341-0.171-0.511-0.256c-0.171-0.256-0.341-0.512-0.511-0.767C784.578,368.352,784.165,367.993,784.655,368.897z M783.121,369.153c-0.979-0.669-1.246-0.864-1.534-2.302C782.098,367.618,782.609,368.385,783.121,369.153z M778.773,376.313c-0.341,0-0.682,0-1.023,0c-0.17-0.341-0.341-0.682-0.511-1.023c0.833-1.022,0.645-0.316,0.511-1.279c-0.996-0.431-0.389,0.25-0.767-0.767c0.085,0.17,0.17,0.341,0.256,0.511c0.17,0.085,0.341,0.17,0.511,0.256c0.597,0.426,1.194,0.852,1.79,1.279C778.481,376.006,778.925,375.044,778.773,376.313z M775.96,372.477c-0.426-0.597-0.852-1.194-1.279-1.79c1.331,0.422,1.517,0.922,2.302,1.79C776.642,372.477,776.301,372.477,775.96,372.477zM558.582,449.71c-3.81,6.172-4.996,11.819-8.184,16.367c-2.919-0.781-2.733,0.559-4.859,1.79c-7.242-0.825-15.485-2.671-18.925-6.393c0.173-3.109-5.093-6.301-6.649-8.951c-0.17-2.983-0.341-5.968-0.511-8.951c-1.933-6.477-4.839-14.122-5.371-21.994c-0.291-4.304,13.787-25.124,16.879-31.967c7.122-15.763,11.094-33.234,14.321-48.846c1.501-7.262-1.299-12.935,0.256-18.925c6.118,0.625,16.26,4.846,20.715,10.23c1.394,1.684,2.229,4.737,4.092,6.649c-0.171,0.511-0.341,1.023-0.511,1.534c0.004,3.245,2.097,10.166,3.58,14.321c1.464,4.103,0.519,9.244,1.79,13.81C583.13,396.843,572.047,427.896,558.582,449.71z M604.871,439.225c-0.085-0.17-0.17-0.341-0.256-0.511c-0.511-0.341-1.023-0.682-1.534-1.023C604.144,438.005,605.172,438.231,604.871,439.225z M616.123,445.363c0-0.171,0-0.341,0-0.511c0.085,0.085,0.17,0.17,0.256,0.256c1.025,0.356,0.445-0.086,0.767,0.767C616.805,445.704,616.464,445.533,616.123,445.363z M665.992,443.317c-1.705,0.284-4.539,2.114-7.416,1.023c0.767-0.597,1.535-1.194,2.302-1.79c0.852,0.256,1.705,0.511,2.557,0.767c0.085-0.426,0.171-0.852,0.256-1.279c0.852,0.085,1.705,0.171,2.557,0.256C665.417,442.943,665.476,442.397,665.992,443.317z M853.449,497.789c0.085,1.023,0.171,2.046,0.256,3.069c-7.219,3.477-14.395,9.235-24.039,7.161c-0.468-0.101-2.151-0.361-2.557,0.511c-1.849-1.783-15.094-4.007-19.436-5.626c-3.414-1.273-9.276-5.271-13.298-7.416c-22.93-12.231-42.817-27.263-61.377-44.499c-6.649-6.989-13.299-13.981-19.948-20.971c-2.34-2.933-4.805-8.199-7.928-9.462c-4.347,3.324-8.695,6.65-13.043,9.974c-2.649,2.129-7.501,2.322-10.485,5.371c-0.767-0.171-1.535-0.341-2.302-0.511c-3.486,1.97-4.326,3.984-8.439,6.138c-3.604,1.888-7.02-1.976-12.02,0c-6.142,2.427-12.08,6.042-19.18,6.649c-1.937-1.539-2.511-1.669-5.626-1.023c0,0.085,0,0.17,0,0.256c0.682,0.256,1.364,0.511,2.046,0.767c-7.025,0.052-25.91-5.14-30.177-8.695c0.067-1.779-12.016-9.64-15.089-10.997c0-0.085,0-0.17,0-0.256c0.341-0.256,0.682-0.511,1.023-0.767c1.184,1.162,0.232,0.771,1.79,0.767c-1.153-2.935-3.408-4.857-4.859-6.905c0.085,0,0.171,0,0.256,0c5.74,2.986,9.552,3.566,16.367,5.626c-0.426-0.682-0.852-1.364-1.279-2.046c12.987,7.766,26.23-1.133,38.872-3.069c-0.171-0.085-0.341-0.17-0.512-0.256c-0.597-0.17-1.194-0.341-1.79-0.511c2.299-1.002,4.74-0.577,6.905-1.279c5.609-1.819,12.154-9.048,18.157-8.439c-0.239-1.039,0.326-0.282-0.511-1.023c6.2-3.905,11.339-7.811,16.367-12.787c-0.597,0.085-1.194,0.171-1.79,0.256c0.085-0.256,0.17-0.511,0.256-0.767c10.221-2.868-0.155-15.619-3.836-22.505c-10.049-18.8-19.81-42.31-29.666-62.4c-3.188-0.303-13.189,3.267-15.856,4.092c-17.224,5.329-49.61,1.357-56.007-11.764c12.284-0.351,23.368-8.661,30.433-9.974c0.738-1.288,1.081-2.018,2.046-2.557c-0.085,0.341-0.17,0.682-0.256,1.023c3.239-1.364,6.479-2.728,9.718-4.092c-0.365-0.953-0.487-0.583,0-1.79c-1.493,0.328-0.928,0.308-2.302-0.256c0.085,0.426,0.17,0.852,0.256,1.279c-2.526,0.202-2.836,1.839-5.115,1.279c0.81-0.536,9.496-7.202,8.439-9.207c-0.085,0.171-0.17,0.341-0.256,0.511c-0.426,0.426-0.852,0.852-1.279,1.279c-0.341-0.085-0.682-0.17-1.023-0.256c0.17-0.426,0.341-0.852,0.511-1.279c-0.341,0-0.682,0-1.023,0c-0.341,0.767-0.682,1.535-1.023,2.302c0.907,0.166,0.956-0.391,0.767,0.512c-0.426,0.682-0.852,1.364-1.279,2.046c-0.341-0.171-0.682-0.341-1.023-0.511c0.085-0.256,0.17-0.511,0.256-0.767c-0.852,0.511-1.705,1.023-2.557,1.534c0-0.085,0-0.171,0-0.256c0.085-0.341,0.171-0.682,0.256-1.023c2.27-0.886,1.433-1.23,3.325-0.767c-0.171-0.597-0.341-1.194-0.511-1.79c3.777-3.539,7.634-7.819,9.974-12.02c0.341,0.341,0.682,0.682,1.023,1.023c0.085-0.341,0.17-0.682,0.256-1.023c-0.437-3.637,2.446-3.214,4.092-5.882c-0.426,0-0.852,0-1.279,0c0.852-0.852,1.705-1.705,2.557-2.557c0.035-0.132-5.882-30.433-5.882-30.433c8.906-0.113,13.085,5.842,20.459,9.974c0.17,0,0.341,0,0.511,0c-0.203-2.223,7.733-13.009,10.23-15.344c-1.192-0.464-0.548,0.322-1.023-0.767c1.103-0.206,0.589,0.333,1.279-0.767c-0.511,0.005-0.241-0.061,0-0.511c0.773-6.169,8.349-13.007,11.253-19.436c6.527-14.452,15.008-29.685,19.436-46.8c0-0.085,0-0.171,0-0.256c-8.038-0.162-45.994,4.783-49.102,7.928c-5.976,6.047-7.88,28.317-9.718,34.269c-1.119,3.623,1.525,8.772,1.023,11.508c-0.505,2.752-5.502,7.684-4.348,11.253c-1.875,1.534-3.751,3.069-5.626,4.603c-18.336,9.107-30.361-23.083-36.059-29.666c-0.256,0.085-0.511,0.171-0.767,0.256c-7.505,20.458-21.062,32.756-43.476,22.249c-7.957-3.73-15.725-4.666-21.738-10.485c-0.622-0.602-3.731-0.585-5.371-1.534c-1.79-1.705-3.581-3.41-5.37-5.115c-0.941-0.787-1.982,0.68-2.813,0.256c-4.029-2.057-8.509-6.405-9.718-11.764c4.67-4.781,22.502-8.329,29.154-5.882c11.216-3.023,24.695-4.159,33.758-9.462c2.391-1.4,17.071-5.222,16.623-6.905c1.229-2.031-0.466-4.013-1.023-6.138c-2.04-7.779-5.17-29.944-1.023-35.036c-0.256,0-0.511,0-0.767,0c0-0.085,0-0.17,0-0.256c9.5,0.881,23.17,17.056,28.131,23.528c2.048,2.672,3.459,7.501,6.138,8.695c9.461-2.301,18.926-4.604,28.387-6.905c2.503-0.445,8.22-0.044,11.253-1.79c1.705-2.216,3.41-4.433,5.115-6.649c-0.938,2.046-1.876,4.092-2.813,6.138c14.053-1.107,31.082-4.261,44.243-5.371c3.237-10.728,7.673-22.862,10.485-33.246c1.705-6.296,1.513-15.959,0.511-20.459c-0.1-0.447-0.604-2.349-0.767-1.79c-0.819-5.018,1.981-7.226-0.511-13.043c0.085-0.085,0.17-0.17,0.256-0.256c0.938,0.682,1.875,1.364,2.813,2.046c-0.256-1.108-0.511-2.216-0.767-3.325c0.682,0.426,1.364,0.852,2.046,1.279c-0.17-0.256-0.341-0.511-0.511-0.767c0-0.256,0-0.511,0-0.767c3.403,1.174,5.334,4.333,7.416,6.905c0.578,0.714,3.401,1.108,4.092,2.046c10.429,14.166,20.959,26.554,25.318,43.22c1.321,5.051-5.667,15.935-5.882,18.669c0.727,0.505,0.327,0.371,1.023,0.511c3.458,1.033,9.311-1.645,13.043,0.767c3.737,2.416,8.527,2.916,12.531,4.859c7.164,3.476,22.668,14.79,25.83,19.948c1.907,3.111,3.291,5.711,4.603,9.207c0.085,1.364,0.171,2.728,0.256,4.092c-1.966,3.424-5.117,8.164-8.439,10.741c-12.594,9.767-33.069-12.27-36.315-17.646c-1.787-2.96-7.899-10.49-12.531-9.207c-1.329,0.368-14.485,4.785-14.577,4.859c-3.368,2.689-3.584,8.768-6.649,11.764c-5.043,4.929-8.83,12.247-14.577,18.669c-0.597,1.96-1.194,3.922-1.79,5.882c-0.369,0.627-5.753,7.174-6.649,5.37c-2.472,3.324-4.945,6.65-7.416,9.974c0.341,0.17,0.682,0.341,1.023,0.511c-4.983,0.592-8.936,10.137-13.043,12.787c-0.992,0.26-0.197,0.334-1.279-0.256c-1.289,5.647-2.498,5.705-8.695,10.23c1.227,0.815-0.188,0.424-1.023,1.279c0.256,0.597,0.511,1.194,0.767,1.79c0.511-0.512,1.023-1.023,1.534-1.534c-0.085,0.171-0.17,0.341-0.256,0.511c-0.767,1.023-1.535,2.046-2.302,3.069c1.772,3.005,4.603,5.747,7.161,7.416c2.387-1.364,4.774-2.728,7.161-4.092c1.313-1.141,1.463-3.134,3.069-4.092c11.454-6.831,21.473-9.889,36.315-10.741c14.84-0.852,32.731,21.586,9.207,29.41c0.853,1.36,0.875,1.419-0.256,2.557c-11.369,0.627-23.171,13.91-31.712,19.436c-3.008,1.946-13.306,4.158-14.066,5.882c-2.36,5.357,3.424,13.178,3.836,18.669c0.594,7.924,13.026,45.452,20.459,51.404c0.085-0.085,0.17-0.171,0.256-0.256c5.771-15.143,15.191-31.323,21.226-46.544c2.677-6.753-1.162-17.288,1.023-20.971c7.442,1.681,12.332,7.665,15.856,10.997c8.461,7.999,12.96,15.625,16.112,25.574c0.848,2.677-1.21,7.622-1.279,10.997c-0.597,0.938-1.194,1.875-1.79,2.813c-2.504,8.034-7.357,14.869-12.531,21.226c-0.426,1.108-0.852,2.216-1.279,3.325c-5.213,6.059-12.579,14.067-15.856,21.994c16.458,18.744,36.254,34.247,56.263,48.59c4.609,3.304,12.618,7.516,16.879,10.23c2.579,1.642,5.812,1.627,7.416,3.58c0.341-0.085,0.682-0.17,1.023-0.256c0.341-3.41,0.682-6.82,1.023-10.23c-0.682-3.154-1.364-6.309-2.046-9.462c0.663,1.179,0.613,2.087,1.79,2.813c-6.047-20.825-7.51-31.956-17.39-49.358c-1.364-2.813-2.728-5.627-4.092-8.439c-0.085,0.256-0.171,0.511-0.256,0.767c-2.319-3.803-2.448-5.069-4.859-8.951c0.085,0,0.171,0,0.256,0c1.642,0.436,2.813,0.256,2.813,0.256c1.141,2.598,1.362,5.063,3.069,7.161c0.985-0.377,0.123-0.383,1.023-0.256c0.747-1.286-0.535-0.563-0.767-1.534c-0.256,0-0.511,0-0.767,0c1.225-0.729,0.757-0.607,2.046,0c-1.023-2.046-2.046-4.092-3.069-6.138c0.341-0.085,0.682-0.17,1.023-0.256c4.603,6.904,9.207,13.811,13.81,20.715c-0.701-8.608-10.484-18.442-14.066-27.62c0.341-0.085,0.682-0.171,1.023-0.256c0.085,0,0.17,0,0.256,0c1.228,3.986,13.102,16.46,16.623,21.994c8.288,13.026,17.493,25.38,27.876,38.105c0.597-0.256,1.194-0.511,1.79-0.767c0.085,0.256,0.171,0.511,0.256,0.767c-0.17,0.341-0.341,0.682-0.511,1.023c-0.17-0.341-0.341-0.682-0.511-1.023c-0.085,0.341-0.17,0.682-0.256,1.023c0.767,0.426,1.535,0.852,2.302,1.279c0.171,0.597,0.341,1.194,0.511,1.79c1.52-0.702,7.879,16.51,9.718,15.856c0.677,0.337,1.474,1.59,1.79,1.023c3.32,4.083,1.487,10.871,6.905,13.043c-0.17-0.682-0.341-1.364-0.511-2.046c0.256,0,0.511,0,0.767,0c0.793,1.975,1.096,1.321,2.302,2.813c1.279,4.432,2.557,8.866,3.836,13.298c0.852,0.682,1.705,1.364,2.557,2.046C862.36,483.385,855.427,496.909,853.449,497.789z M601.546,425.415c-1.472,0.311-4.167-1.041-5.371-2.302C597.966,423.88,599.756,424.648,601.546,425.415z M598.733,422.602c2.12,0.329,3.588,0.694,4.859,1.79C601.973,423.795,600.352,423.199,598.733,422.602z M606.149,424.648c0.256,0.085,0.511,0.17,0.767,0.256C606.551,424.811,606.636,425.016,606.149,424.648z M651.927,416.72c0.085-0.17,0.171-0.341,0.256-0.511c0.256,0.085,0.511,0.17,0.767,0.256C652.609,416.549,652.268,416.635,651.927,416.72z M656.018,414.418c0.256,0,0.511,0,0.767,0C656.066,414.685,656.656,414.795,656.018,414.418z M661.133,411.605c0.256,0,0.511,0,0.767,0C661.214,411.949,661.252,411.703,661.133,411.605z M664.202,409.559c0.341,0.171,0.682,0.341,1.023,0.511c-0.256,0-0.511,0-0.767,0C664.373,409.9,664.287,409.73,664.202,409.559z M672.13,404.7c-0.719,0.266-0.13,0.377-0.767,0C671.619,404.7,671.874,404.7,672.13,404.7z M671.619,403.677c1.108-0.597,2.216-1.194,3.325-1.79c0.256,0.085,0.511,0.17,0.767,0.256c-1.256,0.977-2.918,1.811-3.58,2.046C671.96,404.018,671.789,403.848,671.619,403.677zM601.802,292.942c0.256,0.171,0.511,0.341,0.767,0.511C601.654,293.337,601.909,293.582,601.802,292.942z M605.382,292.942c-0.085-0.341-0.17-0.682-0.256-1.023C605.925,292.608,605.877,292.011,605.382,292.942z M605.126,290.641c0.256-0.256,0.511-0.511,0.767-0.767C605.894,289.873,606.133,291.047,605.126,290.641z M609.73,288.083c0-0.426,0-0.852,0-1.279c0.341,0.341,0.682,0.682,1.023,1.023c-0.085,0.085-0.17,0.17-0.256,0.256C610.241,288.083,609.985,288.083,609.73,288.083zM772.891,275.808c-0.426,0.17-0.852,0.341-1.279,0.511c0.256-0.256,0.511-0.511,0.767-0.767C772.55,275.637,772.721,275.723,772.891,275.808z M689.52,219.034c0-0.085,0-0.17,0-0.256c0.597-0.767,1.194-1.534,1.79-2.302C692.322,217.07,690.625,218.448,689.52,219.034z M675.71,234.89c-0.537,0.881-0.207,0.622-1.279,1.023c0.256-0.341,0.512-0.682,0.767-1.023C675.369,234.89,675.54,234.89,675.71,234.89z M673.664,237.703c-0.426,0.256-0.852,0.511-1.279,0.767c0.085-0.341,0.171-0.682,0.256-1.023c0.426-0.511,0.852-1.023,1.279-1.534C674.501,236.312,674.066,236.848,673.664,237.703z M714.838,276.831c-0.597,0.511-1.194,1.023-1.79,1.534c0.341-0.511,0.682-1.023,1.023-1.534C714.327,276.831,714.583,276.831,714.838,276.831z M707.166,282.201c0.085-0.341,0.17-0.682,0.256-1.023C707.344,281.73,707.587,281.629,707.166,282.201z M792.327,408.025c0.341,0.171,0.682,0.341,1.023,0.511c-0.256,0-0.511,0-0.767,0C792.498,408.366,792.412,408.195,792.327,408.025zM784.144,374.012c0.988,0.56,0.825,0.431,1.023,1.79c-0.17-0.341-0.341-0.682-0.511-1.023C784.485,374.523,784.314,374.267,784.144,374.012z M612.543,178.627c3.521-0.988,10.992-6.833,11.508-9.718c-2.609,2.121-9.623,3.171-13.043,6.649C611.52,176.581,612.031,177.604,612.543,178.627z M633.769,273.506c-0.785,2.136-7.978,4.11-6.649,6.905c-2.742,0.661-3.127,2.715-5.115,2.557c0.085-0.085,0.17-0.17,0.256-0.256c0.597-0.682,1.194-1.364,1.79-2.046c-0.171,0.171-0.341,0.341-0.511,0.511c-1.591,0.588-2.699,2.031-3.58,3.325c1.532-0.587,1.337-1.133,2.557-0.256c-1.414,0.323-4.294,2.96-5.626,4.348c7.057-1.085,14.227-5.842,18.413-8.695c-0.341-0.085-0.682-0.17-1.023-0.256c0.535-0.792,1.004-1.242,1.023-1.279C635.633,277.109,635.016,274.227,633.769,273.506zM616.89,278.109c0.664,0.462,0.312,0.083,0.256,0.767c0.085,0.085,0.17,0.17,0.256,0.256c0.511-0.511,1.023-1.023,1.534-1.534C618.255,277.768,617.572,277.939,616.89,278.109z M625.586,278.621c-0.256,0.426-0.511,0.852-0.767,1.279c0.597-0.341,1.194-0.682,1.79-1.023C626.268,278.791,625.927,278.706,625.586,278.621z M619.192,279.132c-0.17,0.17-0.341,0.341-0.511,0.511C618.944,279.614,619.9,278.986,619.192,279.132z M787.724,385.776c0.759,0.252,0.114,0.37,1.023,0c-1.325-0.56-1.567-1.058-2.557-1.79C786.6,385.251,786.556,385.261,787.724,385.776zM637.094,425.159c0.597-0.341,1.194-0.682,1.79-1.023c-0.341,0-0.682,0-1.023,0C637.605,424.477,637.35,424.818,637.094,425.159zM669.317,437.435c-0.511,0.341-1.023,0.682-1.534,1.023c0.597,0.085,1.194,0.17,1.79,0.256c0.35-0.555-0.164-0.253,0.511-0.511C669.581,437.338,670.17,437.944,669.317,437.435z M664.458,440.248c0.341-0.085,0.682-0.17,1.023-0.256c-0.171-0.085-0.341-0.17-0.511-0.256C664.799,439.907,664.628,440.077,664.458,440.248z' />
                    </g>

                </svg>

            </div>

        {/* #endregion ==================== SVG: AboutAfro ==================== */}


            <div className='guideContainer' id='guideContainerID' onClick={() => closeThought(thoughtBubble_Ref.current)} ref={guideContainer_Ref}></div>


        {/* #region ==================== RESET THOUGHTS ==================== */}

            <div className='resetThoughtsDiv' id='resetThoughtsDivID' onClick={() => resetThoughts(curlContainer_Ref.current, thoughtBubble_Ref.current)} ref={resetThoughts_Ref}>

                <svg className='resetThoughtsSvg' id='resetThoughtsSvgID' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 280' enableBackground='new 0 0 400 280'>
                    <path className='resetThoughtsPath' id='resetThoughtsPathID' d='M135.83 277.5c-16.127 0-30.895-9.492-37.623-24.184l-.798-1.744-1.893.32c-2.897.49-5.853.738-8.784.738-28.848 0-52.317-23.49-52.317-52.362 0-2.02.12-4.077.357-6.118l.237-2.038-1.953-.63C14.78 185.59 2.5 168.708 2.5 149.476c0-19.473 12.477-36.418 31.047-42.165l2.31-.714-.638-2.333c-.876-3.198-1.32-6.494-1.32-9.794 0-20.406 16.586-37.006 36.973-37.006 2.43 0 4.873.242 7.264.718l2.672.533.3-2.708c2.997-26.96 25.725-47.293 52.868-47.293 17.95 0 34.572 8.973 44.462 24.003l.995 1.512 1.747-.474c3.335-.902 6.77-1.36 10.21-1.36.603 0 1.202.02 1.798.047l1.72.077.685-1.578C203.103 13.664 220.112 2.5 238.93 2.5c25.207 0 45.93 19.72 47.178 44.896l.14 2.807 2.77-.465c2.57-.43 5.19-.65 7.79-.65 12.06 0 23.512 4.583 32.242 12.903l1.26 1.2 1.562-.763c5.976-2.92 12.4-4.4 19.097-4.4 24.036 0 43.59 19.572 43.59 43.63 0 8.104-2.236 16.017-6.47 22.88l-.76 1.23.69 1.27c2.564 4.75 3.92 10.13 3.92 15.56 0 9.508-4.128 18.537-11.325 24.773l-2.273 1.97 2.353 1.875c10.68 8.512 16.807 21.22 16.807 34.865 0 24.562-19.966 44.545-44.507 44.545-6.286 0-12.365-1.287-18.067-3.825l-1.93-.86-1.17 1.762c-6.574 9.907-17.58 15.82-29.438 15.82-16.456 0-30.96-11.662-34.485-27.73l-.82-3.743-3.096 2.258c-6.288 4.59-13.73 7.014-21.52 7.014-6.186 0-12.303-1.58-17.69-4.565l-1.69-.936-1.33 1.397c-7.814 8.182-18.333 12.688-29.62 12.688-4.728 0-9.373-.805-13.806-2.393l-2.414-.864-.803 2.435c-5.61 16.996-21.398 28.417-39.287 28.417z' fill='#ffff00' stroke='#ff0000' strokeWidth='5' strokeLinecap='butt' strokeMiterlimit='5' />
                    <text className='resetThoughtsText' id='resetThoughtsTextID' x='50%' y='50%' textAnchor='middle' stroke='#000000' dy='0.35em'>
                        <tspan dx='12.5%' dy='-7.5%'>reset</tspan>
                        <tspan dx='-50%' dy='17.5%'>my thoughts...</tspan>
                    </text>
                </svg>

            </div>

        {/* #endregion ==================== RESET THOUGHTS ==================== */}


        {/* #region ==================== THOUGHTS ==================== */}

            <svg className='boingSvg' id='boingSvgID' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 325 245' enableBackground='0 0 325 245' ref={boing_Ref}>
                <path className='boingPath' id='boingPathID' d='M0 245c10.1-47.992 24.712-91.212 42.77-127.508s39.558-65.67 63.434-85.968S156.33 0 183.884 0s53.805 11.225 77.68 31.524 45.38 49.672 63.436 85.968' fill='none' stroke='#00ff00' strokeMiterlimit='10' />
            </svg>

            <div className='curlContainer' id='curlContainerID' ref={curlContainer_Ref}>
                <MyThoughts />
            </div>

            <div className='thoughtBubbleDiv' id='thoughtBubbleDivID' onClick={() => closeThought(thoughtBubble_Ref.current)} ref={thoughtBubble_Ref}>

                <svg className='thoughtBubbleSvg' id='thoughtBubbleSvgID' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 280' enableBackground='new 0 0 400 280'>
                    <path className='thoughtBubblePath' id='thoughtBubblePathID' d='M135.83 277.5c-16.127 0-30.895-9.492-37.623-24.184l-.798-1.744-1.893.32c-2.897.49-5.853.738-8.784.738-28.848 0-52.317-23.49-52.317-52.362 0-2.02.12-4.077.357-6.118l.237-2.038-1.953-.63C14.78 185.59 2.5 168.708 2.5 149.476c0-19.473 12.477-36.418 31.047-42.165l2.31-.714-.638-2.333c-.876-3.198-1.32-6.494-1.32-9.794 0-20.406 16.586-37.006 36.973-37.006 2.43 0 4.873.242 7.264.718l2.672.533.3-2.708c2.997-26.96 25.725-47.293 52.868-47.293 17.95 0 34.572 8.973 44.462 24.003l.995 1.512 1.747-.474c3.335-.902 6.77-1.36 10.21-1.36.603 0 1.202.02 1.798.047l1.72.077.685-1.578C203.103 13.664 220.112 2.5 238.93 2.5c25.207 0 45.93 19.72 47.178 44.896l.14 2.807 2.77-.465c2.57-.43 5.19-.65 7.79-.65 12.06 0 23.512 4.583 32.242 12.903l1.26 1.2 1.562-.763c5.976-2.92 12.4-4.4 19.097-4.4 24.036 0 43.59 19.572 43.59 43.63 0 8.104-2.236 16.017-6.47 22.88l-.76 1.23.69 1.27c2.564 4.75 3.92 10.13 3.92 15.56 0 9.508-4.128 18.537-11.325 24.773l-2.273 1.97 2.353 1.875c10.68 8.512 16.807 21.22 16.807 34.865 0 24.562-19.966 44.545-44.507 44.545-6.286 0-12.365-1.287-18.067-3.825l-1.93-.86-1.17 1.762c-6.574 9.907-17.58 15.82-29.438 15.82-16.456 0-30.96-11.662-34.485-27.73l-.82-3.743-3.096 2.258c-6.288 4.59-13.73 7.014-21.52 7.014-6.186 0-12.303-1.58-17.69-4.565l-1.69-.936-1.33 1.397c-7.814 8.182-18.333 12.688-29.62 12.688-4.728 0-9.373-.805-13.806-2.393l-2.414-.864-.803 2.435c-5.61 16.996-21.398 28.417-39.287 28.417z' fill='#ffff00' stroke='#ff0000' strokeWidth='5' strokeLinecap='butt' strokeMiterlimit='5' />
                </svg>

                <div className='thoughtBubbleText' id='thoughtBubbleTextID'>Blahbitty, blahbitty, blah...!</div>

                <svg className='thoughtClose' id='thoughtCloseID' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' enableBackground='new 0 0 30 30' onClick={() => closeThought(thoughtBubble_Ref.current)}>
                    <circle className='thoughtClosePath' id='thoughtClosePathID' cx='15' cy='15' r='12.5' />
                    <text className='thoughtCloseX' id='thoughtCloseXID' x='50%' y='50%' textAnchor='middle' stroke='#000000' dy='0.35em'>X</text>
                </svg>

            </div>

        {/* #endregion ==================== THOUGHTS ==================== */}

        </div>
    )
}

//#endregion ==================== EXPORT ABOUT ====================
