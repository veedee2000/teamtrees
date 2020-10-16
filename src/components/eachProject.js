import React from 'react';
import { Card, CardHeader, CardBody, CardText, CardFooter } from 'reactstrap';
  

const EachProject = (props) => {

    let name = props.info.name;
    let summary = props.info.summary;
    let link = props.info.link;

  return (
    <div className="m-3">
        <Card className="text-center" style={{width: "27rem"}}>
            <CardHeader tag="h3">{name}</CardHeader>
            <CardBody>
                <CardText>{summary}</CardText>
            </CardBody>
            <CardFooter><a href={link}>View Project</a></CardFooter>
        </Card>
    </div>
  );
}

export default EachProject;