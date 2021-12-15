const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const proveedoresSchema = new Schema({
    empresa:String,
    correo:String,
    vigencia:String,
})

const PROVEEDORES = mongoose.model("PROVEEDORES", proveedoresSchema)

//exportar modulo
module.exports = PROVEEDORES