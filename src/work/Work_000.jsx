//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Moment from 'react-moment';

import { gsap } from 'gsap';

// import '../stylesheets/Work.scss';
// import scssVars from '../stylesheets/Global.scss';


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


//#region -------------------- IMPORTS: DATA --------------------

// import work from '../data/MyData';
import work from '../data/json/work_json/work_ea.json';

//#endregion -------------------- IMPORTS: DATA --------------------

//#endregion ==================== IMPORTS ====================



// console.log('');
// console.log('=========================  Work_000.jsx  =========================');



//#region ==================== CONSTANTS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;


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

//#endregion ==================== CONSTANTS ====================



//#region ==================== workList() => <WorkList /> ====================

function WorkList() {

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



    //#region ==================== FUNCTIONS ====================

    //#region -------------------- FUNCTION: checkBanners(thisMasonry) --------------------

    // function checkBanners(thisMasonry) {

    //     console.log('');
    //     console.log('--------------------  checkBanners()  --------------------');

    //     console.log('thisMasonry = ' + thisMasonry);
    //     // console.log('thisMasonry.id = ' + thisMasonry.id);
    //     // console.log('thisMasonry.children = ' + thisMasonry.children);

    //     // for (let i = 0; i < thisMasonry.children.length; i++) {
    //     //     console.log('thisMasonry.children[0] = ' + thisMasonry.children[0]);
    //     // }
    // }

    //#endregion -------------------- FUNCTION: checkBanners(thisMasonry) --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== ASSETS _Ref ====================

    const bannerMasonry_Ref = useRef(null);
    const webMasonry_Ref = useRef(null);

    const workItem_Ref = useRef(null);
    const masonryImg_Ref = useRef(null);

    const importContainer_Ref = useRef(null);
    // const importedContent_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================



    //#region ==================== useState DEFs ====================

    const [bannerShow, setBannerShow] = useState();

    // const [bannerShow, setBannerShow] = useState(BSPS_26897);
    // const [bannerShow, setBannerShow] = useState(NMMN_11155);
    // const [bannerShow, setBannerShow] = useState(NMTG_26903);

    // const [bannerShow, setBannerShow] = useState(<BSPS_26897 />);
    // const [bannerShow, setBannerShow] = useState(<NMMN_11155 />);
    // const [bannerShow, setBannerShow] = useState(<NMTG_26903 />);
    
    // const [bannerKey, setBannerKey] = useState();


    let [windowWidth, setWindowWidth] = useState(getWidth());

    // console.log('');
    // console.log('------------------------- useState -------------------------');
    // console.log('windowWidth = ' + windowWidth);

    //#endregion ==================== useState DEFs ====================



    //#region ==================== useEffect ====================

    useEffect(() => {

        //#region -------------------- GSAP TIMELINE --------------------

        const tl = gsap.timeline({ delay: 0 });

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            //#region -------------------- SET TRANSFORM ORIGiNS --------------------

            // .set([bsps_26897Ref.current, nmtg_26903Ref.current, nmmn_11155Ref.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            // .set(['.masonryBanner'], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            .set(['.masonryImg'], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')

            //#endregion -------------------- SET TRANSFORM ORIGiNS --------------------


            //#region -------------------- FRAME01 --------------------

            // .set([bsps_26897Ref.current, nmtg_26903Ref.current], { autoAlpha: 0.5, scale: 1.25, rotation: 30 }, 'frame00')
            // .set([nmtg_26903Ref.current], { scale: 1.5 }, 'frame00')
            // .set([nmmn_11155Ref.current], { rotation: 30 }, 'frame00')

            // .set(['.masonryBanner'], { autoAlpha: 0.5, scale: 1.25, rotation: 30 }, 'frame00')

            //#endregion -------------------- FRAME01 --------------------

            //#endregion ==================== INITIALIZE OBJECTS ====================


            //#region ==================== FRAME 01 ====================

            // .fromTo([bsps_26897Ref.current], { scale: 0.75, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'power3.out', duration: animDuration04 }, 'frame01 +=0')
            // .fromTo([nmtg_26903Ref.current], { scale: 0.75, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'power3.out', duration: animDuration04 }, 'frame01 +=0.5')
            // .fromTo([nmmn_11155Ref.current], { scale: 0.75, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: 'back.inOut(2)', duration: animDuration05 }, 'frame01 +=0')

            //#endregion ==================== FRAME 01 ====================


            //#region ==================== FRAME 02 ====================

            // .to([bsps_26897Ref.current], { y: 20, scale: 0.8, ease: 'power3.out', duration: animDuration02 }, 'frame02 -=1.5')
            // .fromTo([nmtg_26903Ref.current], { x: 70, y: 5, autoAlpha: 0 }, { y: -15, autoAlpha: 1, ease: 'power3.out', duration: animDuration02 }, 'frame02 -=1.5')

            //#endregion ==================== FRAME 02 ====================


            //#region ==================== FRAME 03 ====================

            // .to([bsps_26897Ref.current], { x: 95, y: 35, scale: 0.7, ease: 'power2.out', duration: animDuration02 }, 'frame03 +=0.75')
            // .to([nmtg_26903Ref.current], { x: 126, y: -7, scale: 0.95, ease: 'power2.out', duration: animDuration02 }, 'frame03 +=0.75')
            // .fromTo([nmmn_11155Ref.current], { x: -194, y: 6, scale: 1.05882352941176, ease: 'power2.out' }, { x: 0, y: 0, scale: 1, ease: 'power2.out', duration: animDuration02 }, 'frame03 +=0.75')

            // #endregion ==================== FRAME 03 ====================
        ;

        //#endregion -------------------- GSAP TIMELINE --------------------


        //#region -------------------- moveBanner: RELOCATE THE LOADED GSAP BANNER --------------------

        const moveBanner = () => {

            // console.log('');
            // console.log('------------------------- moveBanner -------------------------');

            // console.log('document.getElementById(importContainerID).className = ' + document.getElementById('importContainerID').className);
            // console.log('document.getElementById(importContainerID).key = ' + document.getElementById('importContainerID').key);

            let bannerKey = document.getElementById('importContainerID').key;


            if (!bannerKey) {

                console.log('OOPS! No banner has been clicked yet OR you are clicking in the WEB/VIDEO section.');

            } else {

                // console.log('bannerKey = ' + bannerKey);
                // console.log('document.getElementById(bannerKey).className = ' + document.getElementById(bannerKey).className);
                // console.log('document.getElementById(bannerKey).id = ' + document.getElementById(bannerKey).id);


                //#region - - - - - - - - - - - - - CALCULATE NEW POSITION - - - - - - - - - - - - -

                // let thisBannerX = document.getElementById(bannerKey).x;
                // let thisBannerY = document.getElementById(bannerKey).y;

                // let thisBannerX = document.getElementById(bannerKey).offsetLeft;
                // let thisBannerY = document.getElementById(bannerKey).offsetTop;

                //#region -  -  -  -  -  -  -  -  - position compensation for elements above importContainer -  -  -  -  -  -  -  -  -

                // let thisBannerX = document.getElementById(thisWorkImage.link2).x + 1;
                // let thisBannerY = document.getElementById(bannerKey).y - 250;

                // let thisBannerX = document.getElementById(thisWorkImage.link2).offsetLeft + 1;
                // let thisBannerY = document.getElementById(bannerKey).offsetTop - 250;

                // let thisBannerX = document.getElementById(bannerKey).offsetLeft - 13;
                let thisBannerY = document.getElementById(bannerKey).offsetTop - 170;

                let thisBannerX = document.getElementById(bannerKey).offsetLeft - (0.0125 * windowWidth);
                // let thisBannerY = document.getElementById(bannerKey).offsetTop - (headerHeight + navBarHeight + workkNavHeight);

                //#endregion -  -  -  -  -  -  -  -  - position compensation for elements above importContainer -  -  -  -  -  -  -  -  -

                // let thisBannerW = document.getElementById(bannerKey).offsetWidth;
                // let thisBannerH = document.getElementById(bannerKey).offsetHeight;

                let thisBannerScale = document.getElementById(bannerKey).offsetWidth / 300;

                // console.log('');
                // console.log('thisBannerX = ' + thisBannerX);
                // console.log('thisBannerY = ' + thisBannerY);
                // console.log('thisBannerW = ' + thisBannerW);
                // console.log('thisBannerH = ' + thisBannerH);
                // console.log('thisBannerScale = ' + thisBannerScale);

                //#endregion - - - - - - - - - - - - - CALCULATE NEW POSITION - - - - - - - - - - - - -


                //#region - - - - - - - - - - - - - POSITION BANNER - - - - - - - - - - - - -

                // gsap.set([importContainer_Ref.current, importedContent_Ref.current], { transformOrigin: '50% 0', immediateRender: true });
                // // gsap.set([importContainer_Ref.current], { x: thisBannerX, y: thisBannerY, width: thisBannerW, height: thisBannerH, scale: thisBannerScale });
                // gsap.set([importContainer_Ref.current], { x: thisBannerX, y: thisBannerY, width: thisBannerW, height: thisBannerH });

                // gsap.set([importedContent_Ref.current], { scale: thisBannerScale, zIndex: -100 });


                // gsap.set([importContainer_Ref.current, importedContent_Ref.current], { transformOrigin: '0 0', immediateRender: true });
                gsap.set([importContainer_Ref.current], { transformOrigin: '0 0', immediateRender: true });
                gsap.set([importContainer_Ref.current], { x: thisBannerX, y: thisBannerY, scale: thisBannerScale });

                //#endregion - - - - - - - - - - - - - POSITION BANNER - - - - - - - - - - - - -
            }
        }

        //#endregion -------------------- moveBanner: RELOCATE THE LOADED GSAP BANNER --------------------


        //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

        let timeoutId = null;

        const resizeListener = () => {

            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);

            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() => setWindowWidth(getWidth()), 150);

            // moveBanner: RELOCATE THE LOADED GSAP BANNER
            moveBanner();
        };

        // set resize listener
        window.addEventListener('resize', resizeListener);

        //#endregion -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------


        // clean up function
        return () => {
            // // RELOCATE THE LOADED GSAP BANNER
            // moveBanner();

            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }

    // }, []);
    }, [windowWidth]);
    // }, [animDuration02, animDuration04, animDuration05]);

    //#endregion ==================== useEffect ====================


    useLayoutEffect(() => {

        console.log('');
        console.log('--------------------  useLayoutEffect  --------------------');

        console.log('bannerMasonry_Ref.current = ' + bannerMasonry_Ref.current);
        // checkBanners(bannerMasonry_Ref.current);
        // checkBanners(document.getElementById('bannerMasonryID'));

    }, []);


    //#region ==================== FUNCTION: handleClick(thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks - switch/case ====================

    function handleClick(thisWorkImage) {

        // console.log('');
        // console.log('------------------------- handleClick(thisWorkImage) -------------------------');


        //#region ------------------------- Findin' out sh*t... (console.log messagaes) -------------------------

        // console.log('handleClick: windowWidth = ' + windowWidth);

        // console.log('');
        // console.log('thisWorkImage.link = ' + thisWorkImage.link);
        // console.log('thisWorkImage.link2 = ' + thisWorkImage.link2);
        // console.log('thisWorkImage.link3 = ' + thisWorkImage.link3);
        // console.log('thisWorkImage.link4 = ' + thisWorkImage.link4);

        // console.log('document.getElementById(thisWorkImage.link2).className = ' + document.getElementById(thisWorkImage.link2).className);

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


        //#region ------------------------- Tryin' out sh*t... -------------------------

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


        //#region - - - - - - - - - - - - - CALCULATE NEW POSITION - - - - - - - - - - - - -

        // let thisBannerX = document.getElementById(thisWorkImage.link2).x;
        // let thisBannerY = document.getElementById(thisWorkImage.link2).y;

        // let thisBannerX = document.getElementById(thisWorkImage.link2).offsetLeft;
        // let thisBannerY = document.getElementById(thisWorkImage.link2).offsetTop;

        //#region -  -  -  -  -  -  -  -  - position compensation for elements above importContainer -  -  -  -  -  -  -  -  -

        // let thisBannerX = document.getElementById(thisWorkImage.link2).x + 1;
        // let thisBannerY = document.getElementById(thisWorkImage.link2).y - 250;

        // let thisBannerX = document.getElementById(thisWorkImage.link2).offsetLeft + 1;
        // let thisBannerY = document.getElementById(thisWorkImage.link2).offsetTop - 250;

        // let thisBannerX = document.getElementById(thisWorkImage.link2).offsetLeft - 13;
        let thisBannerY = document.getElementById(thisWorkImage.link2).offsetTop - 170;

        let thisBannerX = document.getElementById(thisWorkImage.link2).offsetLeft - (0.0125 * windowWidth);
        // let thisBannerY = document.getElementById(thisWorkImage.link2).offsetTop - (headerHeight + navBarHeight + workkNavHeight);

        //#endregion -  -  -  -  -  -  -  -  - position compensation for elements above importContainer -  -  -  -  -  -  -  -  -

        // let thisBannerW = document.getElementById(thisWorkImage.link2).offsetWidth;
        // let thisBannerH = document.getElementById(thisWorkImage.link2).offsetHeight;

        let thisBannerScale = document.getElementById(thisWorkImage.link2).offsetWidth / 300;

        //#endregion - - - - - - - - - - - - - CALCULATE NEW POSITION - - - - - - - - - - - - -


        //#region - - - - - - - - - - - - - POSITION BANNER - - - - - - - - - - - - -

        // gsap.set([importContainer_Ref.current, importedContent_Ref.current], { transformOrigin: '50% 0', immediateRender: true });
        // // gsap.set([importContainer_Ref.current], { x: thisBannerX, y: thisBannerY, width: thisBannerW, height: thisBannerH, scale: thisBannerScale });
        // gsap.set([importContainer_Ref.current], { x: thisBannerX, y: thisBannerY, width: thisBannerW, height: thisBannerH });

        // // gsap.set([importedContent_Ref.current], { scale: thisBannerScale, zIndex: -100 });


        // gsap.set([importContainer_Ref.current, importedContent_Ref.current], { transformOrigin: '0 0', immediateRender: true });
        gsap.set([importContainer_Ref.current], { transformOrigin: '0 0', immediateRender: true });

        // gsap.set([importContainer_Ref.current], { x: thisBannerX, y: thisBannerY, width: thisBannerW, height: thisBannerH });
        gsap.set([importContainer_Ref.current], { x: thisBannerX, y: thisBannerY, scale: thisBannerScale });

        // gsap.set([importedContent_Ref.current], { width: thisBannerW, height: thisBannerH });
        // gsap.set([importedContent_Ref.current.children[1]], { scale: thisBannerScale });
        // gsap.set([importedContent_Ref.current], { x: thisBannerX, y: thisBannerY, width: thisBannerW, height: thisBannerH, scale: thisBannerScale });

        //#endregion - - - - - - - - - - - - - POSITION BANNER - - - - - - - - - - - - -

        //#endregion ------------------------- Tryin' out sh*t... -------------------------

    }

    //#endregion ==================== FUNCTION: handleClick(thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks - switch/case ====================



    //#region ==================== RETURN (className='workList') ====================

    return (
        <div className='workList'>

            {/* width = {width}; */}

            <div className='importContainer' id='importContainerID' ref={importContainer_Ref}>
            {/* <div className='importContainer' id='importContainerID' key={bannerShow} ref={importContainer_Ref}> */}
            {/* <div className='importContainer' id='importContainerID' key={bannerKey} ref={importContainer_Ref}> */}
                {/* <div className='importedContent' ref={importedContent_Ref}> */}
                    {bannerShow}
                {/* </div> */}
            </div>


        {/* #region ------------------------- BANNERS ------------------------- */}
            {/* 
            <section>
                <hr />
                <h2>|*|*|*|*|*| &nbsp;&nbsp;&nbsp; Banners 000 &nbsp;&nbsp;&nbsp; |*|*|*|*|*|</h2>
                <hr />
            </section>
            */}
            <section className='masonrySection'>

                <ResponsiveMasonry columnsCountBreakPoints={{ 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 }}>
                    {/* <Masonry gutter='50px'> */}
                    <Masonry className='masonry' id='bannerMasonryID' gutter='1.25vw' ref={bannerMasonry_Ref}>

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

        {/* #endregion ------------------------- WEB / VIDEO ------------------------- */}

        </div>
    )

    //#endregion ==================== RETURN (className='workList') ====================

}

//#endregion ==================== workList() => <WorkList /> ====================




export const Work000 = () => {

    return (
        <>
            <WorkList />
        </>
    )
}
