import { Section } from "shared/ui/Section/Section"
import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"

interface HomeProps {
    path: string
}

export function Home(props: HomeProps) {
    return (
        <div>
            <PageTitle
                title="Dreams come true with our talented architects"
                navigation={navigationData}
            />
        </div>
    )
}
