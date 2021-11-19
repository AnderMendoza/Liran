const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const plagasSchema = new Schema({
    Nombre_Persona:String,
    Plagas:String,
    Email:String,
    Fecha_Dis:String, 
})

const PLAGAS = mongoose.model("PLAGAS", plagasSchema)

//exportar modulo
module.exports = PLAGAS

