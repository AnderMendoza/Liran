const express = require("express")
const router = express.Router()
const PRODUCTOS = require("../models/esquema_productos")

router.get("/",async (req,res)=>{
    try {
        const arrayproductosdb = await PRODUCTOS.find()
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
        const productosdb = new PRODUCTOS(body)
        await productosdb.save()
        res.redirect("productos")
    } catch (error) {
        console.log(error)
    }
})

// mostrar un unico documento en la tabla
router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const productosdb = await PRODUCTOS.findOne({_id:id})
        res.render("detalle_productos", {
            producto: productosdb,
            error:false
        })

    } catch (error) {
        console.log(error)
        res.render("detalle_productos", {
            error: true,
            mensaje:"Lo sentimos , no pudimos encontra a este usuario"
        })
    }
})
//borrar un dato de la tabla
//Estamos utilizando delete y copturamos un id , ese id elimina el domcumento y
// nosotros respondes con un json y al usuario lo redirigimos
router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const productosdb = await PRODUCTOS.findByIdAndDelete({_id:id})
        if (productosdb) {
            res.json({
                estado: true,
                mensaje:"eliminado"
            })
        } else {
            res.json({
                estado: false,
                mensaje: "fallo eliminar"
            })
        }
    } catch (error) {
        console.log(error)
    }
}
)
router.put("/:id", async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        const productosdb = await PRODUCTOS.findByIdAndUpdate(id, body, { useFindAndModify: false })
        res.json({
            estado: true,
            mensaje:"editado"
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje:"fallo"
        })
    }
})
//exportar modulo
module.exports = router