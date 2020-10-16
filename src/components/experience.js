import React from 'react';
import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // $ npm i react-vertical-timeline-component
import { Jumbotron } from 'reactstrap';
import Company from './company';

const Experience = (props) => {

    let experience = [
        {name: "Amazon", 
         role: "Intern",
         start: "\'21 May",
         end: "\'21 July", 
         summary: "Bachelor of Engineering in Information Technology"
        }
    ];

    return (
        <Jumbotron>
            <div>
                <h2 className = "text-center display-4" id="experience">EXPERIENCE</h2>
                <VerticalTimeline>
                {experience.map((info, index) => (
                    <Company info={info} key={index} index={index}></Company>
                ))}
                </VerticalTimeline>
            </div>
            </Jumbotron>
    )
};

export default Experience;