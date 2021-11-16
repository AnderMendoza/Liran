const express = require("express");
const router = express.Router();

//Ruta Sergio : "empleados"
router.get("/", (req, res) => {
    res.render("empleados", {
        empleadosTable: [{
            id: "123456",
            nombre: "Sergio",
            apellido: "Quichca",
            edad: "19",
            nacionalidad:"Peruano"
        }, {
            id: "654321",
            nombre: "Eduardo",
            apellido: "Perez",
            edad: "21",
            nacionalidad: "Peruano"
        }]
    })
})

module.exports = router;