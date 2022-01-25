require("dotenv").config();
require("dotenv").config({path: '.env'});
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const userRoutes = require("./routes/users");
const fundRoutes = require("./routes/funds");
const goodsRoutes = require("./routes/goods");
const paysRoutes = require("./routes/pays");
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");

const app = express();
const PORT = process.env.PORT || 3001;
const corsOptions = {origin: '*'};

// PG database setup

const db = new Pool(dbParams);
db.connect(() =>  console.log(`Connected to database`));
console.log(db)

// const routes = require("./routes");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));


// Mount all resource routes

app.use("/api/goods", goodsRoutes(db));
app.use("/api/users", userRoutes(db));
app.use("/api/funds", fundRoutes(db));
app.use("/api/pays", paysRoutes(db));
// const routes = require("./routes");
//const goodsRoutes = require("./routes/goods");
// const userRoutes = require("./routes/users");

// Mount all resource routes
//app.use("/api/goods", goodsRoutes(db));
// app.use("/api/users", userRoutes(db));

// const routes = require(“./routes”);
// app.use(“/api”, routes(db));
// app.use("/api", routes(db));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


