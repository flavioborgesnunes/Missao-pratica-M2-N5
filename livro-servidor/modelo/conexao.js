const banco = require("mongoose");
const option = {useUnifiedTopology:true, useNewUrlParser:true};

banco
  .connect(
    "mongodb://desenv:Fortaleza@127.0.0.1:27017/?authMechanism=DEFAULT&directConnection=true"
  )
  .then(() => {
    console.log("Conectado ao MongoDB!");
  })
  .catch((err) => console.log(err));

banco.Promise = global.Promise;

module.exports = banco;

export default banco;