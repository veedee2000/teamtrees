import React from 'react';
import EachProject from './eachProject';

const Projects = (props) => {

    let projects = [{
        name: "Leetcode Quiz",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: ""
    }]

    return (
        <div id="projects">
        <h3 className="text-center display-4 mb-5">PROJECTS</h3>
        <div className="row">
          {projects.map((info, index) => (
            <EachProject info={info} key={index} index={index}></EachProject>
          ))}
        </div>
    </div>
    );
};

export default Projects;