const express = require("express")
const router = express.Router()
const PLAGAS = require("../models/esquema_plagas")

//leer documentos en la base de datos
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

router.get("/registrar", (req, res) =>{
        res.render("registrar_plagas")
})

//insertar datos a las tablas a través de un body-parser
router.post("/", async (req, res) =>{
    const body = req.body;
    try {
        const plagasdb = new PLAGAS(body)
        await plagasdb.save()
        res.redirect("plagas")
    } catch (error) {
        console.log(error)
    }
})


// mostrar un unico documento en la tabla
router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const plagasdb = await PLAGAS.findOne({_id:id})
        res.render("detalle_plagas", {
            ratoncito: plagasdb,
            error: false
        })
    
    } catch (error) {
        console.log(error)
        res.render("detalle_plagas", {
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
        const plagas_db = await PLAGAS.findByIdAndDelete({ _id:id})
        if (plagas_db) {
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
        const plagas_dba = await PLAGAS.findByIdAndUpdate(id, body, { useFindAndModify: false });
        res.json({
            status: true,
            mensaje:'editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: false,
            mensaje: 'fallo'
        })
    }
})
// exportar modulo
module.exports = router