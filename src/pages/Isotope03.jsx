//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Isotope from 'isotope-layout';
import Packery from 'isotope-packery';

import '../stylesheets/Global.scss';
import '../stylesheets/Isotope.scss';

import myData from '../data/MyData';

import { gsap } from 'gsap';
// import { Flip } from 'gsap/Flip';

// gsap.registerPlugin(Flip);

//#endregion ==================== IMPORTS ====================


//#region ==================== DATA ====================

// console.log('');
// // console.log('myData = ' + myData);
// console.log('myData = ');
// console.log(myData);

let employerData = myData[0];
let workData = myData[1];

// console.log('');
// // console.log('employerData = ' + employerData);
// console.log('employerData = ');
// console.log(employerData);
// // console.log(employerData[0].employer);

// console.log('');
// // console.log('workData = ' + workData);
// console.log('workData = ');
// console.log(workData);

//#endregion ==================== DATA ====================


//#region ==================== FILTER ARRAYS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';


//#region -------------------- CONSTANT: filterEmployer --------------------

const filterEmployer = employerData.filter(isInGallery => isInGallery.isInGallery);

// console.log('');
// // console.log('filterEmployer = ' + filterEmployer);
// console.log('filterEmployer = ');
// console.log(filterEmployer);

filterEmployer.unshift(
{
   "album_index": '00',
   "album_id": "*",
   "employer": "All",
   "title": "Digital Designer / Front-End Developer",
   "date_start": "present",
   "date_end": "present",
   "info": "View ALL work",
   "info_other": "",
   "other_html": "",
   "other_type": "",
   "other": "",
   "software": "",
   "languages": "",
//    "logopath": "0elements/shigeru_logo.svg",
//    "logo": "shigeru_logo_transparent.svg",
   "logopath": "#",
   "logo": "#",
   "slpath": "other/sl",
   "thpath": "other/th",
   "flpath": "https://www.shigimcp.com/img/other/",
   "flpath_stage": "https://www.shigimcp.com/Xstage/shigimcp_2019/img/other/",
   "availability": true,
   "isInGallery": true
 }
)

// console.log('');
// // console.log('filterEmployer = ' + filterEmployer);
// console.log('filterEmployer = ');
// console.log(filterEmployer);

//#endregion -------------------- CONSTANT: filterEmployer --------------------


//#region -------------------- CONSTANT: filterType - REF: https://github.com/rhernandog/gsap-flip-react/blob/master/src/App.js --------------------

const filterType = [
    // { key: '0000', id: 'allCheck', value: 'all', label: 'All' },
    { key: '0000', id: 'allCheck', value: '*', label: 'All' },
    { key: '0001', id: 'websiteCheck', value: 'website', label: 'Website' },
    // { key: '0002', id: 'html5Check', value: 'html5', label: 'HTML5' },
    { key: '0003', id: 'mobileCheck', value: 'mobile', label: 'Mobile' },
    { key: '0004', id: 'videoCheck', value: 'video', label: 'Video' },
    { key: '0005', id: 'bannerCheck', value: 'banner', label: 'Banner' },
    { key: '0006', id: 'printCheck', value: 'print', label: 'Print' },
];

// console.log('');
// console.log('filterType = ' + filterType);
// console.log('filterType = ');
// console.log(filterType);

//#endregion -------------------- CONSTANT: filterType - REF: https://github.com/rhernandog/gsap-flip-react/blob/master/src/App.js --------------------

//#endregion ==================== FILTER ARRAYS ====================


//#region ==================== TIMELINES ====================
console.log('==================== TIMELINES: workNavTL ====================');

const workNavTL = new gsap.timeline();
// const workNavTL = new gsap.timeline({ paused: true });

//#endregion ==================== TIMELINES ====================




