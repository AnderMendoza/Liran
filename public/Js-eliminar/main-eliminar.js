 const btn = document.getElementById("btn_eliminar");
btn.addEventListener('click',async()=>{
    console.log("le di click xd")
    //utilizamos fetch para procesar , recibe tmb una respuesta
    //una ves enviamos esa solicitud a traves de fetch , se eliminara el documento 
    //en el router delete y tendremos una respuesta en json
    const id = btn.dataset.id
    console.log("id",id)
    try {
        const data = await fetch(`/usuarios/${id}`, {
            method: 'delete'
        })
        // es una respuesta en json. porque tenemos en la respuesta un estado true o flase , podemos leerlo
        const res = await data.json()
        //procesemos la respuesta , esa respuesta tiene lo que pusimos en el router deleter que es stado , en json
        if (res.estado) {
            //redirigimos al usuario si la respuesta es positiva
            window.location.href = "/usuarios"
        } else {
            console.error(res)
        }
    } catch (error) {
        console.log(error)
    }
})

const formularioEditar = document.getElementById("formularioEditar");
formularioEditar.addEventListener("submit",async (e)=> {
    e.preventDefault()
    const nombre = formularioEditar.elements['nombre'].value;
    const apellido = document.getElementById("apellidoInput").value;
    const correo = document.getElementById("correoInput").value;
    const id_plagas = formularioEditar.dataset.id
    console.log(nombre, apellido, correo, id_plagas)
    try {
        const data = await fetch(`/usuarios/${id_plagas}`,{
            method:'put',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({nombre,apellido,correo})
        })
        const res = await data.json()
        console.log(res)
        if(res.estado){
             window.location.href = "/usuarios"
         }else{
             console.log(res)
         }
    } catch (error) {
        console.log(error)
    }
})