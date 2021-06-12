import React from 'react';
import '../../stylesheets/Work.scss';

import work from '../../data/json/work_json/work_lum.json';


// --------------------  --------------------

// const remoteLoc = 'https://www.shigimcp.com/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020/img/';
const remoteLoc = 'https://www.shigimcp.com/assets/img/';


function WorkItem(props) {

    return (
        <div className='workItem'>
            <table>
                <tbody>
                    <tr>
                        <td className='workImage'><img className='slide' src={remoteLoc + props.album_id + '/sl/' + props.img_src} alt={'employer: ' + props.employer} /></td>
                        <td className='workProp'>
                            key[Proxy] = <br />
                            album_id = <br />
                            img_src = <br />
                            caption = <br />
                            format = <br />
                            format_src = <br />
                            link = <br />
                            cta = <br />
                            alert = <br />
                            mwidth = <br />
                            mheight = <br />
                        </td>
                        <td className='workValue'>
                            {props.keyProxy}<br />
                            {props.album_id}<br />
                            {props.img_src}<br />
                            {props.caption}<br />
                            {props.format}<br />
                            {props.format_src}<br />
                            {props.link}<br />
                            {props.cta}<br />
                            {props.alert}<br />
                            {props.mwidth}<br />
                            {props.mheight}<br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function WorkList() {

    const workItems = work.map((workImage) =>
        <WorkItem
            key={workImage.album_id + workImage.image_index}
            keyProxy={workImage.album_id + '_' + workImage.image_index}
            album_id={workImage.album_id}
            img_src={workImage.src}
            caption={workImage.caption}
            format={workImage.format}
            format_src={workImage.format_src}
            link={workImage.link}
            cta={workImage.cta}
            alert={workImage.alert}
            mwidth={workImage.mwidth}
            mheight={workImage.mheight}
        />
    );

    return (
        <div className='workList'>
            {workItems}
        </div>
    );
}

// --------------------  --------------------


export const WorkLuminant = () => {

    return (
        <WorkList />
    )
}
