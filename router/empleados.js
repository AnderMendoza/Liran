const express = require("express");
const router = express.Router();
const EMPLEADO = require("../models/esquema_empleados");

//Ruta nick : "empleados"
router.get("/", async (req, res) => {
    try {
        const arrayDB = await EMPLEADO.find();
        res.render("empleados", {
            empleadosTable: arrayDB
        })
    } catch (error) {
        console.log(error)
    }
})
router.post("/", async (req, res) => {
    const body = req.body;
    try {
        const empleadosdb = new EMPLEADO(body)
        await empleadosdb.save()
        res.redirect("empleados")
    } catch (error) {
        console.log(error)
    }
})
router.get("/registrar", (req, res) => {
    res.render("registrar_empleados")
})


// mostrar un unico documento en la tabla
router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {

        const empleadosDB = await EMPLEADO.findOne({ _id:id})
        res.render("detalle_empleados", {
            empleadoarray: empleadosDB,
            error: false
        })

    } catch (error) {
        console.log(error)
        res.render("detalle_empleados", {
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
        const empleaditoDB = await EMPLEADO.findByIdAndDelete({ _id:id})
        if (empleaditoDB) {
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

//exportar modulo
module.exports = router