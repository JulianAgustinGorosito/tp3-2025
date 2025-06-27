const { useState } = React;

function App() {
    const [activo, setActivo] = useState(true);

    const alternar = () => {
        setActivo(prev => !prev);
    };

    return (
        <>
            <button onClick={alternar} disabled={!activo}>Izquierdo</button>
            <button onClick={alternar} disabled={activo}>Derecho</button>
        </>
    );
}