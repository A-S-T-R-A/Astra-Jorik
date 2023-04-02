import { classNames } from "shared/lib/classNames"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ProjectLink.module.css"
import { ComponentChildren } from "preact"

interface ProjectLink {
    className?: string
    children: ComponentChildren
    variant?: TypographyVariant
    color?: TypographyColor
}

export function ProjectLink({ className, children, variant, color }: ProjectLink) {
    return (
        <div className={classNames(styles.moreProjects, {}, [className])}>
            <Typography color={color} variant={variant} className={styles.moreProjectsText}>
                {children}
            </Typography>
            <div className={styles.arrowRight} />
        </div>
    )
}
