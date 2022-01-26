import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Donate.css"
import { Prompt, useHistory } from 'react-router-dom';
import { isUserLoggedIn } from "../helper/helper";
import ProgressBar from "./ProgressBar";


export default function Donate(props) {
	const [result, setResult] = useState({});
	const history = useHistory();
	const id = history.location.state.id;
	const url = "http://localhost:3001/api/funds/getallfundraising/"+id;
	let finishPersentage = Math.round(result.amountraising / result.goal * 100);
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
					<h1>{result.title} </h1> <br/>
					<h3 className="amountRaised">Amount Raised: ${result.amountraising} of {result.goal}</h3><br/>
					<ProgressBar bgcolor="#ef6c00" completed={finishPersentage >= 100 ? 100 : finishPersentage}/><br/><br/>
					<h4>{result.story} <br/><br/></h4>
				
					<button className="btn btn-primary" onClick={() => {
					isUserLoggedIn() ? history.push('/DonateForm') : history.push('/Login');
					}}>Donate Now</button>
			</div>
		</div>
	) 
}