const btn = document.getElementById("btn_eliminar-plagas");
btn.addEventListener('click', async () => {
    //utilizamos fetch para procesar , recibe tmb una respuesta
    //una ves enviamos esa solicitud a traves de fetch , se eliminara el documento 
    //en el router delete y tendremos una respuesta en json
    const id = btn.dataset.id
    try {
        const data = await fetch(`/plagas/${id}`, {
            method: 'delete'
        })
        // es una respuesta en json. porque tenemos en la respuesta un estado true o flase , podemos leerlo
        const res = await data.json()
        //procesemos la respuesta , esa respuesta tiene lo que pusimos en el router deleter que es stado , en json
        if (res.estado) {
            //redirigimos al usuario si la respuesta es positiva
            window.location.href = "/plagas"
        } else {
            console.error(res)
        }
    } catch (error) {
        console.log(error)
    }
})
const formularioEditarPlagas = document.getElementById("formularioEditarPlagas");
formularioEditarPlagas.addEventListener("submit", async (e) => {
    e.preventDefault()
    const nombre = document.getElementById('nombrePersona').value;
    // let nombreUno = (nombre.value)
    const plaga = document.getElementById("nombrePlaga").value;
    // let plagaUno = (plaga.value)
    const correo = document.getElementById("correoEmail").value;
    // let correoPlaga = (correo.value)
    const fechaPlaga = document.getElementById("fecha").value;
    // let fechas = (fechaPlaga.value)
    var id = formularioEditarPlagas.dataset.id;
    // console.log(nombreUno, plagaUno, correoPlaga, fechas,id)
        try {
        const datos = await fetch(`/plagas/${id}`,{
            method:'put',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({nombre,plaga,correo,fechaPlaga})
        })
            const res = await datos.json()
         if(res.status){
             window.location.href = "/plagas"
         }else{
             console.log(res)
         }
    } catch (error) {
        console.log(error)
    }
})
