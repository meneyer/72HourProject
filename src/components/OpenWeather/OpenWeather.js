import React, {useState, useEffect} from 'react';

const OpenWeather = (props) => {
    // const [weather, setWeather] = useState({});
    const apiKey = "43eb2da9b4bf5ad4c050711b4732c0b0"
    const [displayW, setDisplayW] = useState("");
    console.log(props.weather);
    
    // function fetchWeather(){
    //     // if (props.latitude !== "" && props.longitude !== "") {
    //         fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=imperial`)
    //         .then((res) => res.json())
    //         .then((json) => {
    //             console.log(json)
    //             setWeather(json)
                
    //         })
    //         ;
        
    // };

    // useEffect(() => {
    //     fetchWeather();
    // }, []);

    // function showWeather () {
    //     if (props.weather !== ""){
    //     setDisplayW(
    //     <div>
    //         <p>(That's {props.weather.name})</p>
    //         <p>{props.weather.weather[0].description}</p>
    //         <p>Temperature: {props.weather.main.temp}f</p>
    //         <p>Wind speed: {props.weather.wind.speed}</p> 
    //         </div>)
    //     }
    // }

    return (
        <div>
            <p>At latitude: {props.latitude} and Longitude: {props.longitude}</p>
            {/* <button onClick={showWeather}>Get Weather!</button> */}
            {/* <div>{displayW}</div> */}
            { props.weather.weather !== undefined ? 
            <div>
            <p>(That's {props.weather.name})</p>
            <p>{props.weather.weather[0].description}</p>
            <p>Temperature: {props.weather.main.temp}f</p>
            <p>Wind speed: {props.weather.wind.speed}</p> 
            </div>
            : ""}
        </div>
    );
}

export default OpenWeather;