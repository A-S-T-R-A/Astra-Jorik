import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import { TypographyColor } from "shared/ui/Typography/Typography"
import { ProjectLink } from "shared/ui/ProjectLink/ProjectLink"
import { ProjectsRow } from "./ProjectsRow/ProjectsRow"
import styles from "./HomeProjects.module.css"
import { useContext } from "preact/hooks"
import { Context } from "app/ContextProvider"

export function HomeProjects() {
    const { title, projects } = useContext(Context)

    return (
        <div className={styles.wrapper}>
            <SectionTitle
                title={title?.[5].title}
                epigraph={title?.[5].epigraph}
                className={styles.title}
            />

            <ProjectLink to="/gallery" className={styles.link} color={TypographyColor.DARK_GRAY}>
                View all projects
            </ProjectLink>

            <ProjectsRow className={styles.projects} />
        </div>
    )
}
