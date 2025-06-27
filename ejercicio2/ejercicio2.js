const lista = ["naranja","manzana","sandia","durazno","banana","frutilla"]

const filtro = document.getElementById("filtro")

filtro.addEventListener("click",(e)=>{
    e.preventDefault()

    const palabra = document.getElementById("text").value.trim().toLowerCase()
    const error = document.getElementById("error")

    if(palabra === ""){
        error.innerText = "Ingrese una palabra"
    }else{
        error.innerText = " "
    }

    const filtrado = lista.filter((busqueda)=>{
        return busqueda === palabra

    })
    
    if(filtrado.length != 0){
        const listaFiltrada = document.createElement("ul")
        document.body.appendChild(listaFiltrada)
        listaFiltrada.innerText = filtrado
    }   
    
})