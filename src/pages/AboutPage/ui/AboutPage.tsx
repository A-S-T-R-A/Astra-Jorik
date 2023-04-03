import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { text } from "shared/constants/about"
import { About } from "widgets/About"
import { ContactUs } from "widgets/ContactUs"

interface AboutPageProps {
    path: string
}

export function AboutPage(props: AboutPageProps) {
    return (
        <div>
            <PageTitle title={text.pageTitle} navigation={navigationData} />
            <About />
            <ContactUs />
        </div>
    )
}
