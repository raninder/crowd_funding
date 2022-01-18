const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

module.exports = (db) => {

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
				} = req.body;
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
	});
	return router;
};