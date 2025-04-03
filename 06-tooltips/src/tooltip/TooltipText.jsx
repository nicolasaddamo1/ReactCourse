import { useRef, useState } from "react";
import Tooltip from "./Tooltip";

function TooltipText(props) {
    const [tooltipDomRect, setTooltipDomRect] = useState()
    const [showTooltip, setShowTooltip] = useState(false)
    const spanElement = useRef()
    function handleMouseOver() {
        const position = spanElement.current.getBoundingClientRect()
        setTooltipDomRect(position)
        setShowTooltip(true)

    }
    return (
        <>
            <span className="tooltip-text" ref={spanElement} onMouseOver={ev => handleMouseOver(ev)}>
                {props.children}
            </span>
            {showTooltip &&
                <Tooltip domRect={tooltipDomRect} text={props.tooltip} />
            }
        </>
    );
}

export default TooltipText