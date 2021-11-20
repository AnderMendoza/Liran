const express = require("express");
const router = express.Router();
const AUSPICIADORES = require("../models/esquema_auspiciadores");

//Ruta Sergio : "auspiciadores"
router.get("/", async (req, res) => {
    try {
        const arrayDB = await AUSPICIADORES.find();
        console.log(arrayDB)
        res.render("auspiciadores", {
            auspiciadoresTable: arrayDB
        })
    } catch (error) {
        console.log(error)
    }
 })
router.get("/registro",(req,res)=>{
    res.render("demo")
})
module.exports = router;