//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useLayoutEffect } from 'react';
// import { useCallback } from 'react';

import { gsap } from 'gsap';
// import { CSSPlugin } from 'gsap/CSSPlugin';

import ReactPlayer from 'react-player/vimeo';

import '../stylesheets/Work.scss';

import myData from '../data/MyData';

import { WorkPod } from '../components/WorkPod';


//#region -------------------- IMPORTS: GSAP BANNERS --------------------

import EAAR_18951 from '../images/ea/banners/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600/EAAR_18951';
import NMPF_04852 from '../images/ea/banners/CR_4852_NMPF_US_Walmart_300x250/NMPF_04852';
import NMMN_11155 from '../images/ea/banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155';
import BCBG_02342 from '../images/ea/banners/BCBG_MAXAZRIA_CR00002342_AU_Digital_Plan/BCBG_02342';
import BCBG_05500 from '../images/ea/banners/CR_5500_BCBG_BC_AU_Digital_Plan_2013/BCBG_05500';
import JCNR_07074 from '../images/ea/banners/CR_7074_JC_VNOIR_2013_AU_300x600/JCNR_07074';
import BSPS_26897 from '../images/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
import NMTG_26903 from '../images/ea/banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
import JCVR_26963 from '../images/ea/banners/26963_JC_VIVA_ROSE_GWP_PR_Walgreens_300x250/JCVR_26963';
import JBJA_10263 from '../images/ea/banners/CR_10263_J_by_JENNIFER_ANISTON_Kohls_300x250/JBJA_10263';

//#endregion -------------------- IMPORTS: GSAP BANNERS --------------------


//#region -------------------- GSAP: REGISTER PLUGINS --------------------

// gsap.registerPlugin(CSSPlugin);

//#endregion -------------------- GSAP: REGISTER PLUGINS --------------------

//#endregion ==================== IMPORTS ====================



//#region ==================== CONSTANTS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';
const videoLoc = 'https://vimeo.com/';

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

let work;


//#region -------------------- AVAILABLE CONTENT: xContent[] --------------------

const bannerContent = {
    EAAR_18951: EAAR_18951,
    NMPF_04852: NMPF_04852,
    NMMN_11155: NMMN_11155,
    BCBG_02342: BCBG_02342,
    BCBG_05500: BCBG_05500,
    JCNR_07074: JCNR_07074,
    BSPS_26897: BSPS_26897,
    NMTG_26903: NMTG_26903,
    JCVR_26963: JCVR_26963,
    JBJA_10263: JBJA_10263,
};

//#endregion -------------------- AVAILABLE CONTENT: xContent[] --------------------

//#endregion ==================== CONSTANTS ====================



//#region ==================== WorkList() => <WorkList /> ====================

