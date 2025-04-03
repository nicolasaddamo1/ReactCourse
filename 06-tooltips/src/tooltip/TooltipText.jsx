function TooltipText(props) {
    return (
        <>
            <span className="tooltip-text">
                {props.children}
            </span>
        </>
    );
}

export default TooltipText