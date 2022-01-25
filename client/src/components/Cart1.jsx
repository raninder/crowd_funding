import React, { useState, useEffect } from "react";
import axios from "axios";
import "./donate.css"
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';



export default function Cart(props) {
	const [result, setResult] = useState({});
	const [uid, setUid] = useState("");
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

	function addRequest(product_id){
		alert.show("Request Added");
		const url1 = "http://localhost:3001/api/goods/reqgoods";
		const url2 = "http://localhost:3001/api/goods/addtocart";
		const cart = { uid,id,quantity }
    axios.put(url1, {id})
		.then(res1 => {
			alert.show('Request Added');
			console.log("res",res1);
		 setQuantityState(res1.data.quantity);
    })
		.catch(err => {
			console.log(err);
		})

		axios.post(url2, cart )
		.then(res2 => {
			// alert.show('Request Added');
			setResult(res2.data);
			console.log("res",res2);
		
		setTimeout(()=> {
		history.push("/RequestGoods");
		},2000);
	})

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
				
			<button className="btn btn-primary" onClick={addRequest(id) }>Add Request</button> 
			</div>
		</div>
	) 
}