//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useLayoutEffect } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Moment from 'react-moment';

import { gsap } from 'gsap';

// import '../../stylesheets/Work.scss';
// import scssVars from '../stylesheets/Global.scss';


//#region -------------------- IMPORTS: GSAP BANNERS --------------------

import EAAR_18951 from '../../images/ea/banners/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600/EAAR_18951';
import NMPF_04852 from '../../images/ea/banners/CR_4852_NMPF_US_Walmart_300x250/NMPF_04852';
import NMMN_11155 from '../../images/ea/banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155';
import JCNR_07074 from '../../images/ea/banners/CR_7074_JC_VNOIR_2013_AU_300x600/JCNR_07074';
import BSPS_26897 from '../../images/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
import NMTG_26903 from '../../images/ea/banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
import JCVR_26963 from '../../images/ea/banners/26963_JC_VIVA_ROSE_GWP_PR_Walgreens_300x250/JCVR_26963';
import BCBG_02342 from '../../images/ea/banners/BCBG_MAXAZRIA_CR00002342_AU_Digital_Plan/BCBG_02342';
import BCBG_05500 from '../../images/ea/banners/CR_5500_BCBG_BC_AU_Digital_Plan_2013/BCBG_05500';

//#endregion -------------------- IMPORTS: GSAP BANNERS --------------------


//#region -------------------- IMPORTS: DATA --------------------

// import work from '../data/MyData';
import work from '../../data/json/work_json/work_ea.json';

//#endregion -------------------- IMPORTS: DATA --------------------

//#endregion ==================== IMPORTS ====================



// console.log('');
// console.log('=========================  Work_EA.jsx  =========================');



//#region ==================== CONSTANTS ====================

const remoteLoc = 'https://www.shigimcp.com/assets/img/';

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;


//#region -------------------- SCSS VARS --------------------

// console.log('');
// console.log('------------------------- scssVars -------------------------');

// const headerHeight = scssVars.headerHeight;
// const navBarHeight = scssVars.navBarHeight;
// const workNavHeight = scssVars.workNavHeight;

// const headerHeight = parseInt(scssVars.headerHeight);
// const navBarHeight = parseInt(scssVars.navBarHeight);
// const workNavHeight = parseInt(scssVars.workNavHeight);

// console.log('headerHeight = ' + headerHeight + '     navBarHeight = ' + navBarHeight + '     workNavHeight = ' + workNavHeight);
// console.log('(headerHeight + navBarHeight + workNavHeight) = ' + (headerHeight + navBarHeight + workNavHeight));

