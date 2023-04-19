import { PageTitle } from "widgets/PageTitle"
import { ContactUs } from "widgets/ContactUs"
import { navigationData } from "./model"
import styles from "./ContactUsPage.module.css"

interface ContactUsPageProps {
    path: string
}

export function ContactUsPage(props: ContactUsPageProps) {
    return (
        <div className={styles.wrapper}>
            <PageTitle navigation={navigationData} />
            <ContactUs />
        </div>
    )
}
