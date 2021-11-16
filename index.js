//requerimiento de express para el proyecto
const express = require("express");
const server = express();
//puero 3000 que es por defecto 
const puerto = 3000;

//intalacion de los template engines , osea los ejs 
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");

//direccion de la carpeta "public" donde ira archivos front-end que visualizará
//el cliente
server.use(express.static(__dirname + "/public"));

//Primera ruta a configurar
server.get("/", (req,res) => {
    res.send("Aqui va la persona encargada del inicio")
})

//Ruta(Router) Sergio : "empleados"
server.use("/empleados", require("./router/empleados"));

//Error 404 en ejs
server.use((req, res, next) => {
    res.status(404).render("error_404");
})


server.listen(puerto, () => {
    console.log("Todo salio bien")
})