//#endregion -------------------- SCSS VARS --------------------

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
    //     console.log('--------------------  checkBanners(thisMasonry)  --------------------');

    //     console.log('thisMasonry = ' + thisMasonry);
    //     // console.log('thisMasonry.id = ' + thisMasonry.id);
    //     // console.log('thisMasonry.children = ' + thisMasonry.children);

    //     // for (let i = 0; i < thisMasonry.children.length; i++) {
    //     //     console.log('thisMasonry.children[0] = ' + thisMasonry.children[0]);
    //     // }
    // }

    //#endregion -------------------- FUNCTION: checkBanners(thisMasonry) --------------------


    //#region -------------------- FUNCTION: moveImportContainer(thisBanner) --------------------

    function moveImportContainer(thisBanner) {

        console.log('');
        console.log('--------------------  moveImportContainer(thisBanner)  --------------------');

        console.log('moveImportContainer(thisBanner) ==>   thisBanner = ' + thisBanner);
        console.log('moveImportContainer(thisBanner) ==>   thisBanner.id = ' + thisBanner.id);


        //#region - - - - - - - - - - - - - getBoundingClientRect - - - - - - - - - - - - -

        // const thisBannerDims = thisBanner.getBoundingClientRect();

        // console.log('');
        // console.log('moveImportContainer(thisBanner) ===>   thisBannerDims.x = ' + thisBannerDims.x);
        // console.log('moveImportContainer(thisBanner) ===>   thisBannerDims.left = ' + thisBannerDims.left);
        // console.log('moveImportContainer(thisBanner) ===>   thisBannerDims.y = ' + thisBannerDims.y);
        // console.log('moveImportContainer(thisBanner) ===>   thisBannerDims.top = ' + thisBannerDims.top);
        // console.log('moveImportContainer(thisBanner) ===>   thisBannerDims.width = ' + thisBannerDims.width);
        // console.log('moveImportContainer(thisBanner) ===>   thisBannerDims.height = ' + thisBannerDims.height);
        // console.log('moveImportContainer(thisBanner) ===>   thisBannerDims.right = ' + thisBannerDims.right);
        // console.log('moveImportContainer(thisBanner) ===>   thisBannerDims.bottom = ' + thisBannerDims.bottom);

        // return thisBannerDims;

        //#endregion - - - - - - - - - - - - - getBoundingClientRect - - - - - - - - - - - - -


        return [thisBanner.offsetLeft, thisBanner.offsetTop];
    }

    //#endregion -------------------- FUNCTION: moveImportContainer(thisBanner) --------------------


    //#region -------------------- FUNCTION: handleClick(thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks --------------------

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
        // // console.log('document.getElementById(bannerContainerID).offsetWidth = ' + document.getElementById('bannerContainerID').offsetWidth);
        // // console.log('document.getElementById(bannerContainerID).offsetHeight = ' + document.getElementById('bannerContainerID').offsetHeight);

        // console.log('document.getElementById(bannerContainerID).className = ' + document.getElementById('bannerContainerID').className);
        // // console.log('document.getElementById(bannerContainerID).key = ' + document.getElementById('bannerContainerID').key);

        //#endregion ------------------------- Findin' out sh*t... (console.log messagaes) -------------------------


        //#region - - - - - - - - - - - - - ASSIGN NEW BANNER - - - - - - - - - - - - -

        if (banners[thisWorkImage.link2]) {

            const thisBanner = React.createElement(banners[thisWorkImage.link2]);

            // console.log('');
            // console.log('thisBanner = ' + thisBanner);

            setBannerShow(thisBanner);

            // setBannerKey(thisBanner);
            document.getElementById('bannerContainerID').key = thisWorkImage.link2;
            // document.getElementById(thisWorkImage.link2).key = thisWorkImage.link2;

            // console.log('');
            // console.log('document.getElementById(bannerContainerID).className = ' + document.getElementById('bannerContainerID').className);
            // console.log('document.getElementById(bannerContainerID).key = ' + document.getElementById('bannerContainerID').key);

        } else {
            setBannerShow(thisWorkImage.link2 + ' THIS CONTENT COMING SOON!');
            // setBannerKey(thisWorkImage.link2);
        }

        //#endregion - - - - - - - - - - - - - ASSIGN NEW BANNER - - - - - - - - - - - - -


        //#region - - - - - - - - - - - - - POSITION bannerContainer_Ref - - - - - - - - - - - - -

        let thisBanner = document.getElementById(thisWorkImage.link2);

        // let thisBannerX = document.getElementById(thisWorkImage.link2).offsetLeft;
        // let thisBannerY = document.getElementById(thisWorkImage.link2).offsetTop;
        // let thisBannerX = thisBanner.offsetLeft;
        // let thisBannerY = thisBanner.offsetTop;
        let thisBannerX = moveImportContainer(thisBanner)[0];
        let thisBannerY = moveImportContainer(thisBanner)[1];

        let thisBannerScale = document.getElementById(thisWorkImage.link2).offsetWidth / 300;

        // console.log('');
        // console.log('handleClick(thisWorkImage) ===>   thisBanner = ' + thisBanner);
        // console.log('handleClick(thisWorkImage) ===>   thisBannerX = ' + thisBannerX);
        // console.log('handleClick(thisWorkImage) ===>   thisBannerY = ' + thisBannerY);
        // console.log('handleClick(thisWorkImage) ===>   thisBannerScale = ' + thisBannerScale);


        gsap.set([bannerContainer_Ref.current], { x: thisBannerX, y: thisBannerY, scale: thisBannerScale, transformOrigin: '0 0', immediateRender: true });

        //#endregion - - - - - - - - - - - - - POSITION bannerContainer_Ref - - - - - - - - - - - - -

    }

    //#endregion -------------------- FUNCTION: handleClick(thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks --------------------

    //#endregion ==================== FUNCTIONS ====================



    //#region ==================== ASSETS _Ref ====================

    // const workListDiv_Ref = useRef(null);

    const bannerMasonry_Ref = useRef(null);
    const webMasonry_Ref = useRef(null);

    const workItem_Ref = useRef(null);
    const masonryImg_Ref = useRef(null);

    const bannerContainer_Ref = useRef(null);
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



    //#region ==================== useEffect: moveBanner on WINDOW RESIZE ====================

    useEffect(() => {

        //#region -------------------- moveBanner: RELOCATE THE LOADED GSAP BANNER --------------------

        const moveBanner = () => {

            // console.log('');
            // console.log('------------------------- moveBanner -------------------------');

            // console.log('document.getElementById(bannerContainerID).className = ' + document.getElementById('bannerContainerID').className);
            // console.log('document.getElementById(bannerContainerID).key = ' + document.getElementById('bannerContainerID').key);

            let bannerKey = document.getElementById('bannerContainerID').key;


            if (!bannerKey) {

                console.log('OOPS! No banner has been clicked yet OR you are clicking in the WEB/VIDEO section.');

            } else {

                // console.log('bannerKey = ' + bannerKey);
                // console.log('document.getElementById(bannerKey).className = ' + document.getElementById(bannerKey).className);
                // console.log('document.getElementById(bannerKey).id = ' + document.getElementById(bannerKey).id);

                let thisBanner = document.getElementById(bannerKey);

                // let thisBannerX = document.getElementById(bannerKey).offsetLeft;
                // let thisBannerY = document.getElementById(bannerKey).offsetTop;
                // let thisBannerX = thisBanner.offsetLeft;
                // let thisBannerY = thisBanner.offsetTop;
                let thisBannerX = moveImportContainer(thisBanner)[0];
                let thisBannerY = moveImportContainer(thisBanner)[1];

                let thisBannerScale = document.getElementById(bannerKey).offsetWidth / 300;

                // console.log('');
                // console.log('handleClick(thisWorkImage) ===>   thisBanner = ' + thisBanner);
                // console.log('handleClick(thisWorkImage) ===>   thisBannerX = ' + thisBannerX);
                // console.log('handleClick(thisWorkImage) ===>   thisBannerY = ' + thisBannerY);
                // console.log('handleClick(thisWorkImage) ===>   thisBannerScale = ' + thisBannerScale);

                gsap.set([bannerContainer_Ref.current], { x: thisBannerX, y: thisBannerY, scale: thisBannerScale, transformOrigin: '0 0', immediateRender: true });
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

        // clean up function
        return () => {
            // // RELOCATE THE LOADED GSAP BANNER
            // moveBanner();

            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }

        //#endregion -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

    // }, []);
    }, [windowWidth]);

    //#endregion ==================== useEffect: moveBanner ====================


    return (
        // <div className='workList' id='workListID' ref={workListDiv_Ref}>
        <>
            {/* width = {width}; */}

            <div className='bannerContainer' id='bannerContainerID' ref={bannerContainer_Ref}>
            {/* <div className='bannerContainer' id='bannerContainerID' key={bannerShow} ref={bannerContainer_Ref}> */}
            {/* <div className='bannerContainer' id='bannerContainerID' key={bannerKey} ref={bannerContainer_Ref}> */}
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

        </>
        // </div>
    )
}

//#endregion ==================== workList() => <WorkList /> ====================



export const WorkEA = () => {

    return (
        <>
            <WorkList />
        </>
    )
}
