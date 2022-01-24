import React, { useState,useEffect } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';

export default function Product(props) {
  const { id,good_cat_id,name,quantity,size,img,company,condition,description} = props;
	const [uid, setUId] = useState("");
	const [quantityState,setQuantityState] = useState(quantity);
	useEffect(() => {
		setUId(localStorage.getItem("userID"));
	}, []);
	console.log("ID",id);
	 const alert = useAlert();
	
	function request(product_id) {
		
    // const goods = { id };
	
		const url = "http://localhost:3001/api/goods/reqgoods";
	
    axios.put(url, {product_id})
		.then(res => {
			alert.show('Request submitted')
			console.log("res",res);
			setQuantityState(res.data.quantity);
    })
		.catch(err => {
			console.log(err);
		})
  }
  return (
    
  <div >
		{quantityState > 0 &&
		<div className="products">
		
      <img
          className="goods-img"
          src={img}
          alt={"sorry"}
        />
					Product id: {id} <br/>
					Category id: {good_cat_id} <br/>
					Category Name: {name} <br/>
					Size: {size} <br/>
					Quantity: {quantityState} <br/>
					Company: {company} <br/>
					Condition: {condition} <br/>
					Description: {description} <br/>
					{/* if user logged in */}
					<button onClick={() => { if (window.confirm('Are you sure you wish to request this item?')) request(id) }}>Request</button> 
				
					</div>
		}
		{/* <Results results={results} /> */}
			

   </div> 
  );
}
