const mongoose = require("../database");

const LivroSchema = new mongoose.Schema({
  
  titulo: {
    type: String,
    require: true,
  },

  resumo: {
    type: String,
    require: true,
  },
  codEditora: {
    type: Number,
    require: true,
  },
  autores: {
    type: [String],
  },
});

const Livro = mongoose.model("Livro", LivroSchema);

module.exports = Livro;
