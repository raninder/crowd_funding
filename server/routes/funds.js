const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Session } = require("inspector");
module.exports = (db) => {
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
      router.post("/addnewfundrasing", (req, res) => {
        const myJson = req.body;
        console.log("myJson", myJson);
        const {
          id,category, title, story, img, goal
        } = myJson;
        // console.log('email', user_email);
        // const image = "www.example.com";
        db.query(`
              SELECT id FROM fund_categories WHERE name = '${category}';
              `)
          .then((res) => {
            // res.send(myJson);
            const cateId = res.rows[0].id;
            // const catId = 1;
            console.log('catId', cateId);
            userId = id;
            
            console.log('userID', userId + 3);
            db.query(`
            INSERT INTO fundraising ( user_id,fund_cat_id,title,img,story,goal )
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
    `			, [userId, cateId, title, img, story, goal])
          })
        // .then(res => console.log(res.rows))
        // .catch(err => console.log(err))
    
      });
      router.get('/donation',(req,res) => {
        db.query(`SELECT * FROM donation_money;`)
        .then((data) => {
          res.json(data.rows);
        }) 
      })
      router.post('/addnewdonation', (req,res) => {
        const myJson = req.body;
        console.log("myJson", myJson);
        const {
          amount,userid
        } = myJson;
        fundId = 1;
            // userId = userid;
            db.query(`
            INSERT INTO donation_money(user_id,fund_id,amount,date)
            VALUES($1,$2,$3,now())
            RETURNING *;
    `			, [userid, fundId, amount])
          })
     
    
      return router;
    };
    
        