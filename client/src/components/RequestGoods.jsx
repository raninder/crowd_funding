import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import Search from "./Search";
import "../styles/DispGoods.css";
import { useHistory } from 'react-router-dom';


export default function RequestGoods(props) {
  const [goods, setGoods] = useState([]);
  const [filteredData,setFilteredData] = useState(goods);
  
  const history = useHistory();
 

  
  const url = "http://localhost:3001/api/goods/getallgoods";
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      console.log("data",response);
      setGoods(response.data);
      // setFilteredData(response.data);
    })
    .catch(error => {
      console.log('Error: ' + error);
      })
  }, []);

  function handleSearch(event){
    let value = event.target.value;
    let result = [];
    console.log(value);
    result = goods.filter((data) => {
      return data.good_cat_id==value;
      });
      console.log("result",result);
    history.push('/Search', { result});
  
  }
const allGoods = goods.map((item) => {
  console.log("items",item.id);
  return <Product key={item.id} {...item} />;
});

return (
  <>
    <p/><p/><p/><p/>

  <label> Search Category: </label>  
  <select name="category" onChange={(event) => handleSearch(event)}>  
               <option value="">--Please choose an option--</option>
               <option value="1">Books</option>
							 <option value="2">Exercise Equipment</option>
               <option value="3">Furniture</option>
               <option value="4">Toys and Games</option>
							 <option value="5">Daily Living</option>
							 <option value="6">Mobility Products</option>
							 <option value="7">Social and Communication</option>
							 <option value="8">Others</option>
           </select>
           <p/><p/>
        
           
  <div className="goods-display">
      <p/>
      <h2 className="heading">Goods in Stock</h2>
      <hr className="hr" />
    </div>
    <div className="goods-container">{allGoods}</div>
 
  </>
);
}