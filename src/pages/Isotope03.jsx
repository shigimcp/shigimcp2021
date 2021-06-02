//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useLayoutEffect } from 'react';
// import { createRef } from 'react';

import Isotope from 'isotope-layout';
import Packery from 'isotope-packery';

import { isBrowser } from "react-device-detect";
// import { isMobile } from "react-device-detect";
// import { isBrowser, isMobile } from "react-device-detect";
// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import ReactPlayer from 'react-player/vimeo';

import '../stylesheets/Global.scss';
import '../stylesheets/Isotope.scss';

import myData from '../data/MyData';

import { gsap } from 'gsap';


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

//#endregion ==================== IMPORTS ====================


//#region ==================== CONSTANTS n VARS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';
const videoLoc = 'https://vimeo.com/';


//#region -------------------- DATA --------------------

// console.log('');
// // console.log('myData = ' + myData);
// console.log('myData = ');
// console.log(myData);

let employerData = myData[0];
let workData = myData[1];

// console.log('');
// // console.log('employerData = ' + employerData);
// console.log('employerData = ');
// console.log(employerData);
// // console.log(employerData[0].employer);

// console.log('');
// // console.log('workData = ' + workData);
// console.log('workData = ');
// console.log(workData);

//#endregion -------------------- DATA --------------------


//#region -------------------- FILTER ARRAY: filterEmployer --------------------

const filterEmployer = employerData.filter(isInGallery => isInGallery.isInGallery);

// console.log('');
// // console.log('filterEmployer = ' + filterEmployer);
// console.log('filterEmployer = ');
// console.log(filterEmployer);

// filterEmployer.unshift(
filterEmployer.push(
    {
        "album_index": '00',
        "album_id": "*",
        "employer": "All",
        "title": "Digital Designer / Front-End Developer",
        "date_start": "present",
        "date_end": "present",
        "info": "View ALL work",
        "info_other": "",
        "other_html": "",
        "other_type": "",
        "other": "",
        "software": "",
        "languages": "",
        //    "logopath": "0elements/shigeru_logo.svg",
        //    "logo": "shigeru_logo_transparent.svg",
        "logopath": "#",
        "logo": "#",
        "slpath": "other/sl",
        "thpath": "other/th",
        "flpath": "https://www.shigimcp.com/img/other/",
        "flpath_stage": "https://www.shigimcp.com/Xstage/shigimcp_2019/img/other/",
        "availability": true,
        "isInGallery": true
    }
)

// console.log('');
// // console.log('filterEmployer = ' + filterEmployer);
// console.log('filterEmployer = ');
// console.log(filterEmployer);

//#endregion -------------------- FILTER ARRAY: filterEmployer --------------------


//#region -------------------- FILTER ARRAY: filterType - REF: https://github.com/rhernandog/gsap-flip-react/blob/master/src/App.js --------------------

const filterType = [
    // { key: '0000', id: 'allCheck', value: 'all', label: 'All' },
    { key: '0000', id: 'websiteCheck', value: 'website', label: 'Website' },
    { key: '0001', id: 'mobileCheck', value: 'mobile', label: 'Mobile' },
    { key: '0002', id: 'videoCheck', value: 'video', label: 'Video' },
    { key: '0003', id: 'bannerCheck', value: 'banner', label: 'Banner' },
    { key: '0004', id: 'printCheck', value: 'print', label: 'Print' },
    { key: '0005', id: 'allCheck', value: '*', label: 'All' },
];

// console.log('');
// console.log('filterType = ' + filterType);
// console.log('filterType = ');
// console.log(filterType);

//#endregion -------------------- FILTER ARRAY: filterType - REF: https://github.com/rhernandog/gsap-flip-react/blob/master/src/App.js --------------------


//#region -------------------- TIMELINES --------------------

// console.log('-------------------- TIMELINES: workNavTL --------------------');

// const workNavTL = new gsap.timeline();
const workNavTL = new gsap.timeline({ paused: true });

//#endregion -------------------- TIMELINES --------------------


//#region -------------------- HTML5 BANNERS: bannerContent[] --------------------

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

