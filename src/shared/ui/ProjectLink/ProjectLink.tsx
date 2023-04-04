import { classNames } from "shared/lib/classNames"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ProjectLink.module.css"
import { ComponentChildren } from "preact"
import { route } from "preact-router"

interface ProjectLink {
    to: string
    className?: string
    children: ComponentChildren
    variant?: TypographyVariant
    color?: TypographyColor
}

export function ProjectLink(props: ProjectLink) {
    const { className, children, variant, color = TypographyColor.DARK_GRAY, to } = props

    function clickHandler() {
        route(to)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className={classNames(styles.container, {}, [className])} onClick={clickHandler}>
            <Typography color={color} variant={variant} className={styles.text}>
                {children}
            </Typography>
            <Arrow />
        </div>
    )
}

function Arrow() {
    return (
        <svg
            className={styles.arrowRight}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25px"
            height="25px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
        >
            <g>
                <polygon points="53.293,40.293 54.854,41.707 64,32.707 64,31.293 54.854,22.293 53.366,23.707 60.586,31 0,31 0,33 60.586,33 	" />
            </g>
        </svg>
    )
}
