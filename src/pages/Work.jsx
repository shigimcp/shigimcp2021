//#region ==================== IMPORTS ====================

import React from 'react';
// import { useRoutes } from 'hookrouter';
import { useRef } from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
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

function getCoords(thisObject) {

    // console.log('');
    // console.log('--------------------  getCoords(thisObject)  --------------------');

    // console.log('getCoords(thisObject) ==>   thisObject = ' + thisObject);
    // console.log('getCoords(thisObject) ==>   thisObject.id = ' + thisObject.id);


    //#region - - - - - - - - - - - - - getBoundingClientRect - - - - - - - - - - - - -

    // const thisObjectDims = thisObject.getBoundingClientRect();

    // console.log('');
    // console.log('getCoords(thisObject) ===>   thisObjectDims.x = ' + thisObjectDims.x);
    // console.log('getCoords(thisObject) ===>   thisObjectDims.left = ' + thisObjectDims.left);
    // console.log('getCoords(thisObject) ===>   thisObjectDims.y = ' + thisObjectDims.y);
    // console.log('getCoords(thisObject) ===>   thisObjectDims.top = ' + thisObjectDims.top);
    // console.log('getCoords(thisObject) ===>   thisObjectDims.width = ' + thisObjectDims.width);
    // console.log('getCoords(thisObject) ===>   thisObjectDims.height = ' + thisObjectDims.height);
    // console.log('getCoords(thisObject) ===>   thisObjectDims.right = ' + thisObjectDims.right);
    // console.log('getCoords(thisObject) ===>   thisObjectDims.bottom = ' + thisObjectDims.bottom);

    // return thisObjectDims;

    //#endregion - - - - - - - - - - - - - getBoundingClientRect - - - - - - - - - - - - -


    return [thisObject.offsetLeft, thisObject.offsetTop];
}

//#endregion -------------------- FUNCTION: getCoords(thisObject) --------------------


//#region -------------------- FUNCTION: arrayCompare(baseArray, newArray) --------------------

// function arrayCompare(baseArray, newArray) {

//     let missingContentArray = [];

//     // console.log('');
//     // console.log('------------------------- arrayCompare(baseArray, newArray) -------------------------');

//     // console.log('arrayCompare(baseArray, newArray) ===>   baseArray.length = ' + baseArray.length)
//     // console.log('arrayCompare(baseArray, newArray) ===>   newArray.length = ' + newArray.length)

//     // console.log(baseArray)
//     // console.log(newArray)


//     newArray.map((workImage) =>
//         // console.log('arrayCompare(baseArray, newArray) ===>   workImage.link2 = ' + workImage.link2),

//         missingContentArray.push(workImage.link2)
//     );

//     missingContentArray = missingContentArray.filter(val => !baseArray.includes(val));


//     // console.log('');
//     // console.log('arrayCompare(baseArray, newArray) ===>   missingContentArray.length = ' + missingContentArray.length)
//     // console.log(missingContentArray);

//     return missingContentArray;
// }

//#endregion -------------------- FUNCTION: arrayCompare(baseArray, comapareArray) --------------------


//#region -------------------- FUNCTION: moveBanner(thisBanner, bannerContainer) --------------------

function moveBanner(thisBanner, bannerContainer) {

    // console.log('');
    // console.log('--------------------  moveBanner(thisBanner, bannerContainer)  --------------------');

    // console.log('moveBanner(thisBanner, bannerContainer) ==>   thisBanner = ' + thisBanner);
    // console.log('moveBanner(thisBanner, bannerContainer) ==>   thisBanner.id = ' + thisBanner.id);

    let thisBannerCoords = getCoords(thisBanner);
    let thisBannerScale = thisBanner.offsetWidth / 300;

    // console.log('');
    // console.log('moveBanner(thisBanner, bannerContainer) ===>   thisBanner = ' + thisBanner);
    // console.log('moveBanner(thisBanner, bannerContainer) ===>   thisBannerX = ' + thisBannerX);
    // console.log('moveBanner(thisBanner, bannerContainer) ===>   thisBannerY = ' + thisBannerY);
    // console.log('moveBanner(thisBanner, bannerContainer) ===>   thisBannerScale = ' + thisBannerScale);


    // gsap.set([bannerContainer], { x: thisBannerX, y: thisBannerY, scale: thisBannerScale, transformOrigin: '0 0', immediateRender: true });
    gsap.set([bannerContainer], { x: thisBannerCoords[0], y: thisBannerCoords[1], scale: thisBannerScale, transformOrigin: '0 0', immediateRender: true });
}

