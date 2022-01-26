import React, { useState,useEffect } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';
import "../styles/DispGoods2.css";
import { useHistory } from 'react-router-dom';

export default function Product(props) {
  const { id,good_cat_id,goods_name,name,quantity,size,img,company,condition,description} = props;
	const [uid, setUid] = useState("");
<<<<<<< HEAD
=======
	const [cart,setCart] = useState(null);
>>>>>>> origin/npatel
	const [quantityState,setQuantityState] = useState(quantity);
	const history = useHistory();
	// const cart1 = [{}];

	useEffect(() => {
		setUid(localStorage.getItem("userID"));
	}, []);
<<<<<<< HEAD
	console.log("uID",uid);
=======
	// console.log("ID",id);
>>>>>>> origin/npatel
	//  const alert = useAlert();
	
	function add_to_request(product_id) {
		history.push('/Cart1', { product_id, quantity});
		
<<<<<<< HEAD
=======
    // const goods = { id };
	
		const url = "http://localhost:3001/api/goods/reqgoods";
	
    axios.put(url, {product_id})
		.then(res => {
			// alert.show('Request submitted')
			console.log("res",res);
			setQuantityState(res.data.quantity);
    })
		.catch(err => {
			console.log(err);
		})
>>>>>>> origin/npatel
  }
  return (
    
  <div >
		{quantity > 0 &&
		<div className="card">
		
      <img
          className="goods-img"
          src={img}
          alt={"Donated Item"}
					// style="width:100%"
        />
					 {/* Product id: {id} <br/> */}
				<h3>{goods_name}</h3> 
				<p>		Category Name: {name} </p>	
					{size &&
					<span>Size: {size} <br/></span>}
				<p>		Quantity: {quantityState} </p>	
				<p>		Company: {company} </p>	
				<p>		Condition: {condition} </p>	
				<p>		Description: {description} </p>	
				
				<p>		<button className="btn btn-primary"onClick={() => add_to_request(id) }>Request</button> </p>	
				
					</div>
		}
	
			

   </div> 
  );
}
