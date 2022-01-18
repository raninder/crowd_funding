export default function Goods(props) {
  const { name,size,quantity,img,company,condition,description} = props;
  return (
    
  <div className="products">
		<table>
			<tr><td>
      <img
          className="goods-img"
          src={img}
          alt={"sorry"}
        /></td>
				</tr>
       
					
						
					<tr><td> {name} </td></tr>
					<tr><td>Size: </td><td>{size}</td></tr>
					<tr><td>Quantity: {quantity}</td></tr>
					<tr><td>Company: {company}</td></tr>
					<tr><td>Condition: {condition}</td></tr>
					<tr><td>Description: {description}</td></tr>
					</table>
       
    
   </div> 
  );
}
