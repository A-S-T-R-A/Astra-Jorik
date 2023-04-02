import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { text } from "shared/constants/about"

interface AboutProps {
    path: string
}

export function About(props: AboutProps) {
    return (
        <>
            <PageTitle title={text.pageTitle} navigation={navigationData} />
        </>
    )
}
