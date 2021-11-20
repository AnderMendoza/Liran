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

//Insertar datos
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

//unico formulario
// router.get("/:id", async (req, res) => {
//     const id = req.params.id
//     try {
      
//         const usuarioDB = await PLAGAS.findOne({_id:id})
//         res.render("detalle_plagas", {
//             usuario: usuarioDB,
//             error:false
//         })

//     } catch (error) {
//         console.log(error)
//         res.render("detalle_plagas", {
//             error: true,
//             mensaje_plagas:"Lo sentimos, no pudimos encontra su registro"
//         })
//     }
// })

// //Borrar un dato de la tabla
// router.delete("/:id", async (req, res) =>{
//     const id =req.params.id
//     try {
//         const plagasdb = await PLAGAS.findByIdAndDelete({ _id: id })
//         if (plagasdb) {
//             res.json({
//                 estado: true,
//                 mensaje: "Se eliminó muy bien"
//             })
//         } else {
//             res.json({
//                 estado: false,
//                 mensaje:"No se eliminó"
//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// )

//exportar modulo
module.exports = router