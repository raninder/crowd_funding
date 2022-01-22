// const request = require('request');
//  const fetch = require('cross-fetch');
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Session } = require("inspector");
const getUserByEmail = (users, email) => {
  for (let key of users) {
    if (users[key].email === email) {
      return users[key];
    }
  }
  return false;
};
const authenticateUser = (users, email, password) => {
  const userFound = getUserByEmail(users, email);
  if (userFound && bcrypt.compareSync(password, userFound.password)) {
    return userFound;
  }
  return false;
};

module.exports = (db) => {

  router.post('/login', (req, res) => {
    console.log("login successful")
    const email = req.body.email;
    const password = req.body.password;
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = res.json(data.rows);

        const result = authenticateUser(users, email, password);
        if (result) {
          req.session.userId = result.id;
          res.redirect('/');
        } else {
          return res.status(403).send("Username and password does not match");
        }
      })
  });


  // logout post
  router.post('/logout', (req, res) => {
    req.session = null;
    // res.clearCookie('user_id');
    // res.redirect('/');
  });

  
  
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
  router.get('/getallfundrising', (req, res) => {
    db.query(`SELECT * FROM fundraising;`)
      .then((data) => {
        res.json(data.rows);
      })
  });
  router.get('/getallfundCategories', (req, res) => {
    db.query(`SELECT * FROM fund_categories;`)
      .then((data) => {
        res.json(data.rows);
      })
  });

  router.post("/register", (req, res) => {
    console.log("hello", req.body);
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
    // console.log("hello",req.body.values);
    const passwordhash = bcrypt.hashSync(password, 8);

    db.query(
      `
			INSERT INTO users(email,passwordhash,first_name, last_name,phone_number,s_address,city,state,post_code)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
			RETURNING *;
			`,
      [email, passwordhash, first_name, last_name, phone, street, city, province, postal]
    )
      .then(res => console.log(res.rows));
  })

  // add donate goods data to goods table


  router.post("/addnewgoods", (req, res) => {
    const myJson = req.body;
    console.log("myJson", myJson);
    const {
      category,
      company,
      condition,
      size,
      quantity,
      desc
    } = myJson;

    const image = "www.example.com";
    db.query(` 
					INSERT INTO goods_categories (name)
					VALUES ($1)
					RETURNING *;
					`, [category])
      .then((res) => {
        // res.send(myJson);
        const catId = res.rows[0].id;
        const userId = 1;

        db.query(`
					INSERT INTO goods ( user_id,good_cat_id,size,quantity,img,company,condition,description )
					VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
					RETURNING *;
	`			, [userId, catId, size, quantity, image, company, condition, desc])
      })
      .then(res => console.log(res.rows))
      .catch(err => console.log(err))

  });


  // add fundrasing


  router.post("/addnewfundrasing", (req, res) => {
    const myJson = req.body;
    console.log("myJson", myJson);
    const {
      category, title, story, img, goal
    } = myJson;

    // const image = "www.example.com";
    db.query(`
          SELECT id FROM fund_categories WHERE name = '${category}';
          `)
      .then((res) => {
        // res.send(myJson);
        const cateId = res.rows[0].id;
        // const catId = 1;
        console.log('catId', cateId);
        const userId = 1;

        db.query(`
        INSERT INTO fundraising ( user_id,fund_cate_id,title,img,story,goal )
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
`			, [userId, cateId, title, img, story, goal])
      })
    // .then(res => console.log(res.rows))
    // .catch(err => console.log(err))

  });

  return router;
};

