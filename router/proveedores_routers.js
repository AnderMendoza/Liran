const express = require("express")
const router = express.Router()
const PROVEEDORES = require("../models/esquema_proveedores")

router.get("/", async (req, res) => {
    try {
        const arrayproveedoresdb = await PROVEEDORES.find()
        res.render("proveedores",{
            arrayproveedores:arrayproveedoresdb
        })
    } catch (error) {
        console.log(error)
    }
})

//exportar modulo
module.exports = router