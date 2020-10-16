import React from 'react';
import {VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // $ npm i react-vertical-timeline-component
import BookmarkIcon from '@material-ui/icons/Bookmark';

const Institute = (props) => {

    let name = props.info.name;
    let start = props.info.start;
    let end = props.info.end;
    let summary = props.info.summary;


    return (
        <div>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date= {`${start} - ${end}`}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<BookmarkIcon />}
            >
                <h3 className="vertical-timeline-element-title">{name}</h3>
                <p>
                {summary}
                </p>
            </VerticalTimelineElement>
        </div>
    );
}

export default Institute;