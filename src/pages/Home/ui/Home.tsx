import { Section } from "shared/ui/Section/Section"
import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { text } from "shared/constants/home"
import { Hero } from "widgets/Hero/Hero"

interface HomeProps {
    path: string
}

export function Home(props: HomeProps) {
    return (
        <div>
            <PageTitle title={text.pageTitle} navigation={navigationData} />
            <Hero />
        </div>
    )
}
