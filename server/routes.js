
const express = require("express");
const router = express.Router();
//  const database = require("./database");

module.exports = (db) => {
	console.log(db);
  router.get('/', (req, res) => {
		    db.query(`SELECT * FROM goods;`)
		    .then((data) => {
		      res.json(data.rows);
		    })
		  });
	return router;
};



