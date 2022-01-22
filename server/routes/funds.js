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
    
        