import { createUseStyles } from 'react-jss';

/**
 * Компонент c динамическими стилями jss
 * @param {object} props 
 * @param {number} props.left 
 */
export function CJssDynamic(props) {
    let styles = useStyles(props);
    return (
        <div className={styles.block}>{props.children}</div>
    )
}

const useStyles = createUseStyles({
    block: {
        display: "none",
        position: "relative",
        top: 0,
        right: 0,
        bottom: 0,
        left: props => props.left ?? 0,
        margin: 0,
        padding: 0,
        fontFamily: "inherit",
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#212529",
        backgroundColor: "#fff",
    }
})