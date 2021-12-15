const express = require("express");
const router = express.Router();
const PROVEEDORES = require("../models/esquema_proveedores");

//Ruta Francisco : "proveedores"
router.get("/", async (req, res) => {
    try {
        const arrayDB = await PROVEEDORES.find();
        console.log(arrayDB)
        res.render("proveedores", {
            proveedoresTable: arrayDB
        })
    } catch (error) {
        console.log(error)
    }
})
router.get("/registrar", (req, res) => {
    res.render("registrar_proveedores")
})
router.post("/", async (req, res) => {
    const body = req.body;
    try {
        const proveedoresdb = new PROVEEDORES(body)
        await proveedoresdb.save()
        res.redirect("proveedores")
    } catch (error) {
        console.log(error)
    }
})

// mostrar un unico documento en la tabla
router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const proveedoresDB = await PROVEEDORES.findOne({ _id: id })
        res.render("detalle_auspi", {
            proveedor: proveedoresDB,
            error: false
        })

    } catch (error) {
        console.log(error)
        res.render("detalle_proveedor", {
            error: true,
            mensaje: "Lo sentimos , no pudimos encontra a este usuario"
        })
    }
})

//borrar un dato de la tabla
//Estamos utilizando delete y copturamos un id , ese id elimina el domcumento y
// nosotros respondes con un json y al usuario lo redirigimos
router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const proveedores_db = await PROVEEDORES.findByIdAndDelete({ _id: id })
        if (auspi_db) {
            res.json({
                estado: true,
                mensaje: "eliminado"
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
        const proveedores_db = await PROVEEDORES.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(proveedores_db)
        res.json({
            estado: true,
            mensaje:"editado"
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: "fallo"
        })
    }
})
// exportar modulo
module.exports = router