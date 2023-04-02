import { ComponentChildren } from "preact"
import styles from "./Section.module.css"
import { classNames } from "shared/lib/classNames"

interface SectionProps {
    children: ComponentChildren
    containerClassName?: string
}

export function Section({ children, containerClassName }: SectionProps) {
    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.container, {}, [containerClassName])}>{children}</div>
        </div>
    )
}
