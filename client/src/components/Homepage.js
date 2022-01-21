import React, { useState } from "react";
import useVisualMode from "../hooks/useVisualMode";
import Fundrasing from "./Fundraising";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";
export default function Homepage(props) {
    return (
        <>
    <h1> Help the Children with Special Needs</h1>
    <div>                        
    <img src="https://www.regionofwaterloo.ca/en/health-and-wellness/resources/Images/PHEChildrenSNAP.jpg" alt="Children's toys"></img>
                                
    </div>
      
     
    </>
    )
}