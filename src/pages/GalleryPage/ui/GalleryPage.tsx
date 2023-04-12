import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { AllProjects } from "widgets/AllProjects"
import { GalleryProjects } from "widgets/GalleryProjects"

interface GalleryPageProps {
    path: string
}

export function GalleryPage(props: GalleryPageProps) {
    return (
        <div>
            <PageTitle
                title="Dreams come true with our talented architects"
                navigation={navigationData}
            />
            <GalleryProjects />
        </div>
    )
}
