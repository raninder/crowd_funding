import React, { useState, Component } from "react";
import './MainSection.css';
import { mainItems } from "./MainSectionItems";
import { useHistory } from "react-router-dom";

export default function MainSection () {
  const history = useHistory();
  
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
              <button onClick={() => history.push(item.url)}>{item.title}</button>
            </div>

           </div> 
        </div>
          
        )
        })}
      
    </div>
  )
}