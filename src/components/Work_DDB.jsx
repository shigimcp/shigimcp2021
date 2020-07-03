//#region ==================== IMPORTS / DATA ====================

import React from 'react';

// import Masonry from "react-responsive-masonry"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import '../stylesheets/Work.scss';

// -------------------- DATA --------------------

import work from '../data/json/work_json/work_ddb.json';

//#endregion ==================== IMPORTS / DATA ====================


//#region ==================== WorkDDB ====================

// const remoteLoc = 'https://www.shigimcp.com/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020/img/';
const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';


//#region -------------------- PLACEHOLDER: WorkItem(props), WorkList() --------------------

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
//         <div className='WorkList'>
//             {workItems}
//         </div>
//     );
// }

//#endregion -------------------- PLACEHOLDER: WorkItem(props), WorkList() --------------------


//#region -------------------- MASONRY: REF https://cedricdelpoux.github.io/react-responsive-masonry/ --------------------

function WorkList() {

    return (
        <div className='WorkList'>
            {/* <ResponsiveMasonry columnsCountBreakPoints={{ 960: 1, 1366: 2, 3200: 3 }}> */}
            {/* <ResponsiveMasonry columnsCountBreakPoints={{ 768: 1, 1366: 2, 1920: 3 }}> */}
            <ResponsiveMasonry columnsCountBreakPoints={{ 768: 1, 1366: 2, 1920: 3, 2560: 4 }}>
                <Masonry gutter='20px'>
                    {work.map((workImage, i) => (
                        <img
                            key={i}
                            src={remoteLoc + workImage.album_id + '/sl/' + workImage.src}
                            className='masonryImg'
                            // style={{ width: "100%", display: "block" }}
                            alt={'album_id: ' + workImage.album_id + i}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

//#endregion -------------------- MASONRY: REF https://cedricdelpoux.github.io/react-responsive-masonry/ --------------------

//#endregion ==================== WorkDDB ====================


export const WorkDDB = () => {

    return (
        <WorkList />
    )
}
