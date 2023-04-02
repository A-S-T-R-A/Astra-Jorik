import { classNames } from "shared/lib/classNames"
import styles from "./Epigraph.module.css"
import { ComponentChildren } from "preact"

interface EpigraphProps {
    className?: string
    children: ComponentChildren
}

export function Epigraph(props: EpigraphProps) {
    const { className, children } = props
    return (
        <p className={classNames(styles.epigraph, {}, [className])}>
            {children} <span className={styles.line} />
        </p>
    )
}
