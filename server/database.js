
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect(() =>  console.log(`Connected to database`));


// get all users from database
const getAllGoods = () => {
		return db
			.query(`
			SELECT *
			FROM goods;
			`)
			.then(res => res.rows);
};
exports.getAllGoods = getAllGoods;
exports.db = db;