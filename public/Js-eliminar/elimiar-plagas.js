 const btn = document.getElementById("boton eliminar");
btn.eddEventListener('click',async()=>{
    console.log("Ya clickeaste")

    const id = btn.dataset.id
    console.log("id",id)
    try {
        const data = await fetch(`/plagas/${id}`,{
            method: 'delete'
        })
        const res = await data.json()
        if(res.estado) {
            window.location.href = "/plagas"
        } else {
            console.error(res)
        }
    } catch (error) {
        console.log(error)
    }
})