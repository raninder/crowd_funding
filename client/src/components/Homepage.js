import React, { useState } from "react";
import useVisualMode from "../hooks/useVisualMode";
import Fundraising from "./Fundraising";
import About from './About';
import Products from './Products';
import DonateGoods from './DonateGoods';
import DonateForm from './DonateForm';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";
export default function Homepage(props) {
  console.log("Homepage", props)
    return (
        <>
        <Router>
      
      <Link to="/">Homepage </Link>
      <Link to="/Fundraising">Fundraising</Link>
      <Link to="/about">About </Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/requestgoods">Request Goods </Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/donategoods">Donate Goods </Link>
        <Link to="/DonateForm">DonationForm </Link>
      <Route path="/Fundraising"><Fundraising /></Route>
      <Route path="/about" ><About/></Route> 
          <Route path="/requestgoods"><Products /></Route>
          <Route path="/donategoods"><DonateGoods /></Route>
          <Route path="/DonateForm"><DonateForm /></Route>
            <h1>Welcome to Homepage which is only visible when you are logged in </h1>
       </Router>
        </>
    )
}