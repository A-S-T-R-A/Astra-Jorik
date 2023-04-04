import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { ProjectGallery } from "widgets/ProjectGallery"
import { ProjectDescription } from "widgets/ProjectDescription"
import { ContactUs } from "widgets/ContactUs"
import styles from "./ProjectDetailsPage.module.css"
import { Section } from "shared/ui/Section/Section"
import { projectsData } from "shared/constants/projects"
import { route } from "preact-router"
import { useEffect } from "preact/hooks"

interface ProjectDetailsPageProps {
    path: string
    id?: string
}

export function ProjectDetailsPage(props: ProjectDetailsPageProps) {
    const { id } = props

    const isProjectExists = projectsData.filter(proj => proj.id === id).length === 1

    useEffect(() => {
        if (!id || !isProjectExists) {
            route("/notFound")
        }
    }, [])

    if (isProjectExists) {
        const {
            title,
            epigraph,
            description,
            id: projectId,
        } = {
            ...projectsData.filter(proj => proj.id === id)[0],
        }

        return (
            <div>
                <PageTitle
                    title="Dreams come true with our talented architects"
                    navigation={navigationData}
                />
                <ProjectGallery />
                <ProjectDescription
                    title={title}
                    epigraph={epigraph}
                    description={description}
                    id={projectId}
                />
                <Section wrapperClassName={styles.horizontalSeparationContainer}>
                    <div className={styles.horizontalSeparation} />
                </Section>
                <ContactUs />
            </div>
        )
    } else {
        return null
    }
}
