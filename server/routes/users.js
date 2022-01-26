const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Session } = require("inspector");

// const cookieSession = require('cookie-session');
// app.use(cookieSession({
// 	name: 'session',
// 	keys: ["user_id"]
// }));


const getUserByEmail = (users, email) => {
  const user = users.find(element => element.email === email);
  // console.log("email===", user);
  return user;
};
const authenticateUser = (users, email, password) => {
  const userFound = getUserByEmail(users, email);
  // console.log("email", userFound)
  if (userFound && bcrypt.compareSync(password, userFound.passwordhash)) {
    return userFound;
  }
  return false;
};

module.exports = (db) => {

  router.post('/login', (req, res) => {
    // console.log("login successful", req.body);
    const email = req.body.email;
    const password = req.body.password;
    db.query(`SELECT id,email,passwordhash FROM users;`)
      .then((data) => {
        console.log(data.rows)
        const users = data.rows;
        // console.log("login successful", users)
        const result = authenticateUser(users, email, password);
        // console.log("hello", result)
        if (result) {
        // req.session = {userId:result.id};
				console.log("result");
          // res.redirect('/');
					
          return res.status(200).send({message:"success",id:result.id,email:result.email});
          
        } else {
          return res.status(403).send("Username and password does not match");
        }
      })

  });


  // logout post
  router.post('/logout', (req, res) => {
    // req.session = null;
    // res.clearCookie('user_id');
    // res.redirect('/');
  });
  router.get('/getallusers', (req, res) => {
    db.query(`SELECT * FROM users;`)
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
  return router;
};