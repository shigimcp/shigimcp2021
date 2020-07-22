//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Moment from 'react-moment';

import { gsap } from 'gsap';

import '../stylesheets/Work.scss';


//#region -------------------- IMPORTS: GSAP BANNERS --------------------

import BSPS_26897 from '../images/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
import NMTG_26903 from '../images/ea/banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
import NMMN_11155 from '../images/ea/banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155';

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

    const bsps_26897Ref = useRef(null);
    const nmtg_26903Ref = useRef(null);
    const nmmn_11155Ref = useRef(null);

    //#endregion ==================== ASSETS Ref ====================


    useEffect(() => {

        // const tl = gsap.timeline({ delay: 0, paused: 'true' });
        const tl = gsap.timeline({ delay: 0 });

        tl

            //#region ==================== INITIALIZE OBJECTS ====================

            // -------------------- SET TRANSFORM ORIGiNS --------------------

            // .set([bsps_26897Ref.current, nmtg_26903Ref.current, nmmn_11155Ref.current], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')
            .set(['.masonryBanner'], { transformOrigin: '50% 0', immediateRender: true }, 'frame00')

            // -------------------- FRAME01 --------------------

            // .set([bsps_26897Ref.current, nmtg_26903Ref.current], { autoAlpha: 0.5, scale: 1.25, rotation: 30 }, 'frame00')
            // .set([nmtg_26903Ref.current], { scale: 1.5 }, 'frame00')
            // .set([nmmn_11155Ref.current], { rotation: 30 }, 'frame00')

            .set(['.masonryBanner'], { autoAlpha: 0.5, scale: 1.25, rotation: 30 }, 'frame00')

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
    // }, [animDuration02, animDuration04, animDuration05]);




    return (
        <div className='workList'>

            <hr />
            <h2>testing 1, 2, 3...</h2>
            <hr />
            {/* <ResponsiveMasonry className='testing123' columnsCountBreakPoints={{ 360: 1, 640: 2, 768: 2, 940: 3, 1640: 4, 1920: 5, 3000: 6 }}> */}
            <ResponsiveMasonry className='testing123' columnsCountBreakPoints={{ 300: 1, 600: 2, 900: 2, 1200: 3, 1500: 4, 1800: 5, 2100: 6 }}>
                <Masonry gutter='50px'>
                {/* <Masonry gutter='120px'> */}

                    <div className='workItem'>
                        <div className='masonryBanner' ref={bsps_26897Ref}><BSPS_26897 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmtg_26903Ref}><NMTG_26903 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmmn_11155Ref}><NMMN_11155 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={bsps_26897Ref}><BSPS_26897 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmtg_26903Ref}><NMTG_26903 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmmn_11155Ref}><NMMN_11155 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={bsps_26897Ref}><BSPS_26897 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmtg_26903Ref}><NMTG_26903 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmmn_11155Ref}><NMMN_11155 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={bsps_26897Ref}><BSPS_26897 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmtg_26903Ref}><NMTG_26903 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmmn_11155Ref}><NMMN_11155 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={bsps_26897Ref}><BSPS_26897 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmtg_26903Ref}><NMTG_26903 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmmn_11155Ref}><NMMN_11155 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={bsps_26897Ref}><BSPS_26897 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmtg_26903Ref}><NMTG_26903 /></div>
                    </div>

                    <div className='workItem'>
                        <div className='masonryBanner' ref={nmmn_11155Ref}><NMMN_11155 /></div>
                    </div>

                </Masonry>
            </ResponsiveMasonry>

            <br /><br /><br /><br /><br />

            <hr />
            <h2>Banners</h2>
            <p className='note'>
                I want to eventually make these images clickable to trigger GSAP banners like the ones above that were [re]built in React (because I couldn't get react-adobe-animate to work).<br />
                Ideally, the GSAP banners will play in place like they do on this page: <a href='https://www.shigimcp.com/hilites.html' target='_new'>https://www.shigimcp.com/hilites.html</a>.
            </p>
            <hr />
            <ResponsiveMasonry columnsCountBreakPoints={{ 360: 1, 640: 2, 768: 2, 940: 3, 1640: 4, 1920: 5, 3000: 6 }}>
                <Masonry gutter='50px'>
                    {work.filter(isBanner => isBanner.format === 'banner').map((workImage) => (
                        <div className='workItem' key={workImage.album_id + workImage.image_index}>

                            <img
                                // key={workImage.album_id + workImage.image_index}
                                className='masonryImg'
                                src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                alt={'album_id: ' + workImage.album_id + workImage.image_index}
                                // onClick={() => navShow.reverse()}
                            />

                            {/* <BSPS_26897 /> */}

                            <p>
                            {/* <p key={'descr' + workImage.album_id + workImage.image_index}> */}
                                {workImage.caption}<br />
                                <Moment format="MMM YYYY">{workImage.date}</Moment><br />
                                {/* {workImage.link} */}
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
            <hr />
            {/* <ResponsiveMasonry columnsCountBreakPoints={{ 960: 1, 1366: 2, 2040: 3 }}> */}
            <ResponsiveMasonry columnsCountBreakPoints={{ 1024: 1, 1366: 2, 1920: 3, 3840: 4 }}>
                <Masonry gutter='50px'>
                    {work.filter(isBanner => isBanner.format !== 'banner').map((workImage) => (
                        <div className='workItem' key={'web' + workImage.album_id + workImage.image_index}>

                            <img
                                // key={'WV' + workImage.album_id + workImage.image_index}
                                className='masonryImg'
                                src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                alt={'album_id: ' + workImage.album_id + workImage.image_index}
                            />

                            <p>
                            {/* <p key={'descrWV' + workImage.album_id + workImage.image_index}> */}
                                {workImage.caption}<br />
                                <Moment format="MMM YYYY">{workImage.date}</Moment><br />
                                {/* {workImage.link} */}
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
