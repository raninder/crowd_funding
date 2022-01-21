import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

 

export default function Donate(props) {
	const [result, setResult] = useState({});
	const history = useHistory();
	const id = history.location.state.id;
	const url = "http://localhost:3001/api/funds/getallfundraising/"+id;
	useEffect(() => {
    axios.get(url)
    .then((data) => {
      
      setResult(data.data[0]);
    });
  }, []);
	 
	console.log("result",result);
	
	console.log("id",id);
	
	return(
		<div>
			<h1>hello</h1>
			{id}
			Result {result.id}
			<button onClick={() => history.push('/DonateForm')}>Donate</button>
		</div>
	) 
}