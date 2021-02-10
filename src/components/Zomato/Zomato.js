import React, {useState, useEffect } from 'react';
import { Card } from 'reactstrap';
    
    const Zomato=(props) => {

//    const [Restaurant, setRestaurant] = useState("");
   const [Search, setSearch] = useState("");

    // function getRestaurant() {
    
    //     fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${props.latitude}&lon=${props.longitude}`, {
    //         method: "GET",
    //         headers: {'user-key': "a827929e8885610b39150d9739cd0cea"}})
         
    //     .then(response => response.json())
    //     .then((json) => {
       
    //         console.log(json)
    //         setRestaurant(json)
    //     })
    // }
    console.log(props.longitude, props.latitude)   
  
    // useEffect(() => {
    //     getRestaurant();
    // }, [])
    
        return(
            <div>
                {/* <button onClick={getRestaurant}>Click Here</button> */}
{props.Restaurant !== undefined ?
<div>
                <h1>{props.Restaurant.nearby_restaurants[0].restaurant.name}</h1>
                <h3>check out their cuisine: {props.Restaurant.nearby_restaurants[0].restaurant.cuisines}</h3>
                <br></br>
                <h1>{props.Restaurant.nearby_restaurants[1].restaurant.name}</h1>
                <h3>check out their cuisine: {props.Restaurant.nearby_restaurants[1].restaurant.cuisines}</h3>
                <h1>{props.Restaurant.nearby_restaurants[2].restaurant.name}</h1>
                <h3>check out their cuisine: {props.Restaurant.nearby_restaurants[2].restaurant.cuisines}</h3>
                </div>

    :""}
         </div> 

        );
};

export default Zomato;