export const Isotope03 = () => {

    //#region ==================== ASSETS _Ref ====================

    // init one ref to store the future isotope object
    const isotope_Ref = React.useRef()

    const workNav_Ref = useRef(null);
    const employerNav_Ref = useRef(null);
    const typeNav_Ref = useRef(null);

    const toggleNav_Ref = useRef(null);
    const toggleBtn_Ref = useRef(null);

    const galleryContainer_Ref = useRef(null);
    // const galleryItem_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================


    //#region ==================== useState DEFs ====================

    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*')

    // const [workNavToggle, setWorkNavToggle] = useState(null);
    const [workNavToggleText, setWorkNavToggleText] = useState('<< View by employer');
    const [workNavToggleBtn, setWorkNavToggleBtn] = useState(true);
    // const [workNavToggleBtn, setWorkNavToggleBtn] = useState(false);

    //#endregion ==================== useState DEFs ====================



    //#region ==================== useEffect: workNavTL ====================

    // let workNavHeight = employerNav_Ref.current.getBoundingClientRect().height;

    useEffect(() => {

        let workNavHeight = employerNav_Ref.current.getBoundingClientRect().height;

        console.log('');
        console.log('==================== useEffect: workNavTL ====================');
        console.log('workNavHeight = ' + workNavHeight);

        workNavTL
            .fromTo([employerNav_Ref.current], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
            .fromTo([typeNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 0, duration: 0.5 }, 'frame01')

    }, [])
    // }, [workNavHeight])

    //#endregion ==================== useEffect: workNavTL ====================


    //#region ==================== useEffect: workNavToggleBtn ====================

    useEffect(() => {

        console.log('');
        console.log('==================== useEffect: workNavToggleBtn ====================');
        console.log('workNavToggleBtn = ' + workNavToggleBtn);

        if (workNavToggleBtn) {
            workNavTL.play();
            // workNavTL.resume();
            setWorkNavToggleText('View by type >>');
        } else {
            workNavTL.reverse();
            setWorkNavToggleText('<< View by employer');
        }

        // if (!workNavToggleBtn) {
        //     workNavTL.reverse();
        //     setWorkNavToggleText('<< View by employer');
        // } else {
        //     workNavTL.play();
        //     setWorkNavToggleText('View by type >>');
        // }


        // switch (props.workFormat) {
        //     case 'banner':

        //         podID = 'bannerPodID';
        //         // podHed = 'Banner Animations';
        //         masonryBreakpoints = { 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 };

        //         break;

        //     case 'html5':
        //     case 'video':
        //     case 'website':
        //     case 'mobile':

        //         podID = 'webPodID';
        //         // podHed = 'Web/Video';
        //         masonryBreakpoints = { 768: 1, 960: 2, 1920: 3, 3840: 4 };

        //         break;

        //     case 'print':

        //         podID = 'printPodID';
        //         // podHed = 'Print';
        //         // masonryBreakpoints = { 768: 1, 960: 2, 1920: 3, 3840: 4 };
        //         masonryBreakpoints = { 768: 1, 960: 3, 1920: 3, 3840: 4 };

        //         break;

        //     default:

        //         podID = 'genPodID';
        //         // podHed = 'General';
        //         masonryBreakpoints = { 360: 1, 640: 2, 768: 2, 940: 4, 1640: 4, 1920: 5, 3000: 6 };

        //         break;
        // }

    // }, [])
    }, [workNavToggleBtn])

    //#endregion ==================== useEffect: workNavToggleBtn ====================


    //#region ==================== useEffect: initialize an Isotope object with configs ====================

    useEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: initialize an Isotope object with configs ====================');

        isotope_Ref.current = new Isotope('.galleryContainer', {

            // itemSelector: '.filter-item',
            itemSelector: '.workItem',
            percentPosition: true,

            // layoutMode: 'masonry',
            // masonry: {
            //     // columnWidth: 100,
            //     // gutter: 20,
            //     isFitWidth: true,
            // }

            layoutMode: 'packery',
            // packery: {
            //     gutter: 20,
            //     columnWidth: '.workItem',
            //     rowHeight: 60,
            //     horizontal: true,
            // }
        })

        // cleanup
        return () => isotope_Ref.current.destroy()

    }, [])

    // function isotopeInit() {

    //     console.log('');
    //     console.log('==================== FUNCTION: isotopeInit ====================');

    //     isotope_Ref.current = new Isotope('.galleryContainer', {

    //         // itemSelector: '.filter-item',
    //         itemSelector: '.workItem',
    //         percentPosition: true,

    //         // layoutMode: 'masonry',
    //         // masonry: {
    //         //     // columnWidth: 100,
    //         //     // gutter: 20,
    //         //     isFitWidth: true,
    //         // }

    //         layoutMode: 'packery',
    //         // packery: {
    //         //     gutter: 20,
    //         //     columnWidth: '.workItem',
    //         //     rowHeight: 60,
    //         //     horizontal: true,
    //         // }
    //     })

    //     // cleanup
    //     return () => isotope_Ref.current.destroy()

    // };

    // isotopeInit();

    //#endregion ==================== useEffect: initialize an Isotope object with configs ====================


    //#region ==================== useEffect: handleFilterKeyChange - handling filter key change ====================

    useEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: handleFilterKeyChange - handling filter key change ====================');
        // console.log('filterKey = ' + filterKey);

        filterKey === '*'
            ? isotope_Ref.current.arrange({ filter: `*` })
            : isotope_Ref.current.arrange({ filter: `.${filterKey}` })
        window.scrollTo(0, 0)

    }, [filterKey])

    const handleFilterKeyChange = key => () => setFilterKey(key)

    //#endregion ==================== useEffect: handleFilterKeyChange - handling filter key change ====================



    //#region ==================== COMPONENTS (workNav/workItems[s]): renderEmployers, renderFilters, renderElements ====================

    //#region -------------------- renderEmployers: workNav --------------------

    // const renderEmployers = () => {
    function RenderEmployers() {

        // console.log('');
        // console.log('-------------------- renderEmployers --------------------');

        return filterEmployer.map((e) =>
            // <div className='workNavItem' key={e.album_index} onClick={handleFilterKeyChange(e.album_id)}>{e.employer}</div>
            // <div className='workNavItemLogo' key={e.album_index} onClick={handleFilterKeyChange(e.album_id)}>
            //     <img className='workNavLogo' key={e.album_index} onClick={handleFilterKeyChange(e.album_id)} src={remoteLoc + e.logopath} alt={e.employer} />

            <div className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} key={e.album_index} onClick={handleFilterKeyChange(e.album_id)}>
                {e.logopath !== '#' ? <img className='workNavLogo' src={remoteLoc + e.logopath} alt={e.employer} /> : e.employer}
            </div>
        );
    };

    //#endregion -------------------- renderEmployers: workNav --------------------


    //#region -------------------- renderFilters: workNav --------------------

    // const renderFilters = () => {
    function RenderFilters() {

        // console.log('');
        // console.log('-------------------- renderFilters --------------------');

        return filterType.map((e) =>
            <div className='workNavItem' key={e.key} onClick={handleFilterKeyChange(e.value)}>{e.label}</div>
        );
    };

    //#endregion -------------------- renderFilters: workNav --------------------


    //#region -------------------- renderElements: workItem[s] --------------------

    const renderElements = () => {
    // function RenderElements() {

        // console.log('');
        // console.log('-------------------- renderElements --------------------');

        return workData.filter(isSrc => isSrc.src !== '#').map((workItem, index) =>

            <div 
                className={`workItem ${workItem.format} ${workItem.album_id} masonryWidth${workItem.masonryWidth} masonryHeight${workItem.masonryHeight}`}
                key={index}
            >

                <img
                    src={remoteLoc + workItem.album_id + '/sl/' + workItem.src}
                    alt={'workItem: ' + workItem.album_id}
                />

                <div className='itemInfo'>
                    {/* <h3 className='masonry-title'>{employerData[workItem.album_index].employer}</h3>
                    <p className='masonry-description'>{workItem.caption}</p> */}
                    <h3>{employerData[workItem.album_index].employer}</h3>
                    <p>{workItem.caption}</p>
                </div>

            </div>
        );
    };

    //#endregion -------------------- renderElements: workItem[s] --------------------

    //#endregion ==================== COMPONENTS (workNav/workItems[s]): renderEmployers, renderFilters, renderElements ====================



    return (
        <div className='isotopeContainer'>

            <div className='workNavBar' id='workNavBarID' ref={workNav_Ref}>

                <div className='workNav' id='employerNavID' ref={employerNav_Ref}>
                    {/* {renderEmployers()} */}
                    <RenderEmployers />
                </div>

                <div className='workNav' id='typeNavID' ref={typeNav_Ref}>
                    {/* {renderFilters()} */}
                    <RenderFilters />
                </div>

                <div className='toggleNav' id='toggleNavID' ref={toggleNav_Ref}>
                    <div className='toggleBtn' onClick={(e) => { setWorkNavToggleBtn(!workNavToggleBtn); }} ref={toggleBtn_Ref}>
                        {workNavToggleText}
                        {/* <span className='toggleText'>{workNavToggleText}</span> */}
                        {/* <div className='toggleText'>ReactJS v{React.version}</div> */}
                    </div>
                </div>

            </div>

            <div className='galleryContainer' ref={galleryContainer_Ref}>
                {renderElements()}
                {/* <isotopeInit /> */}
                {/* <RenderElements /> */}
            </div>

        </div>
    )

}
