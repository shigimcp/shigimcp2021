//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// import Moment from 'react-moment';
// import 'moment-timezone';

import '../stylesheets/Work.scss';

//#endregion ==================== IMPORTS ====================



//#region ==================== CONSTANTS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';

//#endregion ==================== CONSTANTS ====================



export const WorkPod = (props) => {

    //#region ==================== podHed / masonryBreakpoints ====================

    let podID = '';
    // let podHed = '';
    let masonryBreakpoints;


    switch (props.workFormat) {
        case 'banner':

            podID = 'bannerPodID';
            // podHed = 'Banner Animations';
            masonryBreakpoints = { 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 };

            break;

        case 'html5':
        case 'video':
        case 'website':
        case 'mobile':

            podID = 'webPodID';
            // podHed = 'Web/Video';
            masonryBreakpoints = { 768: 1, 960: 2, 1920: 3, 3840: 4 };

            break;

        case 'print':

            podID = 'printPodID';
            // podHed = 'Print';
            // masonryBreakpoints = { 768: 1, 960: 2, 1920: 3, 3840: 4 };
            masonryBreakpoints = { 768: 1, 960: 3, 1920: 3, 3840: 4 };

            break;

        default:

            podID = 'genPodID';
            // podHed = 'General';
            masonryBreakpoints = { 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 };

            break;
    }

    //#endregion ==================== podHed / masonryBreakpoints ====================


    //#region ==================== ASSETS _Ref ====================

    const bannerMasonry_Ref = useRef(null);

    const workItem_Ref = useRef(null);
    const masonryImg_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================


    return (

        <>

            <section className='masonrySection' id={podID} sectionid={podID}>
{/* 
                <hr />
                <h2>{podHed}</h2>
                <hr />
 */}
                <ResponsiveMasonry columnsCountBreakPoints={masonryBreakpoints}>
                    <Masonry className='masonry' id='bannerMasonryID' gutter='1.25vw' ref={bannerMasonry_Ref}>

                        {props.workArray.map((workImage) => (
//                        {props.workArray.filter(workImage => workImage.availability).map((workImage) => (

                            <div className='workItem' id={workImage.link2} key={'banner' + workImage.album_id + workImage.image_index} ref={workItem_Ref}>

                                <img
                                    key={workImage.album_id + workImage.image_index}

                                    // className='printImg'
                                    // className='masonryImg'
                                    className={workImage.format === 'print' ? 'printImg' : 'masonryImg'}
                                    // className={!workImage.availability ? 'missingImg' : workImage.format === 'print' ? 'printImg' : 'masonryImg'}
                                    id={workImage.album_id + workImage.image_index + '_imgID'}
                                    // src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                    // src={remoteLoc + workImage.album_id + '/sl02/' + workImage.src2}
                                    src={workImage.src === workImage.src2 ? remoteLoc + workImage.album_id + '/sl/' + workImage.src : remoteLoc + workImage.album_id + '/sl02/' + workImage.src2}
                                    alt={'album_id: ' + workImage.album_id + workImage.image_index}
                                    format_src={workImage.format_src}
                                    mwidth={workImage.mwidth}
                                    mheight = {workImage.mheight}
                                    onClick={(e) => workImage.availability && props.handleClick(workImage, e.target)}

                                    ref={masonryImg_Ref}
                                />

                                <p className='masonryInfo' title='masonryInfoTitle'>
                                    {workImage.caption}
                                    <br />
                                    {!workImage.availability ? ' - COMING SOON' : ''}
                                    {/* <br />
                                    <Moment format="MMM YYYY">{workImage.date}</Moment>{!workImage.availability ? ' - COMING SOON' : ''}
                                    <br />
                                    {workImage.src2}<br /> */}
                                </p>


                            {/* #region ------------------------- Extra props ------------------------- */}

                                {/* <p className='extraInfo'>
                                    album_index = {workImage.album_index}<br />
                                    album_id = {workImage.album_id}<br />
                                    image_index = {workImage.image_index}<br />
                                    src = {workImage.src}<br />
                                    src2 = {workImage.src2}<br />
                                    caption = {workImage.caption}<br />
                                    date = {workImage.date}<br />
                                    <Moment format="MMM YYYY">{workImage.date}</Moment><br />
                                    format = {workImage.format}<br />
                                    format_src = {workImage.format_src}<br />
                                    link = {workImage.link}<br />
                                    link2 = {workImage.link2}<br />
                                    link3 = {workImage.link3}<br />
                                    link4 = {workImage.link4}<br />
                                    cta = {workImage.cta}<br />
                                    alert = {workImage.alert}<br />
                                    mwidth = {workImage.mwidth}<br />
                                    mheight = {workImage.mheight}<br />
                                    mwidthORIG = {workImage.mwidthORIG}<br />
                                    mheightORIG = {workImage.mheightORIG}<br />
                                    availability.toString() = {workImage.availability.toString()}
                                </p> */}

                            {/* #endregion ------------------------- Extra props ------------------------- */}

                            </div>
                        ))}

                    </Masonry>
                </ResponsiveMasonry>

            </section>

        </>
    )
}
