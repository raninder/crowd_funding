// const request = require('request');
//  const fetch = require('cross-fetch');
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Session } = require("inspector");


module.exports = (db) => {
	console.log(db);
  router.get('/getallgoods', (req, res) => {
		    db.query(`SELECT * FROM goods;`)
		    .then((data) => {
		      res.json(data.rows);
		    })
		  });

			router.get('/getallusers', (req, res) => {
		    db.query(`SELECT * FROM users;`)
		    .then((data) => {
		      res.json(data.rows);
		    })
		  });			

	router.post("/register", (req,res) => {
		const {
				first_name,
				last_name,
				phone,
				email,
				street,
				city,
				province,
				postal,
				password 
				} = req.body.values;
				const passwordhash = bcrypt.hashSync(password, 8);

				db.query(
							`
							INSERT INTO users(email, passwordhash,first_name, last_name,phone_number,s_address,city,state,post_code)
							VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
							RETURNING *;
							`,
							[email, passwordhash,first_name,last_name,phone,street,city,province,postal]
						)
						.then(res => console.log(res.rows));
	})

		// add donate goods data to goods table


	router.post("/addNewGoods", (req, res) => {
		const myJson = req.body;
			console.log("myJson", myJson);
			const {
					category,
					company,
					condition,
					size,
					qty,
					image,
					desc
				} = req.body.values;
				
					db.query(` 
					INSERT INTO goods_categories (name)
					VALUES ($1)
					RETURNING *;
					`, [category])
				.then((res) => {
					// res.send(myJson);
					const catId = res.rows[0].id;
					const userId = req.params.id;
					db.query(`
					INSERT INTO goods ( user_id,good_cat_id,size,quantity,img,company,condition,description )
					VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
					RETURNING *;
	`			, [userId,catId,size,qty,image,company,condition,desc ])
				})
				.then(res => console.log(res.rows));
				
			});

	return router;
};





