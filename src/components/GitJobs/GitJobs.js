import React from 'react';

const GitJobs = () => {


    // function getJobs(){
    //     const url = "https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823"

    //     fetch(url)
    //     .then (response => response.json())
    //     .then((json) => {
    //         console.log(json)
    //     })
    // }
    // `https://jobs.github.com/positions.json?lat=${props.latitude}&long=${props.longitude}`

    const getJobs = () => {
        fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823", {            
            headers: new Headers({
                'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            })
        }).then (response => (response.json()))
            .then(data => console.log(data))
            .catch(err=> console.log("Error", err))
        }  
        
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
    
    return (
        <div>
            
            <button onClick={getJobs}>Find Employment Opportunities</button>
        </div>
    );
}

//No final button needed, but list 4 jobs with a link to each job (URL in the json data)

export default GitJobs;