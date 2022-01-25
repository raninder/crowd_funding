import React, { useState, useEffect } from "react";
import axios from "axios";
import "./donate.css"
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';



export default function Cart1(props) {
	const [result, setResult] = useState({});
	const [uid, setUid] = useState("");
	const [qty,setQty]= useState();
	const history = useHistory();
	const id = history.location.state.product_id;
	const quantity = history.location.state.quantity;
	console.log("qty",quantity);
	const [quantityState,setQuantityState] = useState(quantity);
	useEffect(() => {
		setUid(localStorage.getItem("userID"));
	}, []);

	const alert = useAlert();

	const url = `http://localhost:3001/api/goods/getallgoods/${id}`;

	useEffect(() => {
    axios.get(url)
    .then((res) => {
      
      setResult(res.data[0]);
    });
  }, []);

	console.log("result",result);
	console.log("product_id",id);
	console.log("user_id",uid);

	function addRequest(qty){
		alert.show("Request Added");
		const cart = { uid,id,qty }
		console.log("cart",cart);
		const url1 = "http://localhost:3001/api/goods/reqgoods";
		const url2 = "http://localhost:3001/api/goods/addtocart";

		const requestOne = axios.post(url1,{id,qty});
		const requestTwo = axios.post(url2,{cart});

		axios.all([requestOne, requestTwo])
		.then(axios.spread((...responses) => {
			const res1 = responses[0];
			const res2 = responses[1];
			console.log("resp1", res1.data);
			console.log("resp2", res2.data);
			// use/access the results 
		})).catch(errors => {
			console.log(errors);
		})

		
		setTimeout(()=> {
		history.push("/RequestGoods");
		},2000);


}
	
	return(

			<div className='container'>
				
      	<img
					className= "image"
          src={result.img}
          alt={"Donated Goods"}
        />	
				<div className="text">
					id:{result.id} <br/>
					User id: {result.user_id} <br/>
					Category id: {result.good_cat_id} <br/>
					Product Name: {result.goods_name} <br/>
					Condition: {result.condition} <br/>
					Company: {result.company} <br/>
					Quantity: {result.quantity} <br/>
					Description: {result.description} <br/><br/>
					{result.quantity >1 &&
					<div>
					<label> Request Quantity: </label>  
           <input name="qty" value={qty} onChange={(e) => setQty(e.target.value)}/> 
					 </div>
					}
			<button className="btn btn-primary" onClick={()=>addRequest(qty) }>Add Request</button> 
			</div>
		</div>
	) 
}