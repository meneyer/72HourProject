import React, {useState, useEffect} from 'react';

const OpenWeather = (props) => {
    const [weather, setWeather] = useState({});
    const apiKey = "43eb2da9b4bf5ad4c050711b4732c0b0"
    

    function fetchWeather(){
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=imperial`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setWeather(json)
            
        });
    }

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <div>
            <p>At latitude: {props.latitude} and Longitude: {props.longitude}</p>
            <p>(That's {weather.name})</p>
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {weather.main.temp}f</p>
            <p>Wind speed: {weather.wind.speed}</p>
        </div>
    );
}

export default OpenWeather;