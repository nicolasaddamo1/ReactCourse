import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>Haz hecho click {count} veces en el botón</p>
            <button>Haz click</button>
        </>
    )
}