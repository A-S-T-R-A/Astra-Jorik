import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"

interface AboutProps {
    path: string
}

export function About(props: AboutProps) {
    return (
        <>
            <PageTitle
                title="Dreams come true with our talented architects"
                navigation={navigationData}
            />
        </>
    )
}
