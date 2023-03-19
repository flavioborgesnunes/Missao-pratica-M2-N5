const mongoose = require("../database");

const LivroSchema = new mongoose.Schema({
  codigo: {
    type: Number,
  },

  codEditora: {
    type: Number,
    require: true,
  },

  titulo: {
    type: String,
    require: true,
  },

  resumo: {
    type: String,
    require: true,
  },

  autores: {
    type: [String],
  },
});

const Livro = mongoose.model("Livro", LivroSchema);

module.exports = Livro;
