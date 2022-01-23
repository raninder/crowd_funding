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

    useEffect(() => {
        setId(localStorage.getItem("userID"));
      }, []);
      console.log("ID",id);
    return (
        <>
        <h4> User ID: {id}</h4>
    <h1> Help the Children with Special Needs</h1>
    <div>                        
    <img src="https://www.regionofwaterloo.ca/en/health-and-wellness/resources/Images/PHEChildrenSNAP.jpg" alt="Children's toys"></img>
                                
    </div>
      
     
    </>
    )
}