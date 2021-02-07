import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Sitebar from "./site/Sitebar";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const lookupLocation = () => {
    if (window.navigator.geolocation) {
      console.log("geolocation available")
      window.navigator.geolocation
    .getCurrentPosition(successfulLookup, console.log("failure state"));
    } else {
      console.log("no geolocation")
    }
  }

  const successfulLookup = position => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
    // console.log(latitude, longitude);
    // fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=50dfb7d1bf6f497db2e4d36090ffa01c`)
    // .then((res) => res.json())
    // .then((json) => {
    //     setAddress(json.results[0].formatted);
    //   });
      
  };

  useEffect(() => {
    lookupLocation();
}, []);
   

return (
    <div>
      <Router>
        <Sitebar address={address} latitude={latitude} longitude={longitude} />
        {/* <button onClick={lookupLocation()}>Get Location</button> */}
      </Router>
    </div>
  );
}

export default App;
