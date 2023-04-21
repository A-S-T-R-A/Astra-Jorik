import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import styles from "./About.module.css"
import placeholder from "shared/constants/placholder.png"
import { useState } from "preact/hooks"
import { Section } from "shared/ui/Section/Section"
import { Typography } from "shared/ui/Typography/Typography"
import { ProjectLink } from "shared/ui/ProjectLink/ProjectLink"
import { urlFor } from "shared/lib/client"
import { useContext } from "preact/hooks"
import { Context } from "app/ContextProvider"
import { AboutSkeleton } from "./AboutSkeleton/AboutSkeleton"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"

export function About() {
    const [loading, setLoading] = useState(true)
    const { about, ourSkills, title } = useContext(Context)

    const handleImageLoad = () => {
        setLoading(false)
    }

    if (about) {
        return (
            <Section>
                <div className={styles.container}>
                    <div className={styles.firstSection}>
                        <SectionTitle epigraph={title?.[4]?.epigraph} title={title?.[4]?.title} />
                        <Typography>{about?.description}</Typography>
                        <ProjectLink to="/projects" className={styles.link}>
                            our project
                        </ProjectLink>
                    </div>
                    {!!loading && (
                        <>
                            <Skeleton className={styles.placeholder1} />
                            <img src={placeholder} className={styles.placeholder1} />
                        </>
                    )}
                    <img
                        onLoad={handleImageLoad}
                        src={urlFor(about?.imageUrl).url()}
                        alt="about"
                        className={styles.images1}
                    />
                    {!!loading && (
                        <>
                            <Skeleton className={styles.placeholder2} />
                            <img src={placeholder} className={styles.placeholder2} />
                        </>
                    )}
                    <img
                        onLoad={handleImageLoad}
                        src={urlFor(ourSkills?.imageUrl).url()}
                        alt="facts"
                        className={styles.images2}
                    />
                    <div className={styles.secondSection}>
                        <SectionTitle epigraph={title?.[0]?.epigraph} title={title?.[0]?.title} />
                        <Typography>{ourSkills?.description}</Typography>
                    </div>
                </div>
            </Section>
        )
    } else {
        return <AboutSkeleton />
    }
}
