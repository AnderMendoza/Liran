const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("usuarios", {
        ArrayUsuarios: [{
            nombre: "juan",
            apellido: "lopez",
            correo: "juan@gmail.com"
        }, {
            nombre: "eduardo",
            apellido: "perez",
            correo: "eduardo@gmail.com"
        }]
    })
})

module.exports = router;