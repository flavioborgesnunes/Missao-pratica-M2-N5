const express = require("express");
const route = express.Router();

const controller = require("../controllers/controleLivros");
const services = require("../service/render");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/", services.homeRoutes);
route.get("/novo_livro", services.novo_livro);
route.get("/atualizar_livro", services.atualizar_livro);

/**
 *  @description API Route
 */
route.post("/api/livros", controller.cadastrar);
route.get("/api/livros", controller.lista);
route.put("/api/livros/:id", controller.update);
route.delete("/api/livros/:id", controller.delete);

module.exports = route;
