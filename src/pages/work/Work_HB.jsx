//#region ==================== IMPORTS ====================

import React from 'react';

// import Masonry from 'react-responsive-masonry'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Moment from 'react-moment';

// import '../../stylesheets/Work.scss';
// import scssVars from '../stylesheets/Global.scss';


//#region -------------------- IMPORTS: DATA --------------------

// import work from '../data/MyData';
import work from '../../data/json/work_json/work_hb.json';

//#endregion -------------------- IMPORTS: DATA --------------------

//#endregion ==================== IMPORTS ====================


// console.log('');
// console.log('=========================  Work_HB.jsx  =========================');


//#region ==================== CONSTANTS ====================

// const remoteLoc = 'https://www.shigimcp.com/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020/img/';
const remoteLoc = 'https://www.shigimcp.com/assets/img/';

//#endregion ==================== CONSTANTS ====================



//#region -------------------- PLACEHOLDER: WorkItem(props), workList() --------------------

// function WorkItem(props) {

//     return (
//         <div className='workItem'>
//             <table>
//                 <tbody>
//                     <tr>
//                         <td className='workImage'><img className='slide' src={remoteLoc + props.album_id + '/sl/' + props.img_src} alt={'employer: ' + props.employer} /></td>
//                         <td className='workProp'>
//                             key[Proxy] = <br />
//                             album_id = <br />
//                             img_src = <br />
//                             caption = <br />
//                             format = <br />
//                             format_src = <br />
//                             link = <br />
//                             cta = <br />
//                             alert = <br />
//                             mwidth = <br />
//                             mheight = <br />
//                         </td>
//                         <td className='workValue'>
//                             {props.keyProxy}<br />
//                             {props.album_id}<br />
//                             {props.img_src}<br />
//                             {props.caption}<br />
//                             {props.format}<br />
//                             {props.format_src}<br />
//                             {props.link}<br />
//                             {props.cta}<br />
//                             {props.alert}<br />
//                             {props.mwidth}<br />
//                             {props.mheight}<br />
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// function WorkList() {

//     const workItems = work.map((workImage) =>
//         <WorkItem
//             key={workImage.album_id + workImage.image_index}
//             keyProxy={workImage.album_id + '_' + workImage.image_index}
//             album_id={workImage.album_id}
//             img_src={workImage.src}
//             caption={workImage.caption}
//             format={workImage.format}
//             format_src={workImage.format_src}
//             link={workImage.link}
//             cta={workImage.cta}
//             alert={workImage.alert}
//             mwidth={workImage.mwidth}
//             mheight={workImage.mheight}
//         />
//     );

//     return (
//         <div className='workList'>
//             {workItems}
//         </div>
//     );
// }

//#endregion -------------------- PLACEHOLDER: WorkItem(props), workList() --------------------


//#region -------------------- MASONRY: REF https://cedricdelpoux.github.io/react-responsive-masonry/ --------------------

function WorkList() {

    return (
        <div className='workList'>
            <section className='masonrySection'>
                {/* <ResponsiveMasonry columnsCountBreakPoints={{ 960: 1, 1366: 2, 3200: 3 }}> */}
                {/* <ResponsiveMasonry columnsCountBreakPoints={{ 768: 1, 1366: 2, 1920: 3 }}> */}
                <ResponsiveMasonry columnsCountBreakPoints={{ 768: 1, 1366: 2, 1920: 3, 2560: 4 }}>
                    {/* <Masonry gutter='50px'> */}
                    <Masonry className='masonry' gutter='1.25vw'>
                        {work.map((workImage, i) => (
                            <div className='workItem' key={workImage.album_id + workImage.image_index}>

                                <img
                                    // key={workImage.album_id + workImage.image_index}
                                    className='masonryImg'
                                    src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                                    alt={'album_id: ' + workImage.album_id + workImage.image_index}
                                    // onClick={() => workNavShow.reverse()}
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
            </section>
        </div>
    )
}

//#endregion -------------------- MASONRY: REF https://cedricdelpoux.github.io/react-responsive-masonry/ --------------------

//#endregion ==================== WorkHB ====================


export const WorkHB = () => {

    return (
        <>
            <WorkList />
        </>
    )
}
