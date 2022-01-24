import React, { useState, useEffect } from "react";
import useVisualMode from "../hooks/useVisualMode";
import Fundraising from "./Fundraising";
import About from './About';
import RequestGoods from './RequestGoods';
import DonateGoods from './DonateGoods';
import DonateForm from './DonateForm';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";
export default function Homepage(props) {
    const [id, setId] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        setId(localStorage.getItem("userID"));
        setEmail(localStorage.getItem("email"));
      }, []);
      console.log("ID",id);

      const logout = function () {
        setEmail("");
        setId("");
        localStorage.removeItem("userID");
        localStorage.removeItem("email");
      }
    return (
        <>
        {email?
        <div><h5> Logged in as {email} </h5> 
         <button onClick = {logout} className="btn btn-seconadry">Logout</button></div>
        :
        <Link to="/Login" className="btn btn-primary">Login </Link>
        }
       
        {/* <h4> User ID: {id}</h4> */}
    <h1> Help the Children with Special Needs</h1>
    <div>                        
    <img src="https://www.regionofwaterloo.ca/en/health-and-wellness/resources/Images/PHEChildrenSNAP.jpg" alt="Children's toys"></img>
                                
    </div>
      
      <Link to="/">Homepage </Link>
      <Link to="/Fundraising">Fundraising</Link>
      <Link to="/about">About </Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/requestgoods">Request Goods </Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/donategoods">Donate Goods </Link>
        <Link to="/DonateForm">DonationForm </Link>
      <Route path="/Fundraising"><Fundraising /></Route>
      <Route path="/about" ><About/></Route> 
          <Route path="/requestgoods"><RequestGoods /></Route>
          <Route path="/donategoods"><DonateGoods /></Route>
          {/* <Route path="/DonateForm"><DonateForm /></Route> */}
            <h1>Welcome to Homepage which is only visible when you are logged in </h1>
       
        </>
    )
}