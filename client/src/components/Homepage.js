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
        <Router>
      
      <Link to="/">Homepage </Link>
      <Link to="/Fundrasing">Fundrasing</Link>
      <Route path="/Fundrasing"><Fundrasing /></Route>
            <h1>Welcome to Homepage which is only visible when you are logged in </h1>
       </Router>
        </>
    )
}