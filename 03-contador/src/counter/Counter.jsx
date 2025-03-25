import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState("");

    return (
        <div className='counter'>
            <p>Haz hecho click {count} veces en el botón</p>
            <button onClick={() => setCount(count + 1)}>Haz click</button>
            <button onClick={() => setCount2(count2 + '1')}>Haz click2</button>
            <p>Haz hecho click {count2} veces en el botón</p>
        </div>
    )
}
export default Counter;