function WorkList({ currentEmployer }) {

    // console.log('');
    // console.log('------------------------- WorkList({ currentEmployer }) -------------------------');
    // console.log('currentEmployer = ' + currentEmployer);


    //#region ==================== WORK FORMAT ARRAYS ==================== */

    // const bannerArray = work.filter(thisFormat => thisFormat.format === 'banner').map((workImage) => (
    const bannerArray = work.filter(thisFormat => thisFormat.format === 'banner' && thisFormat.availability).map((workImage) => (
        workImage
    ));

    // const webArray = work.filter(thisFormat => thisFormat.format === 'html5' || thisFormat.format === 'video' || thisFormat.format === 'website' || thisFormat.format === 'mobile').map((workImage) => (
    const webArray = work.filter(thisFormat => (thisFormat.format === 'html5' && thisFormat.availability) || (thisFormat.format === 'video' && thisFormat.availability) || (thisFormat.format === 'website' && thisFormat.availability) || (thisFormat.format === 'mobile' && thisFormat.availability)).map((workImage) => (
        workImage
    ));

    const printArray = work.filter(thisFormat => thisFormat.format === 'print').map((workImage) => (
        workImage
    ));


    // console.log('');
    // console.log('bannerArray = ' + bannerArray);
    // console.log(bannerArray);

    // console.log('');
    // console.log('webArray = ' + webArray);
    // console.log(webArray);

    // console.log('');
    // console.log('printArray = ' + printArray);
    // console.log(printArray);

    //#endregion ==================== WORK FORMAT ARRAYS ==================== */



    //#region ==================== FUNCTIONS ====================

    //#region -------------------- FUNCTION: clearContent() --------------------

    // // const clearContentRef = React.createRef();

    function clearContent() {
    // const clearContent = React.forwardRef((props) => {
    // const clearContent = useCallback(() => {
    // const clearContent = () => {

        // console.log('');
        // console.log('-------------------- FUNCTION: clearContent() --------------------');

        // console.log(bannerContainer_Ref.current.parentNode);
        // console.log(bannerContainer_Ref.current);
        // console.log(bannerContainer_Ref.current.children);
        // console.log(document.getElementById('bannerContainerID').children);
        // // console.log(bannerContainer_Ref.current.children.tl);


        setBannerShow(null);
        // bannerContainer_Ref.current.removeChild(children);
        // bannerContainer_Ref.current.children.remove();
        // bannerContainer_Ref.current.children = null;
        // document.getElementById('bannerContainerID').children.remove();

        setBanneriFrameOpen(false);
        banneriFrame_Ref.current.src = '';

        setWebiFrameOpen(false);
        webiFrame_Ref.current.src = '';

        setVideoOpen(false);
        setLoadedVideo(null);
    }
    // }, []);

    // export default clearContent;


    //#endregion -------------------- FUNCTION: clearContent() --------------------


    //#region -------------------- FUNCTION: handleClick(thisWorkImage, thisTargetImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks --------------------

    // let newContent = React.createElement(bannerContent[thisWorkImage.link2]);
    // let newContent = React.createElement();
    let newContent;

    function handleClick(thisWorkImage, thisTargetImage) {

        // console.log('');
        // console.log('-------------------- FUNCTION: handleClick(thisWorkImage, thisTargetImage) --------------------');
        // // console.log('thisWorkImage = ' + thisWorkImage);
        // console.log('thisWorkImage');
        // console.log(thisWorkImage);

        // console.log('thisTargetImage = ' + thisTargetImage);
        // console.log('thisTargetImage');
        // console.log(thisTargetImage);


        setActiveImage(thisTargetImage);

        //#region - - - - - - - - - - - - - ASSIGN NEW CONTENT - - - - - - - - - - - - -

        switch (thisWorkImage.format) {

            case 'banner':

            //#region -------------------- ASSIGN NEW CONTENT: banner --------------------

                let bannerScale = thisTargetImage.width / thisWorkImage.mwidth;

                clearContent();

                if (thisWorkImage.format_src === 'animate' || thisWorkImage.format_src === 'standard') {

                //#region -------------------- IF 'animate'... --------------------

                    let iframeSRC = remoteLoc + thisWorkImage.album_id + '/banners/' + thisWorkImage.link;

                    banneriFrame_Ref.current.src = iframeSRC;

                    banneriFrame_Ref.current.style.left = thisTargetImage.offsetLeft + 'px';
                    banneriFrame_Ref.current.style.top = thisTargetImage.offsetTop + 'px';
                    banneriFrame_Ref.current.style.width = thisTargetImage.width / bannerScale + 'px';
                    banneriFrame_Ref.current.style.height = thisTargetImage.height / bannerScale + 'px';

                    gsap.set([banneriFrame_Ref.current], { scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

                    setBanneriFrameOpen(true);

                //#endregion -------------------- IF 'animate'... --------------------

                } else if (thisWorkImage.format_src === 'html5') {

                //#region -------------------- ELSE IF 'html5'... --------------------

                    // const newContent = React.createElement(bannerContent[thisWorkImage.link2]);
                    // let newContent = React.createElement(bannerContent[thisWorkImage.link2]);
                    // newContent = bannerContent[thisWorkImage.link2];
                    newContent = React.createElement(bannerContent[thisWorkImage.link2]);


                    // console.log('');
                    // console.log('-------------------- FUNCTION: handleClick(thisWorkImage, thisTargetImage) ----- ELSE IF \'html5\'... --------------------');

                    // // console.log('');
                    // // console.log('thisWorkImage = ' + thisWorkImage);
                    // console.log('thisWorkImage');
                    // console.log(thisWorkImage);

                    // console.log('');
                    // // console.log('newContent = ' + newContent);
                    // console.log('newContent');
                    // console.log(newContent);
                    // // console.log(newContent.props);


                    gsap.set([bannerContainer_Ref.current], { x: thisTargetImage.offsetLeft, y: thisTargetImage.offsetTop, scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

                    setBannerShow(newContent);
                    // setBannerShow(bannerContent[thisWorkImage.link2]);
                }

                //#endregion -------------------- ELSE IF 'html5'... --------------------

                break;

            //#endregion -------------------- ASSIGN NEW CONTENT: banner --------------------


            case 'html5':
            case 'website':
            case 'mobile':

            //#region -------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------

                clearContent();

                let iframeSRC;

                if (thisWorkImage.format_src === 'external') {
                    iframeSRC = thisWorkImage.link2;
                } else {
                    iframeSRC = remoteLoc + thisWorkImage.album_id + '/' + thisWorkImage.link2;
                }

                webiFrame_Ref.current.src = iframeSRC;
                webiFrame_Ref.current.style.width = thisWorkImage.mwidth + 'px';
                webiFrame_Ref.current.style.height = thisWorkImage.mheight + 'px';
                webiFrame_Ref.current.style.left = (window.innerWidth - thisWorkImage.mwidth) / 2 + 'px';

                setWebiFrameOpen(true);

                //#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - compensate for oversized / oddly-sized content  - - - - - - - - - - -

                // if (thisWorkImage.mheight >= window.innerHeight) {
                // if (thisWorkImage.mwidth >= window.innerWidth || thisWorkImage.mheight >= window.innerHeight) {
                if (thisWorkImage.mwidth >= window.innerWidth || thisWorkImage.mheight >= window.innerHeight || thisWorkImage.mwidth <= window.innerWidth * 0.5 || thisWorkImage.mheight <= window.innerHeight * 0.5) {

                    //#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - TOO BIG / SMALL  - - - - - - - - - - -

                    // let thisScale = (window.innerHeight / thisWorkImage.mheight) * 0.9;
                    // let thisScale = (window.innerHeight / thisWorkImage.mheight) * 0.875;
                    let thisScale = (window.innerHeight / thisWorkImage.mheight) * 0.75;
                    // let thisScale = (window.innerHeight / thisWorkImage.mheight) * 0.5;
                    let thisY = (window.innerHeight - (thisWorkImage.mheight * thisScale)) / 2;

                    gsap.set([webiFrame_Ref.current], { top: thisY, scale: thisScale, transformOrigin: '50% 0', immediateRender: true });

                    //#endregion - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - TOO BIG / SMALL  - - - - - - - - - - -

                } else {

                    //#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - JUUUUST RIIIIGHT  - - - - - - - - - - -

                    let thisY = (window.innerHeight - thisWorkImage.mheight) / 2;

                    gsap.set([webiFrame_Ref.current], { top: thisY, transformOrigin: '50% 0', immediateRender: true });

                    //#endregion - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - JUUUUST RIIIIGHT  - - - - - - - - - - -
                }

                //#endregion - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - compensate for oversized / oddly-sized content  - - - - - - - - - - -

                break;

            //#endregion -------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------


            case 'video':

            //#region -------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------

                // console.log('');
                // console.log('-------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------');
                // console.log(thisWorkImage);
                // console.log('thisWorkImage.mwidth = ' + thisWorkImage.mwidth + '     thisWorkImage.mheight = ' + thisWorkImage.mheight);
                // console.log('window.innerWidth = ' + window.innerWidth + '     window.innerHeight = ' + window.innerHeight);
                // console.log('window.innerWidth * 0.8 = ' + window.innerWidth * 0.8);


                clearContent();

                let videoSRC = videoLoc + thisWorkImage.link2;
                let newVidWidth;
                let newVidHeight;

                // let vidScale = 0.5;
                let vidScale = 0.8;

                switch (true) {

                    case thisWorkImage.mwidth >= window.innerWidth && thisWorkImage.mwidth >= thisWorkImage.mheight:

                        // console.log('This content is TOO WIDE & LANDSCAPE');
                        // console.log('thisWorkImage.mwidth = ' + thisWorkImage.mwidth + '     thisWorkImage.mheight = ' + thisWorkImage.mheight);

                        newVidWidth = window.innerWidth * vidScale;
                        newVidHeight = thisWorkImage.mheight * (newVidWidth / thisWorkImage.mwidth);

                        break;

                    case thisWorkImage.mwidth >= window.innerWidth && thisWorkImage.mwidth <= thisWorkImage.mheight:

                        // console.log('This content is TOO WIDE & PORTRAIT');
                        // console.log('thisWorkImage.mwidth = ' + thisWorkImage.mwidth + '     thisWorkImage.mheight = ' + thisWorkImage.mheight);

                        newVidWidth = window.innerWidth * vidScale;
                        newVidHeight = thisWorkImage.mheight * (newVidWidth / thisWorkImage.mwidth);

                        break;

                    case thisWorkImage.mheight >= window.innerHeight && thisWorkImage.mwidth >= thisWorkImage.mheight:

                        // console.log('This content is TOO TALL & LANDSCAPE');
                        // console.log('thisWorkImage.mwidth = ' + thisWorkImage.mwidth + '     thisWorkImage.mheight = ' + thisWorkImage.mheight);

                        newVidHeight = window.innerHeight * vidScale;
                        newVidWidth = thisWorkImage.mwidth * (newVidHeight / thisWorkImage.mheight);

                        break;

                    case thisWorkImage.mheight >= window.innerHeight && thisWorkImage.mwidth <= thisWorkImage.mheight:

                        // console.log('This content is TOO TALL & PORTRAIT');
                        // console.log('thisWorkImage.mwidth = ' + thisWorkImage.mwidth + '     thisWorkImage.mheight = ' + thisWorkImage.mheight);

                        newVidHeight = window.innerHeight * vidScale;
                        newVidWidth = thisWorkImage.mwidth * (newVidHeight / thisWorkImage.mheight);

                        break;

                    default:

                        console.log('DEFAULT');
                        // console.log('thisWorkImage.mwidth = ' + thisWorkImage.mwidth + '     thisWorkImage.mheight = ' + thisWorkImage.mheight);

                        // newVidWidth = thisWorkImage.mwidth;
                        // newVidHeight = thisWorkImage.mheight;

                        // newVidWidth = window.innerWidth * vidScale;
                        // newVidHeight = thisWorkImage.mheight * (newVidWidth / thisWorkImage.mwidth);

                        if (window.innerWidth / window.innerHeight <= thisWorkImage.mwidth / thisWorkImage.mheight) {

                            // console.log('thisWorkImage.mwidth / thisWorkImage.mheight = ' + thisWorkImage.mwidth / thisWorkImage.mheight);
                            // console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

                            // console.log('This content FITS and I want it to behave LANDSCAPE');

                            newVidWidth = window.innerWidth * 0.75;
                            newVidHeight = thisWorkImage.mheight * (newVidWidth / thisWorkImage.mwidth);

                        } else {

                            // console.log('thisWorkImage.mwidth / thisWorkImage.mheight = ' + thisWorkImage.mwidth / thisWorkImage.mheight);
                            // console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

                            // console.log('This content FITS and I want it to behave PORTRAIT');

                            newVidHeight = window.innerHeight * 0.75;
                            newVidWidth = thisWorkImage.mwidth * (newVidHeight / thisWorkImage.mheight);
                        }

                        break;
                }


                // console.log('newVidWidth = ' + newVidWidth + '     newVidHeight = ' + newVidHeight);

                setVideoWidth(newVidWidth);
                setVideoHeight(newVidHeight);

                setLoadedVideo(videoSRC);
                setVideoOpen(true);

                break;

            //#endregion -------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------


            default:

            //#region -------------------- ASSIGN NEW CONTENT: default --------------------

                clearContent();

                break;

            //#endregion -------------------- ASSIGN NEW CONTENT: default --------------------
        }

        //#endregion - - - - - - - - - - - - - ASSIGN NEW CONTENT - - - - - - - - - - - - -
    }

    //#endregion -------------------- FUNCTION: handleClick(thisWorkFormat, thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== ASSETS _Ref ====================

    const sectionNav_Ref = useRef(null);

    const bannerContainer_Ref = useRef(null);
    const banneriFrame_Ref = useRef(null);

    const iframeContainer_Ref = useRef(null);
    const webiFrame_Ref = useRef(null);

    const videoContainer_Ref = useRef(null);
    const videoPlayer_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================



    //#region ==================== useState DEFs ====================

    const [activeImage, setActiveImage] = useState('');

    const [bannerShow, setBannerShow] = useState(null);
    const [banneriFrameOpen, setBanneriFrameOpen] = useState(false);

    const [webiFrameOpen, setWebiFrameOpen] = useState(false);

    const [videoOpen, setVideoOpen] = useState(false);
    const [loadedVideo, setLoadedVideo] = useState(null);
    const [videoWidth, setVideoWidth] = useState(null);
    const [videoHeight, setVideoHeight] = useState(null);


    const [employer, setEmployer] = useState(null);

    const [isBannerArray, setBannerArray] = useState(bannerArray);
    const [isWebArray, setWebArray] = useState(webArray);
    const [isPrintArray, setPrintArray] = useState(printArray);


    // console.log(isBannerArray);
    // console.log(isWebArray);
    // console.log(isPrintArray);


    let [windowWidth, setWindowWidth] = useState(getWidth());

    //#endregion ==================== useState DEFs ====================



    //#region ==================== setState ====================

    if (employer !== currentEmployer) {

        setBannerShow(null);
        setBanneriFrameOpen(false);

        setWebiFrameOpen(false);

        setVideoOpen(false);
        setLoadedVideo(null);


        setEmployer(currentEmployer);

        setBannerArray(bannerArray);
        setWebArray(webArray);
        setPrintArray(printArray);
    }

    //#endregion ==================== setState ====================



    //#region ==================== WorkList - useEffect: WINDOW RESIZE ====================

    useEffect(() => {

        // console.log('');
        // console.log('------------------------- WorkList - useEffect -------------------------');

        //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

        let timeoutId = null;

        const resizeListener = () => {

            // console.log('');
            // console.log('------------------------- WorkList - useEffect: WINDOW RESIZE (resizeListener) -------------------------');

            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);

            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() => setWindowWidth(getWidth()), 150);

            let bannerScale;

            if (activeImage && activeImage.getAttribute('format_src') === 'animate') {

            //#region -------------------- IF 'animate'... --------------------

                bannerScale = activeImage.width / activeImage.getAttribute('mwidth');

                banneriFrame_Ref.current.style.left = activeImage.offsetLeft + 'px';
                banneriFrame_Ref.current.style.top = activeImage.offsetTop + 'px';
                banneriFrame_Ref.current.style.width = activeImage.width / bannerScale + 'px';
                banneriFrame_Ref.current.style.height = activeImage.height / bannerScale + 'px';

                gsap.set([banneriFrame_Ref.current], { scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

            //#endregion -------------------- IF 'animate'... --------------------

            } else if (activeImage && activeImage.getAttribute('format_src') === 'html5') {

            //#region -------------------- ELSE IF 'html5'... --------------------

                bannerScale = activeImage.width / activeImage.getAttribute('mwidth');

                gsap.set([bannerContainer_Ref.current], { x: activeImage.offsetLeft, y: activeImage.offsetTop, scale: bannerScale, transformOrigin: '0 0', immediateRender: true });
            }

            //#endregion -------------------- ELSE IF 'html5'... --------------------

        };


        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }

        //#endregion -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

    }, [windowWidth, activeImage]);

    //#endregion ==================== WorkList - useEffect: WINDOW RESIZE ====================


    return (
        <>

        {/* #region ------------------------- sectionNav ------------------------- */}

            <div className='sectionNav' id='sectionNavID' ref={sectionNav_Ref}>
                {/* {isBannerArray.length > 0 && <p>Banner Animations</p>}
                {isWebArray.length > 0 && <p>Web/Video</p>}
                {isPrintArray.length > 0 && <p>Print</p>} */}

                {isBannerArray.length > 0 && <a href='#bannerPodID'><p>Banner Animations</p></a>}
                {isWebArray.length > 0 && <a href='#webPodID'><p>Web/Video</p></a>}
                {isPrintArray.length > 0 && <a href='#printPodID'><p>Print</p></a>}
            </div>

        {/* #endregion ------------------------- sectionNav ------------------------- */}


        {/* #region ------------------------- BANNERS: REACT ------------------------- */}

            <div className='bannerContainer' id='bannerContainerID' ref={bannerContainer_Ref}>
                {bannerShow}
            </div>

        {/* #region ------------------------- BANNERS: REACT ------------------------- */}


        {/* #region ------------------------- BANNERS: IFRAME ------------------------- */}

                <iframe
                    className={banneriFrameOpen === true ? 'banneriFrameOpen' : 'banneriFrameClosed'}
                    id='banneriFrameID'
                    name='banneriFrame'
                    title='banneriFrame'
                    ref={banneriFrame_Ref}
                />

            {/* </div> */}

        {/* #endregion ------------------------- BANNERS: IFRAME ------------------------- */}


        {/* #region ------------------------- WEB: IFRAME ------------------------- */}

            <div className={webiFrameOpen === true ? 'webiFrameContainerOpen' : 'webiFrameContainerClosed'} id='webiFrameContainerID' onClick={() => { clearContent(); }} ref={iframeContainer_Ref}>

                <iframe
                    className='webiFrame' 
                    id='webiFrameID'
                    name='webiFrame'
                    title='webiFrame'
                    ref={webiFrame_Ref}
                />

            </div>

        {/* #endregion ------------------------- WEB: IFRAME ------------------------- */}


        {/* #region ------------------------- VIDEO PLAYER ------------------------- */}

            <div className={videoOpen === true ? 'videoContainerOpen' : 'videoContainerClosed'} id='videoContainerID' onClick={() => { clearContent(); }} ref={videoContainer_Ref}>

                <ReactPlayer
                    className='videoPlayer'
                    id='videoPlayerID'
                    // width='80%'
                    width={videoWidth} 
                    height={videoHeight} 
                    url={loadedVideo}
                    ref={videoPlayer_Ref}

                    config={{
                        vimeo: {
                            playerOptions: { 
                                autoplay: true, 
                                loop: true, 
                                // color: '00ffff',
                                // width: 1800,
                                // maxwidth: 2400,
                                // width: window.innerWidth * 0.8,
                            },
                        }
                    }}
                />

            </div>

        {/* #region ------------------------- VIDEO PLAYER ------------------------- */}


        {/* #region ------------------------- CLOSE TOGGLE BUTTON ------------------------- */}

            <div className='toggleBtnDiv' id='toggleBtnDivID'>
                <br />
                <button className={webiFrameOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { clearContent(); }}> Close </button>
                <button className={videoOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { clearContent(); }}> Close </button>
            </div>

        {/* #endregion ------------------------- CLOSE TOGGLE BUTTON ------------------------- */}


        {/* #region ------------------------- WORKPODS ------------------------- */}

            {isBannerArray.length > 0 && <WorkPod workFormat='banner' workArray={bannerArray} handleClick={handleClick} />}
            {isWebArray.length > 0 && <WorkPod workFormat='website' workArray={webArray} handleClick={handleClick} />}
            {isPrintArray.length > 0 && <WorkPod workFormat='print' workArray={printArray} handleClick={handleClick} />}

        {/* #region ------------------------- WORKPODS ------------------------- */}

        </>
    )
}

//#endregion ==================== WorkList() => <WorkList /> ====================



// export const Work = ({ currentEmployer, locID }) => {
export const Work = (props) => {

    // console.log('');
    // console.log('==================== COMPONENT: Work.jsx ====================');

    // // console.log('');
    // console.log('props = ' + props);
    // console.log(props);


    // localStorage.setItem('navLoc', locID);
    // localStorage.setItem('emplLoc', 'eaID');

    // work = myData[1].filter(thisEmployer => thisEmployer.album_id === currentEmployer);
    work = myData[1].filter(thisEmployer => thisEmployer.album_id === props.currentEmployer);


    // clearContent();

    // console.log('');
    // console.log('------------------------- export const Work -------------------------');
    // console.log('work = ' + work);
    // console.log(work);

    // console.log('props.currentEmployer = ' + props.currentEmployer);


    return (
        <div className='workContainer' id='workContainerID'>
            {/* <WorkList currentEmployer={currentEmployer} /> */}
            <WorkList currentEmployer={props.currentEmployer} />
        </div>
    )
}
