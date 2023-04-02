import { Section } from "shared/ui/Section/Section"
import styles from "./HomeProjects.module.css"
import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import { Epigraph } from "shared/ui/Epigraph/Epigraph"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import { ProjectsRow } from "./ProjectsRow/ProjectsRow"
import { classNames } from "shared/lib/classNames"
import { ProjectLink } from "./ProjectLink/ProjectLink"

export function HomeProjects() {
    return (
        <div className={styles.wrapper}>
            <SectionTitle title="Recent Project" epigraph="Check out" className={styles.title} />

            <ProjectLink className={styles.link} color={TypographyColor.DARK_GRAY}>
                View all projects
            </ProjectLink>

            <ProjectsRow className={styles.projects} />
        </div>
    )
}
