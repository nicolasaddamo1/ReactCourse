import { useEffect } from 'react';
import { useState } from 'react';
function CountDown() {
    const [seconds, setSeconds] = useState(null);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(function () {
        if (seconds === null) return;
        setElapsedSeconds(0);
        let interval = setInterval(() => {
            setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);

        }, 1000);
    }, [seconds])
    function parseForm(event) {
        event.preventDefault();
        let secs = event.target.secs.value;
        setSeconds(parseInt(secs));
    }

    if (elapsedSeconds >= seconds && seconds !== null) {
        return (
            <>
                <p className="timer">
                    Conteo Terminado
                </p>
                <button onClick={() => setSeconds(null)}>Reiniciar</button>
            </>
        )
    }
    if (seconds !== null) {
        return (
            <>
                <p className="timer">
                    Faltan {seconds - elapsedSeconds} segundos para que termine la cuenta atrás
                </p>
            </>
        )
    }

    return (
        <>
            <p>
                ¿Cuántos segundos quieres esperar?
            </p>
            <form action="#" onSubmit={(event) => parseForm(event)}>
                <input type="number" name="secs" />
                <input type="submit" value="Iniciar cuenta atrás" />
            </form>
        </>
    )
}
export default CountDown;