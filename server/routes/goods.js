const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

module.exports = (db) => {

router.get('/getallgoods', (req, res) => {
	db.query(
		// `SELECT * FROM goods;`)
						`SELECT goods.*, goods_categories.name FROM goods
						JOIN goods_categories
						ON goods_categories.id = goods.good_cat_id;`)
						
	.then((data) => {
		res.json(data.rows);
	})
});

router.get('/getusergoods/', (req, res) => {
	
	db.query(
		// `SELECT * FROM goods;`)
						`SELECT * ,goods_name 
						from request_goods
						JOIN goods 
						ON goods.id=request_goods.goods_id;
						`)
						
	.then((data) => {
		res.json(data.rows);
	})
});


router.put('/reqgoods', (req, res) => {
	const myJson= req.body;
	console.log("myjson1111",myJson);
	const id = req.body.id; 
	let qty= parseInt(req.body.qty);
	console.log("id n qty",id, qty);
	if(!qty)
	qty=1;

	db.query(`UPDATE goods
					 Set quantity = quantity-${qty}
					 WHERE id=$1 AND quantity>0
					 RETURNING *;
					`, [id])
.then(result => 
	{ console.log("qty",result.rows);
	const resultData = result.rows[0];
	console.log("quantity",result.rows[0]);


	}
)});

router.get('/getallgoods/:id', (req, res) => {
	console.log("req.params....",req.params);
 const id = req.params.id;
	db.query(`SELECT * FROM goods WHERE id=${id}`)
		.then((data) => {
			// console.log("id",id);
			res.json(data.rows);
		})
});

router.post("/addtocart",(req,res) => {
	const myJson = req.body;
		 console.log("myJson", myJson);
	const {uid,product_id} = req.body;
	return db.query(`
				INSERT INTO cart ( user_id,goods_id,date )
				VALUES ($1, $2, Now())
				RETURNING *;
			`, [uid,product_id]
			)
			.then(result => {
				res.send(result.rows) })
			.catch(err =>console.log(err))
})



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
				uid
			} = req.body;
			
			let userId = 	parseInt(uid);
			
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
