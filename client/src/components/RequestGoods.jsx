import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import Search from "./Search";
import "./DisplayStyle.css";
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';


export default function RequestGoods(props) {
  const [goods, setGoods] = useState([]);
  const [searchGoods, setSearchGoods] = useState([]);
  const [filteredData,setFilteredData] = useState(goods);
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    setId(localStorage.getItem("userID"));
    setEmail(localStorage.getItem("email"));
  }, []);
  // console.log("ID",id);
   
  const history = useHistory();
 
  
  const url = "http://localhost:3001/api/goods/getallgoods";
  useEffect(() => {
    axios.get(url)
    // setId(localStorage.getItem("userID"))
    // setEmail(localStorage.getItem("email"))
    .then((response) => {
      console.log("data",response);
      setGoods(response.data);
      // setFilteredData(response.data);
    })
    .catch(error => {
      // console.log('Error: ' + error);
      })
  }, []);

  function handleSearch(event){
    let value = event.target.value;
    let result = [];
    let categoryName;
    for(let item of goods){
      // console.log("i",item.good_cat_id);
      if (item.good_cat_id == value){
        categoryName = item.name;
      result.push(item);
      // console.log("res",result);
      }
    }
    console.log("categoryName",categoryName);

      history.push('/Search', { result,categoryName});
  
  }
const allGoods = goods.map((item) => {
  return <Product key={item.id} {...item} />;
});

return (
  <>
  <div className="search">
    <label className="search_lable"> Search Category: </label>  
    <select className="search_drop_down" name="category" onChange={(event) => handleSearch(event)}>  
      <option value="">--Please choose an option--</option>
      <option value="1">1. Books</option>
      <option value="2">2. Exercise Equipment</option>
      <option value="3">3. Furniture</option>
      <option value="4">4. Toys and Games</option>
      <option value="5">5. Daily Living</option>
      <option value="6">6. Mobility Products</option>
      <option value="7">7. Social and Communication</option>
      <option value="8">8. Others</option>
    </select>
  </div>
        
           
  <div className="goods-display">
      <h2 className="heading">Products</h2>
      <hr className="hr" /> <br/>
    </div>
    <div className="goods-container">{allGoods}</div>
 
  </>
);
}
