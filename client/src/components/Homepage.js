import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import MainSection from "./Mainsection/MainSection";
export default function Homepage(props) {
    const [id, setId] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        setId(localStorage.getItem("userID"));
        setEmail(localStorage.getItem("email"));
      }, []);
      const logout = function () {
        setEmail("");
        setId("");
        localStorage.removeItem("userID");
        localStorage.removeItem("email");
      }
    return (
    <div>
      {/* <Navbar/> */}
      <MainSection/>
    </div>
    )
}