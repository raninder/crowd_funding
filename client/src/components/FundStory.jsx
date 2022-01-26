import React, { useState } from "react";
import axios from "axios";
import Donate from "./Donate";
// import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './FundStory.css';

import {
  BrowserRouter as Router, Link } from "react-router-dom";

	export default function FundStory(props) {
	const { id,user_id,fund_cate_id,title,img,story,goal,amountraising } = props;

	const history = useHistory();
  

  return (
		
		<div className="products">
				{/* {result} */}
      	<img
          className="goods-img"
          src={img}
          alt={"sorry"}
        />
						id:{id} <br/>
					User id: {user_id} <br/>
					Cat id: {fund_cate_id} <br/>
					Title: {title} <br/>
					Goal: ${goal} <br/>
					Amount Raised: ${amountraising} <br/>
					Story: {story} <br/>

					<Link
  				to={{
   				 	pathname: "/Donate",
    				state: { id }
  				}}
					className="btn btn-primary">View details</Link>

		</div>

	);

	}
			



