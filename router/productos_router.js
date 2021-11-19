const express = require("express")
const router = express.Router()
const PRODUCTOS = require("../models/esquema_productos")

router.get("/",async (req,res)=>{
    try {
        const arrayproductosdb = await PRODUCTOS.find()
        console.log(arrayproductosdb)

        res.render("productos",{
            arrayproductos:arrayproductosdb
        })
    } catch (error) {
        console.log(error)
    }
})

//exportar modulo
module.exports = router