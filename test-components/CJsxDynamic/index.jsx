/**
 * Компонент c динамическими стилями style-jsx
 * @param {object} props 
 * @param {number} props.left 
 */
export function CJsxDynamic(props) {
    return (
        <>
            <style jsx>{`
                .block {
                    display: none;
                    position: relative;
                    top:0;
                    right:0;
                    bottom:0;
                    left: ${props.left ?? 0}px;
                    margin: 0;
                    padding: 0;
                    font-family: inherit;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #212529;
                    background-color: #fff;
                }
            `}</style>
            <div className="block">{props.children}</div>
        </>
    )
}