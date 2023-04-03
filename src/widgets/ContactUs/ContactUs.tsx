import { Section } from "shared/ui/Section/Section"
import styles from "./ContactUs.module.css"
import { Form } from "./Form/Form"
import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import { Contact } from "./Contact/Contact"

export function ContactUs() {
    return (
        <Section containerClassName={styles.wrapper}>
            <SectionTitle title="Contact Us" className={styles.titleContact} />
            <Contact className={styles.contact} />
            <SectionTitle title="Drop A Message" className={styles.titleForm} />
            <Form className={styles.form} />
        </Section>
    )
}
