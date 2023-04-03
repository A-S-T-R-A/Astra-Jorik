import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"

interface ProjectDetailsProps {
    path: string
}

export function ProjectDetails(props: ProjectDetailsProps) {
    return (
        <div>
            <PageTitle
                title="Dreams come true with our talented architects"
                navigation={navigationData}
            />
        </div>
    )
}
