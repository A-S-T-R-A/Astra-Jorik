import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { text } from "shared/constants/about"
import { About } from "widgets/About"
import { ContactUs } from "widgets/ContactUs"
import { Services } from "widgets/Services"

interface AboutPageProps {
    path: string
}

export function AboutPage(props: AboutPageProps) {
    return (
        <div>
            <PageTitle navigation={navigationData} />
            <About />
            <Services />
            <ContactUs />
        </div>
    )
}
