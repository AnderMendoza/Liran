const express = require("express");
const router = express.Router();
const AUSPICIADORES = require("../models/esquema_auspiciadores");

//Ruta jerson : "auspiciadores"
router.get("/", async (req, res) => {
    try {
        const arrayDB = await AUSPICIADORES.find();
        console.log(arrayDB)
        res.render("auspiciadores", {
            auspiciadoresTable: arrayDB
        })
    } catch (error) {
        console.log(error)
    }
})
router.get("/registrar", (req, res) => {
    res.render("registrar_auspiciadores")
})
router.post("/", async (req, res) => {
    const body = req.body;
    try {
        const auspiciadordb = new AUSPICIADORES(body)
        await auspiciadordb.save()
        res.redirect("auspiciadores")
    } catch (error) {
        console.log(error)
    }
})

// mostrar un unico documento en la tabla
router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const auspiDB = await AUSPICIADORES.findOne({ _id: id })
        res.render("detalle_auspi", {
            auspiciador: auspiDB,
            error: false
        })

    } catch (error) {
        console.log(error)
        res.render("detalle_auspi", {
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
        const auspi_db = await AUSPICIADORES.findByIdAndDelete({ _id: id })
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
        const auspi_db = await AUSPICIADORES.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(auspi_db)
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