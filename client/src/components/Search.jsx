import React, { useState,useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Product from "./Product";


export default function Search() {
	const [goods, setGoods] = useState([]);

	const history = useHistory();
	const catid = history.location.state.value;

	const url = "http://localhost:3001/api/goods/getallgoods";
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setGoods(response.data);
    })
    .catch(error => {
      console.log('Error getting fake data: ' + error);
      })
  }, []);

	let result1 = [];
    console.log("value",catid);
    
    result1 = goods.filter((data) => {
    return data.good_cat_id==catid;
    });
    console.log("result", result1);

		const allGoods = result1.map((item) => {
			console.log("items",item.id);
			return <Product key={item.id} {...item} />;
		});
		console.log("allgoods",allGoods);
	

	return (
    <>
		<h1>Hello</h1>
		<div className="goods-display">
      <p/>
      <h2 className="heading">Goods in Stock</h2>
      <hr className="hr" />
    </div>
    <div className="goods-container">{allGoods}</div>
			</>		
		
	);
}