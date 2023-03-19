const mongoose = require("mongoose");
/* Modifique a conexão do banco de dados MongoDB de acordo com a sua instalação.
*/
mongoose
  .connect(
    "mongodb://desenv:Fortaleza@127.0.0.1:27017/?authMechanism=DEFAULT&directConnection=true"
  )
  .then(() => {
    console.log("Conectado ao MongoDB!");
  })
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;
