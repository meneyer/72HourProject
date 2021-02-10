import React from 'react';
import {Route, Link, Switch} from "react-router-dom";
import GitJobs from "../components/GitJobs/GitJobs";
import NASA from "../components/Nasa/Nasa";
import OpenWeather from "../components/OpenWeather/OpenWeather";
import Zomato from "../components/Zomato/Zomato";
import { Nav, NavItem, NavLink } from 'reactstrap';

const Sitebar = (props) => {
    return (

        <div className="page">
            <h1> 72-Hour Project:  Team Tron</h1>
            <h4>Eleven Fifty Academy -- February 2021</h4>
            <Nav tabs className="sidebar" id="top">
                <div className="sidebar-list list-unstyled">
                    <NavItem><Link to="/nasa">NASA</Link></NavItem>
                    <NavItem><Link to="/openweather">Open Weather</Link></NavItem>
                    <NavItem><Link to="/zomato">Zomato</Link></NavItem>
                    <NavItem><Link to = "/gitjobs">GitJobs</Link></NavItem>
                </div>
        </Nav>
        <div className="sidebar-route">
            <Switch>
                <Route exact path = "/nasa"><NASA latitude={props.latitude} longitude={props.longitude}/></Route>
                <Route exact path = "/openweather"><OpenWeather latitude={props.latitude} longitude={props.longitude} weather={props.weather}/></Route>
                <Route exact path = "/zomato"><Zomato latitude={props.latitude} longitude={props.longitude}Restaurant ={props.Restaurant}/></Route>
                <Route exact path = "/gitjobs"><GitJobs latitude={props.latitude} longitude={props.longitude}/></Route>
            </Switch>
        </div>
    </div>
    );
}
export default Sitebar;