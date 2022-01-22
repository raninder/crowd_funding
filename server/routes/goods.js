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
	// alert("request fulfilled");
	const myJson= req.body;
	console.log(myJson);
	const catId = req.body.good_cat_id; 
	console.log("catId",catId);

	db.query(`UPDATE goods
					 Set quantity = quantity-1
					 WHERE good_cat_id= $1
					 RETURNING *;
					`, [catId])
.then(result => res.send(result.rows));
});

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
				description
			} = req.body;
			console.log("image",img);
			// if(image=="")
			// 	image = "https://www.childrensfactory.com/wp-content/uploads/sites/1/100-016.jpg";
				db.query(` 
				SELECT id FROM goods_categories WHERE name = '${category}';
				`)
			.then((res) => {
				// res.send(myJson);
				const catId = res.rows[0].id;
				console.log("catId",catId);
				let userId = 3;
			
				return db.query(`
				INSERT INTO goods ( user_id,good_cat_id,size,quantity,img,company,condition,description )
				VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
				RETURNING *;
`			, [userId,catId,size,quantity,img,company,condition,description ])
			})
			.then(result => {
				console.log("res",result);
				res.send(result.rows) })
			.catch(err =>console.log(err))
			
		});

		return router;
};
