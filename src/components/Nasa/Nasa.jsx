import React, { useState } from "react";

const Nasa = (props) => {
  const baseUrl = "https://api.nasa.gov/planetary/earth/imagery";
  let lon = `${props.latitude}`;
  let lat = `${props.longitude}`;
  let date = "2018-01-01";
  const dim = "0.15";
  const key = "AlbKXiOG2eTvjRE5caNQzzpVU4sDRUZZOpV8KaD8";
  let url = `${baseUrl}?lon=${lon}&lat=${lat}&date=${date}&dim=${dim}&api_key=${key}`;

  // TEMP ADDRESS https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=DEMO_KEY

  // const [pic, setPic] = useState("");

  function handleFetch() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <p>Welcome from NASA</p>
      <br />
      <button onClick={handleFetch}>Click me</button>
      <hr />
      <br />
      <div>
        <p> {data} </p>
      </div>
    </div>
  );
};

export default Nasa;
