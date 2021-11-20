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
router.post("/", async (req, res) => {
    const body = req.body;
    try {
        const empleadosdb = new EMPLEADO(body)
        await empleadosdb.save()
        res.redirect("empleados")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;