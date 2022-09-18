const { getAllArticles, getArticle, searchArticles, newArticle, updateArticle, deleteArticle } = require("../modules/articles.js");

const _getAllArticles = (req, res) => {
  getAllArticles()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _getArticle = (req, res) => {
  getArticle(req.params.id)
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ msg: "not found" });
      }
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _searchArticles = (req, res) => {
  searchArticles(req.query.q)
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ msg: "not found" });
      }
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _newArticle = (req, res) => {
  newArticle(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _updateArticle = (req, res) => {
  updateArticle(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const _deleteArticle = (req, res) => {
  deleteArticle(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ msg: "not found" });
    });
};

const renderHome = (req, res) => {
  res.render("pages/index", {
    title: "Home",
  });
};

const renderArticlesPage = (req, res) => {
  res.render("pages/articles", {
    title: "Articles",
  });
};

const renderAdminUI = (req, res) => {
  res.render("pages/adminUI", {
    title: "Admin UI",
  });
};

module.exports = {
  _getAllArticles,
  _getArticle,
  _searchArticles,
  _newArticle,
  _updateArticle,
  _deleteArticle,
  renderHome,
  renderArticlesPage,
  renderAdminUI,
};
