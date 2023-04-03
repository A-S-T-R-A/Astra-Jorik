import { ComponentChildren } from "preact"
import styles from "./Section.module.css"
import { classNames } from "shared/lib/classNames"

interface SectionProps {
    children: ComponentChildren
    wrapperClassName?: string
    containerClassName?: string
}

export function Section({ children, containerClassName, wrapperClassName }: SectionProps) {
    return (
        <div className={classNames(styles.wrapper, {}, [wrapperClassName])}>
            <div className={classNames(styles.container, {}, [containerClassName])}>{children}</div>
        </div>
    )
}
