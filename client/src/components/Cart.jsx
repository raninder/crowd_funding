import React, { useState, useEffect } from "react";
import axios from "axios";
import "./donate.css"
import { useHistory } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import { useAlert } from 'react-alert';



export default function Cart(props) {
	const [result, setResult] = useState({});
	const [qty,setQty]= useState();
	const history = useHistory();
	const id = history.location.state.product_id;
	const quantity = history.location.state.quantity;
	console.log("qty",quantity);
	const [quantityState,setQuantityState] = useState(quantity);
	// const alert = useAlert();

	const url = `http://localhost:3001/api/goods/getallgoods/${id}`;

	useEffect(() => {
    axios.get(url)
    .then((res) => {
      
      setResult(res.data[0]);
    });
  }, []);

	console.log("result",result);
	console.log("id",id);

	function addRequest(){
		alert.show("Request Added");
		const url1 = "http://localhost:3001/api/goods/reqgoods";
    axios.put(url1, {id,qty})
		.then(res => {
		
			alert.show('Request Added');
			console.log("res",res);
		 setQuantityState(res.data.quantity);
    })
		.catch(err => {
			console.log(err);
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
					Cat id: {result.good_cat_id} <br/>
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
			<button className="btn btn-secondary" onClick={addRequest }>Add Request</button> 
			</div>
		</div>
	) 
}