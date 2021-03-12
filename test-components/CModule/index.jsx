import styles from "./style.module.css";

/**
 * Компонент с css-modules
 */
export function CModule(props) {
    return (
        <div className={styles.block}>{props.children}</div>
    );
}