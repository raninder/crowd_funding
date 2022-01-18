import React, { useState, useEffect } from "react";
import axios from "axios";
import Goods from "./Goods";
import "../styles/DispGoods.css";


export default function DispGoods(props) {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/getallgoods").then((data) => {
      setGoods(data.data);
    });
  }, []);

const allGoods = goods.map((item) => {
  return <Goods key={item.id} {...item} />;
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
