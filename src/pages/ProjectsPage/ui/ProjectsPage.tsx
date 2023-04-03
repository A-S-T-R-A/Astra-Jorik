import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"

interface ProjectsPageProps {
    path: string
}

export function ProjectsPage(props: ProjectsPageProps) {
    return (
        <div>
            <PageTitle
                title="Dreams come true with our talented architects"
                navigation={navigationData}
            />
        </div>
    )
}
