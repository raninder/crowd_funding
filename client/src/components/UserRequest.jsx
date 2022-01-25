import React, { useState,useEffect } from "react";
import axios from "axios";
import "./donate.css"
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link

} from "react-router-dom";

function User(props){
		return(
			<div className="container">
				<img className="req-img"
				src={props.img}
				/>
				Product Name: {props.goods_name} <br/>
				Quantity: {props.quantity} <br/>
				Date: {props.date} 
			<hr/>
			</div>
		) 
	}

export default function UserRequest(props) {
	const [result, setResult] = useState([]);
	const [uid,setUid] = useState("");
	const [email,setEmail] = useState("");

	useEffect(() => {
		setUid(localStorage.getItem("userID"));
		setEmail(localStorage.getItem("email"));
	}, []);
	console.log("uid",uid);
	console.log("email",email);
	
	const url = `http://localhost:3001/api/goods/getusergoods/`;
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      console.log("data",response.data);
      setResult(response.data);
    })
    .catch(error => {
      console.log('Error: ' + error);
      })
  }, []);
	
	console.log("result",result);
	const allusers = result.map((ele) =>{
		console.log("ele.id", ele.user_id);
		 if(ele.user_id ==uid)
		return <User key = {ele.id} {...ele} />
	})
return(
<>
<h3> Requested Items</h3>
<table border='1'>
					
{allusers}

</table>
</>
) 

}