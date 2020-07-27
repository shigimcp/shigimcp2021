//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Moment from 'react-moment';

import { gsap } from 'gsap';

import '../stylesheets/Work.scss';


//#region -------------------- IMPORTS: GSAP BANNERS --------------------

import BSPS_26897 from '../images/ea/banners/assets/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
import NMTG_26903 from '../images/ea/banners/assets/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
import NMMN_11155 from '../images/ea/banners/assets/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155';

//#endregion -------------------- IMPORTS: GSAP BANNERS --------------------


//#region -------------------- IMPORTS: DATA --------------------

// import work from '../data/MyData';
import work from '../data/json/work_json/work_ea.json';

//#endregion -------------------- IMPORTS: DATA --------------------

//#endregion ==================== IMPORTS ====================



//#region ==================== CONSTANTS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

//#endregion ==================== CONSTANTS ====================



//#region ==================== FUNCTION: workList() ====================

function WorkList() {

    //#region -------------------- AVAILABLE GSAP BANNERS --------------------

    const banners = {
        BSPS_26897: BSPS_26897,
        NMMN_11155: NMMN_11155,
        NMTG_26903: NMTG_26903
    };

    //#endregion -------------------- AVAILABLE GSAP BANNERS --------------------



    //#region -------------------- ASSETS Ref --------------------

    const workItemRef = useRef(null);
    const masonryImgRef = useRef(null);

    const importContainerRef = useRef(null);
    const importedContentRef = useRef(null);

    //#endregion -------------------- ASSETS Ref --------------------



    //#region ==================== useState ====================

    const [bannerShow, setBannerShow] = useState();

    // const [bannerShow, setBannerShow] = useState(BSPS_26897);
    // const [bannerShow, setBannerShow] = useState(NMMN_11155);
    // const [bannerShow, setBannerShow] = useState(NMTG_26903);

    // const [bannerShow, setBannerShow] = useState(<BSPS_26897 />);
    // const [bannerShow, setBannerShow] = useState(<NMMN_11155 />);
    // const [bannerShow, setBannerShow] = useState(<NMTG_26903 />);
    
    // const [bannerKey, setBannerKey] = useState();


    let [windwoWidth, setWindwoWidth] = useState(getWidth());
    console.log('useState: windwoWidth = ' + windwoWidth);

    //#endregion ==================== useState ====================



    //#region ==================== useEffect ====================

    useEffect(() => {

        //#region -------------------- GSAP TIMELINE --------------------

        const tl = gsap.timeline({ delay: 0 });

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            // -------------------- SET TRANSFORM ORIGiNS --------------------

            // .set([bsps_26897Ref.current, nmtg_26903Ref.current, nmmn_11155Ref.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            // .set(['.masonryBanner'], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            .set(['.masonryImg'], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')

            // -------------------- FRAME01 --------------------

            // .set([bsps_26897Ref.current, nmtg_26903Ref.current], { autoAlpha: 0.5, scale: 1.25, rotation: 30 }, 'frame00')
            // .set([nmtg_26903Ref.current], { scale: 1.5 }, 'frame00')
            // .set([nmmn_11155Ref.current], { rotation: 30 }, 'frame00')

            // .set(['.masonryBanner'], { autoAlpha: 0.5, scale: 1.25, rotation: 30 }, 'frame00')

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

                console.log('OOPS! No banner has been clicked yet.');

            } else {

                // console.log('bannerKey = ' + bannerKey);
                // console.log('document.getElementById(bannerKey).className = ' + document.getElementById(bannerKey).className);
                // console.log('document.getElementById(bannerKey).id = ' + document.getElementById(bannerKey).id);


                let thisBannerX = document.getElementById(bannerKey).x;
                // let thisBannerY = document.getElementById(bannerKey).y;

                //#region ------------------------- position compensation for elements above importContainer -------------------------

                // let thisBannerX = document.getElementById(thisWorkImage.link2).x + 1;
                let thisBannerY = document.getElementById(bannerKey).y - 250;

                //#endregion ------------------------- position compensation for elements above importContainer  -------------------------

                let thisBannerW = document.getElementById(bannerKey).offsetWidth;
                let thisBannerH = document.getElementById(bannerKey).offsetHeight;

                let thisBannerScale = document.getElementById(bannerKey).offsetWidth / 300;

                // console.log('');
                // console.log('thisBannerX = ' + thisBannerX);
                // console.log('thisBannerY = ' + thisBannerY);
                // console.log('thisBannerW = ' + thisBannerW);
                // console.log('thisBannerH = ' + thisBannerH);
                // console.log('thisBannerScale = ' + thisBannerScale);

                gsap.set([importContainerRef.current, importedContentRef.current], { transformOrigin: '50% 0', immediateRender: true });
                // gsap.set([importContainerRef.current], { x: thisBannerX, y: thisBannerY, width: thisBannerW, height: thisBannerH, scale: thisBannerScale });
                gsap.set([importContainerRef.current], { x: thisBannerX, y: thisBannerY, width: thisBannerW, height: thisBannerH });

                gsap.set([importedContentRef.current], { scale: thisBannerScale, zIndex: -100 });
            }
        }

        //#endregion -------------------- moveBanner: RELOCATE THE LOADED GSAP BANNER --------------------


        //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

        let timeoutId = null;

        const resizeListener = () => {

            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);

            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() => setWindwoWidth(getWidth()), 150);

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

    }, []);
    // }, [animDuration02, animDuration04, animDuration05]);

    //#endregion ==================== useEffect ====================



    //#region ==================== FUNCTION: handleClick(thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks - switch/case ====================

    function handleClick(thisWorkImage) {

        // console.log('');
        // console.log('------------------------- handleClick(thisWorkImage) -------------------------');


        //#region ------------------------- Findin' out sh*t... (console.log messagaes) -------------------------

        // // console.log('handleClick: windwoWidth = ' + windwoWidth);

        // console.log('');
        // console.log('thisWorkImage.link = ' + thisWorkImage.link);
        // console.log('thisWorkImage.link2 = ' + thisWorkImage.link2);
        // console.log('thisWorkImage.link3 = ' + thisWorkImage.link3);
        // console.log('thisWorkImage.link4 = ' + thisWorkImage.link4);

        // // console.log('document.getElementById(thisWorkImage.link2).className = ' + document.getElementById(thisWorkImage.link2).className);

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

        if (banners[thisWorkImage.link2]) {

            const thisBanner = React.createElement(banners[thisWorkImage.link2]);

            setBannerShow(thisBanner);

            // setBannerKey(thisBanner);
            document.getElementById('importContainerID').key = thisWorkImage.link2;

            // console.log('');
            // console.log('document.getElementById(importContainerID).className = ' + document.getElementById('importContainerID').className);
            // console.log('document.getElementById(importContainerID).key = ' + document.getElementById('importContainerID').key);

        } else {
            setBannerShow(thisWorkImage.link2 + ' THIS BANNER COMING SOON!');
            // setBannerKey(thisWorkImage.link2);
        }


        let thisBannerX = document.getElementById(thisWorkImage.link2).x;
        // let thisBannerY = document.getElementById(thisWorkImage.link2).y;

        //#region ------------------------- position compensation for elements above importContainer -------------------------

        // let thisBannerX = document.getElementById(thisWorkImage.link2).x + 1;
        let thisBannerY = document.getElementById(thisWorkImage.link2).y - 250;

        //#endregion ------------------------- position compensation for elements above importContainer  -------------------------

        let thisBannerW = document.getElementById(thisWorkImage.link2).offsetWidth;
        let thisBannerH = document.getElementById(thisWorkImage.link2).offsetHeight;

        let thisBannerScale = document.getElementById(thisWorkImage.link2).offsetWidth / 300;


        gsap.set([importContainerRef.current, importedContentRef.current], { transformOrigin: '50% 0', immediateRender: true });
        // gsap.set([importContainerRef.current], { x: thisBannerX, y: thisBannerY, width: thisBannerW, height: thisBannerH, scale: thisBannerScale });
        gsap.set([importContainerRef.current], { x: thisBannerX, y: thisBannerY, width: thisBannerW, height: thisBannerH });

        gsap.set([importedContentRef.current], { scale: thisBannerScale, zIndex: -100 });

        //#endregion ------------------------- Tryin' out sh*t... -------------------------

    }

    //#endregion ==================== FUNCTION: handleClick(thisWorkImage) REF: https://www.digitalocean.com/community/tutorials/react-loading-components-dynamically-hooks - switch/case ====================



    //#region ==================== RETURN (className='workList') ====================

    return (
        <div className='workList'>

            {/* width = {width}; */}

            <div className='importContainer' id='importContainerID' ref={importContainerRef}>
            {/* <div className='importContainer' id='importContainerID' key={bannerShow} ref={importContainerRef}> */}
            {/* <div className='importContainer' id='importContainerID' key={bannerKey} ref={importContainerRef}> */}
                <div className='importedContent' ref={importedContentRef}>
                    {bannerShow}
                </div>
            </div>


        {/* #region ------------------------- Banners ------------------------- */}

            <section>
                <hr />
                <h2>Banners 000</h2>
                {/* 
                <p className='note'>
                    I want to eventually make these images clickable to trigger GSAP banners like the ones above that were [re]built in React (because I couldn't get react-adobe-animate or html-loader to work).<br />
                    Ideally, the GSAP banners will play in place like they do on this page: <a href='https://www.shigimcp.com/hilites.html' target='_new'>https://www.shigimcp.com/hilites.html</a>.
                </p>
                */}
                <hr />
            </section>

            <ResponsiveMasonry columnsCountBreakPoints={{ 360: 1, 640: 2, 768: 2, 940: 3, 1640: 4, 1920: 5, 3000: 6 }}>
                <Masonry gutter='50px'>

                    {work.filter(isBanner => isBanner.format === 'banner').map((workImage) => (

                        <div className='workItem' key={workImage.album_id + workImage.image_index} ref={workItemRef}>

                            <img
                                // key={workImage.album_id + workImage.image_index}
                                className='masonryImg'
                                // id={workImage.album_id + workImage.image_index + '_imgID'}
                                id={workImage.link2}
                                src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                alt={'album_id: ' + workImage.album_id + workImage.image_index}

                                onClick={() => handleClick(workImage)}
                                // onClick={() => setBannerShow(workImage.link2)}
                                // onClick={() => {
                                //     handleClick(workImage);
                                //     setBannerShow(workImage.link2);
                                // }}

                                ref={masonryImgRef}
                            />

                            <p title='masonryInfo'>
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


            <br /><br /><br /><br /><br />

        {/* #endregion ------------------------- Banners ------------------------- */}


        {/* #region ------------------------- Web / Video ------------------------- */}

            <section>
                <hr />
                <h2>Web / Video</h2>
                <hr />
            </section>

            {/* <ResponsiveMasonry columnsCountBreakPoints={{ 960: 1, 1366: 2, 2040: 3 }}> */}
            <ResponsiveMasonry columnsCountBreakPoints={{ 1024: 1, 1366: 2, 1920: 3, 3840: 4 }}>
                <Masonry gutter='50px'>

                    {work.filter(isBanner => isBanner.format !== 'banner').map((workImage) => (

                        <div className='workItem' key={'web' + workImage.album_id + workImage.image_index} ref={workItemRef}>

                            <img
                                // key={'WV' + workImage.album_id + workImage.image_index}
                                className='masonryImg'
                                // id={workImage.album_id + workImage.image_index + '_imgID'}
                                id={workImage.link2}
                                src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                alt={'album_id: ' + workImage.album_id + workImage.image_index}

                                onClick={() => handleClick(workImage)}

                                ref={masonryImgRef}
                            />

                            <p title='masonryInfo'>
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

        {/* #endregion ------------------------- Web / Video ------------------------- */}

        </div>
    )

    //#endregion ==================== RETURN (className='workList') ====================

}

//#endregion ==================== FUNCTION: workList() ====================




export const Work000 = () => {

    return (
        <>
            <WorkList />
        </>
    )
}
