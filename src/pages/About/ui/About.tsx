import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { aboutText } from "shared/constants/about/text"

interface AboutProps {
    path: string
}

export function About(props: AboutProps) {
    return (
        <>
            <PageTitle title={aboutText.pageTitle} navigation={navigationData} />
        </>
    )
}
