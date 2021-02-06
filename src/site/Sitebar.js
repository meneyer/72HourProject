import React from 'react';
import {Route, Link, Switch} from "react-router-dom";
import GitJobs from "../components/GitJobs/GitJobs";
import NASA from "../components/Nasa/Nasa";
import OpenWeather from "../components/OpenWeather/OpenWeather";
import Zomato from "../components/Zomato/Zomato";

const Sitebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/nasa">NASA</Link></li>
                    <li><Link to="/openweather">Open Weather</Link></li>
                    <li><Link to="/zomato">Zomato</Link></li>
                    <li><Link to = "/gitjobs">GitJobs</Link></li>
                </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path = "/nasa"><NASA /></Route>
                <Route exact path = "/openweather"><OpenWeather /></Route>
                <Route exact path = "/zomato"><Zomato /></Route>
                <Route exact path = "/gitjobs"><GitJobs /></Route>
            </Switch>
        </div>
    </div>
    );
}
export default Sitebar;