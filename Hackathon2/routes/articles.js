const express = require("express");
const router = express.Router();
const {
  _getAllArticles,
  _getArticle,
  _searchArticles,
  _newArticle,
  _updateArticle,
  _deleteArticle,
  renderHome,
  renderArticlesPage,
  renderAdminUI,
} = require("../controllers/articles.js");

router.get("/adminUI", renderAdminUI);
router.get("/home", renderHome);
router.get("/articles", renderArticlesPage);
router.get("/articles/search", _searchArticles);
router.get("/articles/:id", _getArticle);
router.get("/getarticles", _getAllArticles);
router.post("/articles", _newArticle);
router.put("/:id", _updateArticle);
router.delete("/:id", _deleteArticle);
module.exports = router;
