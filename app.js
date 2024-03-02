const express = require("express");
const app = express();

const router = require("./routes/student");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => {
  console.log("server is running");
});
