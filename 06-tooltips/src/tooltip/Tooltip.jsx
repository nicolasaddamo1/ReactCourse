import { useEffect, useRef } from "react";

function Tooltip({ text, domRect }) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const tooltipElement = useRef()
    useEffect(() => {
        const { width, height } = tooltipElement.current.getBoundingClientRect()
        setPosition({
            y: domRect.y - (height + 10),
            x: domRect.x + (domRect.width / 2) - (width / 2)
        })
    }, [domRect])
    return (
        <span className="tooltip" ref={tooltipElement} style={{ top: position.y, left: position.x }}>{text}</span>
    )

}
export default Tooltip;