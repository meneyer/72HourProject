import React, {useState, useEffect} from 'react';

const OpenWeather = (props) => {
    // const [weather, setWeather] = useState({});
    const apiKey = "43eb2da9b4bf5ad4c050711b4732c0b0"
    const [displayW, setDisplayW] = useState("");
    const [fah, setFah] = useState(true);
    console.log(props.weather);
    let temp= props.weather.main.temp;
    console.log(temp)
    
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
    // let cel = 0;
    
    // function convert (fah) {
    //     let cel = (fah - 32) * (5/9);
        
    //     return cel;
    // }
    let cel = Math.round((temp - 32) * (5/9),3);
    function toggleFah() {
        setFah(fah => !fah)
        // fah = true ? setFah(false) : setFah(true);
        
        console.log(cel)
        return cel;
    }
    let conditions = props.weather.weather[0].description;
    conditions = conditions.charAt(0).toUpperCase() + conditions.slice(1);
    let iconNum = props.weather.weather[0].icon;
    let iconURL = `http://openweathermap.org/img/w/${iconNum}.png`

    return (
        <div id="weatherBox">
            <h3>{props.weather.name}</h3>
            <p><span id="tiny">Latitude: {props.latitude}<br />Longitude: {props.longitude}</span></p>
            {/* <button onClick={showWeather}>Get Weather!</button> */}
            {/* <div>{displayW}</div> */}
            { props.weather.weather !== undefined ? 
            <div>
            <h4>{conditions}</h4>
            <img src={iconURL} />
            <p>Temperature: {fah === true ? `${temp}°f`: `${cel}°c`}<br />
            <button onClick={toggleFah}>&#176;f / &#176;c</button></p>
            <p>Wind speed: {props.weather.wind.speed}</p> 
            </div>
            : ""}
        </div>
    );
}

export default OpenWeather;