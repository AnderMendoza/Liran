const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productosSchema = new Schema({
    nombre:String,
    marca:String,
    precio:String
})

const PRODUCTOS = mongoose.model("PRODUCTOS", productosSchema)

//exportar modulo
module.exports = PRODUCTOS