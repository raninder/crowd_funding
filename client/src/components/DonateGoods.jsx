import React, { useState } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';
import '../Donate.css';


export default function DonateGoods(props) {
	const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
	const [condition, setCondition] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
	const [img, setImage] = useState("");
	const [description, setDescription] = useState("");

	const alert = useAlert();

	function handleSubmit(e) {
    e.preventDefault();
	
    const goods = { category, company, condition,size, quantity, img, description };
		// alert(JSON.stringify(goods));
		
		const url ="http://localhost:3001/api/goods/addnewgoods";
    axios.post(url, goods)
		.then(res => {
     
			alert.show('Thanks for Donating');
			console.log(res);
			// setQuantity("");
			// setDescription("");
			// handleReset();
    });
  }

	function handleReset(){
		setCategory("");
    setCompany("");
		setCondition("");
		setDescription("");
		setQuantity("");
		setSize("");
	}

	return (
    <div className="styleform">
      <h1>Donate Goods</h1>
			
      <form onSubmit={handleSubmit}>   
         <label> Category: </label>
           <select name="category" onChange={(e) => setCategory(e.target.value)}> 
               <option value="">--Please choose an option--</option>
               <option value="Books">Books</option>
							 <option value="Ex_Equipment">Exercise Equipment</option>
               <option value="Furniture">Furniture</option>
               <option value="Toys_and_Games">Toys and Games</option>
							 <option value="Daily_Living">Daily Living</option>
							 <option value="Mobility_Products">Mobility Products</option>
							 <option value="Communication">Social and Communication</option>
							 <option value="Others">Others</option>
           </select>
        
					 <p>
        	 <label> Company/Brand (if applicable): </label>  
           <input name="company" value={company} onChange={(e) => setCompany(e.target.value)}/> 
					</p>
				<p>
				
				<div onChange={(e) => setCondition(e.target.value)}>
					<label>Condition:
           <input type="radio" id = "exc" name="condition" value = "Excellent" />
					 <label for="exc">Excellent</label>
					 <input type="radio" id="good" name="condition" value = "Good" />
					 <label for="good">Good</label>
					 <input type="radio" id="satis" name="condition" value = "Satisfactory" />
					 <label for="satis">Satisfactory</label>
					 </label>
					 </div>
        
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
					<label for="img">Upload Image:</label>
					<input name="img" value={img} onChange={(e) => setImage(e.target.value)}/>
  				{/* <input type="file" id="image" name="image" accept="image/*" /> */}
				</p>

				<p>
				<label for="description">Description:</label><br/>
				<textarea id="description" name="description" rows="4" cols="30" value={description} onChange={(e) => setDescription(e.target.value)}/>
				</p>

       <button type="submit" >Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
			 <button onClick={handleReset}>Reset</button>
			 
      </form>
    </div>
  )

}

