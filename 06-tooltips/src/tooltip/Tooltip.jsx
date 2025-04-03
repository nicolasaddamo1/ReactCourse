import { useEffect, useRef } from "react";

function Tooltip({ text, domRect }) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const tooltipElement = useRef()
    useEffect(() => {
        setPosition({
            y: domRect.y,
            x: domRect.x
        })
    }, [domRect])
    return (
        <span className="tooltip" ref={tooltipElement}>{text}</span>
    )

}
export default Tooltip;