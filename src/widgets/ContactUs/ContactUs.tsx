import { Section } from "shared/ui/Section/Section"
import styles from "./ContactUs.module.css"
import { Form } from "./Form/Form"
import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import { Contact } from "./Contact/Contact"
import { useContext } from "preact/hooks"
import { Context } from "app/ContextProvider"

export function ContactUs() {
    const { title } = useContext(Context)

    return (
        <Section wrapperClassName={styles.wrapper} containerClassName={styles.container}>
            <SectionTitle title={title?.[3].title} className={styles.titleContact} />
            <Contact className={styles.contact} />
            <SectionTitle title={title?.[7].title} className={styles.titleForm} />
            <Form className={styles.form} />
        </Section>
    )
}
