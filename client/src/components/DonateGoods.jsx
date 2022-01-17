import React, { useState } from "react";
import axios from "axios";
import '../Donate.css';


export default function DonateGoods(props) {
	const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
	const [condition, setCondition] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
	const [desc, setDesc] = useState("");

	function handleSubmit(e) {
    e.preventDefault();
	
    const goods = { category, company, condition,size, quantity, desc };
		// const goods = { company, size };
		alert(JSON.stringify(goods));
		// alert(size);
		// console.log("goods", JSON.stringify(goods));
    axios.post("http://localhost:3001/api/addnewgoods", goods)
		.then(res => {
      console.log(res);
    });
  }
	return (
    <div className="styleform">
      <h1>Donate Goods</h1>
			
      <form onSubmit={handleSubmit}>   
         <label> Category: </label>
           <select name="category" onChange={(e) => setCategory(e.target.value)}> 
               <option value="">--Please choose an option--</option>
               <option value="books">Books</option>
               <option value="furniture">Furniture</option>
               <option value="ex_equip">Exercise Equipment</option>
							 <option value="daily_living">Daily Living</option>
							 <option value="comm">Social and Communication</option>
							 <option value="toys_and_games">Toys and Games</option>
           </select>
        
					 <p>
        	 <label> Company: </label>  
           <input name="company" value={company} onChange={(e) => setCompany(e.target.value)}/> 
					</p>
				<p>
				<label>Condition:
				<div onChange={(e) => setCondition(e.target.value)}>
           <input type="radio" id = "exc" name="condition" value = "Excellent" />
					 <label for="exc">Excellent</label>
					 <input type="radio" id="good" name="condition" value = "Good" />
					 <label for="good">Good</label>
					 <input type="radio" id="satis" name="condition" value = "Satisfactory" />
					 <label for="satis">Satisfactory</label>
					 </div>
         </label>
				</p>

					<p>
        	 <label> Size (if applicable): </label>  
           <input name="size" value={size} onChange={(e) => setSize(e.target.value)} /> 
					</p>

					<p>
        	 <label> Quantity: </label>  
           <input name="qty" value={quantity} onChange={(e) => setQuantity(e.target.value)}/> 
					</p>

				<p>
					<label for="image">Upload Image:</label>
  				<input type="file" id="image" name="image" accept="image/*" />
				</p>

				<p>
				<label for="desc">Description:</label><br/>
				<textarea id="desc" name="desc" rows="4" cols="30" value={desc} onChange={(e) => setDesc(e.target.value)}/>
				</p>

       <button type="submit" >Submit</button>
			 
      </form>
    </div>
  )

}

