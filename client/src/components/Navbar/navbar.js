import React, { useState, Component } from "react";
import { MenuItems } from "./MenuItem";
import './Navbar.css';

export default function Navbar () {

  const [state, setState] = useState({
    clicked: false
  });
  
  const handleClick = () => {
    setState({clicked : ! state.clicked})
  }
  return(
    
      <nav className="NavbarItems">
        <a href="#" className="navbar-logo"><img src="/images/logo.png"/></a>
        <div className="menu-icon" onClick={handleClick}>
          <i className=""></i>
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {

            return (
              <li key={index}>
                <a className="nav-menu-text"  href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
          
        </ul>
      </nav>
    
  )
}