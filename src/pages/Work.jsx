//#region ==================== IMPORTS ====================

import React from 'react';
// import { useRoutes } from 'hookrouter';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useLayoutEffect } from 'react';
// import { forwardRef } from "react";

// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
// import Moment from 'react-moment';

import { gsap } from 'gsap';
import ReactPlayer from 'react-player/vimeo'

// import { FullPage } from '../components/FullPage';
// import { BodyContainer } from '../components/BodyContainer';

import '../stylesheets/Work.scss';
// import scssVars from '../stylesheets/Global.scss';


//#region -------------------- IMPORTS: DATA --------------------

// import work from '../data/MyData';
import myData from '../data/MyData';
// import workComplete from '../data/json/work.json';
// import work from '../data/json/work_json/work_ea.json';

//#endregion -------------------- IMPORTS: DATA --------------------


//#region -------------------- IMPORTS: WORK PAGES --------------------

// import { Work000 } from './work/Work_000';
// import Work000 from './work/Work_000';

import { WorkPod } from '../components/WorkPod';

// import { WorkMiMi } from './work/Work_MiMi';
// import { WorkEA } from './work/Work_EA';
// import { WorkAX } from './work/Work_AX';
// import { WorkHearst } from './work/Work_Hearst';
// import { WorkDDB } from './work/Work_DDB';
// import { WorkMRM } from './work/Work_MRM';
// import { WorkHeeb } from './work/Work_Heeb';
// import { WorkHB } from './work/Work_HB'
// import { WorkLuminant } from './work/Work_Luminant';
// import { WorkDarwin } from './work/Work_Darwin';
// import { WorkOther } from './work/Work_Other';

// import { NotFound } from './NotFound';

//#endregion -------------------- IMPORTS: WORK PAGES --------------------


//#region -------------------- IMPORTS: GSAP BANNERS --------------------

import EAAR_18951 from '../images/ea/banners/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600/EAAR_18951';
import NMPF_04852 from '../images/ea/banners/CR_4852_NMPF_US_Walmart_300x250/NMPF_04852';
import NMMN_11155 from '../images/ea/banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155';
import BCBG_02342 from '../images/ea/banners/BCBG_MAXAZRIA_CR00002342_AU_Digital_Plan/BCBG_02342';
import BCBG_05500 from '../images/ea/banners/CR_5500_BCBG_BC_AU_Digital_Plan_2013/BCBG_05500';
// import EAUT_04752 from '../images/ea/banners/CR_4752_UNTOLD_2013_US_DIGITAL/EAUT_04752';
import JCNR_07074 from '../images/ea/banners/CR_7074_JC_VNOIR_2013_AU_300x600/JCNR_07074';
import BSPS_26897 from '../images/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
import NMTG_26903 from '../images/ea/banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
import JCVR_26963 from '../images/ea/banners/26963_JC_VIVA_ROSE_GWP_PR_Walgreens_300x250/JCVR_26963';
// import JCSU_27801 from '../images/ea/banners/27801_JC_SUCRE_Walgreens_PR_300x250/JCSU_27801';
// import GBHO_28721 from '../images/ea/banners/28721_GBH_ORIGINAL_300x250/GBHO_28721';
// import GBHG_28726 from '../images/ea/banners/28726_GBH_GLAM_300x250_glam/GBHG_28726';
// import EAWT_29709 from '../images/ea/banners/29709_WHITE_TEA_GWP_Walgreens_PR_300x250/EAWT_29709';
// import EAFS_20741 from '../images/ea/banners/CR_20741_FS_PRIMER_DIGITAL_PLAN_2H15_AU_300x250/EAFS_20741';
// import JVAB_22710 from '../images/ea/banners/CR_22710_JV_ARTISAN_BLU_COLLECTION_300x250/JVAB_22710';
// import EAPV_25219 from '../images/ea/banners/CR_25219_PREVAGE_WEEK_Hourglass_300x250_Macys/EAPV_25219';
// import EAPV_26124 from '../images/ea/banners/CR_26124_PREVAGE_CitySmart_Awareness_300x250_SHOP/EAPV_26124';
// import EAMU_26378 from '../images/ea/banners/CR_26378_EA_MULTI_SamsClub_300x250_03/EAMU_26378';

//#endregion -------------------- IMPORTS: GSAP BANNERS --------------------

//#endregion ==================== IMPORTS ====================



// console.log('');
// console.log('=========================  Work.jsx  =========================');



//#region ==================== CONSTANTS ====================

//#region -------------------- REMOTE CONTENT LOCATIONS --------------------

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';
// const localLoc = '../images/';
const videoLoc = 'https://vimeo.com/';

//#endregion -------------------- REMOTE CONTENT LOCATIONS --------------------


const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;


//#region -------------------- DATA --------------------

let work;
// const workFormatArray = ['website', 'mobile', 'video', 'banner', 'html5', 'print'];

// const [work, setWork] = useState('');

// console.log('myData = ' + myData);
// console.log(myData);

// console.log('work = ' + work);
// console.log(work);


// // const work_mimi = workComplete.filter(thisEmployer => thisEmployer.album_id === 'mimi');
// // const work_ea = workComplete.filter(thisEmployer => thisEmployer.album_id === 'ea');
// const work_mimi = myData[1].filter(thisEmployer => thisEmployer.album_id === 'mimi');
// const work_ea = myData[1].filter(thisEmployer => thisEmployer.album_id === 'ea');

// // console.log('work_ea = ' + work_ea);
// // console.log(work_ea);

// let work = work_mimi;

// // console.log('work = ' + work);
// // console.log(work);

//#endregion -------------------- DATA --------------------


//#region -------------------- SCSS VARS --------------------

// console.log('');
// console.log('------------------------- scssVars -------------------------');

// const headerHeight = scssVars.headerHeight;
// const navBarHeight = scssVars.navBarHeight;
// const workkNavHeight = scssVars.workkNavHeight;

// const headerHeight = parseInt(scssVars.headerHeight);
// const navBarHeight = parseInt(scssVars.navBarHeight);
// const workkNavHeight = parseInt(scssVars.workkNavHeight);

// console.log('headerHeight = ' + headerHeight + '     navBarHeight = ' + navBarHeight + '     workkNavHeight = ' + workkNavHeight);
// console.log('(headerHeight + navBarHeight + workkNavHeight) = ' + (headerHeight + navBarHeight + workkNavHeight));

//#endregion -------------------- SCSS VARS --------------------


//#region -------------------- AVAILABLE CONTENT: xContent[] --------------------

