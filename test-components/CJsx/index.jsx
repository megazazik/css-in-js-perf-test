// import styles from "./style.jsx.css";
import css from 'styled-jsx/css'

/**
 * Компонент c внешними стилями style-jsx
 */
export function CJsx(props) {
    return (
        <>
            <style jsx>{styles}</style>
            <div className="block">{props.children}</div>
        </>
    )
}

// вообще-то они должны импортироваться, но в проекте что-то недонастроено.
let styles = css`
    .block {
        display: none;
        position: relative;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0;
        padding: 0;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
    }
`;