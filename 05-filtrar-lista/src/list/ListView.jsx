function ListView(elements) {
    return (
        <>
            <input type="text" placeholder="Filtrar" ></input>
            <ul>
                {elements.elements.map((element) => (
                    <li >{element}</li>
                ))}
            </ul>
        </>
    )
}

export default ListView;