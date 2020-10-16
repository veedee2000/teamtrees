import React from 'react';
import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // $ npm i react-vertical-timeline-component
import Institute from './institute';

const Education = (props) => {

    let education = [
        {name: "Jadavpur University", 
         start: "2018",
         end: "2022", 
         summary: "Bachelor of Engineering in Information Technology"
        }
    ];

    return (
        <div>
            <h2 className = "text-center display-4" id="education">EDUCATION</h2>
            <VerticalTimeline>
            {education.map((info, index) => (
                <Institute info={info} key={index} index={index}></Institute>
            ))}
            </VerticalTimeline>
        </div>
    )
};

export default Education;