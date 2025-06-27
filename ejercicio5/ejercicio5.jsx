const { useState } = React;

function App() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [op, setOp] = useState("suma");
    const [res, setRes] = useState(0);

    const calcular = (e) => {
        e.preventDefault();

        const a = Number(n1);
        const b = Number(n2);

        if (op === "suma") {
            setRes(a + b);
        } else if (op === "resta") {
            setRes(a - b);
        } else if (op === "multiplicacion") {
            setRes(a * b);
        } else if (op === "division") {
            setRes(a / b);
        }
    };

    return (
        <>
            <form>
                <label>Primer número</label>
                <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} />
                <label>Segundo número</label>
                <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} />
                <select value={op} onChange={(e) => setOp(e.target.value)}>
                    <option value="suma">Suma</option>
                    <option value="resta">Resta</option>
                    <option value="multiplicacion">Multiplicación</option>
                    <option value="division">División</option>
                </select>
                <button onClick={calcular} disabled={op === "division" && n2 == 0}>Calcular</button>
                <p>{res}</p>
            </form>
        </>
    );
}
