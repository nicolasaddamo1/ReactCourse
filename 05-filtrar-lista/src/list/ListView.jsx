function ListView(elements, functionFilterItems) {
    return (
        <>
            <input type="text" placeholder="Filtrar"
                onChange={ev => functionFilterItems(ev.target.value)} />

            <ul>
                {elements.elements.map((element) => (
                    <li >{element}</li>
                ))}
            </ul>
        </>
    )
}

export default ListView;