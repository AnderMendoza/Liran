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
router.get("/registrar", (req, res) => {
    res.render("registrar_auspiciadores")
})
router.post("/", async (req, res) => {
    const body = req.body;
    try {
        const auspiciadordb = new AUSPICIADORES(body)
        await auspiciadordb.save()
        res.redirect("auspiciadores")
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;