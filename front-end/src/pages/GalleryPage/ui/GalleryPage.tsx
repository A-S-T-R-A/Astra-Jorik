import { PageTitle } from "widgets/PageTitle"
import { GalleryProjects } from "widgets/GalleryProjects"
import { navigationData } from "../model"

interface GalleryPageProps {
    path: string
}

export function GalleryPage(props: GalleryPageProps) {
    return (
        <div>
            <PageTitle navigation={navigationData} />
            <GalleryProjects />
        </div>
    )
}
