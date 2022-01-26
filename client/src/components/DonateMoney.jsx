import React, { useState, useEffect } from "react";
import axios from "axios";
import FundStory from "./FundStory";
import "./style.css";
import { useHistory } from "react-router-dom";


export default function DonateMoney(props) {
  const [funds, setFunds] = useState([]);
  const history = useHistory();
  const url = "http://localhost:3001/api/funds/getallfundraising";
  useEffect(() => {
    axios.get(url)
    .then((data) => {
      console.log("data",data);
      setFunds(data.data);
    });
  }, []);

const allstories = funds.map((item) => {
  return <FundStory key={item.id} {...item} />;
});

return (
  <div className="goods-display">
    <div>
      <h2 className="heading">Fundraisers</h2>
      <button className="btn-fundaiser" onClick={() => history.push("/fundrasising")} >Start a Fundraising Campaign</button>
      <hr className="hr" />
    </div>
    
    <div className="goods-container">{allstories}</div>
  </div>
);
}
