import { classNames } from "shared/lib/classNames"
import styles from "./SectionTitle.module.css"
import { ComponentChildren } from "preact"
import { Typography, TypographyVariant } from "../Typography/Typography"
import { Epigraph } from "../Epigraph/Epigraph"

interface SectionTitleProps {
    className?: string
    title: string
    epigraph?: string
}

export function SectionTitle(props: SectionTitleProps) {
    const { className, title, epigraph } = props

    return (
        <div className={classNames(styles.container, {}, [className])}>
            {!!epigraph && <Epigraph className={styles.epigraph}>{epigraph}</Epigraph>}
            <Typography variant={TypographyVariant.H3} isBold className={styles.title}>
                {title}
            </Typography>
        </div>
    )
}
