import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { AllProjects } from "widgets/AllProjects"

interface ProjectsPageProps {
    path: string
}

export function ProjectsPage(props: ProjectsPageProps) {
    return (
        <div>
            <PageTitle navigation={navigationData} />
            <AllProjects />
        </div>
    )
}
