import { ComponentChildren } from "preact"
import styles from "./Section.module.css"
import { classNames } from "shared/lib/classNames"

interface SectionProps {
    children: ComponentChildren
    className?: string
}

export function Section({ children, className }: SectionProps) {
    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <div className={styles.container}>{children}</div>
        </div>
    )
}
