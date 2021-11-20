const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const auspiciadoresSchema = new Schema({
    empresa: String,
    relacion: String,
    vigencia: String,
    correo: String
})

const AUSPICIADORES = mongoose.model("AUSPICIADORES", auspiciadoresSchema)

module.exports=AUSPICIADORES