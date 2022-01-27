import React, { useState,useEffect } from "react";
import axios from "axios";
import '../styles/Product.css'
import "../styles/DispGoods2.css";
import { useHistory } from 'react-router-dom';

export default function Product(props) {
  const { id,good_cat_id,goods_name,name,quantity,size,img,company,condition,description} = props;
	const [uid, setUid] = useState("");
	const [quantityState,setQuantityState] = useState(quantity);
	const history = useHistory();
	// const cart1 = [{}];

	useEffect(() => {
		setUid(localStorage.getItem("userID"));
	}, []);
	
	function request(product_id) {
	
		const url = "http://localhost:3001/api/goods/reqgoods";
	
    axios.put(url, {product_id})
		.then(res => {
			console.log("res",res);
			setQuantityState(res.data.quantity);
    })
		.catch(err => {
			console.log(err);
		})
  }
	function add_to_request(product_id) {
		history.push('/Cart1', { product_id, quantity});
		
  }
  return (
    <>
			{quantityState > 0 &&
				<div className="product_container">
					<img
							className="product_img"
							src={img}
							alt={"sorry"}
						/>
					<div className="produc-details">
						<span>Category: {name}</span><br/>
						<span>Size: {size}</span><br/>
						<span>Quantity: {quantityState}</span><br/>
						<span>Condition: {condition}</span><br/>
						<span>Description: {description}</span><br/>
					</div>
					<button className="product_btn" onClick={() => add_to_request(id)}>Request</button> 
				</div>
			}			
		</>
  );
}
