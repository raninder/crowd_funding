const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
module.exports = (db) => {

router.get('/getallgoods', (req, res) => {
	db.query(`SELECT * FROM goods;`)
						// SELECT goods.*, goods_categories.name FROM goods
						// JOIN goods_categories
						// ON goods_categories.id = goods.id;
						
	.then((data) => {
		res.json(data.rows);
	})
});


router.put('/reqgoods', (req, res) => {
	const myJson= req.body;
	console.log("myjson",myJson);
	const id = req.body.product_id; 
	

	db.query(`UPDATE goods
					 Set quantity = quantity-1
					 WHERE id=$1 AND quantity>0
					 RETURNING *;
					`, [id])
.then(result => 
	{ console.log("qty",result.rows);
	const resultData = result.rows[0];
	const quantity = resultData.quantity;
	// const [{quantity}] = result.rows;
	console.log("qunatity",quantity);
		res.send({quantity});

	}
)});

router.post("/addnewgoods", (req, res) => {
	const myJson = req.body;
		 console.log("myJson", myJson);
		let {
				category,
				company,
				condition,
				size,
				quantity,
				img,
				description,
				id
			} = req.body;
			
			let userId = 	parseInt(id);
			
			if(img=="")
				img = "https://www.childrensfactory.com/wp-content/uploads/sites/1/100-016.jpg";
				db.query(` 
				SELECT id FROM goods_categories WHERE name = '${category}';
				`)
			.then((res) => {
	
				const catId = res.rows[0].id;
			
				return db.query(`
				INSERT INTO goods ( user_id,good_cat_id,size,quantity,img,company,condition,description )
				VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
				RETURNING *;
`			, [userId,catId,size,quantity,img,company,condition,description ])
			})
			.then(result => {
				res.send(result.rows) })
			.catch(err =>console.log(err))
			
		});

		return router;
};
