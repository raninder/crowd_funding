import React, { useState,useEffect } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link

} from "react-router-dom";

export default function Product(props) {
  const { id,good_cat_id,goods_name,name,quantity,size,img,company,condition,description} = props;
	const [uid, setUid] = useState("");
	const [cart,setCart] = useState(null);
	const [quantityState,setQuantityState] = useState(quantity);
	const history = useHistory();
	const cart1 = [{}];

	useEffect(() => {
		setUid(localStorage.getItem("userID"));
	}, []);
	// console.log("ID",uid);
	 const alert = useAlert();

//add to cart -cart new function
	//  function add_to_request(product_id) {
		 
	// 	 const url = "http://localhost:3001/api/goods/addtocart";
	// 	const cart = { uid,product_id };
	// 	cart1.push(cart);
	// 	// localStorage.setItem("cart", cart1);
	// 	// console.log("cart1",cart1);
	// 	// setCart(cart);
	// 	 axios.post(url, cart )
	// 	//  axios.post(url, cart)
	// 	.then(res => {
	// 		localStorage.setItem("cart",JSON.stringify(res.data));
	// 		alert.show('Request added to List');
	// 		// console.log("res",res);
	// 		setQuantityState(res.data.quantity);
	// 		// history.push('/Cart',{id});
  //   })
	// }
	
	//  OLd function......cart1 
	
	function add_to_request(product_id) {
		history.push('/Cart', { product_id, quantity});
		
    // const goods = { id };
	
		// const url = "http://localhost:3001/api/goods/reqgoods";
	
    // axios.put(url, {product_id})
		// .then(res => {
		// 	// alert.show('Added to Request cart')
		// 	console.log("res",res);
		// 	setQuantityState(res.data.quantity);
    // })
		// .catch(err => {
		// 	console.log(err);
		// })
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
					Goods Name: {goods_name} <br/>
					Category Name: {name} <br/>
					Size: {size} <br/>
					Quantity: {quantityState} <br/>
					Company: {company} <br/>
					Condition: {condition} <br/>
					Description: {description} <br/>
					{/* if user logged in */}
					<button onClick={() => add_to_request(id) }>Request</button> 
				
					</div>
		}
	
			

   </div> 
  );
}
