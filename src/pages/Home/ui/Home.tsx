import { Section } from "shared/ui/Section/Section"
import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { homeText } from "shared/constants/home/text"

interface HomeProps {
    path: string
}

export function Home(props: HomeProps) {
    return (
        <div>
            <PageTitle title={homeText.pageTitle} navigation={navigationData} />
        </div>
    )
}
