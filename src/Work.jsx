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

// import ax_denim_2011 from '../images/ax/mobile/giftguide_ho11/site_0318';

//#endregion ==================== IMPORTS ====================



// console.log('');
// console.log('=========================  Work.jsx  =========================');



//#region ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================

// const routes = {
//     '/mimi': () => <WorkMiMi />,
//     // '/ea': () => <Work000 />,
//     '/ea': () => <WorkEA />,
//     '/ax': () => <WorkAX />,
//     '/hearst': () => <WorkHearst />,
//     '/ddb': () => <WorkDDB />,
//     '/mrm': () => <WorkMRM />,
//     '/heeb': () => <WorkHeeb />,
//     '/hb': () => <WorkHB />,
//     '/lum': () => <WorkLuminant />,
//     '/dar': () => <WorkDarwin />,
//     '/other': () => <WorkOther />,

//     // '/000': () => <Work000 />,
//     // '/': () => <Work000 />,
//     '/': () => ' ',
// }

//#endregion ==================== ROUTES: REF https://blog.logrocket.com/how-react-hooks-can-replace-react-router/ ====================



//#region ==================== CONSTANTS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';
const localLoc = '../images/';

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

// const availableBannerContent = [
//     'EAAR_18951',
//     'NMPF_04852',
//     'NMMN_11155',
//     'BCBG_02342',
//     'BCBG_05500',
//     // 'EAUT_04752',
//     'JCNR_07074',
//     'BSPS_26897',
//     'NMTG_26903',
//     'JCVR_26963',
//     // 'JCSU_27801',
//     // 'GBHO_28721',
//     // 'GBHG_28726',
//     // 'EAWT_29709',
//     // 'EAFS_20741',
//     // 'JVAB_22710',
//     // 'EAPV_25219',
//     // 'EAPV_26124',
//     // 'EAMU_26378',
// ];



// const availableDummyContent = myData[1].filter(isAvailable => isAvailable.availability).map((dummyContent) => (
//     dummyContent.link2
// ));

// console.log('availableDummyContent = ');
// console.log(availableDummyContent);






const webContent = {
    mimi01: 'https://mimiobi19.wixsite.com/mimi01',
    mimi02: 'https://mimiobi19.wixsite.com/mimi02',
    mimi03: 'https://mimiobi19.wixsite.com/mimi03',
    mimi04: 'https://mimiobi19.wixsite.com/mimi04',
    mimi05: 'https://mimiobi19.wixsite.com/mimi05',
}

// const availableWebContent = [
//     'https://mimiobi19.wixsite.com/mimi01',
// ]


// const printContent = {}

// const availablePrintContent = []

//#endregion -------------------- AVAILABLE CONTENT: xContent[] --------------------


//#region -------------------- iFRAME --------------------

// const IFRAME_ID = 'webiFrameID';
// const IFRAME_CONTAINER_ID = 'webiFrameContainerID';

//#endregion -------------------- iFRAME --------------------

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


//#region -------------------- FUNCTION: emptyContainer(thisContainer) --------------------

// // function emptyContainer(thisContainer) {
// function emptyContainer() {

//     console.log('');
//     console.log('--------------------  emptyContainer(thisContainer)  --------------------');

//     // console.log('emptyContainer(thisContainer) ==>   thisContainer = ' + thisContainer);
//     // console.log('emptyContainer(thisContainer) ==>   thisContainer.id = ' + thisContainer.id);

//     // while (thisContainer.firstChild) {
//     //     thisContainer.removeChild(thisContainer.firstChild);
//     // }
// }

//#endregion -------------------- FUNCTION: emptyContainer(thisContainer) --------------------

//#endregion ==================== FUNCTIONS ====================



//#region ==================== WorkList() => <WorkList /> ====================

