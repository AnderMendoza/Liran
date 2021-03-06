const btn = document.getElementById("btn_eliminar-producto");
btn.addEventListener('click', async () => {
    //utilizamos fetch para procesar , recibe tmb una respuesta
    //una ves enviamos esa solicitud a traves de fetch , se eliminara el documento 
    //en el router delete y tendremos una respuesta en json
    const id = btn.dataset.id
    try {
        const data = await fetch(`/productos/${id}`, {
            method: 'delete'
        })
        // es una respuesta en json. porque tenemos en la respuesta un estado true o flase , podemos leerlo
        const res = await data.json()
        //procesemos la respuesta , esa respuesta tiene lo que pusimos en el router deleter que es stado , en json
        if (res.estado) {
            //redirigimos al usuario si la respuesta es positiva
            window.location.href = "/productos"
        } else {
            console.error(res)
        }
    } catch (error) {
        console.log(error)
    }
})
const formularioEditarPLaga = document.getElementById("formularioEditarPLaga")
formularioEditarPLaga.addEventListener("submit", async(e) => {
    e.preventDefault()
    const nombreProducto = document.getElementById("nombreProducto").value;
    const nombreMarca = document.getElementById("nombreMarca").value;
    const precioCantidad = document.getElementById("precioCantidad").value;
    const id = formularioEditarPLaga.dataset.id;
    console.log(nombreProducto, nombreMarca,precioCantidad,id)
    try {
         const data = await fetch(`/productos/${id}`,{
             method:'put',
             headers:{
                 'Content-Type':'application/json'
             },
             body: JSON.stringify({ nombreProducto, nombreMarca, precioCantidad})
         })
        const res = await data.json()
        console.log(res)
           if(res.estado){
               window.location.href ="/productos";
           }else{
               console.log(res)
           }
     } catch (error) {
         console.log(error)
     }
})