import React, { useState } from "react";
import axios from "axios";
import Donate from "./Donate";
import { useHistory } from 'react-router-dom';
import './FundStory.css';

import {
  BrowserRouter as Router, Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

	export default function FundStory(props) {
	const { id,user_id,fund_cate_id,title,img,story,goal,amountraising } = props;

	const history = useHistory();
	let finishPersentage = Math.round(amountraising / goal * 100);
  

  return (
		
		<div className="products">
				{/* {result} */}
      	<img
          className="goods-img"
          src={img}
          alt={"sorry"}
        />
					
					{title} <br/>
					<ProgressBar bgcolor="#ef6c00" completed={finishPersentage >= 100 ? 100 : finishPersentage}/>
					
					<Link
  				to={{
   				 	pathname: "/Donate",
    				state: { id }
  				}}
					className="btn-primary">View</Link>

		</div>

	);

	}
			



