// const db = require("../connections/db.js");

const getAllArticles = () => {
  return db("articles").select("id", "title", "date", "body").orderBy("title");
};

const getArticle = (article_id) => {
  return db("articles").select("id", "title", "date", "body").where({ id: article_id });
};

const searchArticles = (article_title) => {
  return db("articles").select("id", "title", "date", "body").whereILike("title", `${article_title}%`);
};

const newArticle = (new_article) => {
  return db("articles").insert(new_article).returning("*");
};

const updateArticle = (id, article) => {
  return db("articles").update(article).where({ id: id }).returning("*");
};

const deleteArticle = (id) => {
  return db("articles").where({ id: id }).delete().returning("*");
};

module.exports = {
  getAllArticles,
  getArticle,
  searchArticles,
  newArticle,
  updateArticle,
  deleteArticle,
};
