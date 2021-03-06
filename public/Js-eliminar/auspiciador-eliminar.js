const btn = document.getElementById("btn_eliminar-auspiciador");
btn.addEventListener('click', async () => {
    //utilizamos fetch para procesar , recibe tmb una respuesta
    //una ves enviamos esa solicitud a traves de fetch , se eliminara el documento 
    //en el router delete y tendremos una respuesta en json
    const id = btn.dataset.id
    try {
        const data = await fetch(`/auspiciadores/${id}`, {
            method: 'delete'
        })
        // es una respuesta en json. porque tenemos en la respuesta un estado true o flase , podemos leerlo
        const res = await data.json()
        //procesemos la respuesta , esa respuesta tiene lo que pusimos en el router deleter que es stado , en json
        if (res.estado) {
            //redirigimos al usuario si la respuesta es positiva
            window.location.href = "/auspiciadores"
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
    const empresaAuspici = document.getElementById("empresaAuspici")
    var empresaAuspici_uno = (empresaAuspici.value)
    const relacionAuspici = document.getElementById("relacionAuspici")
    var relacionAuspici_uno = (relacionAuspici.value)
    const vigenciaAuspici = document.getElementById("vigenciaAuspici")
    var vigenciaAuspici_uno = (vigenciaAuspici.value)
    const correoAuspici = document.getElementById("correoAuspici")
    var correoAuspici_uno = (correoAuspici.value)
    // console.log(empresaAuspici_uno, relacionAuspici_uno, vigenciaAuspici_uno, correoAuspici_uno)
    const id = formularioEditar.dataset.id
    try {
        const data = await fetch(`/auspiciadores/${id}`,{
            method:'put',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({empresaAuspici_uno,relacionAuspici_uno,vigenciaAuspici_uno,correoAuspici_uno})
        })
        const res = await data.json()
        if (res.estado) {
            window.location.href = "/auspiciadores"
        }else{
            console.log(res)
        }
    } catch (error) {
        console.log(error)
    }
})