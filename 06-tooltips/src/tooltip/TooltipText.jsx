import { useRef } from "react";

function TooltipText(props) {
    const spanElement = useRef()
    function handleMouseOver(ev) {

    }
    return (
        <>
            <span className="tooltip-text" ref={spanElement} onMouseOver={ev => handleMouseOver(ev)}>
                {props.children}
            </span>
        </>
    );
}

export default TooltipText