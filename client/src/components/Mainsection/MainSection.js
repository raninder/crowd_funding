import React, { useState, Component } from "react";
import './MainSection.css';
import { mainItems } from "./MainSectionItems";

export default function MainSection () {

  
  return (
    <div className="MainSection">

      {mainItems.map((item) => {

        return (
        <div className="mainContainer">
          <div className="image">
            <img src={item.image}/>
          </div>
         
          <div className="flex-right">
            <div className="article-text">
              <article>
              {item.article}
              </article>
            </div>

            <div className="button">
              <button>{item.title}</button>
            </div>

           </div> 
        </div>
          
        )
        })}
      
    </div>
  )
}