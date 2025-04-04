import { useEffect, useRef, useState } from "react";

function Tooltip({ text, domRect }) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const tooltipElement = useRef()
    useEffect(() => {
        const { width, height } = tooltipElement.current.getBoundingClientRect()
        const coords = {}
        if (domRect.y < height) {
            coords.y = domRect.y + (domRect.height + 10)
        } else {
            coords.y = domRect.y - (height + 10)
        }
        coords.x = domRect.x + (domRect.width / 2) - (width / 2)
        setPosition(coords)
    }, [domRect])
    return (
        <span className="tooltip" ref={tooltipElement} style={{ top: position.y, left: position.x }}>{text}</span>
    )

}
export default Tooltip;