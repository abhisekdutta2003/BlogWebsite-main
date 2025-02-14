const express = require("express");
const articlesRouter = require("./routes/articles");
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv')
const Article=require('./models/article')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSOWRD

mongoose.connect(`mongodb+srv://${username}:${password}@charliee01.qqyy2ji.mongodb.net/blogWebsiteDB`)


app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))


app.get("/", async (req, res) => {
const articles = await Article.find().sort({createdAt:'desc'});
  res.render("articles/index", { articles: articles });

});

app.use("/articles", articlesRouter);

app.listen(70000);
