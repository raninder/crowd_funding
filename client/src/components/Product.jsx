import React, { useState } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';

export default function Product(props) {
  const { good_cat_id,quantity,size,img,company,condition,description} = props;
console.log("img",img);
	const alert = useAlert();

// 	function confirm(){
// 	alert.show('Request submitted')
// 	const goods = { good_cat_id, quantity };

// 	const url = "http://localhost:3001/api/goods/reqgoods";

// 	axios.put(url, goods)
// 	.then(res => {
// 		alert.show(good_cat_id);
// 		console.log(res);
// 		// setResults([...res.data])

// 	})
// 	.catch(err => {
// 		console.log(err);
// 	})
// }
// function cancel(){
// 	alert.show("Request cancelled");
// }
	
	function request() {
		// alert.show("hi");
		// return <Confirm />
  // <Confirm message={"Sure to delete"} onCancel={cancel} onConfirm={confirm}/>
	// console.log("test");
	// alert.show('Request submitted')
    const goods = { good_cat_id, quantity };
	
		const url = "http://localhost:3001/api/goods/reqgoods";
	
    axios.put(url, goods)
		.then(res => {
			alert.show('Request submitted')
			// setAlert(true);
			console.log(res);
			// setResults([...res.data])
  
    })
		.catch(err => {
			console.log(err);
		})
  }
  return (
    
  <div >
		{quantity >0 &&
		<div className="products">
		
      <img
          className="goods-img"
          src={img}
          alt={"sorry"}
        />
						
					Category id: {good_cat_id} <br/>
					Size: {size} <br/>
					Quantity: {quantity} <br/>
					Company: {company} <br/>
					Condition: {condition} <br/>
					Description: {description} <br/>
		{/* if user logged in */}
					<button onClick={() => { if (window.confirm('Are you sure you wish to request this item?')) request() }}>Request</button> 
				
					</div>
		}
		{/* <Results results={results} /> */}
			

   </div> 
  );
}
