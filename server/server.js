const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;

// PG database client/connection setup
const db = require('./database');
const routes = require("./routes");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/users", routes(db));


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;