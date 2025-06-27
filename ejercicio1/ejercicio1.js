const boton = document.getElementById("calc");
const op = document.getElementById("operacion");

op.addEventListener("change", (e) => {
    const n2 = Number(document.getElementById("num2").value);

    if (e.target.value === "division" && n2 === 0) {
        boton.disabled = true;
    } else {
        boton.disabled = false;
    }
});

boton.addEventListener("click", (e) => {
    e.preventDefault();

    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    const tipo = op.value;

    switch (tipo) {
        case "suma":
            alert(n1 + n2);
            break;
        case "resta":
            alert(n1 - n2);
            break;
        case "multi":
            alert(n1 * n2);
            break;
        case "division":
            alert(n1 / n2);
            break;
    }
});
