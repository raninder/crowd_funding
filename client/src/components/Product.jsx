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
	// const cart1 = [{}];

	useEffect(() => {
		setUid(localStorage.getItem("userID"));
	}, []);
	console.log("uID",uid);
	 const alert = useAlert();
	
	function add_to_request(product_id) {
		history.push('/Cart1', { product_id, quantity});
		
  }
  return (
    
  <div >
		{quantity > 0 &&
		<div className="products">
		
      <img
          className="goods-img"
          src={img}
          alt={"sorry"}
        />
					{/* Product id: {id} <br/>
					Category id: {good_cat_id} <br/> */}
					Product Name: {goods_name} <br/>
					Category Name: {name} <br/>
					Size: {size} <br/>
					Quantity: {quantityState} <br/>
					Company: {company} <br/>
					Condition: {condition} <br/>
					Description: {description} <br/>
					{/* if user logged in */}
				
					<button className="btn btn-primary"onClick={() => add_to_request(id) }>Request</button> 
				
					</div>
		}
	
			

   </div> 
  );
}
