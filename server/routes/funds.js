const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Session } = require("inspector");
module.exports = (db) => {
    router.get('/getallfundraising', (req, res) => {
        db.query(`SELECT * FROM fundraising;`)
          .then((data) => {
            console.log("hi");
            res.json(data.rows);
          })
      });

      router.get('/getallfundraising/:id', (req, res) => {
        console.log("req.params",req.params);
       const id = req.params.id;
        db.query(`SELECT * FROM fundraising WHERE id=${id}`)
          .then((data) => {
            // console.log("id",id);
            res.json(data.rows);
          })
      });

      router.get('/getallfundCategories', (req, res) => {
        db.query(`SELECT * FROM fund_categories;`)
          .then((data) => {
            res.json(data.rows);
          })
      });
      router.post("/addnewfundraising", (req, res) => {
        const myJson = req.body;
        console.log("myJson", myJson);
        let {
          id,category, title, story, img, goal
        } = myJson;
        if(img = '')
        img = "https://www.workingmother.com/sites/workingmother.com/files/styles/opengraph_1_91x1/public/images/2017/09/holding-hands.jpg?itok=1GVLgWXK"
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
            INSERT INTO fundraising ( user_id,fund_cat_id,title,img,story,goal,amountraising )
            VALUES ($1, $2, $3, $4, $5, $6, 0)
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
          amount,userid,fundid
        } = myJson;
        // fundid = 1;
            // userId = userid;
            db.query(`
            INSERT INTO donation_money(user_id,fund_id,amount,date)
            VALUES($1,$2,$3,now())
            RETURNING *;
    `			, [userid, fundid, amount])
    .then((res) => {
      db.query(`UPDATE fundraising
      Set amountraising = amountraising + $1
      WHERE id=$2
      RETURNING *;
     `, [amount,fundid])
     })
    })
    
     
    
      return router;
    };
    
        