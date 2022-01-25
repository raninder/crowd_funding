import { useHistory } from "react-router-dom";
import React, { useState, Component } from "react";
import { MenuItems } from "./MenuItem";
import './Navbar.css';


export default function Navbar (props) {

  const [state, setState] = useState({
    clicked: false
  });

  const history = useHistory();
  
  const handleClick = () => {
    setState({clicked : ! state.clicked})
  }
  return(
    
      <nav className="NavbarItems">
        <a className="navbar-logo" onClick={() => history.push("/Homepage")}><img src="/images/logo.png"/></a>
        <div className="menu-icon" onClick={handleClick}>
          <i className=""></i>
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {

            return (
              <li key={index}>
                <a className="nav-menu-text"  href=''>
                  {item.title}
                </a>
              </li>
            )
          })}
          
        </ul>

          <div className="login-btn">
            <button className="login" onClick={() => history.push("/Login")}>
              Log-in
            </button>
          </div>
          <div className="signup-btn">
            <button className="signup" onClick={() => history.push("/Register")}>
              Sign-Up
            </button>
          </div>


      </nav>
    
  )
}