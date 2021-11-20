const express = require("express")
const router = express.Router()
const PLAGAS = require("../models/esquema_plagas")

router.get("/",async (req,res)=>{
    try {
        const arrayplagasdb = await PLAGAS.find()
        res.render("plagas",{
            arrayplagas:arrayplagasdb
        })
    } catch (error) {
        console.log(error)
    }
})

//exportar modulo
module.exports = router