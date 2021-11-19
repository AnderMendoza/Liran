const express = require("express");
const router = express.Router();
const USUARIO = require("../models/esquema_usuarios");

router.get("/",async (req, res) => {
    try {
        const arrayUsuarioDB = await USUARIO.find()
        console.log(arrayUsuarioDB)
        res.render("usuarios", {
            ArrayUsuarios: arrayUsuarioDB
        })
    } catch (error) {
        console.log(error)
    }
    })

module.exports = router;