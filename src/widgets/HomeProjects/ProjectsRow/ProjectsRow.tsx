import { classNames } from "shared/lib/classNames"
import styles from "./ProjectsRow.module.css"

interface ProjectsRow {
    className?: string
}

export function ProjectsRow({ className }: ProjectsRow) {
    return <div className={classNames(styles.container, {}, [className])}>ProjectsRow</div>
}
