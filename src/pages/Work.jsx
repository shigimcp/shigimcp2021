//#region ==================== IMPORTS ====================

import React from 'react';
// import { useRoutes } from 'hookrouter';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useLayoutEffect } from 'react';
// import { forwardRef } from "react";

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Moment from 'react-moment';

import { gsap } from 'gsap';

// import { FullPage } from '../components/FullPage';
// import { BodyContainer } from '../components/BodyContainer';

import '../stylesheets/Work.scss';
// import scssVars from '../stylesheets/Global.scss';


//#region -------------------- IMPORTS: DATA --------------------

// import work from '../data/MyData';
import myData from '../data/MyData';
// import workComplete from '../data/json/work_complete.json';
// import work from '../data/json/work_json/work_ea.json';

//#endregion -------------------- IMPORTS: DATA --------------------


//#region -------------------- IMPORTS: WORK PAGES --------------------

// import { Work000 } from './work/Work_000';
// import Work000 from './work/Work_000';

// import { WorkEmployer } from '../components/WorkEmployer';

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
import JCNR_07074 from '../images/ea/banners/CR_7074_JC_VNOIR_2013_AU_300x600/JCNR_07074';
import BSPS_26897 from '../images/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
import NMTG_26903 from '../images/ea/banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
import JCVR_26963 from '../images/ea/banners/26963_JC_VIVA_ROSE_GWP_PR_Walgreens_300x250/JCVR_26963';
import BCBG_02342 from '../images/ea/banners/BCBG_MAXAZRIA_CR00002342_AU_Digital_Plan/BCBG_02342';
import BCBG_05500 from '../images/ea/banners/CR_5500_BCBG_BC_AU_Digital_Plan_2013/BCBG_05500';

//#endregion -------------------- IMPORTS: GSAP BANNERS --------------------

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

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;


//#region -------------------- DATA --------------------

let work;
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


//#region -------------------- AVAILABLE GSAP BANNERS: banners[] --------------------

const banners = {
    EAAR_18951: EAAR_18951,
    NMPF_04852: NMPF_04852,
    NMMN_11155: NMMN_11155,
    JCNR_07074: JCNR_07074,
    BSPS_26897: BSPS_26897,
    NMTG_26903: NMTG_26903,
    JCVR_26963: JCVR_26963,
    BCBG_02342: BCBG_02342,
    BCBG_05500: BCBG_05500,
};

//#endregion -------------------- AVAILABLE GSAP BANNERS: banners[] --------------------

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


//#region -------------------- FUNCTION: moveBanner(thisBanner, importContainer) --------------------

