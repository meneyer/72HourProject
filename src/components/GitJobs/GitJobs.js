import React, {useEffect, useState} from 'react';
import GitJobsChild from "./GitJobsChild"
import { Card } from 'reactstrap';

const GitJobs = (props) => {   

    const [jobs, setJobs] = useState("")
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('')


    function getJobs(){
        // if (props.latitude !== "" && props.longitude !=="") {            
        
        fetch(`https://efa-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?lat=${props.latitude}&long=${props.longitude}`, {            
            headers: new Headers({
                'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            })
        }).then (response => (response.json()))
        // .then(data => console.log(data))
        .then((json) => {
            console.log(json);
            setJobs('')
        })
        // .catch(err=> console.log("Error", err))
        // console.log(props.latitude, props.longitude)
    }   

        useEffect(() => {
            getJobs();
        }, [])
    
        function displayJobs() {
            return jobs.length > 0 ? jobs.map(job => <GitJobsChild jobName = {job} />) : null;
        }
                
    return (
        <div>
            <button onClick={getJobs}>Find Employment Opportunities</button>                  
            {/* <GitJobsChild/> {jobs} */}
            {/* <Card> */}
            {displayJobs()} 
            <GitJobsChild />
            {/* <GitJobsChild title = {title} description = {description} url = {url} /> */}
            {/* </Card> */}
        </div>
    );
}

//No final button needed, but list 4 jobs with a link to each job (URL in the json data)--Based on your location list 4 jobs and descriptions from the gitjobs api. Make sure to include a button or a link to visit the full job listing on github (link is in the json data).

export default GitJobs;

 // function getJobs(){
    //     const url = "https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823"

    //     fetch(url)
    //     .then (response => response.json())
    //     .then((json) => {
    //         console.log(json)
    //     })
    // }


        // const getJobs = () => {
    //     fetch("https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823", {  
    //         method: "GET",
    //         mode: 'no-cors',          
    //         headers: new Headers({
    //             'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    //         })
    //     }).then (response => (response.json()))
    //         .then(data => console.log(data))
    //         .catch(err=> console.log("Error", err))
    //     }  