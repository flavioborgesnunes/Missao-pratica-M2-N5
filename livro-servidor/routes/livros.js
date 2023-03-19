// import { incluir, excluir, obterLivros } from "../modelo/livro-dao";

const express = require("express");
const route = express.Router();

// const controller = require("../modelo/livro-dao");
const services = require("../modelo/livro-dao");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/", services.obterLivros);
route.post("/", services.incluir);
route.delete("/", services.excluir);

/**
 *  @description API Route
 */
// route.post("/api/produtos", controller.incluir);
// route.get("/api/produtos", controller.lista);
// route.put("/api/produtos/:id", controller.update);
// route.delete("/api/produtos/:id", controller.delete);

module.exports = route;
export default route;
