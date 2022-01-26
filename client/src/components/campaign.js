import React, { useEffect } from "react";
import axios from "axios";
// import CurrencyInput from 'react-currency-input-field';
// import CurrencyFormat from 'react-currency-format';
import './campaign.css';

export default function Campaign(props) {
  const {user_id,fund_cat_id,title,img,story,goal} = props
  return (
    <div className="campaign-main">
      <h1>{title}</h1>
      <img src={img} className="campaign-img"/> 
      <p>{story}</p>
      <p>{goal}</p>
      {/* <CurrencyFormat
        id="amount"
        name="donateamount"
        placeholder="Please enter the amount"
        defaultValue={1000}
        thousandSeparator={true}
        prefix={'CA$'}
        decimalsLimit={2}
        onValueChange={(value, name) => console.log(value, name)} */}
      {/* />; */}
      <button className="campaign-donate">View details</button>

    </div>
  )
}