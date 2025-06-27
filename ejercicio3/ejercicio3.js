const url = "https://jsonplaceholder.typicode.com/todos";
const btn = document.getElementById("carga");

btn.addEventListener("click", async () => {
    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            console.log("Error al traer las tareas");
            return;
        }

        const tareas = await respuesta.json();

        const hechas = tareas.filter(t => t.completed);

        hechas.forEach(t => {
            const item = document.createElement("ul");
            item.textContent = `${t.id}, ${t.title}`;
            document.body.appendChild(item);
        });
    } catch (error) {
        console.log("Fallo la petición:", error);
    }
});
