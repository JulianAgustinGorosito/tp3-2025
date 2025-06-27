const { useState } = React;

function App() {
    const [kg, setKg] = useState(0);
    const [m, setM] = useState(0);
    const [resultado, setResultado] = useState(null);

    const calcularIMC = () => {
        const pesoNum = parseFloat(kg);
        const alturaNum = parseFloat(m);

        const valor = (pesoNum / (alturaNum * alturaNum)).toFixed(2);
        setResultado(valor);
    };

    return (
        <>
            <p>Peso (kg):</p>
            <input type="number" value={kg} onChange={(e) => setKg(e.target.value)} />

            <p>Altura (m):</p>
            <input type="number" value={m} onChange={(e) => setM(e.target.value)} />

            <button onClick={calcularIMC}>Calcular</button>

            {resultado && resultado < 18.5 && (
                <p style={{ color: 'gold' }}>IMC: {resultado} — Bajo peso</p>
            )}
            {resultado && resultado >= 18.5 && resultado <= 24.9 && (
                <p style={{ color: 'green' }}>IMC: {resultado} — Peso normal</p>
            )}
            {resultado && resultado >= 25 && resultado <= 29.9 && (
                <p style={{ color: 'orange' }}>IMC: {resultado} — Sobrepeso</p>
            )}
            {resultado && resultado >= 30 && (
                <p style={{ color: 'red' }}>IMC: {resultado} — Obesidad</p>
            )}
        </>
    );
}
