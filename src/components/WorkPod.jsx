//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
// import Moment from 'react-moment';

import '../stylesheets/Work.scss';

//#endregion ==================== IMPORTS ====================



//#region ==================== CONSTANTS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';

//#endregion ==================== CONSTANTS ====================



export const WorkPod = (props) => {

    //#region ==================== podHed / masonryBreakpoints ====================

    let podHed = '';
    let masonryBreakpoints;


    switch (props.workFormat) {
        case 'banner':

            podHed = 'Banner Animations';
            masonryBreakpoints = { 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 };

            break;

        case 'html5':
        case 'video':
        case 'website':
        case 'mobile':

            podHed = 'Web/Video';
            masonryBreakpoints = { 768: 1, 960: 2, 1920: 3, 3840: 4 };

            break;

        case 'print':

            podHed = 'Print';
            masonryBreakpoints = { 768: 1, 960: 2, 1920: 3, 3840: 4 };

            break;

        default:

            podHed = 'General';
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

        <div>

            <section className='masonrySection'>

                <hr />
                <h2>{podHed}</h2>
                <hr />

                <ResponsiveMasonry columnsCountBreakPoints={masonryBreakpoints}>
                    <Masonry className='masonry' id='bannerMasonryID' gutter='1.25vw' ref={bannerMasonry_Ref}>

                        {props.workArray.map((workImage) => (

                            <div className='workItem' id={workImage.link2} key={'banner' + workImage.album_id + workImage.image_index} ref={workItem_Ref}>

                                <img
                                    key={workImage.album_id + workImage.image_index}

                                    className={!workImage.availability ? 'missingImg' : workImage.format === 'print' ? 'printImg' : 'masonryImg'}
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

                            </div>
                        ))}

                    </Masonry>
                </ResponsiveMasonry>

            </section>

        </div>
    )
}
