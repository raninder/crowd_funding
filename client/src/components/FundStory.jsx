import React, { useState } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';
import {
  
  Link

} from "react-router-dom";

export default function FundStory(props) {
	const [result, setResult] = useState(null);
	const { id,user_id,fund_cate_id,title,img,story,goal } = props;

	//  const alert = useAlert();

	//  const url = "http://localhost:3001/api/funds/getallfundraising/"+id;
	//  const fetchData = async () => {
	// 	 const response = await axios.get(url);
 
	// 	 setResult(response.data);
	//  };
	// console.log("result",result);
	// const fetchData = function(){
	// 	return <
	// }
	
  return (
		
		<div className="products">
				{/* {result} */}
      	<img
          className="goods-img"
          src={img}
          alt={"sorry"}
        />
						id:{id} <br/>
					User id: {user_id} <br/>
					Cat id: {fund_cate_id} <br/>
					Title: {title} <br/>
					Goal: {goal} <br/>
					Story: {story} <br/>
					{/* if user logged in */}
					<Link to="/signup" className="btn btn-primary">Select</Link>

					{/* <button onClick={() => { if (window.confirm('Are you sure you wish to donate?')) fetchData() }}>Select</button>  */}
		</div>

	);

	}
			



