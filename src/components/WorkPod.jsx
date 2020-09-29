//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
// import { useEffect } from 'react';

// import { gsap } from 'gsap';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Moment from 'react-moment';

// import { BodyContainer } from '../components/BodyContainer';

import '../stylesheets/Work.scss';
// import scssVars from '../stylesheets/Global.scss';


//#region -------------------- IMPORTS: DATA --------------------

// import work from '../data/MyData';
// import myData from '../data/MyData';
// import workComplete from '../data/json/work.json';
// import work from '../data/json/work_json/work_ea.json';

//#endregion -------------------- IMPORTS: DATA --------------------

//#endregion ==================== IMPORTS ====================



//#region ==================== CONSTANTS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';

//#endregion ==================== CONSTANTS ====================



export const WorkPod = (props) => {

    // console.log('');
    // console.log('========================= WorkPod = (props) => <WorkPod /> =========================');

    // console.log('WorkPod = (props) => <WorkPod /> ===>   props.workFormat = ' + props.workFormat);

    // console.log('WorkPod = (props) => <WorkPod /> ===>   props.workArray = ');
    // console.log(props.workArray);

    // console.log('WorkPod = (props) => <WorkPod /> ===>   props.missingContentArray = ');
    // console.log(props.missingContentArray);

    // // console.log('WorkPod = (props) => <WorkPod /> ===>   props.handleClick = ' + props.handleClick);


    //#region ==================== podHed / masonryBreakpoints ====================

    let podHed = '';
    let masonryBreakpoints;
    // let masonryBreakpoints = { 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 };
    // let clickable;


    switch (props.workFormat) {
        case 'banner':

            podHed = 'Banners';
            masonryBreakpoints = { 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 };
            // clickable = true;

            // console.log('');
            // console.log('WorkPod = (props) => <WorkPod /> ===>   props.workFormat = ' + props.workFormat);
            // console.log('WorkPod = (props) => <WorkPod /> ===>   podHed = ' + podHed);
            // console.log('WorkPod = (props) => <WorkPod /> ===>   masonryBreakpoints = ' + masonryBreakpoints);
            // console.log(masonryBreakpoints);

            break;

        case 'html5':
        case 'video':
        case 'website':
        case 'mobile':

            podHed = 'Web/Video';
            masonryBreakpoints = { 768: 1, 960: 2, 1920: 3, 3840: 4 };
            // clickable = true;

            // console.log('');
            // console.log('WorkPod = (props) => <WorkPod /> ===>   props.workFormat = ' + props.workFormat);
            // console.log('WorkPod = (props) => <WorkPod /> ===>   podHed = ' + podHed);
            // console.log('WorkPod = (props) => <WorkPod /> ===>   masonryBreakpoints = ' + masonryBreakpoints);
            // console.log(masonryBreakpoints);

            break;

        case 'print':

            podHed = 'Print';
            masonryBreakpoints = { 768: 1, 960: 2, 1920: 3, 3840: 4 };
            // clickable = false;

            // console.log('');
            // console.log('WorkPod = (props) => <WorkPod /> ===>   props.workFormat = ' + props.workFormat);
            // console.log('WorkPod = (props) => <WorkPod /> ===>   podHed = ' + podHed);
            // console.log('WorkPod = (props) => <WorkPod /> ===>   masonryBreakpoints = ' + masonryBreakpoints);
            // console.log(masonryBreakpoints);

            break;

        default:

            podHed = 'General';
            masonryBreakpoints = { 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 };
            // clickable = false;

            // console.log('');
            // console.log('WorkPod = (props) => <WorkPod /> ===>   props.workFormat = ' + props.workFormat);
            // console.log('WorkPod = (props) => <WorkPod /> ===>   podHed = ' + podHed);
            // console.log('WorkPod = (props) => <WorkPod /> ===>   masonryBreakpoints = ' + masonryBreakpoints);
            // console.log(masonryBreakpoints);

            break;
    }

    //#endregion ==================== podHed / masonryBreakpoints ====================


    //#region ==================== ASSETS _Ref ====================

    // const workListDiv_Ref = useRef(null);

    const bannerMasonry_Ref = useRef(null);
    // const webMasonry_Ref = useRef(null);

    const workItem_Ref = useRef(null);
    const masonryImg_Ref = useRef(null);

    // const bannerContainer_Ref = useRef(null);

    // const workList_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================



    //#region ==================== WorkPod - useEffect ====================

    // useEffect(() => {

    //     console.log('');
    //     console.log('========================= WorkPod - useEffect =========================');

    //     if (props.workFormat === 'banner') {

    //         console.log('WorkPod - useEffect ===>   props.workFormat = ' + props.workFormat);

    //         console.log('');
    //         console.log('WorkPod - useEffect ===>   props.workArray = ');
    //         console.log(props.workArray);

    //         console.log('');
    //         console.log('WorkPod - useEffect ===>   props.missingContentArray = ');
    //         console.log(props.missingContentArray);

    //         console.log('');


    //         props.missingContentArray.forEach((missingBanner) => {

    //             // console.log('');
    //             // console.log('WorkPod - useEffect ===>   missingBanner = ' + missingBanner)
    //             // console.log('WorkPod - useEffect ===>   document.getElementById(missingBanner) = ' + document.getElementById(missingBanner))
    //             // console.log('WorkPod - useEffect ===>   document.getElementById(missingBanner).className = ' + document.getElementById(missingBanner).className)
    //             // console.log('WorkPod - useEffect ===>   document.getElementById(missingBanner).firstChild = ' + document.getElementById(missingBanner).firstChild)

    //             let targetBanner = document.getElementById(missingBanner);

    //             console.log('WorkPod - useEffect ===>   targetBanner = ' + targetBanner)

    //             // gsap.set([document.getElementById(missingBanner)], { autoAlpha: 0.5 })
    //             gsap.set([targetBanner], { scale: 0.5, autoAlpha: 0.5 })
    //         });

    //     }

    // }, [props.workFormat, props.workArray, props.missingContentArray]);

    //#endregion ==================== WorkPod - useEffect ====================


    return (

        <div>
            {/* <h2>WorkPod Component: {props.workFormat} </h2> */}
            {/* <p>workFormat: {props.workFormat}</p> */}


            <section className='masonrySection'>

                <hr />
                {/* <h2>Banners</h2> */}
                {/* <h2>{props.workFormat}</h2> */}
                {/* <h2>WorkPod Component: {props.workFormat}</h2> */}
                <h2>{podHed}</h2>
                <hr />

                {/* <ResponsiveMasonry columnsCountBreakPoints={{ 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 }}> */}
                <ResponsiveMasonry columnsCountBreakPoints={masonryBreakpoints}>
                    <Masonry className='masonry' id='bannerMasonryID' gutter='1.25vw' ref={bannerMasonry_Ref}>

                        {props.workArray.map((workImage) => (

                            <div className='workItem' id={workImage.link2} key={'banner' + workImage.album_id + workImage.image_index} ref={workItem_Ref}>

                                <img
                                    key={workImage.album_id + workImage.image_index}

                                    // className='masonryImg'
                                    // className={workImage.link2 === 'EAUT_04752' ? 'missingImg' : 'masonryImg'}
                                    // className={props.missingContentArray.includes(workImage.link2) ? 'missingImg' : 'masonryImg'}
                                    // className={props.missingContentArray.includes(workImage.link2) ? 'missingImg' : workImage.availability ? 'masonryImg' : 'printImg'}
                                    className={!workImage.availability ? 'missingImg' : workImage.format === 'print' ? 'printImg' : 'masonryImg'}
                                    id={workImage.album_id + workImage.image_index + '_imgID'}
                                    src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                    alt={'album_id: ' + workImage.album_id + workImage.image_index}
                                    format_src={workImage.format_src}
                                    mwidth={workImage.mwidth}
                                    mheight = {workImage.mheight}

                                    // onClick={() => props.handleClick(workImage)}
                                    // onClick={() => props.handleClick(props.workFormat, workImage)}
                                    // onClick={clickable ? props.handleClick(props.workFormat, workImage) : undefined}
                                    // onClick={() => clickable && props.handleClick(props.workFormat, workImage)}
                                    // onClick={() => workImage.availability && props.handleClick(props.workFormat, workImage)}
                                    // onClick={(e) => workImage.availability && props.handleClick(props.workFormat, workImage, e.target)}
                                    onClick={(e) => workImage.availability && props.handleClick(workImage, e.target)}

                                    ref={masonryImg_Ref}
                                />

                                <p className='masonryInfo' title='masonryInfoTitle'>
                                    {workImage.caption}<br />
                                    {/* <Moment format="MMM YYYY">{workImage.date}</Moment> */}
                                    {/* <Moment format="MMM YYYY">{workImage.date}</Moment>{props.missingContentArray.includes(workImage.link2) ? ' - COMING SOON' : ''} */}
                                    {/* <Moment format="MMM YYYY">{workImage.date}</Moment>{props.missingContentArray.includes(workImage.link2) ? ' - COMING SOON' : ''} */}
                                    <Moment format="MMM YYYY">{workImage.date}</Moment>{!workImage.availability ? ' - COMING SOON' : ''}
                                </p>


                            {/* #region ------------------------- Extra props ------------------------- */}
    {/* 
                                <p className='extraInfo'>
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
                                    mheight = {workImage.mheight}<br />
                                    availability.toString() = {workImage.availability.toString()}
                                </p>
    */}
                            {/* #endregion ------------------------- Extra props ------------------------- */}

                            </div>
                        ))}

                    </Masonry>
                </ResponsiveMasonry>

            </section>

        </div>
    )
}
