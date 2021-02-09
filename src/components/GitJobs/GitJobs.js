import React, {useEffect, useState} from 'react';
import GitJobsChild from "./GitJobsChild"
import {CardColumns, Col} from 'reactstrap';

const GitJobs = (props) => {   

    const gitJobsStyles = {       
        backgroundColor: "purple",
        padding: "15px",       
        fontFamily: "Arial"
    };

    const [jobs, setJobs] = useState("")
    // const [description, setDescription] = useState('');
    // const [title, setTitle] = useState('');
    // const [url, setUrl] = useState('')

    function getJobs(){
        // if (props.latitude !== "" && props.longitude !=="") {            
        
        fetch(`https://efa-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=New+York`, {
        // fetch (`https://efa-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?lat=${props.latitude}&long=${props.longitude}`,{            
            headers: new Headers({
                'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            })
        }).then (response => (response.json()))       
        .then((json) => {
            console.log(json);
            setJobs(json)           
        })      
    }   

    useEffect(() => {
        getJobs();
    }, [])

    function displayJobs() {
        // return jobs.length > 0 ? jobs.map(job => <GitJobsChild jobName = {job} />) : null; 
        return jobs.length >0 ? jobs.slice(0,4).map(job => <GitJobsChild jobName = {job} />) : null 
    }
                
    return (
        <div class = "gitJobs" style={gitJobsStyles}>
            <h1 style={{color: "white"}}>GitJobs API Listings</h1>
            <h4 style={{color: "white", padding: "0px 0px 15px 0px"}}>(up to four open positions displayed based on your location)</h4>            
            <CardColumns>
                {displayJobs()} 
            </CardColumns>
        </div>
    );
}

//End product needs to list 4 jobs with a link to each job (URL in the json data)--Based on your location list 4 jobs and descriptions from the gitjobs api. Make sure to include a button or a link to visit the full job listing on github (link is in the json data).

export default GitJobs; 