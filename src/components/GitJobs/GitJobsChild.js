import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const GitJobsChild = (props) => {
    return (
        <div> 
            Hello from child
            {/* {props.jobName.title} */}
            {/* {props.title}           */}
            <Card body inverse color="info">
                <CardTitle tag="h5">Title </CardTitle>
                <CardText>description</CardText>
                <Button color="secondary">Make this a link - props.something.url</Button>
            </Card>
            <Card body inverse color="primary">
                <CardTitle tag="h5">Job Title = props.something.title</CardTitle>
                <CardText>description = props.something.description</CardText>
                <Button color="secondary">Make this a link - props.something.url</Button>
            </Card>
            <Card body inverse color="info">
                <CardTitle tag="h5">Job Title = props.something.title</CardTitle>
                <CardText>description = props.something.description</CardText>
                <Button color="secondary">Make this a link - props.something.url</Button>
            </Card>
            <Card body inverse color="primary">
                <CardTitle tag="h5">Job Title = props.something.title</CardTitle>
                <CardText>description = props.something.description</CardText>
                <Button color="secondary">Make this a link - props.something.url</Button>
            </Card>
        </div>
    );
}

export default GitJobsChild;