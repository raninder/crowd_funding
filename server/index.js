require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;

const corsOptions = {origin: '*'};

// PG database setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect(() =>  console.log(`Connected to database`));


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

const goodsRoutes = require("./routes/goods");
const userRoutes = require("./routes/users");

// Mount all resource routes

app.use("/api/goods", goodsRoutes(db));
app.use("/api/users", userRoutes(db));

// const routes = require("./routes");
// app.use("/api", routes(db));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
