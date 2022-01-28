import React from 'react';
import { useHistory } from 'react-router-dom';
import Product from './Product';
export default function Search() {
  const history = useHistory();
  const result1 = history.location.state.result;
  const catName = history.location.state.categoryName;
    const allGoods = result1.map((item) => {
      console.log("items",item.catid);
      return <Product key={item.id} {...item} />;
    });
    console.log("allgoods",allGoods);
  return (
    <>
    <div className="goods-display">
      <p/>
      <h2 className="heading">Category: {catName}</h2>
      <hr className="hr" />
    </div>
    <div className="goods-container">{allGoods}</div>
      </>
  );
}