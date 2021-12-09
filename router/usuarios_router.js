const express = require("express");
const router = express.Router();
const USUARIO = require("../models/esquema_usuarios");

//leer documentos en la base de datos
router.get("/",async (req, res) => {
    try {
        const arrayUsuarioDB = await USUARIO.find()
        res.render("usuarios", {
            ArrayUsuarios: arrayUsuarioDB
        })
    } catch (error) {
        console.log(error)
    }
    })

router.get("/registrar", (req, res) => {
        res.render("registrar_usuarios")
})
//insertar datos a las tablas a través de un body-parser
router.post("/", async (req, res) => {
    const body = req.body;
    try {
        const usuarioDB = new USUARIO(body)
        await usuarioDB.save()
        res.redirect("usuarios")
    } catch (error) {
        console.log(error)
    }
})

// mostrar un unico documento en la tabla
router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        
        const usuarioDB = await USUARIO.findOne({_id:id})
        res.render("detalle_usuario", {
            usuario: usuarioDB,
            error:false
        })

    } catch (error) {
        console.log(error)
        res.render("detalle_usuario", {
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
        const usuarioDB = await USUARIO.findByIdAndDelete({ _id: id })
        if (usuarioDB) {
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
    const body =req.body
    try { 
        const usuarioDB = await USUARIO.findByIdAndUpdate(id, body, { useFindAndModify: false });
        res.json({
            estado: true,
            mensaje:'editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'fallo'
        })
    }
})
module.exports = router;