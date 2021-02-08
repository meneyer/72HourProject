import React, { useState } from "react";

const Nasa = (props) => {
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const baseUrl = "https://api.nasa.gov/planetary/earth/assets";
  // let date = "2018-01-01";
  const dim = "0.15";
  const key = "AlbKXiOG2eTvjRE5caNQzzpVU4sDRUZZOpV8KaD8";
  // let url = `${baseUrl}?lon=${props.longitude}&lat=${props.latitude}&date=${date}&dim=${dim}&api_key=${key}`;
  let url = `${baseUrl}?lon=-95.33&lat=29.78&date=2018-01-01&dim=${dim}&api_key=${key}`;

  // TEMP ADDRESS https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=DEMO_KEY

  //MARS CURIOSITY API ADDRESS---https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-6-3&api_key=DEMO_KEY

  function handleFetch() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // setImage(req.body.resource.url);
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
        <p>The date of this image capture is from: {date}</p>
      </div>
    </div>
  );
};

export default Nasa;