function moveBanner(thisBanner, importContainer) {

    // console.log('');
    // console.log('--------------------  moveBanner(thisBanner, importContainer)  --------------------');

    // console.log('moveBanner(thisBanner, importContainer) ==>   thisBanner = ' + thisBanner);
    // console.log('moveBanner(thisBanner, importContainer) ==>   thisBanner.id = ' + thisBanner.id);

    let thisBannerCoords = getCoords(thisBanner);
    let thisBannerScale = thisBanner.offsetWidth / 300;

    // console.log('');
    // console.log('moveBanner(thisBanner, importContainer) ===>   thisBanner = ' + thisBanner);
    // console.log('moveBanner(thisBanner, importContainer) ===>   thisBannerX = ' + thisBannerX);
    // console.log('moveBanner(thisBanner, importContainer) ===>   thisBannerY = ' + thisBannerY);
    // console.log('moveBanner(thisBanner, importContainer) ===>   thisBannerScale = ' + thisBannerScale);


    // gsap.set([importContainer], { x: thisBannerX, y: thisBannerY, scale: thisBannerScale, transformOrigin: '0 0', immediateRender: true });
    gsap.set([importContainer], { x: thisBannerCoords[0], y: thisBannerCoords[1], scale: thisBannerScale, transformOrigin: '0 0', immediateRender: true });
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
function WorkList({currentEmployer}) {

    // console.log('');
    // // console.log('------------------------- WorkList() => <WorkList /> -------------------------');
    // console.log('========================= WorkList() => <WorkList /> =========================');

    // console.log('WorkList() => <WorkList /> ===>   currentEmployer = ' + currentEmployer);


    //#region ==================== FUNCTIONS ====================

    //#region -------------------- FUNCTION: handleClick(thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks - switch/case --------------------

    function handleClick(thisWorkImage) {

        // console.log('');
        // console.log('------------------------- handleClick(thisWorkImage) -------------------------');


        //#region ------------------------- Findin' out sh*t... (console.log messagaes) -------------------------

        // console.log('handleClick: windowWidth = ' + windowWidth);

        // console.log('');
        // console.log('thisWorkImage = ' + thisWorkImage);

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
        // // console.log('document.getElementById(importContainerID).offsetWidth = ' + document.getElementById('importContainerID').offsetWidth);
        // // console.log('document.getElementById(importContainerID).offsetHeight = ' + document.getElementById('importContainerID').offsetHeight);

        // console.log('document.getElementById(importContainerID).className = ' + document.getElementById('importContainerID').className);
        // // console.log('document.getElementById(importContainerID).key = ' + document.getElementById('importContainerID').key);

        //#endregion ------------------------- Findin' out sh*t... (console.log messagaes) -------------------------


        //#region - - - - - - - - - - - - - ASSIGN NEW BANNER - - - - - - - - - - - - -

        if (banners[thisWorkImage.link2]) {

            const thisBanner = React.createElement(banners[thisWorkImage.link2]);

            // console.log('');
            // console.log('thisBanner = ' + thisBanner);

            setBannerShow(thisBanner);

            // setBannerKey(thisBanner);
            document.getElementById('importContainerID').key = thisWorkImage.link2;
            // document.getElementById(thisWorkImage.link2).key = thisWorkImage.link2;

            // console.log('');
            // console.log('document.getElementById(importContainerID).className = ' + document.getElementById('importContainerID').className);
            // console.log('document.getElementById(importContainerID).key = ' + document.getElementById('importContainerID').key);

        } else {
            setBannerShow(thisWorkImage.link2 + ' THIS CONTENT COMING SOON!');
            // setBannerKey(thisWorkImage.link2);
        }

        //#endregion - - - - - - - - - - - - - ASSIGN NEW BANNER - - - - - - - - - - - - -


        //#region - - - - - - - - - - - - - POSITION importContainer_Ref - - - - - - - - - - - - -

        let thisBanner = document.getElementById(thisWorkImage.link2);
        moveBanner(thisBanner, importContainer_Ref.current)

        //#endregion - - - - - - - - - - - - - POSITION importContainer_Ref - - - - - - - - - - - - -

    }

    //#endregion -------------------- FUNCTION: handleClick(thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks - switch/case --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== ASSETS _Ref ====================

    // const workListDiv_Ref = useRef(null);

    const bannerMasonry_Ref = useRef(null);
    const webMasonry_Ref = useRef(null);

    const workItem_Ref = useRef(null);
    const masonryImg_Ref = useRef(null);

    const importContainer_Ref = useRef(null);

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


    let [windowWidth, setWindowWidth] = useState(getWidth());
    // console.log('windowWidth = ' + windowWidth);

    //#endregion ==================== useState DEFs ====================



    //#region ==================== WorkList - useEffect: checkBanner on WINDOW RESIZE ====================

    useEffect(() => {

        // console.log('');
        // // console.log('------------------------- WorkList - useEffect: checkBanner on WINDOW RESIZE -------------------------');
        // console.log('========================= WorkList - useEffect: checkBanner on WINDOW RESIZE =========================');


        //#region -------------------- checkBanner: RELOCATE THE LOADED GSAP BANNER --------------------

        const checkBanner = () => {

            // console.log('');
            // console.log('------------------------- useEffect: checkBanner -------------------------');

            // console.log('document.getElementById(importContainerID).className = ' + document.getElementById('importContainerID').className);
            // console.log('document.getElementById(importContainerID).key = ' + document.getElementById('importContainerID').key);


            let bannerKey = document.getElementById('importContainerID').key;

            if (!bannerKey) {
                console.log('OOPS! No banner has been clicked yet OR you are clicking in the WEB/VIDEO section.');
            } else {
                let thisBanner = document.getElementById(bannerKey);
                moveBanner(thisBanner, importContainer_Ref.current)
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

    useEffect(() => {

        // console.log('');
        // // console.log('------------------------- WorkList - useEffect: [employer, setEmployer] -------------------------');
        // console.log('========================= WorkList - useEffect: [employer, setEmployer] =========================');

        // console.log('WorkList - useEffect: work ==>   currentEmployer = ' + currentEmployer);
        // console.log('WorkList - useEffect: work ==>   employer = ' + employer);

        if (employer !== currentEmployer) {

            // console.log('WorkList - useEffect: work ==>   employer !== currentEmployer');

            setBannerShow(null);
            setEmployer(currentEmployer);

        // } else {

        //     console.log('WorkList - useEffect: work ==>   employer === currentEmployer');
        }

    // }, []);
    }, [currentEmployer, employer]);

    //#endregion ==================== useEffect: [employer, setEmployer] ====================


    return (
        <>
            {/* width = {width}; */}

            <div className='importContainer' id='importContainerID' ref={importContainer_Ref}>
            {/* <div className='importContainer' id='importContainerID' key={bannerShow} ref={importContainer_Ref}> */}
            {/* <div className='importContainer' id='importContainerID' key={bannerKey} ref={importContainer_Ref}> */}
                {bannerShow}
            </div>

            {/* <h1>Hi, again, {currentEmployer}</h1> */}

        {/* #region ------------------------- BANNERS ------------------------- */}
            {/* 
            <section>
                <hr />
                <h2>|*|*|*|*|*| &nbsp;&nbsp;&nbsp; Banners 000 &nbsp;&nbsp;&nbsp; |*|*|*|*|*|</h2>
                <h2>Banners</h2>
                <hr />
            </section>
            */}
            <section className='masonrySection'>

                <ResponsiveMasonry columnsCountBreakPoints={{ 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 }}>
                    {/* <Masonry gutter='50px'> */}
                    <Masonry className='masonry' id='bannerMasonryID' gutter='1.25vw' ref={bannerMasonry_Ref}>

                        {/* {work.filter(thisEmployer => thisEmployer.album_id === employer).map((workImage) => ( */}
                        {/* {work.filter(isBanner => isBanner.format === 'banner').map((workImage) => ( */}
                        {/* {work.filter(isBanner => isBanner.format === 'banner').map((workImage).filter(isEmploeyr => workImage.album_id === employer) => ( */}
                        {/* {work.filter((isBanner => isBanner.format === 'banner') && (thisEmployer => thisEmployer.album_id === employer)).map((workImage) => ( */}

                        {work.filter(isBanner => isBanner.format === 'banner').map((workImage) => (

                            <div className='workItem' id={workImage.link2} key={'banner' + workImage.album_id + workImage.image_index} ref={workItem_Ref}>

                                <img
                                    // key={workImage.album_id + workImage.image_index}
                                    className='masonryImg'
                                    id={workImage.album_id + workImage.image_index + '_imgID'}
                                    // id={workImage.link2}
                                    src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                    alt={'album_id: ' + workImage.album_id + workImage.image_index}

                                    onClick={() => handleClick(workImage)}
                                    // onClick={() => setBannerShow(workImage.link2)}
                                    // onClick={() => {
                                    //     handleClick(workImage);
                                    //     setBannerShow(workImage.link2);
                                    // }}

                                    ref={masonryImg_Ref}
                                />

                                <p className='masonryInfo' title='masonryInfoTitle'>
                                    {workImage.caption}<br />
                                    <Moment format="MMM YYYY">{workImage.date}</Moment><br />

                                {/* 
                                    <br />
                                    album_index = {workImage.album_index}<br />
                                    album_id = {workImage.album_id}<br />
                                    image_index = {workImage.image_index}<br />
                                    src = {workImage.src}<br />
                                    caption = {workImage.caption}<br />
                                    date = {workImage.date}<br />
                                    format = {workImage.format}<br />
                                    format_src = {workImage.format_src}<br />
                                    link = {workImage.link}<br />
                                    link2 = {workImage.link2}<br />
                                    link3 = {workImage.link3}<br />
                                    link4 = {workImage.link4}<br />
                                    cta = {workImage.cta}<br />
                                    alert = {workImage.alert}<br />
                                    mwidth = {workImage.mwidth}<br />
                                    mheight = {workImage.mheight}
                                */}

                                </p>

                            </div>
                        ))}

                    </Masonry>
                </ResponsiveMasonry>

            </section>

        {/* #endregion ------------------------- BANNERS ------------------------- */}


        {/* #region ------------------------- WEB / VIDEO ------------------------- */}

            <section>
                <hr />
                <h2>Web / Video</h2>
                <hr />
            </section>

            <section className='masonrySection'>

                {/* <ResponsiveMasonry columnsCountBreakPoints={{ 960: 1, 1366: 2, 2040: 3 }}> */}
                {/* <ResponsiveMasonry columnsCountBreakPoints={{ 1024: 1, 1366: 2, 1920: 3, 3840: 4 }}> */}
                <ResponsiveMasonry columnsCountBreakPoints={{ 768: 1, 960: 2, 1920: 3, 3840: 4 }}>
                    <Masonry className='masonry' id='webMasonryID' gutter='1.25vw' ref={webMasonry_Ref}>

                        {/* {work.filter(isBanner => isBanner.format === 'website').map((workImage) => ( */}
                        {/* {work.filter((isBanner => isBanner.format === 'website') && (thisEmployer => thisEmployer.album_id === employer)).map((workImage) => ( */}

                        {work.filter(isBanner => isBanner.format !== 'banner').map((workImage) => (

                            <div className='workItem' id={workImage.link2} key={'web' + workImage.album_id + workImage.image_index} ref={workItem_Ref}>

                                <img
                                    // key={'WV' + workImage.album_id + workImage.image_index}
                                    className='masonryImg'
                                    // id={workImage.album_id + workImage.image_index + '_imgID'}
                                    id={workImage.link2}
                                    src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                    alt={'album_id: ' + workImage.album_id + workImage.image_index}

                                    onClick={() => handleClick(workImage)}

                                    ref={masonryImg_Ref}
                                />

                                <p className='masonryInfo' title='masonryInfoTitle'>
                                    {workImage.caption}<br />
                                    <Moment format="MMM YYYY">{workImage.date}</Moment><br />


                                    <br />
                                    album_index = {workImage.album_index}<br />
                                    album_id = {workImage.album_id}<br />
                                    image_index = {workImage.image_index}<br />
                                    src = {workImage.src}<br />
                                    caption = {workImage.caption}<br />
                                    date = {workImage.date}<br />
                                    format = {workImage.format}<br />
                                    format_src = {workImage.format_src}<br />
                                    link = {workImage.link}<br />
                                    link2 = {workImage.link2}<br />
                                    link3 = {workImage.link3}<br />
                                    link4 = {workImage.link4}<br />
                                    cta = {workImage.cta}<br />
                                    alert = {workImage.alert}<br />
                                    mwidth = {workImage.mwidth}<br />
                                    mheight = {workImage.mheight}


                                </p>

                            </div>
                        ))}

                    </Masonry>
                </ResponsiveMasonry>

            </section>

        {/* #endregion ------------------------- WEB / VIDEO ------------------------- */}

        </>
    )
}

//#endregion ==================== workList() => <WorkList /> ====================



// export const Work = () => {
export const Work = ({ currentEmployer }) => {

    work = myData[1].filter(thisEmployer => thisEmployer.album_id === currentEmployer);

    return (
        <div className='workContainer' id='workContainerID'>
            <WorkList currentEmployer={currentEmployer} />
        </div>
    )
}
