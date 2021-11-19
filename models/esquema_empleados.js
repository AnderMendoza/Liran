const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empleadoSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: String,
    edad:String
})

const EMPLEADO = mongoose.model("EMPLEADO", empleadoSchema)

module.exports=EMPLEADO