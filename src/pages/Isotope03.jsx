//#region ==================== IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useLayoutEffect } from 'react';
// import { createRef } from 'react';

import Isotope from 'isotope-layout';
import Packery from 'isotope-packery';

import { isBrowser } from "react-device-detect";
// import { isMobile } from "react-device-detect";
// import { isBrowser, isMobile } from "react-device-detect";
// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import '../stylesheets/Global.scss';
import '../stylesheets/Isotope.scss';

import myData from '../data/MyData';

import { gsap } from 'gsap';

//#endregion ==================== IMPORTS ====================


//#region ==================== CONSTANTS n VARS ====================

const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';

// let navLoc;
// let emplLoc;


//#region -------------------- DATA --------------------

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

//#endregion -------------------- DATA --------------------


//#region -------------------- FILTER ARRAY: filterEmployer --------------------

const filterEmployer = employerData.filter(isInGallery => isInGallery.isInGallery);

// console.log('');
// // console.log('filterEmployer = ' + filterEmployer);
// console.log('filterEmployer = ');
// console.log(filterEmployer);

// filterEmployer.unshift(
filterEmployer.push(
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

//#endregion -------------------- FILTER ARRAY: filterEmployer --------------------


//#region -------------------- FILTER ARRAY: filterType - REF: https://github.com/rhernandog/gsap-flip-react/blob/master/src/App.js --------------------

const filterType = [
    // { key: '0000', id: 'allCheck', value: 'all', label: 'All' },
    { key: '0000', id: 'websiteCheck', value: 'website', label: 'Website' },
    { key: '0001', id: 'mobileCheck', value: 'mobile', label: 'Mobile' },
    { key: '0002', id: 'videoCheck', value: 'video', label: 'Video' },
    { key: '0003', id: 'bannerCheck', value: 'banner', label: 'Banner' },
    { key: '0004', id: 'printCheck', value: 'print', label: 'Print' },
    { key: '0005', id: 'allCheck', value: '*', label: 'All' },
];

// console.log('');
// console.log('filterType = ' + filterType);
// console.log('filterType = ');
// console.log(filterType);

//#endregion -------------------- FILTER ARRAY: filterType - REF: https://github.com/rhernandog/gsap-flip-react/blob/master/src/App.js --------------------


//#region -------------------- TIMELINES --------------------

// console.log('-------------------- TIMELINES: workNavTL --------------------');

// const workNavTL = new gsap.timeline();
const workNavTL = new gsap.timeline({ paused: true });

//#endregion -------------------- TIMELINES --------------------

//#endregion ==================== CONSTANTS n VARS ====================


//#region ==================== FUNCTIONS ====================

function handleClick(event) {

    console.log('');
    console.log('==================== FUNCTION: handleClick(event) ====================');
    console.log('event = ' + event);
    console.log(event);
}

//#endregion ==================== FUNCTIONS ====================



export const Isotope03 = (props) => {

    // console.log('');
    // console.log('==================== Isotope03 ====================');
    // console.log('props = ' + props);
    // console.log(props);

    // console.log('');
    // console.log('isBrowser = ' + isBrowser);
    // // console.log(isBrowser);

    // console.log('isMobile = ' + isMobile);
    // // console.log(isMobile);


    //#region ==================== ASSETS _Ref ====================

    // init one ref to store the future isotope object
    const isotope_Ref = useRef()

    const workNav_Ref = useRef(null);

    const employerNav_Ref = useRef(null);
    const activeEmplDiv_Ref = useRef(null);

    const typeNav_Ref = useRef(null);
    const activeTypeDiv_Ref = useRef(null);

    const toggleNav_Ref = useRef(null);
    const toggleBtn_Ref = useRef(null);

    const galleryContainer_Ref = useRef(null);
    // const galleryItem_Ref = useRef(null);

    //#endregion ==================== ASSETS _Ref ====================


    //#region ==================== useState DEFs ====================

    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState('*');

    // const [activeEmplDiv, setActiveEmplDiv] = useState(null);

    const [workNavToggleText, setWorkNavToggleText] = useState('<< View by employer');
    const [workNavToggleBtn, setWorkNavToggleBtn] = useState(true);

    //#endregion ==================== useState DEFs ====================



    //#region ==================== useLayoutEffect: setActiveEmplDiv / WINDOW RESIZE ====================

    // useLayoutEffect(() => {

    //     console.log('');
    //     console.log('------------------------- useLayoutEffect: setActiveEmplDiv / WINDOW RESIZE -------------------------');

    //     // console.log('');
    //     // console.log('employerNav_Ref.current = ' + employerNav_Ref.current);
    //     // console.log(employerNav_Ref.current);

    //     console.log('employerNav_Ref.current.children[0] = ' + employerNav_Ref.current.children[0]);
    //     console.log(employerNav_Ref.current.children[0]);


    //     console.log('');
    //     // console.log('typeNav_Ref.current = ' + typeNav_Ref.current);
    //     // console.log(typeNav_Ref.current);
    //     console.log('typeNav_Ref.current.children[0] = ' + typeNav_Ref.current.children[0]);
    //     console.log(typeNav_Ref.current.children[0]);


    //     //#region -------------------- setActiveEmplDiv --------------------

    //     // let thisLocX;
    //     // // let thisLocY;
    //     // let thisLocW;
    //     // // let thisLocH;

    //     // const setActiveEmplDiv = () => {

    //     //     // let thisLocX = document.getElementById(activeEmplDiv).offsetLeft;
    //     //     // // let thisLocY = document.getElementById(activeEmplDiv).offsetTop;
    //     //     // let thisLocW = document.getElementById(activeEmplDiv).offsetWidth;
    //     //     // // let thisLocH = document.getElementById(activeEmplDiv).offsetHeight;

    //     //     thisLocX = document.getElementById(activeEmplDiv).offsetLeft;
    //     //     // thisLocY = document.getElementById(activeEmplDiv).offsetTop;
    //     //     thisLocW = document.getElementById(activeEmplDiv).offsetWidth;
    //     //     // thisLocH = document.getElementById(activeEmplDiv).offsetHeight;

    //     //     gsap.set([activeEmplDiv_Ref.current], { x: thisLocX, width: thisLocW });
    //     //     // gsap.set([activeEmplDiv_Ref.current], { x: thisLocX, top: thisLocY, width: thisLocW, height: thisLocH });
    //     // }

    //     // console.log('activeEmplDiv = ' + activeEmplDiv);
    //     // console.log('thisLocX = ' + thisLocX);
    //     // console.log('thisLocW = ' + thisLocW);

    //     //#endregion -------------------- setActiveEmplDiv --------------------


    //     //#region -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

    //     // window.addEventListener('resize', setActiveEmplDiv);

    //     window.scrollTo(0, 0);

    //     // // clean up function
    //     // return () => {
    //     //     window.removeEventListener('resize', setActiveEmplDiv);
    //     // }

    //     //#endregion -------------------- WINDOW RESIZE - REF: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c --------------------

    // });

    //#endregion ==================== useLayoutEffect: setActiveEmplDiv / WINDOW RESIZE ====================


    //#region ==================== useEffect: setActiveEmplDiv / activeTypeDiv INIT ====================

    useEffect(() => {
    // useLayoutEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: setActiveEmplDiv / activeTypeDiv INIT ====================');

        // // console.log('activeEmplDiv_Ref.current = ' + activeEmplDiv_Ref.current);
        // // console.log('employerNav_Ref.current = ' + employerNav_Ref.current);
        // // console.log('employerNav_Ref.current.children[5] = ' + employerNav_Ref.current.children[5]);
        // // console.log(employerNav_Ref.current.children[5]);

        // // console.log(employerNav_Ref.current.children);
        // // console.log(employerNav_Ref.current.children.length);
        // console.log(employerNav_Ref.current.lastChild);

        // // console.log(typeNav_Ref.current);
        // console.log(typeNav_Ref.current.lastChild);


        // let thisLocX = employerNav_Ref.current.lastChild.offsetLeft;
        // let thisLocX = employerNav_Ref.current.offsetLeft + (employerNav_Ref.current.offsetWidth * 0.5) - employerNav_Ref.current.lastChild.offsetWidth;
        // let thisLocX = employerNav_Ref.current.lastChild.offsetLeft - employerNav_Ref.current.offsetLeft + (employerNav_Ref.current.offsetWidth * 0.5);
        let thisLocX = (employerNav_Ref.current.offsetWidth * 0.5) - (employerNav_Ref.current.lastChild.offsetWidth * 0.5);
        let thisLocY = employerNav_Ref.current.lastChild.offsetTop;
        let thisLocW = employerNav_Ref.current.lastChild.offsetWidth;
        let thisLocH = employerNav_Ref.current.lastChild.offsetHeight;

        // console.log('');
        // console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
        // console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);


        gsap.set([activeEmplDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH });


        thisLocX = (typeNav_Ref.current.offsetWidth * 0.5) - (typeNav_Ref.current.lastChild.offsetWidth * 0.5);
        thisLocY = typeNav_Ref.current.lastChild.offsetTop;
        thisLocW = typeNav_Ref.current.lastChild.offsetWidth;
        thisLocH = typeNav_Ref.current.lastChild.offsetHeight;

        // console.log('');
        // console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
        // console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);


        gsap.set([activeTypeDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH });

    }, [])
    // }, [activeEmplDiv])

    //#endregion ==================== useEffect: setActiveEmplDiv / activeTypeDiv INIT ====================


    //#region ==================== useEffect: setActiveEmplDiv ====================

    // useEffect(() => {

    //     console.log('');
    //     console.log('==================== useEffect: setActiveEmplDiv ====================');

    //     // console.log('activeEmplDiv_Ref.current = ' + activeEmplDiv_Ref.current);
    //     // console.log('employerNav_Ref.current = ' + employerNav_Ref.current);
    //     // console.log('employerNav_Ref.current.children[5] = ' + employerNav_Ref.current.children[5]);
    //     // console.log(employerNav_Ref.current.children[5]);

    //     // console.log(employerNav_Ref.current.children);
    //     // console.log(employerNav_Ref.current.children.length);
    //     // console.log(employerNav_Ref.current.lastChild);

    //     // console.log('filterKey = ' + filterKey);
    //     // console.log('activeEmplDiv = ' + activeEmplDiv);
    //     // console.log(activeEmplDiv);

    //     if (activeEmplDiv) {

    //         console.log('activeEmplDiv = ' + activeEmplDiv);
    //         console.log(activeEmplDiv);

    //         // console.log(activeEmplDiv.target);
    //         // // console.log(activeEmplDiv.currentTarget);
    //         // console.log(activeEmplDiv.target.parentNode);

    //         // console.log(activeEmplDiv.clientX);
    //         // console.log(activeEmplDiv.clientY);
    //         // console.log(activeEmplDiv.screenX);
    //         // console.log(activeEmplDiv.screenY);

    //         console.log(activeEmplDiv.getBoundingClientRect().offsetLeft);
    //         // console.log(activeEmplDiv.offsetLeft);


    //         // let thisLocX = activeEmplDiv.offsetLeft;
    //         // let thisLocY = activeEmplDiv.offsetTop;
    //         // let thisLocW = activeEmplDiv.offsetWidth;
    //         // let thisLocH = activeEmplDiv.offsetHeight;

    //         // let thisLocX = activeEmplDiv.target.parentNode.offsetLeft;
    //         // let thisLocY = activeEmplDiv.target.parentNode.offsetTop;
    //         // let thisLocW = activeEmplDiv.target.parentNode.offsetWidth;
    //         // let thisLocH = activeEmplDiv.target.parentNode.offsetHeight;

    //         // console.log('');
    //         // console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
    //         // console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);


    //         // gsap.to([activeEmplDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, duration: 3.75 });

    //     } else {

    //         console.log('SORRY, BUD! activeEmplDiv = ' + activeEmplDiv);
    //         console.log(activeEmplDiv);
    //     }

    // // }, [])
    // }, [activeEmplDiv])
    // // }, [filterKey, activeEmplDiv])

    // // const handleActiveEmplDiv = key => () => setActiveEmplDiv(key);

    //#endregion ==================== useEffect: workNavTL ====================


    //#region ==================== useEffect: workNavTL ====================

    useEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: workNavTL ====================');
        // console.log('workNavTL = ' + workNavTL);


        let workNavWidth = employerNav_Ref.current.getBoundingClientRect().width;
        let workNavHeight = employerNav_Ref.current.getBoundingClientRect().height;

        // console.log('');
        // console.log('==================== useEffect: workNavTL ====================');
        // console.log('workNavWidth = ' + workNavWidth);
        // console.log('workNavHeight = ' + workNavHeight);

        if (isBrowser === true) {
            workNavTL
                .fromTo([employerNav_Ref.current], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
                .fromTo([typeNav_Ref.current], { y: 0, autoAlpha: 1 }, { y: -workNavHeight, autoAlpha: 0, duration: 0.5 }, 'frame01')
                // .fromTo([activeEmplDiv_Ref.current], { height: 0 }, { height: workNavHeight, duration: 0.5 }, 'frame01')
        } else {
            workNavTL
                .fromTo([employerNav_Ref.current], { x: -workNavWidth, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
                .fromTo([typeNav_Ref.current], { x: 0, autoAlpha: 1 }, { x: -workNavWidth, autoAlpha: 0, duration: 0.5 }, 'frame01')
                // .fromTo([activeEmplDiv_Ref.current], { width: 0 }, { width: workNavHeight, duration: 0.5 }, 'frame01')
        }


        if (workNavToggleBtn) {
            workNavTL.restart();
        }

    // }, [])
    // }, [workNavHeight])
    }, [workNavToggleBtn])

    //#endregion ==================== useEffect: workNavTL ====================


    //#region ==================== useEffect: workNavToggleBtn ====================

    useEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: workNavToggleBtn ====================');
        // console.log('workNavToggleBtn = ' + workNavToggleBtn);

        // // console.log('');
        // console.log('employerNav_Ref.current.lastChild = ' + employerNav_Ref.current.lastChild);
        // console.log(employerNav_Ref.current.lastChild);

        // console.log('');
        // console.log('typeNav_Ref.current.lastChild = ' + typeNav_Ref.current.lastChild);
        // console.log(typeNav_Ref.current.lastChild);


        if (workNavToggleBtn) {
            workNavTL.play();
            setWorkNavToggleText('View by type');
            typeNav_Ref.current.lastChild.click();
        } else {
            workNavTL.reverse();
            setWorkNavToggleText('View by employer');
            employerNav_Ref.current.lastChild.click();
        }

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

    //#endregion ==================== useEffect: initialize an Isotope object with configs ====================


    //#region ==================== useEffect: handleFilterKeyChange - handling filter key change ====================

    useEffect(() => {

        // console.log('');
        // console.log('==================== useEffect: handleFilterKeyChange - handling filter key change ====================');
        // console.log('filterKey = ' + filterKey);


        filterKey === '*'
            ? isotope_Ref.current.arrange({ filter: `*` })
            : isotope_Ref.current.arrange({ filter: `.${filterKey}` });

        window.scrollTo(0, 0);

        // setActiveEmplDiv(filterKey);

    }, [filterKey])

    //#endregion ==================== useEffect: handleFilterKeyChange - handling filter key change ====================


    //#region ==================== const handleFilterKeyChange: setFilterKey / activeEmplDiv_Ref / activeTypeDiv ====================

    // const handleFilterKeyChange = key => () => setFilterKey(key);

    const handleFilterKeyChange = key => (keyJSONnode) => {

        // console.log('');
        // console.log('==================== const handleFilterKeyChange: setFilterKey / activeEmplDiv_Ref / activeTypeDiv ====================');

        // // console.log('key = ' + key);
        // // console.log(key);

        // // console.log('');
        // // console.log('keyJSONnode = ' + keyJSONnode);
        // // console.log(keyJSONnode);

        // // console.log('');
        // // console.log('keyJSONnode.target = ' + keyJSONnode.target);
        // // console.log(keyJSONnode.target);

        // console.log('');
        // console.log('keyJSONnode.currentTarget = ' + keyJSONnode.currentTarget);
        // console.log(keyJSONnode.currentTarget);

        // console.log('');
        // console.log('keyJSONnode.currentTarget.parentNode = ' + keyJSONnode.currentTarget.parentNode);
        // console.log(keyJSONnode.currentTarget.parentNode);
        // console.log('keyJSONnode.currentTarget.parentNode.id = ' + keyJSONnode.currentTarget.parentNode.id);


        setFilterKey(key);
        // setFilterKey(key.album_id);

        // setActiveEmplDiv(keyJSONnode);
        // setActiveEmplDiv(keyJSONnode.currentTarget);


        // let thisLocX = employerNav_Ref.current.offsetLeft - (employerNav_Ref.current.offsetWidth * 0.5) + keyJSONnode.currentTarget.offsetLeft;
        // let thisLocY = keyJSONnode.currentTarget.offsetTop;
        // let thisLocW = keyJSONnode.currentTarget.offsetWidth;
        // let thisLocH = keyJSONnode.currentTarget.offsetHeight;

        // // console.log('');
        // // console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
        // // console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);

        let thisLocX;
        let thisLocY;
        let thisLocW;
        let thisLocH;


        if (keyJSONnode.currentTarget.parentNode.id === 'employerNavID') {

            // thisLocX = employerNav_Ref.current.offsetLeft - (employerNav_Ref.current.offsetWidth * 0.5) + keyJSONnode.currentTarget.offsetLeft;
            thisLocX = keyJSONnode.currentTarget.offsetLeft - (employerNav_Ref.current.offsetWidth * 0.5) + (keyJSONnode.currentTarget.offsetWidth * 0.5);
            thisLocY = keyJSONnode.currentTarget.offsetTop;
            thisLocW = keyJSONnode.currentTarget.offsetWidth;
            thisLocH = keyJSONnode.currentTarget.offsetHeight;

            // console.log('');
            // console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
            // console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);

            gsap.to([activeEmplDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 });

        } else {

            thisLocX = keyJSONnode.currentTarget.offsetLeft - (typeNav_Ref.current.offsetWidth * 0.5) + (keyJSONnode.currentTarget.offsetWidth * 0.5);
            thisLocY = keyJSONnode.currentTarget.offsetTop;
            thisLocW = keyJSONnode.currentTarget.offsetWidth;
            thisLocH = keyJSONnode.currentTarget.offsetHeight;

            // console.log('');
            // console.log('thisLocX = ' + thisLocX + '     thisLocY = ' + thisLocY);
            // console.log('thisLocW = ' + thisLocW + '     thisLocH = ' + thisLocH);

            gsap.to([activeTypeDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 });
        }


        // gsap.to([activeEmplDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 });
    };

    //#endregion ==================== const handleFilterKeyChange: setFilterKey / activeEmplDiv_Ref / activeTypeDiv0 ====================



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

            // <div className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} key={e.album_index} onClick={handleFilterKeyChange(e.album_id)}>
            // <div className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={e.album_id + 'NavID'} key={e.album_index} onClick={handleFilterKeyChange(e.album_id)} ref={createRef(e.album_id + '_Ref')}>
            // <div className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={e.album_id + 'NavID'} key={e.album_index} onClick={() => { handleFilterKeyChange(e.album_id); handleActiveEmplDiv(e) }}>
            // <div className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={e.album_id + 'NavID'} key={e.album_index} onClick={() => { handleFilterKeyChange(e.album_id); handleActiveEmplDiv(e); }}>

            <div className={e.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={e.album_id + 'NavID'} key={e.album_index} onClick={handleFilterKeyChange(e.album_id)}>
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
            // <div className='workNavItem' key={e.key} onClick={handleFilterKeyChange(e.value)}>{e.label}</div>
            <div className='workNavItem' id={e.label + 'NavID'} key={e.key} onClick={handleFilterKeyChange(e.value)}>{e.label}</div>
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
                id={workItem.album_id + 'DivID' + index}
                key={index}
                onClick={(event) => handleClick(event)}
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

                {/* <div className='activeEmplDiv' id='activeEmplDivID' ref={activeEmplDiv_Ref}></div> */}

                <div className='workNav employerNav' id='employerNavID' ref={employerNav_Ref}>
                    <div className='activeEmplDiv' id='activeEmplDivID' ref={activeEmplDiv_Ref}></div>
                    <RenderEmployers />
                </div>

                <div className='workNav typeNav' id='typeNavID' ref={typeNav_Ref}>
                    <div className='activeTypeDiv' id='activeTypeDivID' ref={activeTypeDiv_Ref}></div>
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
                {/* <RenderElements /> */}
            </div>

        </div>
    )
}
