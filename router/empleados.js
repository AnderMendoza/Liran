const express = require("express");
const router = express.Router();
const EMPLEADO = require("../models/esquema_empleados");

//Ruta Sergio : "empleados"
router.get("/", async (req, res) => {
    try {
        const arrayDB = await EMPLEADO.find();
        res.render("empleados", {
            empleadosTable: arrayDB
        })
    } catch (error) {
        console.log(error)
    }
 })

module.exports = router;