import { useState } from 'react';
function CountDown() {
    const [seconds, setSeconds] = useState(null);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    function parseForm(event) {
        event.preventDefault();
        let secs = event.target.secs.value;
        setSeconds(parseInt(secs));
    }

    if (seconds !== null) {
        return (
            <>
                <p className="timer">
                    Conteo desde el {seconds}
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