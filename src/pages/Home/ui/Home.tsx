import { HomeProjects } from "widgets/HomeProjects"
import { PageTitle } from "widgets/PageTitle"
import { Hero } from "widgets/Hero"
import { Testimoials } from "widgets/Testimonials"
import { ContactUs } from "widgets/ContactUs"
import { navigationData } from "../model"
import { text } from "shared/constants/home"
import { Services } from "widgets/Services"
import { About } from "widgets/About"

interface HomeProps {
    path: string
}

export function Home(props: HomeProps) {
    return (
        <div>
            <PageTitle title={text.pageTitle} navigation={navigationData} />
            <Hero />
            <About />
            <Services />
            <HomeProjects />
            <Testimoials />
            <ContactUs />
        </div>
    )
}
