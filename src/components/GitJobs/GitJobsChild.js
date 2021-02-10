import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const GitJobsChild = (props) => {    
    return (
        <div>       
            <Card body inverse color="primary" border="secondary">
                <CardTitle tag="h5">{props.jobName.title} </CardTitle>
                <CardText>{props.jobName.description}</CardText>
                <Button href = {props.jobName.url} target="blank" color="secondary" >Click Here for Full Listing</Button>  
            </Card>
        </div>
    );
}

export default GitJobsChild;

// style = {{ width: '18rem'}}