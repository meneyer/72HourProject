import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Sitebar from "./site/Sitebar";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const successfulLookup = position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=1234`)
      .then(response => response.json()
      .then(console.log))
   }

  const lookupLocation = () => {
    if (window.navigator.geolocation) {
      console.log("geolocation available")
      window.navigator.geolocation
    .getCurrentPosition(successfulLookup, console.log("failure state"));
    } else {
      console.log("no geolocation")
    }
  }
   

  return (
    <div>
      <Router>
        <Sitebar />
      </Router>
    </div>
  );
}

export default App;
