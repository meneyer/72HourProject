import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Sitebar from "./site/Sitebar";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
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
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=50dfb7d1bf6f497db2e4d36090ffa01c`)
      .then(response => response.json()
      .then(console.log))

      console.log(position.coords);

   }

   lookupLocation();


 return (
    <div>
      <Router>
        <Sitebar />
      </Router>
    </div>
  );
}

export default App;
