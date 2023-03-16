import banco from "./conexao";

const LivroSchema = banco.Schema;

LivroSchema ={
    _id : banco.Schema.Types.ObjectId,
    titulo : String,
    codEditora : Number,
    resumo : String,
    autores : [String],
}