const bannerContent = {
    EAAR_18951: EAAR_18951,
    NMPF_04852: NMPF_04852,
    NMMN_11155: NMMN_11155,
    BCBG_02342: BCBG_02342,
    BCBG_05500: BCBG_05500,
    // EAUT_04752: EAUT_04752,
    JCNR_07074: JCNR_07074,
    BSPS_26897: BSPS_26897,
    NMTG_26903: NMTG_26903,
    JCVR_26963: JCVR_26963,
    // JCSU_27801: JCSU_27801,
    // GBHO_28721: GBHO_28721,
    // GBHG_28726: GBHG_28726,
    // EAWT_29709: EAWT_29709,
    // EAFS_20741: EAFS_20741,
    // JVAB_22710: JVAB_22710,
    // EAPV_25219: EAPV_25219,
    // EAPV_26124: EAPV_26124,
    // EAMU_26378: EAMU_26378,
};


// const webContent = {
//     mimi01: 'https://mimiobi19.wixsite.com/mimi01',
//     mimi02: 'https://mimiobi19.wixsite.com/mimi02',
//     mimi03: 'https://mimiobi19.wixsite.com/mimi03',
//     mimi04: 'https://mimiobi19.wixsite.com/mimi04',
//     mimi05: 'https://mimiobi19.wixsite.com/mimi05',
// }


// const videoContent = {
//     325441227: '325441227',
//     250926051: '250926051',
//     313477117: '313477117',
//     325994863: '325994863',
//     325994874: '325994874',
//     325994879: '325994879',
//     325994884: '325994884',
//     325994892: '325994892',
//     325994894: '325994894',
// }


// const printContent = {}

//#endregion -------------------- AVAILABLE CONTENT: xContent[] --------------------

//#endregion ==================== CONSTANTS ====================



//#region ==================== FUNCTIONS ====================

//#region -------------------- FUNCTION: getCoords(thisObject) --------------------

// function getCoords(thisObject) {

//     // console.log('');
//     // console.log('--------------------  getCoords(thisObject)  --------------------');

//     // console.log('getCoords(thisObject) ==>   thisObject = ' + thisObject);
//     // console.log('getCoords(thisObject) ==>   thisObject.id = ' + thisObject.id);


//     //#region - - - - - - - - - - - - - offset - - - - - - - - - - - - -

//     // const thisObjectDims = thisObject.offset();

//     // console.log('');
//     // console.log('getCoords(thisObject) ===>   thisObjectDims = ' + thisObjectDims);
//     // console.log(thisObjectDims);
//     // // console.log('getCoords(thisObject) ===>   thisObjectDims.x = ' + thisObjectDims.x);

//     // return thisObjectDims;

//     //#endregion - - - - - - - - - - - - - offset - - - - - - - - - - - - -


//     //#region - - - - - - - - - - - - - getBoundingClientRect - - - - - - - - - - - - -

//     const thisObjectDims = thisObject.getBoundingClientRect();

//     console.log('');
//     console.log('getCoords(thisObject) ===>   thisObjectDims.x = ' + thisObjectDims.x);
//     console.log('getCoords(thisObject) ===>   thisObjectDims.left = ' + thisObjectDims.left);
//     console.log('getCoords(thisObject) ===>   thisObjectDims.y = ' + thisObjectDims.y);
//     console.log('getCoords(thisObject) ===>   thisObjectDims.top = ' + thisObjectDims.top);
//     console.log('getCoords(thisObject) ===>   thisObjectDims.width = ' + thisObjectDims.width);
//     console.log('getCoords(thisObject) ===>   thisObjectDims.height = ' + thisObjectDims.height);
//     console.log('getCoords(thisObject) ===>   thisObjectDims.right = ' + thisObjectDims.right);
//     console.log('getCoords(thisObject) ===>   thisObjectDims.bottom = ' + thisObjectDims.bottom);

//     return thisObjectDims;

//     //#endregion - - - - - - - - - - - - - getBoundingClientRect - - - - - - - - - - - - -


//     // return [thisObject.offsetLeft, thisObject.offsetTop];
// }

//#endregion -------------------- FUNCTION: getCoords(thisObject) --------------------


//#region -------------------- FUNCTION: moveBanner(thisActiveImage, bannerContainer) --------------------

// function moveBanner(thisActiveImage, bannerContainer) {

    // console.log('');
    // console.log('--------------------  moveBanner(thisActiveImage, bannerContainer)  --------------------');

    // // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImage = ' + thisActiveImage);
    // // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImage.className = ' + thisActiveImage.className);
    // // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImage.id = ' + thisActiveImage.id);
    // // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImage.format_src = ' + thisActiveImage.format_src);
    // // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImage.offsetLeft = ' + thisActiveImage.offsetLeft);
    // // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImage.offsetTop = ' + thisActiveImage.offsetTop);
    // // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImage.offsetWidth = ' + thisActiveImage.offsetWidth);
    // // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImage.offsetHeight = ' + thisActiveImage.offsetHeight);


    // console.log('');
    // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImage.getBoundingClientRect() = ' + thisActiveImage.getBoundingClientRect());
    // console.log(thisActiveImage.getBoundingClientRect());


    // console.log('');
    // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   bannerContainer = ' + bannerContainer);
    // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   bannerContainer.id = ' + bannerContainer.id);


    // let thisActiveImageCoords;
    // let thisActiveImageScale;

    // if (bannerContainer.id === 'bannerContainerID') {

    //     console.log('');
    //     console.log('moveBanner(thisActiveImage, bannerContainer) ===>   This banner was rebuilt in React...');

    //     // thisActiveImageCoords = getCoords(thisActiveImage);
    //     thisActiveImageCoords = [thisActiveImage.offsetLeft, thisActiveImage.offsetTop];
    //     thisActiveImageScale = thisActiveImage.offsetWidth / 300;

    //     console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImageCoords = ');
    //     console.log(thisActiveImageCoords);
    //     console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImageScale = ' + thisActiveImageScale);

    //     gsap.set([bannerContainer], { x: thisActiveImageCoords[0], y: thisActiveImageCoords[1], scale: thisActiveImageScale, transformOrigin: '0 0', immediateRender: true });

    // } else if (bannerContainer.id === 'banneriFrameID') {

    //     console.log('');
    //     console.log('moveBanner(thisActiveImage, bannerContainer) ===>   This banner comes directly from Animate... with a few adjustments to the Animate-generated code');

    //     thisActiveImageCoords = getCoords(thisActiveImage);
    // }


    // let thisActiveImageCoords = getCoords(thisActiveImage);
    // let thisActiveImageScale = thisActiveImage.offsetWidth / 300;

    // console.log('');
    // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImage = ' + thisActiveImage);
    // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImageX = ' + thisActiveImageX);
    // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImageY = ' + thisActiveImageY);
    // console.log('moveBanner(thisActiveImage, bannerContainer) ===>   thisActiveImageScale = ' + thisActiveImageScale);


    // gsap.set([bannerContainer], { x: thisActiveImageX, y: thisActiveImageY, scale: thisActiveImageScale, transformOrigin: '0 0', immediateRender: true });
    // gsap.set([bannerContainer], { x: thisActiveImageCoords[0], y: thisActiveImageCoords[1], scale: thisActiveImageScale, transformOrigin: '0 0', immediateRender: true });
