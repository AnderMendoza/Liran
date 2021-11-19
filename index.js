//requerimiento de express para el proyecto
const express = require("express");
//requerir de mongoose
const mongoose = require("mongoose");
//requerimiento de express 
const server = express();
//puero 3000 que es por defecto 
const puerto = 3000;
//conectar a mongoDB
const user = "Anderson";
const password = "12345";
const dbname = "Liran";
const uri = `mongodb+srv://${user}:${password}@clusteram.9pggx.mongodb.net/${dbname}?retryWrites=true&w=majority
`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('conectado a mongodb'))
    .catch(e => console.log('error de conexión', e))

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

//Ruta usuarios : Sergio

server.use("/usuarios", require("./router/usuarios_router"));


//Error 404 en ejs
server.use((req, res, next) => {
    res.status(404).render("error_404");
})


server.listen(puerto, () => {
    console.log("Todo salio bien")
})


