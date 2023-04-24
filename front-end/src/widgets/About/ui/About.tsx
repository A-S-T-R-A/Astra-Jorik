import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import styles from "./About.module.css"
import placeHolder from "shared/constants/placholder.png"
import { Section } from "shared/ui/Section/Section"
import { Typography } from "shared/ui/Typography/Typography"
import { ProjectLink } from "shared/ui/ProjectLink/ProjectLink"
import { urlFor } from "shared/lib/client"
import { useContext } from "preact/hooks"
import { Context } from "app/ContextProvider"
import { AboutSkeleton } from "./AboutSkeleton/AboutSkeleton"
import { AsyncImage, ImageFit } from "shared/ui/AsyncImage/AsyncImage"

export function About() {
    const { about, ourSkills, title } = useContext(Context)

    return (
        <Section>
            <div className={styles.container}>
                {about ? (
                    <div className={styles.firstSection}>
                        <SectionTitle epigraph={title?.[4]?.epigraph} title={title?.[4]?.title} />
                        <Typography>{about?.description}</Typography>
                        <ProjectLink to="/projects" className={styles.link}>
                            our project
                        </ProjectLink>
                    </div>
                ) : (
                    <AboutSkeleton className={styles.grid1} />
                )}
                <AsyncImage
                    objectFit={ImageFit.COVER}
                    src={urlFor(about?.imageUrl)?.url()}
                    alt="about"
                    className={styles.image1}
                />
                <AsyncImage
                    objectFit={ImageFit.COVER}
                    src={urlFor(ourSkills?.imageUrl)?.url()}
                    alt="facts"
                    className={styles.image2}
                />
                {about ? (
                    <div className={styles.secondSection}>
                        <SectionTitle epigraph={title?.[0]?.epigraph} title={title?.[0]?.title} />
                        <Typography>{ourSkills?.description}</Typography>
                    </div>
                ) : (
                    <AboutSkeleton className={styles.grid2} />
                )}
            </div>
        </Section>
    )
}
