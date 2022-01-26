import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import MainSection from "./Mainsection/MainSection";
<<<<<<< HEAD
=======



>>>>>>> origin/npatel
export default function Homepage(props) {
    const [id, setId] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        setId(localStorage.getItem("userID"));
        setEmail(localStorage.getItem("email"));
      }, []);
<<<<<<< HEAD
=======

>>>>>>> origin/npatel
      const logout = function () {
        setEmail("");
        setId("");
        localStorage.removeItem("userID");
        localStorage.removeItem("email");
      }
    return (
    <div>
      <Navbar/>
      <MainSection/>
<<<<<<< HEAD
    </div>
=======
    </div>    
>>>>>>> origin/npatel
    )
}