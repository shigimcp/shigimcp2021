//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
// import { useLayoutEffect } from 'react';
// import { useState } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Moment from 'react-moment';

import { gsap } from 'gsap';

import '../stylesheets/Work.scss';


//#region -------------------- IMPORTS: GSAP BANNERS --------------------

// import BSPS_26897 from '../images/ea/banners/assets/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
// import NMTG_26903 from '../images/ea/banners/assets/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
// import NMMN_11155 from '../images/ea/banners/assets/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155';

//#endregion -------------------- IMPORTS: GSAP BANNERS --------------------


//#region -------------------- IMPORTS: DATA --------------------

// import work from '../data/MyData';
import work from '../data/json/work_json/work_ea.json';

//#endregion -------------------- IMPORTS: DATA --------------------

//#endregion ==================== IMPORTS ====================


const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';



//#region ==================== FUNCTION: workList() ====================

function WorkList() {


    //#region ==================== ASSETS Ref ====================

    // const respMasonryRef = useRef(null);
    // const masonryRef = useRef(null);

    // const bsps_26897_workItemRef = useRef(null);
    // const nmtg_26903_workItemRef = useRef(null);
    // const nmmn_11155_workItemRef = useRef(null);

    // const bsps_26897Ref = useRef(null);
    // const nmtg_26903Ref = useRef(null);
    // const nmmn_11155Ref = useRef(null);

    const workItemRef = useRef(null);
    const masonryImgRef = useRef(null);

    //#endregion ==================== ASSETS Ref ====================



    //#region ==================== FUNCTION: handleClick(whatIsThis ====================

    // function handleClick(e) {
    //     e.preventDefault();
    //     console.log('The link was clicked. e.type = ' + e.type);
    // }


    function handleClick(thisWorkImage) {
    // function handleClick(whatIsThis, thisWorkImage) {

        console.log('');
        console.log('------------------------- handleClick(thisWorkImage) -------------------------');

        // console.log('whatIsThis = ' + whatIsThis);
        // console.log('thisWorkImage.id = ' + thisWorkImage.id);
        // console.log('thisWorkImage.id = thisWorkImage.album_id + thisWorkImage.image_index = ' + thisWorkImage.album_id + thisWorkImage.image_index);

        let thisWorkImageID = thisWorkImage.album_id + thisWorkImage.image_index + '_imgID';
        console.log('thisWorkImageID = thisWorkImage.album_id + thisWorkImage.image_index = ' + thisWorkImageID);

        console.log('');
        console.log('document.getElementById(thisWorkImage.id).className = ' + document.getElementById(thisWorkImageID).className);
        console.log('document.getElementById(thisWorkImage.id).className = ' + document.getElementById(thisWorkImageID).className);

        console.log('document.getElementById(thisWorkImage.id).offsetWidth = ' + document.getElementById(thisWorkImageID).offsetWidth);
        console.log('document.getElementById(thisWorkImage.id).offsetHeight = ' + document.getElementById(thisWorkImageID).offsetHeight);


        console.log('');
        console.log('document.getElementById(thisWorkImage.id).parentElement.className = ' + document.getElementById(thisWorkImageID).parentElement.className);
        console.log('document.getElementById(thisWorkImage.id).parentElement.className = ' + document.getElementById(thisWorkImageID).parentElement.className);

        console.log('document.getElementById(thisWorkImage.id).parentElement.offsetWidth = ' + document.getElementById(thisWorkImageID).parentElement.offsetWidth);
        console.log('document.getElementById(thisWorkImage.id).parentElement.offsetHeight = ' + document.getElementById(thisWorkImageID).parentElement.offsetHeight);

        console.log('');
        console.log('thisWorkImage.link2 = ' + thisWorkImage.link2);
        console.log('thisWorkImage.link2 = ' + thisWorkImage.link3);
        console.log('thisWorkImage.link2 = ' + thisWorkImage.link4);



        // console.log('');
        // console.log('thisWorkImage.offsetWidth = ' + thisWorkImage.offsetWidth);
        // console.log('thisWorkImage.offsetHeight = ' + thisWorkImage.offsetHeight);



        // if (workItemRef.current) {
        //     console.log('');
        //     console.log('workItemRef.current.offsetWidth = ' + workItemRef.current.offsetWidth);
        //     console.log('workItemRef.current.offsetHeight = ' + workItemRef.current.offsetHeight);
        //     console.log('workItemRef.current.getBoundingClientRect().width = ' + workItemRef.current.getBoundingClientRect().width);
        //     console.log('workItemRef.current.getBoundingClientRect().height = ' + workItemRef.current.getBoundingClientRect().height);
        // }


        // if (masonryImgRef.current) {
        //     console.log('');
        //     console.log('masonryImgRef.current.offsetWidth = ' + masonryImgRef.current.offsetWidth);
        //     console.log('masonryImgRef.current.offsetHeight = ' + masonryImgRef.current.offsetHeight);
        //     console.log('masonryImgRef.current.getBoundingClientRect().width = ' + masonryImgRef.current.getBoundingClientRect().width);
        //     console.log('masonryImgRef.current.getBoundingClientRect().height = ' + masonryImgRef.current.getBoundingClientRect().height);
        // }
    }

    //#endregion ==================== FUNCTION: handleClick(whatIsThis ====================




    //#region ==================== useState ====================

    // const [bannerShow, setBannerShow] = useState();

    //#endregion ==================== useState ====================



    //#region ==================== useLayoutEffect... NOPE! ====================

    // useLayoutEffect(() => {

    //     console.log('');
    //     console.log('------------------------- useLayoutEffect: workItem -------------------------');

    //     if (workItemRef.current) {
    //         // console.log('');
    //         console.log('workItemRef.current.offsetWidth = ' + workItemRef.current.offsetWidth);
    //         console.log('workItemRef.current.offsetHeight = ' + workItemRef.current.offsetHeight);
    //     }

    // }, []);

    //#endregion ==================== useLayoutEffect... NOPE! ====================



    //#region ==================== useEffect ====================

    useEffect(() => {

        // setBannerShow(
        //     console.log('click! bannerShow = ' + {bannerShow}),
        //     handleClick({bannerShow})
        // );


        //#region ------------------------- useEffect: Masonry => undefined -------------------------
        // console.log('------------------------- useEffect: Masonry => undefined -------------------------');

        // if (respMasonryRef.current) {
        //     console.log('');
        //     console.log('respMasonryRef.current.offsetWidth = ' + respMasonryRef.current.offsetWidth);
        //     console.log('respMasonryRef.current.offsetHeight = ' + respMasonryRef.current.offsetHeight);
        // }

        // if (masonryRef.current) {
        //     console.log('');
        //     console.log('masonryRef.current.offsetWidth = ' + masonryRef.current.offsetWidth);
        //     console.log('masonryRef.current.offsetHeight = ' + masonryRef.current.offsetHeight);
        // }

        //#endregion ------------------------- useEffect: Masonry -------------------------


        //#region ------------------------- useEffect: workItem -------------------------
        // console.log('');
        // console.log('------------------------- useEffect: workItem -------------------------');

        // // gsap.set(['.workItem'], { scale: 1.5 });

        // if (workItemRef.current) {

        //     // gsap.set([workItemRef.current], { scale: 1.5 });
        //     // gsap.set([workItemRef.current], { scale: 1.5, immediateRender: true });

        //     // console.log('');
        //     console.log('workItemRef.current.offsetWidth = ' + workItemRef.current.offsetWidth);
        //     console.log('workItemRef.current.offsetHeight = ' + workItemRef.current.offsetHeight);
        // }

        // if (bsps_26897_workItemRef.current) {

        //     // let bsps_26897Width = bsps_26897_workItemRef.current.offsetWidth;
        //     // let bsps_26897Height = bsps_26897_workItemRef.current.offsetHeight;

        //     // gsap.set([bsps_26897_workItemRef.current], { scale: 1.5 });

        //     console.log('');
        //     console.log('bsps_26897_workItemRef.current.offsetWidth = ' + bsps_26897_workItemRef.current.offsetWidth);
        //     console.log('bsps_26897_workItemRef.current.offsetHeight = ' + bsps_26897_workItemRef.current.offsetHeight);
        // }

        // if (nmtg_26903_workItemRef.current) {

        //     // let nmtg_26903Width = nmtg_26903_workItemRef.current.offsetWidth;
        //     // let nmtg_26903Height = nmtg_26903_workItemRef.current.offsetHeight;

        //     // gsap.set([nmtg_26903_workItemRef.current], { scale: 1.5 });

        //     console.log('');
        //     console.log('nmtg_26903_workItemRef.current.offsetWidth = ' + nmtg_26903_workItemRef.current.offsetWidth);
        //     console.log('nmtg_26903_workItemRef.current.offsetHeight = ' + nmtg_26903_workItemRef.current.offsetHeight);
        // }

        // if (nmmn_11155_workItemRef.current) {

        //     // let nmmn_11155Width = nmmn_11155_workItemRef.current.offsetWidth;
        //     // let nmmn_11155Height = nmtg_26903_workItemRef.current.offsetHeight;

        //     // gsap.set([nmmn_11155_workItemRef.current], { scale: 1.5 });

        //     console.log('');
        //     console.log('nmmn_11155_workItemRef.current.offsetWidth = ' + nmmn_11155_workItemRef.current.offsetWidth);
        //     console.log('nmmn_11155_workItemRef.current.offsetHeight = ' + nmmn_11155_workItemRef.current.offsetHeight);
        // }

        //#endregion ------------------------- useEffect: workItem -------------------------


        //#region ------------------------- useEffect: masonryBanner -------------------------
        // console.log('');
        // console.log('------------------------- useEffect: masonryBanner -------------------------');

        // if (bsps_26897Ref.current) {

        //     let bsps_26897Width = bsps_26897Ref.current.offsetWidth;
        //     let bsps_26897Height = bsps_26897Ref.current.offsetHeight;

        //     // gsap.set([bsps_26897Ref.current], { scale: 1.5 });

        //     // console.log('');
        //     console.log('bsps_26897Width = ' + bsps_26897Width);
        //     console.log('bsps_26897Height = ' + bsps_26897Height);
        // }

        // if (nmtg_26903Ref.current) {

        //     let nmtg_26903Width = nmtg_26903Ref.current.offsetWidth;
        //     let nmtg_26903Height = nmtg_26903Ref.current.offsetHeight;

        //     // gsap.set([nmtg_26903Ref.current], { scale: 1.5 });

        //     console.log('');
        //     console.log('nmtg_26903Width = ' + nmtg_26903Width);
        //     console.log('nmtg_26903Height = ' + nmtg_26903Height);
        // }

        // if (nmmn_11155Ref.current) {

        //     let nmmn_11155Width = nmmn_11155Ref.current.offsetWidth;
        //     let nmmn_11155Height = nmmn_11155Ref.current.offsetHeight;

        //     // gsap.set([nmmn_11155Ref.current], { scale: 1.5 });

        //     console.log('');
        //     console.log('nmmn_11155Width = ' + nmmn_11155Width);
        //     console.log('nmmn_11155Height = ' + nmmn_11155Height);
        // }

        //#endregion ------------------------- masonryBanner -------------------------


        //#region ------------------------- useEffect: masonryImg -------------------------
        // console.log('');
        // console.log('------------------------- useEffect: masonryImg -------------------------');

        // if (masonryImgRef.current) {

        //     let masonryImgWidth = masonryImgRef.current.offsetWidth;
        //     let masonryImgHeight = masonryImgRef.current.offsetHeight;

        //     // console.log('');
        //     console.log('masonryImgWidth = ' + masonryImgWidth);
        //     console.log('masonryImgHeight = ' + masonryImgHeight);
        // }

        //#endregion ------------------------- masonryImg -------------------------



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

    }, []);
    // }, [bannerShow]);
    // }, [animDuration02, animDuration04, animDuration05]);

    //#endregion ==================== useEffect ====================



    return (
        <div className='workList'>

        {/*
            <hr />
            <h2>testing 1, 2, 3... GSAP animations</h2>
            <hr />
            <ResponsiveMasonry className='testing123' columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 2, 1200: 3, 1500: 4, 1800: 5, 2100: 6 }} ref={respMasonryRef}>
                <Masonry gutter='50px' ref={masonryRef}>

                    <BSPS_26897 />
                    <NMTG_26903 />
                    <NMMN_11155 />


                    <div className='workItem' ref={bsps_26897_workItemRef}>
                        <div className='masonryBanner' ref={bsps_26897Ref}><BSPS_26897 /></div>
                    </div>

                    <div className='workItem' ref={nmtg_26903_workItemRef}>
                        <div className='masonryBanner' ref={nmtg_26903Ref}><NMTG_26903 /></div>
                    </div>

                    <div className='workItem' ref={nmmn_11155_workItemRef}>
                        <div className='masonryBanner' ref={nmmn_11155Ref}><NMMN_11155 /></div>
                    </div>

                </Masonry>
            </ResponsiveMasonry>

            <br /><br /><br /><br /><br />
        */}

            <hr />
            <h2>Banners</h2>
            <p className='note'>
                I want to eventually make these images clickable to trigger GSAP banners like the ones above that were [re]built in React (because I couldn't get react-adobe-animate or html-loader to work).<br />
                Ideally, the GSAP banners will play in place like they do on this page: <a href='https://www.shigimcp.com/hilites.html' target='_new'>https://www.shigimcp.com/hilites.html</a>.<br />
                SO FAR: <a href='./000'> See "000" above</a>
            </p>
            <hr />

            <ResponsiveMasonry columnsCountBreakPoints={{ 360: 1, 640: 2, 768: 2, 940: 3, 1640: 4, 1920: 5, 3000: 6 }}>
                <Masonry gutter='50px'>

                    {work.filter(isBanner => isBanner.format === 'banner').map((workImage) => (

                        <div className='workItem' key={workImage.album_id + workImage.image_index} ref={workItemRef}>
                        {/* 
                            <img
                                // key={workImage.album_id + workImage.image_index}
                                className='masonryImg'
                                id={workImage.album_id + workImage.image_index}
                                src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                alt={'album_id: ' + workImage.album_id + workImage.image_index}
                                // onClick={() => navShow.reverse()}
                                // onClick={handleClick}
                                onClick={() => handleClick(workImage)}
                                // onClick={() => handleClick(this, workImage)}
                                // onClick={() => setBannerShow(workImage.link2)}
                                // onClick={() => setBannerShow(workImage.link3)}
                                // onClick={() => setBannerShow(workImage.link4)}
                                ref={masonryImgRef}
                            />
                        */}
                            <div className='masonryDiv'>

                                <img
                                    // key={workImage.album_id + workImage.image_index}
                                    className='masonryImg'
                                    id={workImage.album_id + workImage.image_index + '_imgID'}
                                    src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                    alt={'album_id: ' + workImage.album_id + workImage.image_index}
                                    // onClick={() => navShow.reverse()}
                                    // onClick={handleClick}
                                    // onClick={() => handleClick(workImage)}
                                    // onClick={() => handleClick(this, workImage)}
                                    // onClick={() => setBannerShow(workImage.link2)}
                                    // onClick={() => setBannerShow(workImage.link3)}
                                    // onClick={() => setBannerShow(workImage.link4)}
                                    ref={masonryImgRef}
                                />

                                <div 
                                    className='bannerContainer' 
                                    id={workImage.album_id + workImage.image_index + '_bannerID'}
                                    onClick={() => handleClick(workImage)}
                                >
                                    {/* <BSPS_26897 /> */}
                                </div>

                            </div>

                            <p>
                                {workImage.caption}<br />
                                <Moment format="MMM YYYY">{workImage.date}</Moment><br />
                                {/* {workImage.link}<br /> */}
                                {/* {workImage.link2} */}
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

            <hr />
            <h2>Web / Video</h2>
            <p className='note'>
                TO COME: These will open in modals on click...
            </p>
            <hr />

            {/* <ResponsiveMasonry columnsCountBreakPoints={{ 960: 1, 1366: 2, 2040: 3 }}> */}
            <ResponsiveMasonry columnsCountBreakPoints={{ 1024: 1, 1366: 2, 1920: 3, 3840: 4 }}>
                <Masonry gutter='50px'>

                    {work.filter(isBanner => isBanner.format !== 'banner').map((workImage) => (

                        <div className='workItem' key={'web' + workImage.album_id + workImage.image_index} ref={workItemRef}>

                            <img
                                // key={'WV' + workImage.album_id + workImage.image_index}
                                className='masonryImg'
                                id={workImage.album_id + workImage.image_index}
                                src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                alt={'album_id: ' + workImage.album_id + workImage.image_index}
                                // onClick={() => handleClick(workImage)}
                            />

                            <p>
                                {workImage.caption}<br />
                                <Moment format="MMM YYYY">{workImage.date}</Moment><br />
                                {/* {workImage.link}<br /> */}
                                {/* {workImage.link2} */}
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

        </div>
    )
}

//#endregion ==================== FUNCTION: workList() ====================







export const WorkEA = () => {

    return (
        <>
            <WorkList />
        </>
    )
}
