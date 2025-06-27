const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

const botonFiltrar = document.getElementById("filtro");
const listaHTML = document.getElementById("resultado");
const mensajeError = document.getElementById("error");

// Mostrar todas las palabras al inicio
function mostrarLista(palabrasParaMostrar) {
  listaHTML.innerHTML = "";
  palabrasParaMostrar.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
    listaHTML.appendChild(li);
  });
}

mostrarLista(palabras);

botonFiltrar.addEventListener("click", (evento) => {
  evento.preventDefault();

  const entrada = document.getElementById("text").value.trim().toLowerCase();

  if (entrada === "") {
    mensajeError.textContent = "Por favor, escriba una palabra para buscar.";
    mostrarLista(palabras); 
    return;
  } else {
    mensajeError.textContent = "";
  }

  const coincidencias = palabras.filter(item =>
    item.toLowerCase().includes(entrada)
  );

  if (coincidencias.length > 0) {
    mostrarLista(coincidencias);
  } else {
    listaHTML.innerHTML = "<li>No hay coincidencias</li>";
  }
});
