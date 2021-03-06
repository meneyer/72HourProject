import React, { useState } from "react";
import { Button } from "reactstrap";

const Nasa = (props) => {
  // const current = new Date();
  // const date = `${current.getFullYear()}-${
  //   current.getMonth() + 1
  // }-${current.getDate()}`;

  const baseUrl = "https://api.nasa.gov/planetary/earth/assets";
  let date = "2020-05-07";
  const dim = "0.3";
  const key = "AlbKXiOG2eTvjRE5caNQzzpVU4sDRUZZOpV8KaD8";
  let url = `${baseUrl}?lon=${props.longitude}&lat=${props.latitude}&date=${date}&dim=${dim}&api_key=${key}`;

  // TEMP ADDRESS https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=DEMO_KEY

  //MARS CURIOSITY API ADDRESS---https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-6-3&api_key=DEMO_KEY

  const [image, setImage] = useState();

  function handleFetch() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);
        console.log(data);
      });
  }

  return (
    <div>
      <h4>You're being watched by NASA</h4>
      <br />
      <Button size="lg" color="info" onClick={handleFetch}>
        Find Me
      </Button>
      <hr />
      <br />
      <h4>The date of this image capture is from: {date}</h4>
      <img width="75%" height="75%" src={image} alt="Satellite Location" />
      <div></div>
    </div>
  );
};

export default Nasa;
