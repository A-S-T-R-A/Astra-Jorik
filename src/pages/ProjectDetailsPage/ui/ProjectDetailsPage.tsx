import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { ProjectGallery } from "widgets/ProjectGallery"
import { ProjectDescription } from "widgets/ProjectDescription"
import { ContactUs } from "widgets/ContactUs"
import styles from "./ProjectDetailsPage.module.css"
import { Section } from "shared/ui/Section/Section"

interface ProjectDetailsPageProps {
    path: string
}

export function ProjectDetailsPage(props: ProjectDetailsPageProps) {
    return (
        <div>
            <PageTitle
                title="Dreams come true with our talented architects"
                navigation={navigationData}
            />
            <ProjectGallery />
            <ProjectDescription />
            <Section wrapperClassName={styles.horizontalSeparationContainer}>
                <div className={styles.horizontalSeparation} />
            </Section>
            <ContactUs />
        </div>
    )
}
