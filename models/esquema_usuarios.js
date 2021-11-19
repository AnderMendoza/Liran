const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    nombre:String,
    apellido:String,
    correo:String,
})

const USUARIO = mongoose.model("USUARIO", usuarioSchema)

//exportar modulo
module.exports = USUARIO
