const express = require("express");
const cors = require("cors");
const article_router = require("./routes/articles.js");
const dotenv = require("dotenv");
path = require("path");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(article_router);
app.set("view engine", "ejs");
app.listen(process.env.port || 8080, () => {
  console.log("running on port ", process.env.port || 8080);
});
app.use(express.static(__dirname + "/public"));
// console.log(__dirname);
// app.use("/", express.static(__dirname + "/public"));
