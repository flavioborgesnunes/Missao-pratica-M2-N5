const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("http://localhost:3000/api/livros")
    .then(function (response) {
      res.render("index", { livros: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.novo_livro = (req, res) => {
  res.render("novo_livro");
};

exports.atualizar_livro = (req, res) => {
  axios
    .get("http://localhost:3000/api/livros", { params: { id: req.query.id } })
    .then(function (response) {
      res.render("atualizar_livro", { livro: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
