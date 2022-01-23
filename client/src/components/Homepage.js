import React, { useState, useEffect } from "react";
import useVisualMode from "../hooks/useVisualMode";
import Fundrasing from "./Fundraising";
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
      
     
    </>
    )
}