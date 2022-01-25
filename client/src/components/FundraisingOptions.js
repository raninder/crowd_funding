import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Campaign from "./campaign";

export default function FundraisingOption (props) {
  const [campaigns, setCampaigns] = useState([]);
  const url = "http://localhost:3001/api/funds/getallfundrising";

  useEffect(() => {  
    axios.get(url)
    .then((result) => {
      setCampaigns(result.data);
    });
  }, []);

  return (
    <div>
      {campaigns.map((item) => {
        return (
        <Campaign
        img={item.img}
        title={item.title}
        story={item.story}
        goal={item.goal}
        />
        )
      })}
      
    </div>
  )
}

