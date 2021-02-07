import React from 'react';

const GitJobs = () => {

    function getJobs(){
        const url = "https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823"

        fetch(url, {
            'Access-Control-Allow-Origin': '*',
            'Vary': 'Origin'
        })
        .then (response => response.json())
        .then((json) => {
            console.log(json)
        })
    }
    
    return (
        <div>
            <button onClick={getJobs}>Find Employment Opportunities</button>
        </div>
    );
}

export default GitJobs;