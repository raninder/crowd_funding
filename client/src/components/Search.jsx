import React, { useState,useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Product from "./Product";


export default function Search() {

	const history = useHistory();
	const result1 = history.location.state.result;

		const allGoods = result1.map((item) => {
			console.log("items",item.id);
			return <Product key={item.id} {...item} />;
		});
		console.log("allgoods",allGoods);
	

	return (
    <>
		
		<div className="goods-display">
      <p/>
      <h2 className="heading">Products</h2>
      <hr className="hr" />
    </div>
    <div className="goods-container">{allGoods}</div>
			</>		
		
	);
}