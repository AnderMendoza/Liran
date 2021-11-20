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
router.get("/registrar", (req, res) => {
    res.render("registrar_producto")
})
//insertar datos a las tablas a través de un body-parser
router.post("/", async (req, res) => {
    const body = req.body;
    try {
        const productodb = new PRODUCTOS(body)
        await productodb.save()
        res.redirect("productos")
    } catch (error) {
        console.log(error)
    }
})
//exportar modulo
module.exports = router