//#endregion -------------------- HTML5 BANNERS: xContent[] --------------------

//#endregion ==================== CONSTANTS n VARS ====================



export const Isotope03 = (props) => {

    // console.log('');
    // console.log('==================== Isotope03 ====================');
    // console.log('props = ' + props);
    // console.log(props);

    // console.log('');
    // console.log('isBrowser = ' + isBrowser);
    // // console.log(isBrowser);

    // console.log('isMobile = ' + isMobile);
    // // console.log(isMobile);


    //#region ==================== ASSETS _Ref ====================

    // init one ref to store the future isotope object
    const isotope_Ref = useRef()

    const workNav_Ref = useRef(null);

    const employerNav_Ref = useRef(null);
    const activeEmplDiv_Ref = useRef(null);

    const typeNav_Ref = useRef(null);
    const activeTypeDiv_Ref = useRef(null);

    // const toggleNav_Ref = useRef(null);
    // const toggleBtn_Ref = useRef(null);
    const navToggleBtn_Ref = useRef(null);

    const galleryContainer_Ref = useRef(null);

    const bannerContainer_Ref = useRef(null);
    const banneriFrame_Ref = useRef(null);

    const iframeContainer_Ref = useRef(null);
    const webiFrame_Ref = useRef(null);

    const videoContainer_Ref = useRef(null);
    const videoPlayer_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================


    //#region ==================== useState DEFs ====================

    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState('*');

    const [workNavToggleText, setWorkNavToggleText] = useState('<< View by employer');
    const [workNavToggleBtn, setWorkNavToggleBtn] = useState(true);

    const [bannerShow, setBannerShow] = useState(null);
    const [banneriFrameOpen, setBanneriFrameOpen] = useState(false);

    const [webiFrameOpen, setWebiFrameOpen] = useState(false);

    const [videoOpen, setVideoOpen] = useState(false);
    const [loadedVideo, setLoadedVideo] = useState(null);
    const [videoWidth, setVideoWidth] = useState(null);
    const [videoHeight, setVideoHeight] = useState(null);

    //#endregion ==================== useState DEFs ====================



    //#region ==================== useEffect: setActiveEmplDiv / activeTypeDiv INIT ====================

    useEffect(() => {
    // useLayoutEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: setActiveEmplDiv / activeTypeDiv INIT ====================');

        let activeDivDims = getDimensions(employerNav_Ref.current.lastChild);

        // console.log('');
        // console.log('activeDivDims: employerNav_Ref = ' + activeDivDims);
        // console.log(activeDivDims);


        let thisLocX = (employerNav_Ref.current.offsetWidth * 0.5) - (activeDivDims[2] * 0.5);
        let thisLocY = activeDivDims[1];
        let thisLocW = activeDivDims[2];
        let thisLocH = activeDivDims[3];

        // console.log('');
        // console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
        // console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);

        gsap.set([activeEmplDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH });



        activeDivDims = getDimensions(typeNav_Ref.current.lastChild);

        // console.log('');
        // console.log('activeDivDims: typeNav_Ref = ' + activeDivDims);
        // console.log(activeDivDims);


        thisLocX = (typeNav_Ref.current.offsetWidth * 0.5) - (activeDivDims[2] * 0.5);
        thisLocY = activeDivDims[1];
        thisLocW = activeDivDims[2];
        thisLocH = activeDivDims[3];

        // console.log('');
        // console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
        // console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);

        gsap.set([activeTypeDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH });

    }, [])
    // }, [activeEmplDiv])

    //#endregion ==================== useEffect: setActiveEmplDiv / activeTypeDiv INIT ====================


    //#region ==================== useEffect: workNavTL ====================

    useEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: workNavTL ====================');
        // console.log('workNavTL = ' + workNavTL);
        // console.log('isBrowser = ' + isBrowser);


        let workNavWidth = employerNav_Ref.current.getBoundingClientRect().width;
        let workNavHeight = employerNav_Ref.current.getBoundingClientRect().height;

        // console.log('workNavWidth = ' + workNavWidth);
        // console.log('workNavHeight = ' + workNavHeight);


        if (isBrowser === true) {
            workNavTL
                .fromTo([employerNav_Ref.current], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
                .fromTo([typeNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 0, duration: 0.5 }, 'frame01')
                // .fromTo([activeEmplDiv_Ref.current], { height: 0 }, { height: workNavHeight, duration: 0.5 }, 'frame01')
        } else {
            workNavTL
                .fromTo([employerNav_Ref.current], { x: -workNavWidth, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
                .fromTo([typeNav_Ref.current], { x: 0, autoAlpha: 1 }, { x: -workNavWidth, autoAlpha: 0, duration: 0.5 }, 'frame01')
                // .fromTo([activeEmplDiv_Ref.current], { width: 0 }, { width: workNavHeight, duration: 0.5 }, 'frame01')
        }


        if (workNavToggleBtn) {
            workNavTL.restart();
        }

    // }, [])
    // }, [workNavHeight])
    }, [workNavToggleBtn])

    //#endregion ==================== useEffect: workNavTL ====================


    //#region ==================== useEffect: workNavToggleBtn ====================

    useEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: workNavToggleBtn ====================');
        // console.log('workNavToggleBtn = ' + workNavToggleBtn);

        // // console.log('');
        // console.log('employerNav_Ref.current.lastChild = ' + employerNav_Ref.current.lastChild);
        // console.log(employerNav_Ref.current.lastChild);

        // console.log('');
        // console.log('typeNav_Ref.current.lastChild = ' + typeNav_Ref.current.lastChild);
        // console.log(typeNav_Ref.current.lastChild);


        clearContent();

        if (workNavToggleBtn) {
            workNavTL.play();
            setWorkNavToggleText('View by type');
            typeNav_Ref.current.lastChild.click();
        } else {
            workNavTL.reverse();
            setWorkNavToggleText('View by employer');
            employerNav_Ref.current.lastChild.click();
        }

    // }, [])
    }, [workNavToggleBtn])

    //#endregion ==================== useEffect: workNavToggleBtn ====================


    //#region ==================== useEffect: initialize an Isotope object with configs ====================

    useEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: initialize an Isotope object with configs ====================');


        isotope_Ref.current = new Isotope('.galleryContainer', {

            // itemSelector: '.filter-item',
            itemSelector: '.workItem',
            percentPosition: true,

            // layoutMode: 'masonry',
            // masonry: {
            //     // columnWidth: 100,
            //     // gutter: 20,
            //     isFitWidth: true,
            // }

            layoutMode: 'packery',
            // packery: {
            //     gutter: 20,
            //     columnWidth: '.workItem',
            //     rowHeight: 60,
            //     horizontal: true,
            // }
        })

        // cleanup
        return () => isotope_Ref.current.destroy()

    }, [])

    //#endregion ==================== useEffect: initialize an Isotope object with configs ====================


    //#region ==================== useEffect: handleFilterKeyChange - handling filter key change ====================

    useEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: handleFilterKeyChange - handling filter key change ====================');
        // console.log('filterKey = ' + filterKey);


        filterKey === '*'
            ? isotope_Ref.current.arrange({ filter: `*` })
            : isotope_Ref.current.arrange({ filter: `.${filterKey}` });

        window.scrollTo(0, 0);

        // setActiveEmplDiv(filterKey);

    }, [filterKey])

    //#endregion ==================== useEffect: handleFilterKeyChange - handling filter key change ====================


    //#region ==================== const handleFilterKeyChange: setFilterKey / activeEmplDiv_Ref / activeTypeDiv ====================

    // const handleFilterKeyChange = key => () => setFilterKey(key);

    const handleFilterKeyChange = key => (keyJSONnode) => {

        // console.log('');
        // console.log('==================== const handleFilterKeyChange: setFilterKey / activeEmplDiv_Ref / activeTypeDiv ====================');

        // console.log('key = ' + key);
        // console.log(key);

        // console.log('');
        // console.log('keyJSONnode = ' + keyJSONnode);
        // console.log(keyJSONnode);

        // console.log('');
        // console.log('keyJSONnode.target = ' + keyJSONnode.target);
        // console.log(keyJSONnode.target);

        // console.log('');
        // console.log('keyJSONnode.currentTarget = ' + keyJSONnode.currentTarget);
        // console.log(keyJSONnode.currentTarget);

        // console.log('');
        // console.log('keyJSONnode.currentTarget.parentNode = ' + keyJSONnode.currentTarget.parentNode);
        // console.log(keyJSONnode.currentTarget.parentNode);
        // console.log('keyJSONnode.currentTarget.parentNode.id = ' + keyJSONnode.currentTarget.parentNode.id);


        clearContent();

        setFilterKey(key);
        // setFilterKey(key.album_id);

        let thisLocX;
        let thisLocY;
        let thisLocW;
        let thisLocH;

        let activeDivDims = getDimensions(keyJSONnode.currentTarget);

        // console.log('');
        // console.log('activeDivDims: activeEmplDiv_Ref / activeEmplDiv_Ref = ' + activeDivDims);
        // console.log(activeDivDims);


        if (keyJSONnode.currentTarget.parentNode.id === 'employerNavID') {

            thisLocX = activeDivDims[0] - (employerNav_Ref.current.offsetWidth * 0.5) + (activeDivDims[2] * 0.5);
            thisLocY = activeDivDims[1];
            thisLocW = activeDivDims[2];
            thisLocH = activeDivDims[3];

            // console.log('');
            // console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
            // console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);

            gsap.to([activeEmplDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 });

        } else {

            thisLocX = activeDivDims[0] - (typeNav_Ref.current.offsetWidth * 0.5) + (activeDivDims[2] * 0.5);
            thisLocY = activeDivDims[1];
            thisLocW = activeDivDims[2];
            thisLocH = activeDivDims[3];

            // console.log('');
            // console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
            // console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);

            gsap.to([activeTypeDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 });
        }
    };

    //#endregion ==================== const handleFilterKeyChange: setFilterKey / activeEmplDiv_Ref / activeTypeDiv0 ====================



    //#region ==================== FUNCTIONS ====================

    //#region -------------------- FUNCTION: getDimensions(thisObject) --------------------

    function getDimensions(thisObject) {

        // let thisObject_x = document.getElementById(thisObject.id).offsetLeft;
        // let thisObject_y = document.getElementById(thisObject.id).offsetTop;
        // let thisObject_w = document.getElementById(thisObject.id).offsetWidth;
        // let thisObject_h = document.getElementById(thisObject.id).offsetHeight;

        let thisObject_x = thisObject.offsetLeft;
        let thisObject_y = thisObject.offsetTop;
        let thisObject_w = thisObject.offsetWidth;
        let thisObject_h = thisObject.offsetHeight;

        return [thisObject_x, thisObject_y, thisObject_w, thisObject_h];
    }

    //#endregion -------------------- FUNCTION: getDimensions(thisContainer) --------------------


    //#region -------------------- FUNCTION: clearContent() --------------------

    function clearContent() {

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

    //#endregion -------------------- FUNCTION: clearContent() --------------------


    //#region -------------------- FUNCTION: loadContent(thisEvent, thisWorkItem) --------------------

    let newContent;
    let iframeSRC;

    function loadContent(thisEvent, thisWorkItem) {

        // console.log('');
        // console.log('-------------------- FUNCTION: loadContent(thisEvent, thisWorkItem) --------------------');

        // // console.log('');
        // console.log('thisEvent = ' + thisEvent);
        // console.log(thisEvent);
        // // console.log(thisEvent.target);
        // console.log(thisEvent.currentTarget);


        // let thisLocX;
        // let thisLocY;
        // let thisLocW;
        // let thisLocH;

        let currentTargetDims = getDimensions(thisEvent.currentTarget);

        // console.log('');
        // console.log('currentTargetDims loadContent: ANIMATE or STANDARD = ' + currentTargetDims);
        // console.log(currentTargetDims);


        let targetDims = getDimensions(thisEvent.target);

        // console.log('');
        // console.log('targetDims loadContent: HTML5 = ' + targetDims);
        // console.log(targetDims);


        switch (thisWorkItem.format) {

            case 'banner':

                //#region -------------------- ASSIGN NEW CONTENT: banner --------------------

                // console.log('');
                // console.log('I AM A BANNER: ' + thisWorkItem.format);


                let bannerScale = thisEvent.target.offsetWidth / thisWorkItem.mwidth;
                console.log('bannerScale = ' + bannerScale);

                clearContent();


                if (thisWorkItem.format_src === 'animate' || thisWorkItem.format_src === 'standard') {

                    //#region - - - - - - - - - - - IF 'animate'... - - - - - - - - - - -

                    console.log('I am an ANIMATE or STANDARD banner: ' + thisWorkItem.format_src);

                    iframeSRC = remoteLoc + thisWorkItem.album_id + '/banners/' + thisWorkItem.link;

                    banneriFrame_Ref.current.src = iframeSRC;
                    banneriFrame_Ref.current.style.left = currentTargetDims[0] + 'px';
                    banneriFrame_Ref.current.style.top = currentTargetDims[1] + 'px';
                    banneriFrame_Ref.current.style.width = targetDims[2] / bannerScale + 'px';
                    banneriFrame_Ref.current.style.height = targetDims[3] / bannerScale + 'px';

                    gsap.set([banneriFrame_Ref.current], { scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

                    setBanneriFrameOpen(true);

                    //#endregion - - - - - - - - - - - IF 'animate'... - - - - - - - - - - -

                } else if (thisWorkItem.format_src === 'html5') {

                    //#region - - - - - - - - - - - ELSE IF 'html5'... - - - - - - - - - - -

                    console.log('I am an HTML5 banner: ' + thisWorkItem.format_src);

                    newContent = React.createElement(bannerContent[thisWorkItem.link2]);

                    // gsap.set([bannerContainer_Ref.current], { x: currentTargetDims[0], y: currentTargetDims[1], width: currentTargetDims[2], height: currentTargetDims[3], transformOrigin: '0 0', immediateRender: true });
                    // gsap.set([bannerContainer_Ref.current], { x: currentTargetDims[0], y: currentTargetDims[1], width: currentTargetDims[2], height: currentTargetDims[3], scale: bannerScale, transformOrigin: '0 0', immediateRender: true });
                    // gsap.set([bannerContainer_Ref.current], { x: currentTargetDims[0], y: currentTargetDims[1], width: targetDims[2], height: targetDims[3], scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

                    bannerContainer_Ref.current.src = newContent;
                    bannerContainer_Ref.current.style.left = currentTargetDims[0] + 'px';
                    bannerContainer_Ref.current.style.top = currentTargetDims[1] + 'px';
                    bannerContainer_Ref.current.style.width = targetDims[2] / bannerScale + 'px';
                    bannerContainer_Ref.current.style.height = targetDims[3] / bannerScale + 'px';

                    gsap.set([bannerContainer_Ref.current], { scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

                    setBannerShow(newContent);

                    //#endregion - - - - - - - - - - - ELSE IF 'html5'... - - - - - - - - - - -
                }

                break;

                //#endregion -------------------- ASSIGN NEW CONTENT: banner --------------------


            case 'html5':
            case 'website':
            case 'mobile':

                //#region -------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------

                clearContent();

                // iframeSRC;

                if (thisWorkItem.format_src === 'external') {
                    iframeSRC = thisWorkItem.link2;
                } else {
                    iframeSRC = remoteLoc + thisWorkItem.album_id + '/' + thisWorkItem.link2;
                }

                webiFrame_Ref.current.src = iframeSRC;
                webiFrame_Ref.current.style.width = thisWorkItem.mwidth + 'px';
                webiFrame_Ref.current.style.height = thisWorkItem.mheight + 'px';
                webiFrame_Ref.current.style.left = (window.innerWidth - thisWorkItem.mwidth) / 2 + 'px';

                setWebiFrameOpen(true);

                //#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - compensate for oversized / oddly-sized content  - - - - - - - - - - -

                // if (thisWorkItem.mheight >= window.innerHeight) {
                // if (thisWorkItem.mwidth >= window.innerWidth || thisWorkItem.mheight >= window.innerHeight) {
                if (thisWorkItem.mwidth >= window.innerWidth || thisWorkItem.mheight >= window.innerHeight || thisWorkItem.mwidth <= window.innerWidth * 0.5 || thisWorkItem.mheight <= window.innerHeight * 0.5) {

                    //#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - TOO BIG / SMALL  - - - - - - - - - - -

                    // let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.9;
                    // let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.875;
                    let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.75;
                    // let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.5;
                    let thisY = (window.innerHeight - (thisWorkItem.mheight * thisScale)) / 2;

                    gsap.set([webiFrame_Ref.current], { top: thisY, scale: thisScale, transformOrigin: '50% 0', immediateRender: true });

                    //#endregion - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - TOO BIG / SMALL  - - - - - - - - - - -

                } else {

                    //#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - JUUUUST RIIIIGHT  - - - - - - - - - - -

                    let thisY = (window.innerHeight - thisWorkItem.mheight) / 2;

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
                // console.log(thisWorkItem);
                // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);
                // console.log('window.innerWidth = ' + window.innerWidth + '     window.innerHeight = ' + window.innerHeight);
                // console.log('window.innerWidth * 0.8 = ' + window.innerWidth * 0.8);


                clearContent();

                let videoSRC = videoLoc + thisWorkItem.link2;
                let newVidWidth;
                let newVidHeight;

                // let vidScale = 0.5;
                let vidScale = 0.8;

                switch (true) {

                    case thisWorkItem.mwidth >= window.innerWidth && thisWorkItem.mwidth >= thisWorkItem.mheight:

                        // console.log('This content is TOO WIDE & LANDSCAPE');
                        // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

                        newVidWidth = window.innerWidth * vidScale;
                        newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

                        break;

                    case thisWorkItem.mwidth >= window.innerWidth && thisWorkItem.mwidth <= thisWorkItem.mheight:

                        // console.log('This content is TOO WIDE & PORTRAIT');
                        // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

                        newVidWidth = window.innerWidth * vidScale;
                        newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

                        break;

                    case thisWorkItem.mheight >= window.innerHeight && thisWorkItem.mwidth >= thisWorkItem.mheight:

                        // console.log('This content is TOO TALL & LANDSCAPE');
                        // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

                        newVidHeight = window.innerHeight * vidScale;
                        newVidWidth = thisWorkItem.mwidth * (newVidHeight / thisWorkItem.mheight);

                        break;

                    case thisWorkItem.mheight >= window.innerHeight && thisWorkItem.mwidth <= thisWorkItem.mheight:

                        // console.log('This content is TOO TALL & PORTRAIT');
                        // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

                        newVidHeight = window.innerHeight * vidScale;
                        newVidWidth = thisWorkItem.mwidth * (newVidHeight / thisWorkItem.mheight);

                        break;

                    default:

                        // console.log('VIDEO: DEFAULT');
                        // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

                        // newVidWidth = thisWorkItem.mwidth;
                        // newVidHeight = thisWorkItem.mheight;

                        // newVidWidth = window.innerWidth * vidScale;
                        // newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

                        if (window.innerWidth / window.innerHeight <= thisWorkItem.mwidth / thisWorkItem.mheight) {

                            // console.log('thisWorkItem.mwidth / thisWorkItem.mheight = ' + thisWorkItem.mwidth / thisWorkItem.mheight);
                            // console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

                            // console.log('This content FITS and I want it to behave LANDSCAPE');

                            newVidWidth = window.innerWidth * 0.75;
                            newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

                        } else {

                            // console.log('thisWorkItem.mwidth / thisWorkItem.mheight = ' + thisWorkItem.mwidth / thisWorkItem.mheight);
                            // console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

                            // console.log('This content FITS and I want it to behave PORTRAIT');

                            newVidHeight = window.innerHeight * 0.75;
                            newVidWidth = thisWorkItem.mwidth * (newVidHeight / thisWorkItem.mheight);
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

                console.log('');
                console.log('I AM THE DEFAULT: ' + thisWorkItem.format);

                clearContent();

                break;

                //#endregion -------------------- ASSIGN NEW CONTENT: default --------------------
        }
    }

    //#endregion -------------------- FUNCTION: loadContent(thisEvent, thisWorkItem) --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== COMPONENTS (workNav/workItems[s]): renderEmployers, renderFilters, renderElements ====================

    //#region -------------------- renderEmployers: workNav --------------------

    // const renderEmployers = () => {
    function RenderEmployers() {

        // console.log('');
        // console.log('-------------------- renderEmployers --------------------');

        return filterEmployer.map((e) =>
            // <div className='workNavItem' key={e.album_index} onClick={handleFilterKeyChange(e.album_id)}>{e.employer}</div>
            // <div className='workNavItemLogo' key={e.album_index} onClick={handleFilterKeyChange(e.album_id)}>
            //     <img className='workNavLogo' key={e.album_index} onClick={handleFilterKeyChange(e.album_id)} src={remoteLoc + e.logopath} alt={e.employer} />

            // <div className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} key={e.album_index} onClick={handleFilterKeyChange(e.album_id)}>
            // <div className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={e.album_id + 'NavID'} key={e.album_index} onClick={handleFilterKeyChange(e.album_id)} ref={createRef(e.album_id + '_Ref')}>
            // <div className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={e.album_id + 'NavID'} key={e.album_index} onClick={() => { handleFilterKeyChange(e.album_id); handleActiveEmplDiv(e) }}>
            // <div className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={e.album_id + 'NavID'} key={e.album_index} onClick={() => { handleFilterKeyChange(e.album_id); handleActiveEmplDiv(e); }}>

            <div className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={e.album_id + 'NavID'} key={e.album_index} onClick={handleFilterKeyChange(e.album_id)}>
                {e.logopath !== '#' ? <img className='workNavLogo' src={remoteLoc + e.logopath} alt={e.employer} /> : e.employer}
            </div>
        );
    };

    //#endregion -------------------- renderEmployers: workNav --------------------


    //#region -------------------- renderFilters: workNav --------------------

    // const renderFilters = () => {
    function RenderFilters() {

        // console.log('');
        // console.log('-------------------- renderFilters --------------------');

        return filterType.map((e) =>
            // <div className='workNavItem' key={e.key} onClick={handleFilterKeyChange(e.value)}>{e.label}</div>
            <div className='workNavItem' id={e.label + 'NavID'} key={e.key} onClick={handleFilterKeyChange(e.value)}>{e.label}</div>
        );
    };

    //#endregion -------------------- renderFilters: workNav --------------------


    //#region -------------------- renderElements: workItem[s] --------------------

    const renderElements = () => {
    // function RenderElements() {

        // console.log('');
        // console.log('-------------------- renderElements --------------------');

        return workData.filter(isSrc => isSrc.src !== '#').map((workItem, index) =>

            <div 
                // className={`workItem ${workItem.format} ${workItem.album_id} masonryWidth${workItem.masonryWidth} masonryHeight${workItem.masonryHeight}`}
                className={`workItem ${workItem.format} ${workItem.album_id} masonryWidth${workItem.masonryWidth}`}
                id={workItem.album_id + 'DivID' + index}
                key={index}
                // onClick={(event) => loadContent(event, workItem)}
                // onClick={workItem.availability ? (event) => loadContent(event, workItem) : undefined}
                onClick={workItem.link !== '#' ? (event) => loadContent(event, workItem) : undefined}
                // style={{ cursor: workItem.availability && 'pointer'}}
                style={{ cursor: workItem.availability && 'pointer' }}
                // style={{ cursor: workItem.link !== '#' && 'pointer' }}
            >

                <img
                    src={remoteLoc + workItem.album_id + '/sl/' + workItem.src}
                    alt={'workItem: ' + workItem.album_id}
                />

                <div className='itemInfo'>
                    {/* <h3 className='masonry-title'>{employerData[workItem.album_index].employer}</h3>
                    <p className='masonry-description'>{workItem.caption}</p> */}
                    <h3>{employerData[workItem.album_index].employer}</h3>
                    <p>{workItem.caption}</p>
                </div>

            </div>
        );
    };

    //#endregion -------------------- renderElements: workItem[s] --------------------

    //#endregion ==================== COMPONENTS (workNav/workItems[s]): renderEmployers, renderFilters, renderElements ====================



    return (

        <div className='isotopeContainer'>

        {/* #region ------------------------- workNavBar ------------------------- */}

            <div className='workNavBar' id='workNavBarID' ref={workNav_Ref}>

                {/* <div className='activeEmplDiv' id='activeEmplDivID' ref={activeEmplDiv_Ref}></div> */}

                <div className='workNav employerNav' id='employerNavID' ref={employerNav_Ref}>
                    <div className='activeEmplDiv' id='activeEmplDivID' ref={activeEmplDiv_Ref}></div>
                    <RenderEmployers />
                </div>

                <div className='workNav typeNav' id='typeNavID' ref={typeNav_Ref}>
                    <div className='activeTypeDiv' id='activeTypeDivID' ref={activeTypeDiv_Ref}></div>
                    <RenderFilters />
                </div>

                {/* <div className='toggleNav' id='toggleNavID' onClick={(e) => { setWorkNavToggleBtn(!workNavToggleBtn); }} ref={toggleNav_Ref}>
                    <div className='toggleBtn' id='toggleBtnID' onClick={(e) => { setWorkNavToggleBtn(!workNavToggleBtn); }} ref={toggleBtn_Ref}>
                        {workNavToggleText}
                        <span className='toggleText'>{workNavToggleText}</span>
                        <div className='toggleText'>ReactJS v{React.version}</div>
                    </div>
                </div> */}

                <div className='navToggleBtn' id='navToggleBtnID' onClick={(e) => { setWorkNavToggleBtn(!workNavToggleBtn); }} ref={navToggleBtn_Ref}>
                    <span>{workNavToggleText}</span>
                </div>

            </div>

        {/* #endregion ------------------------- workNavBar ------------------------- */}


        {/* #region ------------------------- galleryContainer ------------------------- */}

            <div className='galleryContainer' ref={galleryContainer_Ref}>

                {renderElements()}
                {/* <RenderElements /> */}

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

            {/* #endregion ------------------------- BANNERS: IFRAME ------------------------- */}


            {/* #region ------------------------- WEB: IFRAME ------------------------- */}

                <div className={webiFrameOpen === true ? 'webiFrameContainer webiFrameContainerOpen' : 'webiFrameContainer webiFrameContainerClosed'} id='webiFrameContainerID' onClick={() => { clearContent(); }} ref={iframeContainer_Ref}>

                    <iframe
                        className='webiFrame' 
                        id='webiFrameID'
                        name='webiFrame'
                        title='webiFrame'
                        ref={webiFrame_Ref}
                    />

                    <button className={webiFrameOpen ? 'closeModalBtn closeModalBtnShow' : 'closeModalBtn closeModalBtnHide'} onClick={() => { clearContent(); }}> Close </button>

                </div>

            {/* #endregion ------------------------- WEB: IFRAME ------------------------- */}


            {/* #region ------------------------- VIDEO PLAYER ------------------------- */}

                <div className={videoOpen === true ? 'videoContainer videoContainerOpen' : 'videoContainer videoContainerClosed'} id='videoContainerID' onClick={() => { clearContent(); }} ref={videoContainer_Ref}>

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

                    <button className={videoOpen ? 'closeModalBtn closeModalBtnShow' : 'closeModalBtn closeModalBtnHide'} onClick={() => { clearContent(); }}> Close </button>

                </div>

            {/* #region ------------------------- VIDEO PLAYER ------------------------- */}

            </div>

        {/* #rendegion ------------------------- galleryContainer ------------------------- */}

        </div>
    )
}
