import React, { useState } from "react";
import '../Donate.css';

export default function DonateGoods(props) {
	return (
    <div className="styleform">
      <h1>Donate Goods</h1>
      <form>
      
				<p>
         <label> Name: </label>  
           <input name="name" /> 
				</p>
       
         <label> Category: </label>
           <select name="category" >
					 {/* onChange={handleChange}> */}
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
           <input name="company" /> 
					</p>
				<p>
				<label>Condition:
           <input type="radio" id = "exc" name="condition" value = "Excellent" />
					 <label for="exc">Excellent</label>
					 <input type="radio" id="good" name="condition" value = "Good" />
					 <label for="good">Good</label>
					 <input type="radio" id="satis" name="condition" value = "Satisfactory" />
					 <label for="satis">Satisfactory</label>
         </label>
				</p>

					<p>
        	 <label> Size (if applicable): </label>  
           <input name="size" /> 
					</p>

				<p>
					<label for="img">Upload Image:</label>
  				<input type="file" id="img" name="img" accept="image/*" />
				</p>

				<p>
				<label for="desc">Description:</label><br/>
				<textarea id="desc" name="desc" rows="4" cols="30"/>
				</p>

       <button type="submit">Submit</button>
			 
      </form>
    </div>
  )

}