//#endregion -------------------- FUNCTION: moveBanner(thisBanner) --------------------


//#region -------------------- FUNCTION: clearContent(thisIframe) --------------------

// function clearContent(thisIframe, thisVideo) {
function clearContent(thisContainer) {

    console.log('');
    console.log('--------------------  clearContent(thisIframe)  --------------------');

    console.log('clearContent(thisIframe) ===> thisContainer = ' + thisContainer.id);

    // thisIframe.src = '';
    // thisVideo.url = '';

    thisContainer.src = '';
    // thisContainer.url = null;
}

//#endregion -------------------- FUNCTION: clearContent() --------------------

//#endregion ==================== FUNCTIONS ====================



//#region ==================== WorkList() => <WorkList /> ====================

// let iframeSRC;
// let videoSRC;

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



    //#region ==================== FUNCTIONS - handleClick(thisWorkFormat, thisWorkImage) ====================

    //#region -------------------- FUNCTION: handleClick(thisWorkFormat, thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks --------------------

    function handleClick(thisWorkFormat, thisWorkImage) {

        // console.log('');
        // console.log('------------------------- handleClick(thisWorkFormat, thisWorkImage) -------------------------');


        //#region - - - - - - - - - - - - - Findin' out sh*t... (console.log messagaes) - - - - - - - - - - - - -

        // console.log('handleClick: windowWidth = ' + windowWidth);

        // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkFormat = ' + thisWorkFormat);
        // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkImage = ' + thisWorkImage);

        // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkImage.format = ' + thisWorkImage.format);
        // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkImage.link2 = ' + thisWorkImage.link2);
        // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkImage.mwidth = ' + thisWorkImage.mwidth);
        // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkImage.mheight = ' + thisWorkImage.mheight);

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


        //#region - - - - - - - - - - - - - DEFINE NEW CONTENT (from AVAILABLE CONTENT above) - - - - - - - - - - - - -

        // let thisContent;
        // // let thisContent = bannerContent;

        // switch (thisWorkFormat) {
        //     case 'banner':

        //         thisContent = bannerContent;

        //         // console.log('');
        //         // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkFormat = ' + thisWorkFormat);
        //         // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisContent = ' + thisContent);

        //         break;

        //     // case 'html5':
        //     case 'website':
        //     // case 'mobile':

        //         thisContent = webContent;

        //         // console.log('');
        //         // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkFormat = ' + thisWorkFormat);
        //         // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisContent = ' + thisContent);

        //         break;

        //     case 'video':

        //         thisContent = videoContent;

        //         // console.log('');
        //         // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkFormat = ' + thisWorkFormat);
        //         // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisContent = ' + thisContent);

        //         break;

        //     // case 'print':

        //     //     thisContent = printontent;

        //     //     console.log('');
        //     //     console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkFormat = ' + thisWorkFormat);
        //     //     console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisContent = ' + thisContent);

        //     //     break;

        //     default:

        //         thisContent = bannerContent;

        //         // console.log('');
        //         // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   default thisWorkFormat = ' + thisWorkFormat);
        //         // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   default thisContent = ' + thisContent);

        //         break;
        // }

        //#endregion - - - - - - - - - - - - - DEFINE NEW CONTENT (from AVAILABLE CONTENT above) - - - - - - - - - - - - -


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

                console.log('');
                console.log('------------------------- ASSIGN NEW CONTENT: banner -------------------------');

                console.log('ASSIGN NEW CONTENT: banner ===>   thisWorkImage.format = ' + thisWorkImage.format);
                console.log('ASSIGN NEW CONTENT: banner ===>   thisWorkImage.format_src = ' + thisWorkImage.format_src);


                const newContent = React.createElement(bannerContent[thisWorkImage.link2]);

                setBannerShow(newContent);

                document.getElementById('bannerContainerID').key = thisWorkImage.link2;

                setIframeOpen(false);
                // setLoadedIframe('');

                setVideoOpen(false);
                setLoadedVideo(null);


                // console.log('');
                // console.log('thisWorkImage.link2 = ' + thisWorkImage.link2);
                // console.log('thisContent[thisWorkImage.link2] = ' + thisContent[thisWorkImage.link2]);

                // console.log('newContent = ' + newContent);
                // console.log('thisContent[thisWorkImage.link2] = ' + thisContent[thisWorkImage.link2]);

                // console.log('document.getElementById(bannerContainerID).className = ' + document.getElementById('bannerContainerID').className);
                // console.log('document.getElementById(bannerContainerID).key = ' + document.getElementById('bannerContainerID').key);

                break;

            //#endregion -------------------- ASSIGN NEW CONTENT: banner --------------------


            case 'html5':
            case 'website':
            case 'mobile':

            //#region -------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------
            //        -------------------- IFRAME REF: https://dev.to/damcosset/iframes-and-communicating-between-applications-31k5 -------------------- 

                console.log('');
                console.log('------------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) -------------------------');

                console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisWorkImage.format = ' + thisWorkImage.format);
                console.log('ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) ===>   thisWorkImage.format_src = ' + thisWorkImage.format_src);


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

                setIframeOpen(true);
                // setLoadedIframe(iframeSRC);

                setVideoOpen(false);
                setLoadedVideo(null);

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

                break;

            //#endregion -------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------


            case 'video':

            //#region -------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------
            //        -------------------- VIDEO REF: https://github.com/CookPete/react-player -------------------- 

                console.log('');
                console.log('------------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) -------------------------');

                console.log('ASSIGN NEW CONTENT: video (REACT-PLAYER) ===>   thisWorkImage.format = ' + thisWorkImage.format);
                console.log('ASSIGN NEW CONTENT: video (REACT-PLAYER) ===>   thisWorkImage.format_src = ' + thisWorkImage.format_src);


                // clearContent(webiFrame_Ref.current, videoPlayer_Ref.current);

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

                setIframeOpen(false);
                // setLoadedIframe('');

                setVideoOpen(true);
                setLoadedVideo(videoSRC);

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


                // setIframeOpen(false);
                // setLoadedIframe('');

                // setVideoOpen(false);
                // setLoadedVideo(null);

                // break;

            //#endregion -------------------- ASSIGN NEW CONTENT: print --------------------


            default:

            //#region -------------------- ASSIGN NEW CONTENT: default --------------------

                console.log('');
                console.log('------------------------- ASSIGN NEW CONTENT: default -------------------------');

                console.log('ASSIGN NEW CONTENT: default ===>   thisWorkImage.format = ' + thisWorkImage.format);
                console.log('ASSIGN NEW CONTENT: default ===>   thisWorkImage.format_src = ' + thisWorkImage.format_src);


                setIframeOpen(false);
                // setLoadedIframe('');

                setVideoOpen(false);
                setLoadedVideo(null);

                break;

            //#endregion -------------------- ASSIGN NEW CONTENT: default --------------------
        }

        //#endregion - - - - - - - - - - - - - ASSIGN NEW CONTENT - - - - - - - - - - - - -


        //#region - - - - - - - - - - - - - POSITION & LOAD NEW CONTENT bannerContainer_Ref - - - - - - - - - - - - -

        let workImageLoc = document.getElementById(thisWorkImage.link2);
        moveBanner(workImageLoc, bannerContainer_Ref.current)

        //#endregion - - - - - - - - - - - - - POSITION & LOAD NEW CONTENT bannerContainer_Ref - - - - - - - - - - - - -

    }

    //#endregion -------------------- FUNCTION: handleClick(thisWorkFormat, thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks --------------------

    //#endregion ==================== FUNCTIONS - handleClick(thisWorkFormat, thisWorkImage) ====================



    //#region ==================== ASSETS _Ref ====================

    // const workListDiv_Ref = useRef(null);

    // const bannerMasonry_Ref = useRef(null);
    // const webMasonry_Ref = useRef(null);

    // const workItem_Ref = useRef(null);
    // const masonryImg_Ref = useRef(null);

    const bannerContainer_Ref = useRef(null);

    const iframeContainer_Ref = useRef(null);
    const webiFrame_Ref = useRef(null);

    const videoContainer_Ref = useRef(null);
    const videoPlayer_Ref = useRef(null);

    // const workList_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================



    //#region ==================== useState DEFs ====================

    // console.log('');
    // console.log('------------------------- useState DEFs -------------------------');

    const [bannerShow, setBannerShow] = useState(null);

    // const [bannerShow, setBannerShow] = useState(BSPS_26897);
    // const [bannerShow, setBannerShow] = useState(NMMN_11155);
    // const [bannerShow, setBannerShow] = useState(NMTG_26903);

    // const [bannerShow, setBannerShow] = useState(<BSPS_26897 />);
    // const [bannerShow, setBannerShow] = useState(<NMMN_11155 />);
    // const [bannerShow, setBannerShow] = useState(<NMTG_26903 />);

    // const [bannerKey, setBannerKey] = useState();

    const [iframeOpen, setIframeOpen] = useState(false);
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
        setIframeOpen(false);

        setEmployer(currentEmployer);

        setBannerArray(bannerArray);
        setWebArray(webArray);
        // setVideoArray(videoArray);
        setPrintArray(printArray);
    }

    //#endregion ==================== setState ====================



    //#region ==================== useEffect: iFRAME = REF: https://medium.com/the-thinkmill/how-to-safely-inject-html-in-react-using-an-iframe-adc775d458bc ====================

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

    //#endregion ==================== useEffect: iFRAME = REF: https://medium.com/the-thinkmill/how-to-safely-inject-html-in-react-using-an-iframe-adc775d458bc ====================

  

    //#region ==================== WorkList - useEffect: checkBanner on WINDOW RESIZE ====================

    useState(() => {
    // useEffect(() => {

        // console.log('');
        // // console.log('------------------------- WorkList - useEffect: checkBanner on WINDOW RESIZE -------------------------');
        // console.log('========================= WorkList - useEffect: checkBanner on WINDOW RESIZE =========================');


        //#region -------------------- checkBanner: RELOCATE THE LOADED GSAP BANNER --------------------

        const checkBanner = () => {

            // console.log('');
            // console.log('------------------------- useEffect: checkBanner -------------------------');

            // console.log('document.getElementById(bannerContainerID).className = ' + document.getElementById('bannerContainerID').className);
            // console.log('document.getElementById(bannerContainerID).key = ' + document.getElementById('bannerContainerID').key);


            let bannerKey = document.getElementById('bannerContainerID').key;

            if (!bannerKey) {
                console.log('OOPS! No banner has been clicked yet OR you are clicking in the WEB/VIDEO section.');
            } else {
                let thisBanner = document.getElementById(bannerKey);
                moveBanner(thisBanner, bannerContainer_Ref.current)
            }
        }

        //#endregion -------------------- checkBanner: RELOCATE THE LOADED GSAP BANNER --------------------


        //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

        let timeoutId = null;

        const resizeListener = () => {

            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);

            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() => setWindowWidth(getWidth()), 150);

            // checkBanner: RELOCATE THE LOADED GSAP BANNER
            checkBanner();
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
    }, [windowWidth]);

    //#endregion ==================== WorkList - useEffect: checkBanner on WINDOW RESIZE ====================


    return (
        <>
            <div className='bannerContainer' id='bannerContainerID' ref={bannerContainer_Ref}>
                {bannerShow}
            </div>

            {/* <div className={iframeOpen === true ? 'iframeContainerOpen' : 'iframeContainerClosed'} id='iframeContainerID' ref={iframeContainer_Ref}> */}
            {/* <div className={iframeOpen === true ? 'iframeContainerOpen' : 'iframeContainerClosed'} id='iframeContainerID' onClick={() => { setIframeOpen(!iframeOpen); setLoadedVideo(null); }} ref={iframeContainer_Ref}> */}
            <div className={iframeOpen === true ? 'iframeContainerOpen' : 'iframeContainerClosed'} id='iframeContainerID' onClick={() => { setIframeOpen(!iframeOpen); setLoadedVideo(null); clearContent(webiFrame_Ref.current); }} ref={iframeContainer_Ref}>

                <iframe
                    className='webiFrame' 
                    // className={iframeOpen === true ? 'webiFrameOpen' : 'webiFrameClosed'}
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

            {/* <div className={videoOpen === true ? 'videoContainerOpen' : 'videoContainerClosed'} id='videoContainerID' ref={videoContainer_Ref}> */}
            {/* <div className={videoOpen === true ? 'videoContainerOpen' : 'videoContainerClosed'} id='videoContainerID' onClick={() => { setVideoOpen(!videoOpen); setLoadedVideo(null); clearContent(videoPlayer_Ref.current); }} ref={videoContainer_Ref}> */}
            <div className={videoOpen === true ? 'videoContainerOpen' : 'videoContainerClosed'} id='videoContainerID' onClick={() => { setVideoOpen(!videoOpen); setLoadedVideo(null); }} ref={videoContainer_Ref}>

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

            {/* <div className='toggleBtnDiv'> */}
            <div className='toggleBtnDiv' id='toggleBtnDivID'>
                {/* 
                <p>
                    iFrame status: {iframeOpen.toString()}
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

                <button className={iframeOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { setIframeOpen(!iframeOpen); setLoadedVideo(null); clearContent(webiFrame_Ref.current); }}> Close Iframe </button>
                {/* <button className={videoOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { setVideoOpen(!videoOpen); setLoadedVideo(null); clearContent(videoPlayer_Ref.current); }}> Close Video </button> */}
                {/* <button className={iframeOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { setIframeOpen(!iframeOpen); setLoadedVideo(null); }}> Close Iframe </button> */}
                <button className={videoOpen === true ? 'toggleBtnShow' : 'toggleBtnHide'} onClick={() => { setVideoOpen(!videoOpen); setLoadedVideo(null); }}> Close Video </button>
            </div>

            {isBannerArray.length > 0 && <WorkPod workFormat='banner' workArray={bannerArray} handleClick={handleClick} />}
            {isWebArray.length > 0 && <WorkPod workFormat='website' workArray={webArray} handleClick={handleClick} />}
            {/* {isVideoArray.length > 0 && <WorkPod workFormat='video' workArray={videoArray} handleClick={handleClick} />} */}
            {isPrintArray.length > 0 && <WorkPod workFormat='print' workArray={printArray} handleClick={handleClick} />}
        </>
    )
}

//#endregion ==================== WorkList() => <WorkList /> ====================



// export const Work = ({ currentEmployer }) => {
// export const Work = ({ currentEmployer, locID }) => {
export const Work = ({ currentEmployer, locID, loadStatus }) => {

    localStorage.setItem('navLoc', locID);
    localStorage.setItem('loadStatus', loadStatus);

    work = myData[1].filter(thisEmployer => thisEmployer.album_id === currentEmployer);

    return (
        <div className='workContainer' id='workContainerID'>
            {/* <h1>Hello, locID = {locID}</h1> */}
            <WorkList currentEmployer={currentEmployer} />
        </div>
    )
}