// function WorkList() {
function WorkList({ currentEmployer }) {

    // console.log('');
    // // console.log('------------------------- WorkList() => <WorkList /> -------------------------');
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
    // console.log('WorkList() => <WorkList /> ===>   printArray = ');
    // console.log(printArray);




    // const missingContentArray = arrayCompare(availableBannerContent, bannerArray);

    // const missingBannerArray = arrayCompare(availableBannerContent, bannerArray);
    // const missingWebArray = arrayCompare(availableWebContent, webArray);
    // // const missingPrintArray = arrayCompare(availablePrintContent, printArray);


    // console.log('WORK FORMAT ARRAYS ===>   missingContentArray.length = ' + missingContentArray.length)
    // console.log(missingContentArray);
    // // console.log(work);


    // console.log('WORK FORMAT ARRAYS ===>   missingBannerArray.length = ' + missingBannerArray.length)
    // console.log(missingBannerArray);
    // // console.log(work);

    // console.log('WORK FORMAT ARRAYS ===>   missingWebArray.length = ' + missingWebArray.length)
    // console.log(missingWebArray);
    // // console.log(work);

    // console.log('WORK FORMAT ARRAYS ===>   missingPrintArray.length = ' + missingPrintArray.length)
    // console.log(missingPrintArray);
    // // console.log(work);


    // missingContentArray.map((thisBanner) => (
    //     console.log('WORK FORMAT ARRAYS ===>   thisBanner = ' + thisBanner),
    //     console.log('WORK FORMAT ARRAYS ===>   document.getElementById(thisBanner).className = ' + document.getElementById(thisBanner).className),
    //     gsap.set([document.getElementById(thisBanner)], { autoAlpha: 0.5 })
    // ))

    //#endregion ==================== WORK FORMAT ARRAYS ==================== */



    //#region ==================== FUNCTIONS - handleClick(thisWorkFormat, thisWorkImage) ====================

    //#region -------------------- FUNCTION: handleClick(thisWorkFormat, thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks --------------------

    function handleClick(thisWorkFormat, thisWorkImage) {

        console.log('');
        console.log('------------------------- handleClick(thisWorkFormat, thisWorkImage) -------------------------');


        //#region ------------------------- Findin' out sh*t... (console.log messagaes) -------------------------

        // console.log('handleClick: windowWidth = ' + windowWidth);

        // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkFormat = ' + thisWorkFormat);
        // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkImage = ' + thisWorkImage);
        console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkImage.link2 = ' + thisWorkImage.link2);
        console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkImage.mwidth = ' + thisWorkImage.mwidth);
        console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkImage.mheight = ' + thisWorkImage.mheight);

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

        //#endregion ------------------------- Findin' out sh*t... (console.log messagaes) -------------------------


        //#region - - - - - - - - - - - - - DEFINE NEW CONTENT - - - - - - - - - - - - -

        let thisContent;
        // let thisContent = bannerContent;

        switch (thisWorkFormat) {
            case 'banner':

                thisContent = bannerContent;

                // console.log('');
                // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkFormat = ' + thisWorkFormat);
                // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisContent = ' + thisContent);

                break;

            // case 'html5':
            // case 'video':
            case 'website':
            // case 'mobile':

                thisContent = webContent;

                // console.log('');
                // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkFormat = ' + thisWorkFormat);
                // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisContent = ' + thisContent);

                break;

            // case 'print':

            //     thisContent = printontent;

            //     console.log('');
            //     console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkFormat = ' + thisWorkFormat);
            //     console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisContent = ' + thisContent);

            //     break;

            default:

                thisContent = bannerContent;

                // console.log('');
                // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisWorkFormat = ' + thisWorkFormat);
                // console.log('handleClick(thisWorkFormat, thisWorkImage) ===>   thisContent = ' + thisContent);

                break;
        }

        //#endregion - - - - - - - - - - - - - DEFINE NEW CONTENT - - - - - - - - - - - - -


        //#region - - - - - - - - - - - - - ASSIGN NEW CONTENT - - - - - - - - - - - - -

        if (thisContent[thisWorkImage.link2]) {
        // if (thisContent[thisWorkImage.link2] && thisContent[thisWorkImage.className] !== 'missingImg') {

            const newContent = React.createElement(thisContent[thisWorkImage.link2]);

            setBannerShow(newContent);

            document.getElementById('bannerContainerID').key = thisWorkImage.link2;
            // document.getElementById(thisWorkImage.link2).key = thisWorkImage.link2;


            // console.log('');
            console.log('thisWorkImage.link2 = ' + thisWorkImage.link2);

            console.log('newContent = ' + newContent);
            // console.log('thisContent[thisWorkImage.link2] = ' + thisContent[thisWorkImage.link2]);

            // console.log('document.getElementById(bannerContainerID).className = ' + document.getElementById('bannerContainerID').className);
            // console.log('document.getElementById(bannerContainerID).key = ' + document.getElementById('bannerContainerID').key);

        } else {

            // setBannerShow('');
            // setBannerShow(thisWorkImage.link2 + ' THIS CONTENT COMING SOON!');
            // setBannerShow(thisWorkImage.link2);

            // console.log('');
            console.log('thisWorkImage.link2 = ' + thisWorkImage.link2);

            // // console.log('newContent = ' + newContent);
            // console.log('thisContent[thisWorkImage.link2] = ' + thisContent[thisWorkImage.link2]);

            // console.log('document.getElementById(bannerContainerID).className = ' + document.getElementById('bannerContainerID').className);
            // console.log('document.getElementById(bannerContainerID).key = ' + document.getElementById('bannerContainerID').key);



            // const setIframeContent = () => {

            //     const currentContainer = document.getElementById(IFRAME_ID);
            //     const iframeContainer = document.getElementById(IFRAME_CONTAINER_ID);

            //     if (iframeContainer) {

            //         const newIframe = frames[IFRAME_ID];

            //         if (newIframe != null) {
            //             const iframeDocument = newIframe.document;
            //             iframeDocument.open();
            //             iframeDocument.write('${body');
            //             iframeDocument.close();
            //         }
            //     }
            // }

            // setIframeContent(thisWorkImage.link2)



            // ref: https://dev.to/damcosset/iframes-and-communicating-between-applications-31k5

            // let iframeSRC = thisWorkImage.link2;
            let iframeSRC = remoteLoc + thisWorkImage.album_id + '/' + thisWorkImage.link2;
            // let iframeSRC = localLoc + thisWorkImage.album_id + '/' + thisWorkImage.link2;

            console.log('iframeSRC = ' + iframeSRC);


            // let iframe = document.createElement('iframe');
            // // iframe.src = 'http://localhost:3001';
            // // iframe.src = thisWorkImage.link2;
            // iframe.src = iframeSRC;
            // // iframe.frameBorder = '0';
            // iframe.id = 'iframe';
            // iframe.style.position = 'absolute';
            // iframe.style.zIndex = '9999';
            // // iframe.style.width = '100%';
            // // iframe.style.height = '100%';
            // // iframe.style.top = '0';
            // iframe.style.width = thisWorkImage.mwidth + 'px';
            // iframe.style.height = thisWorkImage.mheight + 'px';
            // // iframe.style.width = '450px';
            // // iframe.style.height = '770px';
            // iframe.style.top = '10vh';
            // iframe.style.left = '30vw';
            // iframe.style.backgroundColor = 'white';
            // iframe.style.border = 'none';

            // document.body.prepend(iframe);
            // document.body.style.overflow = 'hidden';




            // let webiFrame_Ref.current = document.createElement('webiFrame_Ref.current');
            // webiFrame_Ref.current.src = 'http://localhost:3001';
            // webiFrame_Ref.current.src = thisWorkImage.link2;
            webiFrame_Ref.current.src = iframeSRC;
            // webiFrame_Ref.current.frameBorder = '0';
            // webiFrame_Ref.current.id = 'webiFrame_Ref.current';
            // webiFrame_Ref.current.style.position = 'absolute';
            // webiFrame_Ref.current.style.zIndex = '9999';
            // webiFrame_Ref.current.style.width = '100%';
            // webiFrame_Ref.current.style.height = '100%';
            // webiFrame_Ref.current.style.top = '0';
            webiFrame_Ref.current.style.width = thisWorkImage.mwidth + 'px';
            webiFrame_Ref.current.style.height = thisWorkImage.mheight + 'px';
            // webiFrame_Ref.current.style.width = '450px';
            // webiFrame_Ref.current.style.height = '770px';
            // webiFrame_Ref.current.style.top = '5vh';
            // webiFrame_Ref.current.style.left = '30vw';
            webiFrame_Ref.current.style.left = (window.innerWidth - thisWorkImage.mwidth)/2 + 'px';
            // webiFrame_Ref.current.style.backgroundColor = 'white';
            // webiFrame_Ref.current.style.border = 'none';

            // document.body.prepend(webiFrame_Ref.current);
            // document.body.style.overflow = 'hidden';


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
    const webiFrame_Ref = useRef(null);

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


    const [employer, setEmployer] = useState(null);
    // const [employer, setEmployer] = useState(currentEmployer);
    // console.log('employer = ' + employer);


    // const [isBannerArray, setBannerArray] = useState();
    // const [isWebArray, setWebArray] = useState();
    // const [isPrintArray, setPrintArray] = useState();

    const [isBannerArray, setBannerArray] = useState(bannerArray);
    const [isWebArray, setWebArray] = useState(webArray);
    const [isPrintArray, setPrintArray] = useState(printArray);


    let [windowWidth, setWindowWidth] = useState(getWidth());
    // console.log('windowWidth = ' + windowWidth);

    //#endregion ==================== useState DEFs ====================



    //#region ==================== setState ====================

    if (employer !== currentEmployer) {

        // console.log('WorkList - setState ==>   employer !== currentEmployer');

        setBannerShow(null);

        setEmployer(currentEmployer);

        setBannerArray(bannerArray);
        setWebArray(webArray);
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



    //#region ==================== WorkList - useEffect: [employer, setEmployer] ====================

    // // useState(() => {
    // useEffect(() => {

    //     console.log('');
    //     // console.log('------------------------- WorkList - useEffect: [employer, setEmployer] -------------------------');
    //     console.log('========================= WorkList - useEffect: [employer, setEmployer] =========================');

    //     // console.log('WorkList - useEffect: work ==>   currentEmployer = ' + currentEmployer);
    //     // // console.log('WorkList - useEffect: work ==>   employer = ' + employer);
    //     // // console.log('WorkList - useEffect: work ==>   employer = ' + work);
    //     // console.log(work);


    //     // if (employer !== currentEmployer) {

    //     //     // console.log('WorkList - useEffect: work ==>   employer !== currentEmployer');

    //     //     setBannerShow(null);

    //     //     setEmployer(currentEmployer);

    //     //     setBannerArray(bannerArray);
    //     //     setWebArray(webArray);
    //     //     setPrintArray(printArray);

    //     // // } else {

    //     // //     console.log('WorkList - useEffect: work ==>   employer === currentEmployer');
    //     // }


    //     // {work.filter(isBanner => isBanner.format === 'banner').map((workImage))}
    //     // console.log({ work.filter(isBanner => isBanner.format === 'banner').map((workImage)) });





    //     const missingContentArray = arrayCompare(availableBannerContent, bannerArray);

    //     console.log('WORK FORMAT ARRAYS ===>   missingContentArray.length = ' + missingContentArray.length)
    //     console.log(missingContentArray);
    //     console.log(work);


    //     missingContentArray.forEach((missingBanner) => {
    //         // console.log('WORK FORMAT ARRAYS ===>   missingBanner = ' + missingBanner),
    //         // console.log('WORK FORMAT ARRAYS ===>   document.getElementById(missingBanner).className = ' + document.getElementById(missingBanner).className),
    //         // console.log('WORK FORMAT ARRAYS ===>   document.getElementById(missingBanner).firstChild.id = ' + document.getElementById(missingBanner).firstChild.id)

    //         let targetBanner = document.getElementById(missingBanner);

    //         console.log('WorkPod - useEffect ===>   targetBanner = ' + targetBanner)
    //         console.log('WorkPod - useEffect ===>   targetBanner.id = ' + targetBanner.id)

    //         // gsap.set([document.getElementById(missingBanner).firstChild], { autoAlpha: 0.5 })
    //         gsap.set([targetBanner], { scale: 0.5, autoAlpha: 0.5 })
    //     });

    //     // gsap.set([document.getElementById('EAUT_04752')], { autoAlpha: 0.5 })


    // // }, []);
    // // }, [currentEmployer, employer]);
    // // }, [currentEmployer, employer, bannerArray, webArray, printArray]);
    // }, [bannerArray]);

    //#endregion ==================== WorkList - useEffect: [employer, setEmployer] ====================

    // const iframeSRC = 'https://www.google.com/?client=safari';

    let closeIframe = () => {
        webiFrame_Ref.current.src = '';
    };

    return (
        <>
            <div className='bannerContainer' id='bannerContainerID' ref={bannerContainer_Ref}>
                {bannerShow}
            </div>


            <iframe
                className='webiFrame' 
                id='webiFrameID'
                name='testingiframe'
                // id={IFRAME_ID}
                // name={IFRAME_ID}
                title='testingiframe'
                // sandbox='allow-same-origin'
                // srcDoc={iframeSRC}
                // src=''
                // src='https://mimiobi19.wixsite.com/mimi01'
                // src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/ax/mobile/giftguide_ho11/site_0318/site_0318.html'
                // src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/ax/mobile/giftguide_ho11'
                // width='100%'
                // height='1000px'
                ref={webiFrame_Ref}
            />

            {/* <button onClick={() => closeIframe()}>Close Iframe </button> */}
            {/* <button onClick={() => webiFrame_Ref.current.src = ''}>Close Iframe </button> */}



            {/* {isBannerArray.length > 0 && <WorkPod workFormat='banner' workArray={bannerArray} handleClick={handleClick} />}
            {isWebArray.length > 0 && <WorkPod workFormat='website' workArray={webArray} handleClick={handleClick} />}
            {isPrintArray.length > 0 && <WorkPod workFormat='print' workArray={printArray} handleClick={handleClick} />} */}

            {/* {isBannerArray.length > 0 && <WorkPod workFormat='banner' workArray={bannerArray} missingContentArray={missingBannerArray} handleClick={handleClick} />}
            {isWebArray.length > 0 && <WorkPod workFormat='website' workArray={webArray} missingContentArray={missingWebArray} handleClick={handleClick} />}
            {isPrintArray.length > 0 && <WorkPod workFormat='print' workArray={printArray} missingContentArray={missingContentArray} handleClick={handleClick} />} */}

            {isBannerArray.length > 0 && <WorkPod workFormat='banner' workArray={bannerArray} handleClick={handleClick} />}
            {isWebArray.length > 0 && <WorkPod workFormat='website' workArray={webArray} handleClick={handleClick} />}
            {isPrintArray.length > 0 && <WorkPod workFormat='print' workArray={printArray} handleClick={handleClick} />}
        </>
    )
}

//#endregion ==================== WorkList() => <WorkList /> ====================



export const Work = ({ currentEmployer }) => {

    work = myData[1].filter(thisEmployer => thisEmployer.album_id === currentEmployer);

    return (
        <div className='workContainer' id='workContainerID'>
            <WorkList currentEmployer={currentEmployer} />
        </div>
    )
}
