import { useRef, useState } from "react";
import Tooltip from "./Tooltip";

function TooltipText(props) {
    const [tooltipDomRect, setTooltipDomRect] = useState()
    const spanElement = useRef()
    function handleMouseOver() {
        const position = spanElement.current.getBoundingClientRect()
        setTooltipDomRect(position)

    }
    return (
        <>
            <span className="tooltip-text" ref={spanElement} onMouseOver={ev => handleMouseOver(ev)}>
                {props.children}
            </span>{
                <Tooltip domRect={tooltipDomRect} text={props.tooltip} />
            }
        </>
    );
}

export default TooltipText