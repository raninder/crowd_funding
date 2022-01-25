import React, { useState, useEffect } from "react";
import axios from "axios";
import "./donate.css"
import { useHistory } from 'react-router-dom';


export default function Donate(props) {
	// const history = useHistory()
	const [result, setResult] = useState({});
	const history = useHistory();
	const id = history.location.state.id;
	const url = "http://localhost:3001/api/funds/getallfundraising/"+id;
	useEffect(() => {
    axios.get(url)
    .then((res) => {
      
      setResult(res.data[0]);
    });
  }, []);
	 
	console.log("result",result);
	localStorage.setItem("fundID", id);
	console.log("id",id);
	
	return(

			<div className='container'>
				
      	<img
					className= "image"
          src={result.img}
          alt={"sorry"}
        />	
				<div className="text">
					id:{result.id} <br/>
					User id: {result.user_id} <br/>
					Cat id: {result.fund_cate_id} <br/>
					Title: {result.title} <br/>
					Goal: ${result.goal} <br/>
					Amount Raised: ${result.amountraising}
					Story: {result.story} <br/><br/>
				
			<button className="btn btn-primary" onClick={() => history.push('/DonateForm')}>Donate Now</button>
			</div>
		</div>
	) 
}