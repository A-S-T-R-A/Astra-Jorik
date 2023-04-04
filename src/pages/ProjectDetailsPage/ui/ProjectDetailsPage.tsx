import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { ProjectGallery } from "widgets/ProjectGallery"
import { Testimoials } from "widgets/Testimonials"
import { ProjectDescription } from "widgets/ProjectDescription"

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
            <PageTitle
                title="Dreams come true with our talented architects"
                navigation={navigationData}
            />
            <PageTitle
                title="Dreams come true with our talented architects"
                navigation={navigationData}
            />
            <Testimoials />
        </div>
    )
}
