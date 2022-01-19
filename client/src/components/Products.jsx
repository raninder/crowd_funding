import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import "../styles/DispGoods.css";


export default function Products(props) {
  const [goods, setGoods] = useState([]);

  const url = "http://localhost:3001/api/goods/getallgoods";
  useEffect(() => {
    axios.get(url)
    .then((data) => {
      setGoods(data.data);
    });
  }, []);

const allGoods = goods.map((item) => {
  return <Product key={item.id} {...item} />;
});

return (
  <div className="goods-display">
    <div>
      <h2 className="heading">Goods in Stock</h2>
      <hr className="hr" />
    </div>
    <div className="goods-container">{allGoods}</div>
  </div>
);
}
