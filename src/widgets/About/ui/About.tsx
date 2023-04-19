import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import styles from "./About.module.css"
import { Section } from "shared/ui/Section/Section"
import { Typography } from "shared/ui/Typography/Typography"
import { ProjectLink } from "shared/ui/ProjectLink/ProjectLink"
import { urlFor } from "../../../shared/lib/client"
import { useContext } from "preact/hooks"
import { Context } from "app/ContextProvider"

export function About() {
    const { about, ourSkills, title } = useContext(Context)

    return (
        <Section>
            <div className={styles.container}>
                <div className={styles.firstSection}>
                    <SectionTitle epigraph={title?.[4].epigraph} title={title?.[4].title} />
                    <Typography>{about.description}</Typography>
                    <ProjectLink to="/projects" className={styles.link}>
                        our projects
                    </ProjectLink>
                </div>
                {!!about && (
                    <img
                        src={urlFor(about.imageUrl)?.url()}
                        alt="about"
                        className={styles.images1}
                    />
                )}
                {!!ourSkills && (
                    <img
                        src={urlFor(ourSkills.imageUrl).url()}
                        alt="facts"
                        className={styles.images2}
                    />
                )}
                <div className={styles.secondSection}>
                    <SectionTitle epigraph={title?.[0].epigraph} title={title?.[0].title} />
                    <Typography>{ourSkills.description}</Typography>
                </div>
            </div>
        </Section>
    )
}
