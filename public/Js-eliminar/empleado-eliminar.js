const btn = document.getElementById("btn_eliminar-empleado");
btn.addEventListener('click', async () => {
    //utilizamos fetch para procesar , recibe tmb una respuesta
    //una ves enviamos esa solicitud a traves de fetch , se eliminara el documento 
    //en el router delete y tendremos una respuesta en json
    const id = btn.dataset.id
    try {
        const data = await fetch(`/empleados/${id}`, {
            method: 'delete'
        })
        // es una respuesta en json. porque tenemos en la respuesta un estado true o flase , podemos leerlo
        const res = await data.json()
        //procesemos la respuesta , esa respuesta tiene lo que pusimos en el router deleter que es stado , en json
        if (res.estado) {
            //redirigimos al usuario si la respuesta es positiva
            window.location.href = "/empleados"
        } else {
            console.error(res)
        }
    } catch (error) {
        console.log(error)
    }
})
const formularioEditar = document.getElementById("formularioEditar");
formularioEditar.addEventListener("submit", async(e) => {
    e.preventDefault()
    const nombreEmpleado = document.getElementById("nombreEmpleado").value
    // let nombreEmpleado_uno =(nombreEmpleado.value)
    const apellidoEmpleado = document.getElementById("apellidoEmpleado").value
    // let apellidoEmpleado_uno =(apellidoEmpleado.value)
    const correoEmpleado = document.getElementById("correoEmpleado").value
    // let correoEmpleado_uno=(correoEmpleado.value)
    const edadEmpleado = document.getElementById("edadEmpleado").value
    // let edadEmpleado_uno = (edadEmpleado.value)
    // console.log(nombreEmpleado_uno, apellidoEmpleado_uno, correoEmpleado_uno, edadEmpleado_uno)
    const id = formularioEditar.dataset.id
     try {
        const data = await fetch(`/empleados/${id}`,{
            method:'put',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({nombreEmpleado,apellidoEmpleado,correoEmpleado,edadEmpleado})
        })
        const res = await data.json()
        console.log(res)
        if(res.estado){
            window.location.href = "/empleados"
        }else{
            console.log(res)
        }
    } catch (error) {
        console.log(error)
    }
})