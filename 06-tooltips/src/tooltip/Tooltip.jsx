import { useEffect } from "react";

function Tooltip({ text, domRect }) {
    useEffect(() => {
    }, [domRect])
    return (
        <span className="tooltip">{text}</span>
    )

}
export default Tooltip;