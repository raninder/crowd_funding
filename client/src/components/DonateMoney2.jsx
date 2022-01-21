import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
 import "./style.css";

export default function DonateMoney() {
  const [funds, setFunds] = useState(null);

	const url = "http://localhost:3001/api/funds/getallfundraising";
  const fetchData = async () => {
    const response = await axios.get(url);

    setFunds(response.data);
  };

  return (
    <div className="App">
      <h1>Fund-raisers</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="stories">
        {funds &&
          funds.map((item, index) => {
            
            return (
              <div className="story" key={index}>
                <p>User ID{item.user_id}</p>
                <p>Funds cat id{item.fund_cate_id}</p>
								<p>Title{item.title}</p>
               <p>story {item.story}</p>
							 <p>Target {item.goal}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}


