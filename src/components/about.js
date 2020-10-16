import React from 'react';
import { Jumbotron} from 'reactstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const About = (props) => {

    let name = "Varun Das";
    let summary = "I am a web developer with interest in DSA";
    let linkedIn = "";
    let github = "";
    let twitter = "";

  return (
    <div>
      <Jumbotron className="text-center" id="about">
          <h1 className="display-3">{name}</h1>
          <p className="lead">Hi there! , Welcome to my Portfolio Website</p>
          <pre>
            <LinkedInIcon href={linkedIn} fontSize="large"></LinkedInIcon>{'         '}
            <GitHubIcon href={github} fontSize="large"></GitHubIcon>{'          '}
            <TwitterIcon href={twitter} fontSize="large"></TwitterIcon>
          </pre>
          <hr className="my-2" />
          <p>{summary}</p>
      </Jumbotron>
    </div>
  );
};

export default About;