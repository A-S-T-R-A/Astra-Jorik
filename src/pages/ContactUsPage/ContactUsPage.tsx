import { PageTitle } from "widgets/PageTitle"
import styles from "./ContactUsPage.module.css"
import { navigationData } from "./model"
import { ContactUs } from "widgets/ContactUs"

interface ContactUsPageProps {
    path: string
}

export function ContactUsPage(props: ContactUsPageProps) {
    return (
        <div className={styles.wrapper}>
            <PageTitle
                title="Dreams come true with our talented architects"
                navigation={navigationData}
            />
            <ContactUs />
        </div>
    )
}
