import { HomeProjects } from "widgets/HomeProjects"
import { PageTitle } from "widgets/PageTitle"
import { Hero } from "widgets/Hero"
import { navigationData } from "../model"
import { text } from "shared/constants/home"
import { Testimoials } from "widgets/Testimonials"

interface HomeProps {
    path: string
}

export function Home(props: HomeProps) {
    return (
        <div>
            <PageTitle title={text.pageTitle} navigation={navigationData} />
            <Hero />
            <HomeProjects />
            <Testimoials />
            <PageTitle title={text.pageTitle} navigation={navigationData} />
        </div>
    )
}
