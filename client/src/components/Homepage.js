import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import MainSection from "./Mainsection/MainSection";



export default function Homepage(props) {
    const [uid, setUid] = useState();
    const [email, setEmail] = useState();
    useEffect(() => {
        setUid(localStorage.getItem("userID"));
        setEmail(localStorage.getItem("email"));
      }, []);
      console.log("ID",uid);

      const logout = function () {
        setEmail("");
        setUid("");
        localStorage.removeItem("userID");
        localStorage.removeItem("email");
      }
    return (
    <div>
      <MainSection/>
    </div>    
    )
}