// }

//#endregion -------------------- FUNCTION: moveBanner(thisBanner) --------------------

//#endregion ==================== FUNCTIONS ====================



//#region ==================== WorkList() => <WorkList /> ====================

function WorkList({ currentEmployer }) {

    // console.log('');
    // console.log('========================= WorkList() => <WorkList /> =========================');

    // console.log('WorkList() => <WorkList /> ===>   currentEmployer = ' + currentEmployer);


    //#region ==================== WORK FORMAT ARRAYS ==================== */

    // console.log('');
    // console.log('------------------------- WorkList() => WORK FORMAT ARRAYS -------------------------');


    const bannerArray = work.filter(thisFormat => thisFormat.format === 'banner').map((workImage) => (
        workImage
    ));

    const webArray = work.filter(thisFormat => thisFormat.format === 'html5' || thisFormat.format === 'video' || thisFormat.format === 'website' || thisFormat.format === 'mobile').map((workImage) => (
        workImage
    ));

    // const videoArray = work.filter(thisFormat => thisFormat.format === 'video').map((workImage) => (
    //     workImage
    // ));

    const printArray = work.filter(thisFormat => thisFormat.format === 'print').map((workImage) => (
        workImage
    ));


    // console.log('');
    // console.log('WorkList() => <WorkList /> ===>   bannerArray = ');
    // console.log(bannerArray);

    // console.log('');
    // console.log('WorkList() => <WorkList /> ===>   webArray = ');
    // console.log(webArray);

    // console.log('');
    // console.log('WorkList() => <WorkList /> ===>   videoArray = ');
    // console.log(videoArray);

    // console.log('');
    // console.log('WorkList() => <WorkList /> ===>   printArray = ');
    // console.log(printArray);


    // const missingContentArray = arrayCompare(availableBannerContent, bannerArray);

    // const missingBannerArray = arrayCompare(availableBannerContent, bannerArray);
    // const missingWebArray = arrayCompare(availableWebContent, webArray);
    // // const missingPrintArray = arrayCompare(availablePrintContent, printArray);

    //#endregion ==================== WORK FORMAT ARRAYS ==================== */



    //#region ==================== FUNCTIONS ====================

    //#region -------------------- FUNCTION: clearContent() --------------------

    function clearContent() {

        // console.log('');
        // console.log('--------------------  clearContent()  --------------------');

        setBannerShow(null);
        setBanneriFrameOpen(false);
        banneriFrame_Ref.current.src = '';

        setWebiFrameOpen(false);
        webiFrame_Ref.current.src = '';

        setVideoOpen(false);
        setLoadedVideo(null);
    }

    //#endregion -------------------- FUNCTION: clearContent() --------------------


    //#region -------------------- FUNCTION: handleClick(thisWorkImage, thisTargetImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks --------------------

    // function handleClick(thisWorkFormat, thisWorkImage) {
    // function handleClick(thisWorkFormat, thisWorkImage, thisTargetImage) {
    function handleClick(thisWorkImage, thisTargetImage) {

        // console.log('');
        // console.log('------------------------- handleClick(thisWorkImage, thisTargetImage) -------------------------');

        // setActiveImage(thisWorkImage);
        setActiveImage(thisTargetImage);


        //#region - - - - - - - - - - - - - Findin' out sh*t... (console.log messagaes) - - - - - - - - - - - - -

        // // console.log('handleClick: windowWidth = ' + windowWidth);

        // // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisWorkFormat = ' + thisWorkFormat);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisWorkImage = ' + thisWorkImage);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisWorkImage.format = ' + thisWorkImage.format);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisWorkImage.format_src = ' + thisWorkImage.format_src);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisWorkImage.link2 = ' + thisWorkImage.link2);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisWorkImage.mwidth = ' + thisWorkImage.mwidth);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisWorkImage.mheight = ' + thisWorkImage.mheight);

        // console.log('');
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisTargetImage = ' + thisTargetImage);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisTargetImage.className = ' + thisTargetImage.className);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisTargetImage.id = ' + thisTargetImage.id);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisTargetImage.offsetLeft = ' + thisTargetImage.offsetLeft);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisTargetImage.offsetTop = ' + thisTargetImage.offsetTop);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisTargetImage.offsetWidth = ' + thisTargetImage.offsetWidth);
        // console.log('handleClick(thisWorkImage, thisTargetImage) ===>   thisTargetImage.offsetHeight = ' + thisTargetImage.offsetHeight);



        // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkImage.blah = ' + thisWorkImage.album_id);

        // console.log('thisWorkImage.link = ' + thisWorkImage.link);
        // console.log('thisWorkImage.link2 = ' + thisWorkImage.link2);
        // console.log('thisWorkImage.link3 = ' + thisWorkImage.link3);
        // console.log('thisWorkImage.link4 = ' + thisWorkImage.link4);

        // console.log('document.getElementById(thisWorkImage.link2).className = ' + document.getElementById(thisWorkImage.link2).className);
        // console.log('document.getElementById(thisWorkImage.link2).id = ' + document.getElementById(thisWorkImage.link2).id);

        // console.log('');
        // console.log('document.getElementById(thisWorkImage.link2).x = ' + document.getElementById(thisWorkImage.link2).x);
        // console.log('document.getElementById(thisWorkImage.link2).y = ' + document.getElementById(thisWorkImage.link2).y);

        // console.log('');
        // console.log('document.getElementById(thisWorkImage.link2).offsetWidth = ' + document.getElementById(thisWorkImage.link2).offsetWidth);
        // console.log('document.getElementById(thisWorkImage.link2).offsetHeight = ' + document.getElementById(thisWorkImage.link2).offsetHeight);

        // console.log('');
        // console.log('document.getElementById(bannerContainerID).offsetWidth = ' + document.getElementById('bannerContainerID').offsetWidth);
        // console.log('document.getElementById(bannerContainerID).offsetHeight = ' + document.getElementById('bannerContainerID').offsetHeight);

        // console.log('document.getElementById(bannerContainerID).className = ' + document.getElementById('bannerContainerID').className);
        // console.log('document.getElementById(bannerContainerID).key = ' + document.getElementById('bannerContainerID').key);

        //#endregion - - - - - - - - - - - - - Findin' out sh*t... (console.log messagaes) - - - - - - - - - - - - -


        //#region - - - - - - - - - - - - - ASSIGN NEW CONTENT - - - - - - - - - - - - -

        // console.log('');
        // console.log('------------------------- ASSIGN NEW CONTENT -------------------------');

        // console.log('');
        // console.log('ASSIGN NEW CONTENT ===>   thisWorkImage.link2 = ' + thisWorkImage.link2);
        // console.log('ASSIGN NEW CONTENT ===>   webiFrame_Ref.current = ' + webiFrame_Ref.current);
        // console.log('ASSIGN NEW CONTENT ===>   webiFrame_Ref.current.id = ' + webiFrame_Ref.current.id);


        switch (thisWorkImage.format) {

            case 'banner':

            //#region -------------------- ASSIGN NEW CONTENT: banner --------------------

                // console.log('');
                // console.log('------------------------- ASSIGN NEW CONTENT: banner -------------------------');

                // console.log('ASSIGN NEW CONTENT: banner ===>   thisWorkImage = ' + thisWorkImage);
                // console.log('ASSIGN NEW CONTENT: banner ===>   thisWorkImage.format = ' + thisWorkImage.format);
                // console.log('ASSIGN NEW CONTENT: banner ===>   thisWorkImage.format_src = ' + thisWorkImage.format_src);

                // console.log('');
                // console.log('ASSIGN NEW CONTENT: banner ===>   thisTargetImage = ' + thisTargetImage);
                // console.log('ASSIGN NEW CONTENT: banner ===>   thisTargetImage.id = ' + thisTargetImage.id);


                // let bannerDims = thisTargetImage.getBoundingClientRect();
                let bannerScale = thisTargetImage.width / thisWorkImage.mwidth;

                // console.log('');
                // console.log('ASSIGN NEW CONTENT: banner ===>   bannerDims = ');
                // console.log(bannerDims);
                // console.log('ASSIGN NEW CONTENT: banner ===>   bannerScale = ' + bannerScale);


                clearContent();


                if (thisWorkImage.format_src === 'animate') {

                //#region -------------------- IF 'animate'... --------------------

                    // console.log('');
                    // console.log('ASSIGN NEW CONTENT: banner ===>   This banner comes directly from Animate... with a few adjustments to the Animate-generated code');


                    let iframeSRC = remoteLoc + thisWorkImage.album_id + '/banners/' + thisWorkImage.link;


                    //#region - - - - - - - - - - - - - IF 'animate'... (console.log messagaes) - - - - - - - - - - - - -

                    // console.log('');
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   iframeSRC = ' + iframeSRC);

                    // console.log('');
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.offsetLeft = ' + thisTargetImage.offsetLeft);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.offsetTop = ' + thisTargetImage.offsetTop);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.offsetWidth = ' + thisTargetImage.offsetWidth);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.offsetHeight = ' + thisTargetImage.offsetHeight);

                    // console.log('');
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.x = ' + thisTargetImage.x);
                    // // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.left = ' + thisTargetImage.left);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.y = ' + thisTargetImage.y);
                    // // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.top = ' + thisTargetImage.top);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.width = ' + thisTargetImage.width);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.height = ' + thisTargetImage.height);
                    // // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.right = ' + thisTargetImage.right);
                    // // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisTargetImage.bottom = ' + thisTargetImage.bottom);

                    //#endregion - - - - - - - - - - - - - IF 'animate'... (console.log messagaes) - - - - - - - - - - - - -


                    banneriFrame_Ref.current.src = iframeSRC;

                    banneriFrame_Ref.current.style.left = thisTargetImage.offsetLeft + 'px';
                    banneriFrame_Ref.current.style.top = thisTargetImage.offsetTop + 'px';
                    banneriFrame_Ref.current.style.width = thisTargetImage.width / bannerScale + 'px';
                    banneriFrame_Ref.current.style.height = thisTargetImage.height / bannerScale + 'px';

                    // banneriFrame_Ref.current.style.left = bannerDims.x + 'px';
                    // banneriFrame_Ref.current.style.top = bannerDims.y + 'px';
                    // banneriFrame_Ref.current.style.width = bannerDims.width / bannerScale + 'px';
                    // banneriFrame_Ref.current.style.height = bannerDims.height / bannerScale + 'px';

                    gsap.set([banneriFrame_Ref.current], { scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

                    setBanneriFrameOpen(true);

                //#endregion -------------------- IF 'animate'... --------------------

                } else if (thisWorkImage.format_src === 'html5') {

                //#region -------------------- ELSE IF 'html5'... --------------------

                    // console.log('');
                    // console.log('ASSIGN NEW CONTENT: banner ===>   This banner was rebuilt in React...');


                    const newContent = React.createElement(bannerContent[thisWorkImage.link2]);


                    //#region - - - - - - - - - - - - - ELSE IF 'html5'... (console.log messagaes) - - - - - - - - - - - - -

                    // console.log('');
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   newContent = ' + newContent);

                    // console.log('');
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.offsetLeft = ' + thisTargetImage.offsetLeft);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.offsetTop = ' + thisTargetImage.offsetTop);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.offsetWidth = ' + thisTargetImage.offsetWidth);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.offsetHeight = ' + thisTargetImage.offsetHeight);
                    // // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.offsetRight = ' + thisTargetImage.offsetRight);
                    // // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.offsetBottom = ' + thisTargetImage.offsetBottom);

                    // console.log('');
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.x = ' + thisTargetImage.x);
                    // // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.left = ' + thisTargetImage.left);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.y = ' + thisTargetImage.y);
                    // // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.top = ' + thisTargetImage.top);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.width = ' + thisTargetImage.width);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.height = ' + thisTargetImage.height);
                    // // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.right = ' + thisTargetImage.right);
                    // // console.log('ASSIGN NEW CONTENT: html5, website, mobile (bannerContainer) ===>   thisTargetImage.bottom = ' + thisTargetImage.bottom);

                    //#endregion - - - - - - - - - - - - - ELSE IF 'html5'... (console.log messagaes) - - - - - - - - - - - - -


                    gsap.set([bannerContainer_Ref.current], { x: thisTargetImage.offsetLeft, y: thisTargetImage.offsetTop, scale: bannerScale, transformOrigin: '0 0', immediateRender: true });
                    // gsap.set([bannerContainer_Ref.current], { x: bannerDims.x, y: bannerDims.y, scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

                    setBannerShow(newContent);
                }

                //#endregion -------------------- ELSE IF 'html5'... --------------------

                break;

            //#endregion -------------------- ASSIGN NEW CONTENT: banner --------------------


            case 'html5':
            case 'website':
            case 'mobile':

            //#region -------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------
            //        -------------------- IFRAME REF: https://dev.to/damcosset/iframes-and-communicating-between-applications-31k5 -------------------- 

                // console.log('');
                // console.log('------------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) -------------------------');

                // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisWorkImage.format = ' + thisWorkImage.format);
                // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisWorkImage.format_src = ' + thisWorkImage.format_src);


                clearContent();

                let iframeSRC;

                if (thisWorkImage.format_src === 'external') {
                    // let iframeSRC = thisWorkImage.link2;
                    iframeSRC = thisWorkImage.link2;
                } else {
                    // let iframeSRC = remoteLoc + thisWorkImage.album_id + '/' + thisWorkImage.link2;
                    iframeSRC = remoteLoc + thisWorkImage.album_id + '/' + thisWorkImage.link2;
                }

                // console.log('');
                console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   iframeSRC = ' + iframeSRC);

                webiFrame_Ref.current.src = iframeSRC;
                webiFrame_Ref.current.style.width = thisWorkImage.mwidth + 'px';
                webiFrame_Ref.current.style.height = thisWorkImage.mheight + 'px';
                webiFrame_Ref.current.style.left = (window.innerWidth - thisWorkImage.mwidth) / 2 + 'px';

                setWebiFrameOpen(true);
                // // setLoadedIframe(iframeSRC);

                // setVideoOpen(false);
                // setLoadedVideo(null);

                // toggleContent(setWebiFrameOpen, true);


                //#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - compensate for oversized content  - - - - - - - - - - -

                if (thisWorkImage.mheight >= window.innerHeight) {

                    let thisScale = (window.innerHeight / thisWorkImage.mheight) * 0.9;
                    let thisY = (window.innerHeight - (thisWorkImage.mheight * thisScale)) / 2;

                    console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisScale = ' + thisScale);
                    console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisY = ' + thisY);

                    // gsap.set([webiFrame_Ref.current], { scale: thisScale, transformOrigin: '50% 0', immediateRender: true });
                    gsap.set([webiFrame_Ref.current], { top: thisY, scale: thisScale, transformOrigin: '50% 0', immediateRender: true });

                } else {

                    let thisY = (window.innerHeight - thisWorkImage.mheight) / 2;
                    // let thisScale = 1;

                    console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisY = ' + thisY);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisScale = ' + thisScale);
                    // console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisWorkImage.mheight = ' + thisWorkImage.mheight);

                    gsap.set([webiFrame_Ref.current], { top: thisY, transformOrigin: '50% 0', immediateRender: true });
                    // gsap.set([webiFrame_Ref.current], { top: thisY, scale: thisScale, transformOrigin: '50% 0', immediateRender: true });
                    // gsap.set([webiFrame_Ref.current], { height: thisWorkImage.mheight, top: thisY, transformOrigin: '50% 0', immediateRender: true });
                    // gsap.set([webiFrame_Ref.current], { height: thisWorkImage.mheight, top: thisY, scale: thisScale, transformOrigin: '50% 0', immediateRender: true });
                }

                //#endregion - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - compensate for oversized content  - - - - - - - - - - -

                break;

            //#endregion -------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------


            case 'video':

            //#region -------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------
            //        -------------------- VIDEO REF: https://github.com/CookPete/react-player -------------------- 

                // console.log('');
                // console.log('------------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) -------------------------');

                // console.log('ASSIGN NEW CONTENT: video (REACT-PLAYER) ===>   thisWorkImage.format = ' + thisWorkImage.format);
                // console.log('ASSIGN NEW CONTENT: video (REACT-PLAYER) ===>   thisWorkImage.format_src = ' + thisWorkImage.format_src);


                clearContent();

                let videoSRC = videoLoc + thisWorkImage.link2;
                // videoSRC = videoLoc + thisWorkImage.link2;

                // console.log('');
                console.log('ASSIGN NEW CONTENT: video (REACT-PLAYER) ===>   videoSRC = ' + videoSRC);

                // webiFrame_Ref.current.src = videoSRC;
                // webiFrame_Ref.current.style.width = thisWorkImage.mwidth + 'px';
                // webiFrame_Ref.current.style.height = thisWorkImage.mheight + 'px';
                // webiFrame_Ref.current.style.left = (window.innerWidth - thisWorkImage.mwidth) / 2 + 'px';

                // videoPlayer_Ref.current.url = videoSRC;
                // videoPlayer_Ref.current.load(videoSRC);
                // videoPlayer_Ref.current.style.parentElement.width = thisWorkImage.mwidth + 'px';
                // videoPlayer_Ref.current.style.height = thisWorkImage.mheight + 'px';
                // videoPlayer_Ref.current.style.left = (window.innerWidth - thisWorkImage.mwidth) / 2 + 'px';

                // console.log('ASSIGN NEW CONTENT: video (REACT-PLAYER) ===>   videoPlayer_Ref.current.url = ' + videoPlayer_Ref.current.url);

                // setWebiFrameOpen(false);
                // // setLoadedIframe('');

                setVideoOpen(true);
                setLoadedVideo(videoSRC);

                // toggleContent(setVideoOpen, true);
                // toggleContent(setLoadedVideo, videoSRC);

                // gsap.set([videoContainer_Ref.current], { scale: 0.875, transformOrigin: '50% 50%', immediateRender: true });
                gsap.set([videoPlayer_Ref.current], { scale: 0.875, transformOrigin: '50% 50%', immediateRender: true });
                // gsap.set([videoPlayer_Ref.current], { width: thisWorkImage.mwidth * 0.875, height: thisWorkImage.mheight * 0.875, transformOrigin: '50% 50%', immediateRender: true });

                break;

            //#endregion -------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------


            // case 'print':

            //#region -------------------- ASSIGN NEW CONTENT: print --------------------

                // console.log('');
                // console.log('------------------------- ASSIGN NEW CONTENT: print -------------------------');

                // console.log('ASSIGN NEW CONTENT: print ===>   thisWorkImage.format = ' + thisWorkImage.format);
                // console.log('ASSIGN NEW CONTENT: print ===>   thisWorkImage.format_src = ' + thisWorkImage.format_src);


                // // setWebiFrameOpen(false);
                // // setLoadedIframe('');

                // // setVideoOpen(false);
                // // setLoadedVideo(null);

                // toggleContent(setBanneriFrameOpen, false);

                // break;

            //#endregion -------------------- ASSIGN NEW CONTENT: print --------------------


            default:

            //#region -------------------- ASSIGN NEW CONTENT: default --------------------

                // console.log('');
                // console.log('------------------------- ASSIGN NEW CONTENT: default -------------------------');

                // console.log('ASSIGN NEW CONTENT: default ===>   thisWorkImage.format = ' + thisWorkImage.format);
                // console.log('ASSIGN NEW CONTENT: default ===>   thisWorkImage.format_src = ' + thisWorkImage.format_src);


                clearContent();

                // setWebiFrameOpen(false);
                // // setLoadedIframe('');

                // setVideoOpen(false);
                // setLoadedVideo(null);

                // toggleContent(setBanneriFrameOpen, true);

                break;

            //#endregion -------------------- ASSIGN NEW CONTENT: default --------------------
        }

        //#endregion - - - - - - - - - - - - - ASSIGN NEW CONTENT - - - - - - - - - - - - -


        //#region - - - - - - - - - - - - - POSITION & LOAD NEW CONTENT bannerContainer_Ref - - - - - - - - - - - - -

        // let workImageLoc = document.getElementById(thisWorkImage.link2);

        // moveBanner(workImageLoc, bannerContainer_Ref.current)
        // // moveBanner(workImageLoc, banneriFrame_Ref.current)

        //#endregion - - - - - - - - - - - - - POSITION & LOAD NEW CONTENT bannerContainer_Ref - - - - - - - - - - - - -

    }

    //#endregion -------------------- FUNCTION: handleClick(thisWorkFormat, thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== ASSETS _Ref ====================

    // const workListDiv_Ref = useRef(null);

    // const bannerMasonry_Ref = useRef(null);
    // const webMasonry_Ref = useRef(null);

    // const workItem_Ref = useRef(null);
    // const masonryImg_Ref = useRef(null);

    const bannerContainer_Ref = useRef(null);
    const banneriFrame_Ref = useRef(null);

    const iframeContainer_Ref = useRef(null);
    const webiFrame_Ref = useRef(null);

    const videoContainer_Ref = useRef(null);
    const videoPlayer_Ref = useRef(null);

    // const workList_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================



    //#region ==================== useState DEFs ====================

    // console.log('');
    // console.log('------------------------- useState DEFs -------------------------');

    const [activeImage, setActiveImage] = useState('');

    const [bannerShow, setBannerShow] = useState(null);
    const [banneriFrameOpen, setBanneriFrameOpen] = useState(false);

    // const [bannerShow, setBannerShow] = useState(BSPS_26897);
    // const [bannerShow, setBannerShow] = useState(NMMN_11155);
    // const [bannerShow, setBannerShow] = useState(NMTG_26903);

    // const [bannerShow, setBannerShow] = useState(<BSPS_26897 />);
    // const [bannerShow, setBannerShow] = useState(<NMMN_11155 />);
    // const [bannerShow, setBannerShow] = useState(<NMTG_26903 />);

    // const [bannerKey, setBannerKey] = useState();

    const [webiFrameOpen, setWebiFrameOpen] = useState(false);
    // const [loadedIframe, setLoadedIframe] = useState(null);

    const [videoOpen, setVideoOpen] = useState(false);
    const [loadedVideo, setLoadedVideo] = useState(null);


    const [employer, setEmployer] = useState(null);
    // const [employer, setEmployer] = useState(currentEmployer);
    // console.log('employer = ' + employer);


    // const [isBannerArray, setBannerArray] = useState();
    // const [isWebArray, setWebArray] = useState();
    // const [isPrintArray, setPrintArray] = useState();

    const [isBannerArray, setBannerArray] = useState(bannerArray);
    const [isWebArray, setWebArray] = useState(webArray);
    // const [isVideoArray, setVideoArray] = useState(videoArray);
    const [isPrintArray, setPrintArray] = useState(printArray);


    let [windowWidth, setWindowWidth] = useState(getWidth());
    // console.log('windowWidth = ' + windowWidth);

    //#endregion ==================== useState DEFs ====================



    //#region ==================== setState ====================

    if (employer !== currentEmployer) {

        // console.log('WorkList - setState ==>   employer !== currentEmployer');

        setBannerShow(null);
        setWebiFrameOpen(false);

        setEmployer(currentEmployer);

        setBannerArray(bannerArray);
        setWebArray(webArray);
        // setVideoArray(videoArray);
        setPrintArray(printArray);
    }

    //#endregion ==================== setState ====================



    //#region ==================== WorkList - useEffect: iFRAME = REF: https://medium.com/the-thinkmill/how-to-safely-inject-html-in-react-using-an-iframe-adc775d458bc ====================

    // useEffect(() => {

    //     const setIframeContent = (body) => {

    //         const currentContainer = document.getElementById(IFRAME_ID);
    //         const iframeContainer = document.getElementById(IFRAME_CONTAINER_ID);

    //         if (iframeContainer) {

    //             const newIframe = frames[IFRAME_ID];

    //             if (newIframe != null) {
    //                 const iframeDocument = newIframe.document;
    //                 iframeDocument.open();
    //                 iframeDocument.write('${body');
    //                 iframeDocument.close();
    //             }
    //         }
    //     }

    //     setIframeContent(props.body)

    // }, [props.body]);

    //#endregion ==================== WorkList - useEffect: iFRAME = REF: https://medium.com/the-thinkmill/how-to-safely-inject-html-in-react-using-an-iframe-adc775d458bc ====================

  

    //#region ==================== WorkList - useEffect: checkBanner on WINDOW RESIZE ====================

    useEffect(() => {

        // console.log('');
        // // console.log('------------------------- WorkList - useEffect: checkBanner on WINDOW RESIZE -------------------------');
        // console.log('========================= WorkList - useEffect: checkBanner on WINDOW RESIZE =========================');


        //#region -------------------- checkBanner: RELOCATE THE LOADED GSAP BANNER --------------------

        // const checkBanner = () => {

        //     console.log('');
        //     console.log('------------------------- useEffect: checkBanner -------------------------');

        //     console.log('document.getElementById(bannerContainerID).className = ' + document.getElementById('bannerContainerID').className);
        //     console.log('document.getElementById(bannerContainerID).key = ' + document.getElementById('bannerContainerID').key);


        //     let bannerKey = document.getElementById('bannerContainerID').key;

        //     if (!bannerKey) {
        //         console.log('OOPS! No banner has been clicked yet OR you are clicking in the WEB/VIDEO section.');
        //     } else {
        //         let thisBanner = document.getElementById(bannerKey);
        //         moveBanner(thisBanner, bannerContainer_Ref.current)

        //         thisBanner = document.getElementById('banneriFrameID');
        //         moveBanner(thisBanner, banneriFrame_Ref.current)
        //     }
        // }

        //#endregion -------------------- checkBanner: RELOCATE THE LOADED GSAP BANNER --------------------


        //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

        let timeoutId = null;

        const resizeListener = () => {

            console.log('');
            console.log('------------------------- WINDOW RESIZE: resizeListener -------------------------');


            //#region - - - - - - - - - - - - - IF 'activeImage'... (console.log messagaes) - - - - - - - - - - - - -

            if (activeImage) {
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage = ' + activeImage);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.key = ' + activeImage.key);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.className = ' + activeImage.className);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.id = ' + activeImage.id);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.src = ' + activeImage.src);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.alt = ' + activeImage.alt);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.format = ' + activeImage.format);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.format_src = ' + activeImage.format_src);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.mwidth = ' + activeImage.mwidth);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.mheight = ' + activeImage.mheight);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.getAttribute(\'format_src\') = ' + activeImage.getAttribute('format_src'));
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.getAttribute(\'mwidth\') = ' + activeImage.getAttribute('mwidth'));
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.getAttribute(\'mheight\') = ' + activeImage.getAttribute('mheight'));

                console.log('');
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.getBoundingClientRect() = ' + activeImage.getBoundingClientRect());
                console.log(activeImage.getBoundingClientRect());

                console.log('');
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.offsetLeft = ' + activeImage.offsetLeft);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.offsetTop = ' + activeImage.offsetTop);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.offsetWidth = ' + activeImage.offsetWidth);
                console.log('WINDOW RESIZE: resizeListener ===>   activeImage.offsetHeight = ' + activeImage.offsetHeight);
        }

        //#endregion - - - - - - - - - - - - - IF 'activeImage'... (console.log messagaes) - - - - - - - - - - - - -


            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);

            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() => setWindowWidth(getWidth()), 150);

            // checkBanner: RELOCATE THE LOADED GSAP BANNER
            // checkBanner();



            // let bannerScale = activeImage.width / activeImage.getAttribute('mwidth');
            // console.log('WINDOW RESIZE: resizeListener ===>   bannerScale = ' + bannerScale);

            // let bannerDims = activeImage.getBoundingClientRect();
            let bannerScale;


            if (activeImage && activeImage.getAttribute('format_src') === 'animate') {

            //#region -------------------- IF 'animate'... --------------------

                console.log('');
                console.log('WINDOW RESIZE: resizeListener ===>   This banner comes directly from Animate... with a few adjustments to the Animate-generated code');

                // moveBanner(activeImage, bannerContainer_Ref.current)

                bannerScale = activeImage.width / activeImage.getAttribute('mwidth');
                console.log('WINDOW RESIZE: resizeListener ===>   bannerScale = ' + bannerScale);

                banneriFrame_Ref.current.style.left = activeImage.offsetLeft + 'px';
                banneriFrame_Ref.current.style.top = activeImage.offsetTop + 'px';
                banneriFrame_Ref.current.style.width = activeImage.width / bannerScale + 'px';
                banneriFrame_Ref.current.style.height = activeImage.height / bannerScale + 'px';

                // banneriFrame_Ref.current.style.left = bannerDims.x + 'px';
                // banneriFrame_Ref.current.style.top = bannerDims.y + 'px';
                // banneriFrame_Ref.current.style.width = bannerDims.width / bannerScale + 'px';
                // banneriFrame_Ref.current.style.height = bannerDims.height / bannerScale + 'px';

                gsap.set([banneriFrame_Ref.current], { scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

            //#endregion -------------------- IF 'animate'... --------------------

            } else if (activeImage && activeImage.getAttribute('format_src') === 'html5') {

            //#region -------------------- ELSE IF 'html5'... --------------------

                console.log('');
                console.log('WINDOW RESIZE: resizeListener ===>   This banner was rebuilt in React...');

                // moveBanner(activeImage, banneriFrame_Ref.current)

                bannerScale = activeImage.width / activeImage.getAttribute('mwidth');
                console.log('WINDOW RESIZE: resizeListener ===>   bannerScale = ' + bannerScale);

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

    // }, []);
    // }, [windowWidth]);
    }, [windowWidth, activeImage]);

    //#endregion ==================== WorkList - useEffect: checkBanner on WINDOW RESIZE ====================


    return (
        <>

        {/* #region ------------------------- BANNERS: REACT ------------------------- */}

            <div className='bannerContainer' id='bannerContainerID' ref={bannerContainer_Ref}>
                {bannerShow}
            </div>

        {/* #region ------------------------- BANNERS: REACT ------------------------- */}


        {/* #region ------------------------- BANNERS: IFRAME ------------------------- */}

            {/* <div className={banneriFrameOpen === true ? 'banneriFrameContainerOpen' : 'banneriFrameContainerClosed'} id='banneriFrameContainerID' onClick={() => { setWebiFrameOpen(!webiFrameOpen); setLoadedVideo(null); clearContent(webiFrame_Ref.current); }} ref={iframeContainer_Ref}> */}
            {/* <div className={banneriFrameOpen === true ? 'banneriFrameContainerOpen' : 'banneriFrameContainerClosed'} id='banneriFrameContainerID' onClick={() => { toggleContent(setBanneriFrameOpen, true); clearContent(webiFrame_Ref.current); }} ref={iframeContainer_Ref}> */}

                <iframe
                    // className='banneriFrame'
                    className={banneriFrameOpen === true ? 'banneriFrameOpen' : 'banneriFrameClosed'}
                    id='banneriFrameID'
                    name='banneriFrame'
                    title='banneriFrame'
                    // sandbox='allow-same-origin'
                    // srcDoc={iframeSRC}
                    // src=''
                    // src='https://mimiobi19.wixsite.com/mimi01'
                    // src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/ax/mobile/giftguide_ho11/site_0318/site_0318.html'
                    // src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/ax/mobile/giftguide_ho11'
                    // width='100%'
                    // height='100%'
                    // src={loadedIframe}
                    ref={banneriFrame_Ref}
                />

            {/* </div> */}

        {/* #endregion ------------------------- BANNERS: IFRAME ------------------------- */}


        {/* #region ------------------------- WEB: IFRAME ------------------------- */}

            {/* <div className={webiFrameOpen === true ? 'webiFrameContainerOpen' : 'webiFrameContainerClosed'} id='iframeContainerID' ref={iframeContainer_Ref}> */}
            {/* <div className={webiFrameOpen === true ? 'webiFrameContainerOpen' : 'webiFrameContainerClosed'} id='iframeContainerID' onClick={() => { setWebiFrameOpen(!webiFrameOpen); setLoadedVideo(null); }} ref={iframeContainer_Ref}> */}
            {/* <div className={webiFrameOpen === true ? 'webiFrameContainerOpen' : 'webiFrameContainerClosed'} id='webiFrameContainerID' onClick={() => { setWebiFrameOpen(!webiFrameOpen); setLoadedVideo(null); clearContent(webiFrame_Ref.current); }} ref={iframeContainer_Ref}> */}
            <div className={webiFrameOpen === true ? 'webiFrameContainerOpen' : 'webiFrameContainerClosed'} id='webiFrameContainerID' onClick={() => { clearContent(); }} ref={iframeContainer_Ref}>

                <iframe
                    className='webiFrame' 
                    // className={webiFrameOpen === true ? 'webiFrameOpen' : 'webiFrameClosed'}
                    id='webiFrameID'
                    name='webiFrame'
                    title='webiFrame'
                    // sandbox='allow-same-origin'
                    // srcDoc={iframeSRC}
                    // src=''
                    // src='https://mimiobi19.wixsite.com/mimi01'
                    // src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/ax/mobile/giftguide_ho11/site_0318/site_0318.html'
                    // src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/ax/mobile/giftguide_ho11'
                    // width='100%'
                    // height='1000px'
                    // src={loadedIframe}
                    ref={webiFrame_Ref}
                />

            </div>

        {/* #endregion ------------------------- WEB: IFRAME ------------------------- */}


        {/* #region ------------------------- VIDEO PLAYER ------------------------- */}

            {/* <div className={videoOpen === true ? 'videoContainerOpen' : 'videoContainerClosed'} id='videoContainerID' ref={videoContainer_Ref}> */}
            {/* <div className={videoOpen === true ? 'videoContainerOpen' : 'videoContainerClosed'} id='videoContainerID' onClick={() => { setVideoOpen(!videoOpen); setLoadedVideo(null); clearContent(videoPlayer_Ref.current); }} ref={videoContainer_Ref}> */}
            {/* <div className={videoOpen === true ? 'videoContainerOpen' : 'videoContainerClosed'} id='videoContainerID' onClick={() => { setLoadedVideo(null); }} ref={videoContainer_Ref}> */}
            {/* <div className={videoOpen === true ? 'videoContainerOpen' : 'videoContainerClosed'} id='videoContainerID' onClick={() => { setVideoOpen(!videoOpen); setLoadedVideo(null); }} ref={videoContainer_Ref}> */}
            <div className={videoOpen === true ? 'videoContainerOpen' : 'videoContainerClosed'} id='videoContainerID' onClick={() => { clearContent(); }} ref={videoContainer_Ref}>

                <ReactPlayer
                    className='videoPlayer'
                    id='videoPlayerID'
                    // width='100%'
                    // height='100%'
                    width='80%'
                    height='80%'
                    // url='https://vimeo.com/313477117'
                    // url={videoSRC}
                    url={loadedVideo}
                    ref={videoPlayer_Ref}
                />

            </div>

        {/* #region ------------------------- VIDEO PLAYER ------------------------- */}


        {/* #region ------------------------- CLOSE TOGGLE BUTTON ------------------------- */}

            {/* <div className='toggleBtnDiv'> */}
            <div className='toggleBtnDiv' id='toggleBtnDivID'>
                {/* 
                <p>
                    iFrame status: {webiFrameOpen.toString()}
                    <br />
                    iframeSRC = {iframeSRC}
                </p>

                <p>
                    Video status: {videoOpen.toString()}
                    <br />
                    videoSRC = {videoSRC}
                    <br />
                    videoSRC = {loadedVideo}
                </p>
                */}
                <br />

                {/* <button className={webiFrameOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { setWebiFrameOpen(!webiFrameOpen); setLoadedVideo(null); clearContent(webiFrame_Ref.current); }}> Close Iframe </button> */}
                {/* <button className={videoOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { setVideoOpen(!videoOpen); setLoadedVideo(null); clearContent(videoPlayer_Ref.current); }}> Close Video </button> */}
                {/* <button className={webiFrameOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { setWebiFrameOpen(!webiFrameOpen); setLoadedVideo(null); }}> Close Iframe </button> */}
                {/* <button className={videoOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { setVideoOpen(!videoOpen); setLoadedVideo(null); }}> Close Video </button> */}

                <button className={webiFrameOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { clearContent(); }}> Close Iframe </button>
                <button className={videoOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { clearContent(); }}> Close Video </button>
            </div>

        {/* #endregion ------------------------- CLOSE TOGGLE BUTTON ------------------------- */}


        {/* #region ------------------------- WORKPODS ------------------------- */}

            {isBannerArray.length > 0 && <WorkPod workFormat='banner' workArray={bannerArray} handleClick={handleClick} />}
            {isWebArray.length > 0 && <WorkPod workFormat='website' workArray={webArray} handleClick={handleClick} />}
            {/* {isVideoArray.length > 0 && <WorkPod workFormat='video' workArray={videoArray} handleClick={handleClick} />} */}
            {isPrintArray.length > 0 && <WorkPod workFormat='print' workArray={printArray} handleClick={handleClick} />}

        {/* #region ------------------------- WORKPODS ------------------------- */}

        </>
    )
}

//#endregion ==================== WorkList() => <WorkList /> ====================



// export const Work = ({ currentEmployer }) => {
export const Work = ({ currentEmployer, locID }) => {
// export const Work = ({ currentEmployer, locID, loadStatus }) => {

    localStorage.setItem('navLoc', locID);
    // localStorage.setItem('loadStatus', loadStatus);

    work = myData[1].filter(thisEmployer => thisEmployer.album_id === currentEmployer);

    return (
        <div className='workContainer' id='workContainerID'>
            {/* <h1>Hello, locID = {locID}</h1> */}
            <WorkList currentEmployer={currentEmployer} />
        </div>
    )
}
