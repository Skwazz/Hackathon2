const express = require('express');
const cors = require('cors');
const article_router = require('./routes/articles.js');
const dotenv = require('dotenv');
path = require('path'); // No const?
dotenv.config();

// BUG: Can't test db, invalid credentials

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(article_router);
app.set('view engine', 'ejs');
app.listen(process.env.port || 8080, () => {
    console.log('running on port ', process.env.port || 8080);
});
// TODO: Should add '*' route to handle non existant routes (especially if there's no home route)/ or at least some redirection
app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
// app.use("/", express.static(__dirname + "/public"));
// last change
