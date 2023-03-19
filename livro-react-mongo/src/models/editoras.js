const mongoose = require("../database");

const EditoraSchema = new mongoose.Schema({
  codigo: {
    type: Number,
  },

  nome: {
    type: String,
    require: true,
  },
});

const Livro = mongoose.model("Produto", LivroSchema);

module.exports = Livro;
