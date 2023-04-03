import { classNames } from "shared/lib/classNames"
import styles from "./Contact.module.css"
import { Contacts } from "widgets/Header/ui/components/Contacts/Contacts"

interface ContactProps {
    className?: string
}

export function Contact(props: ContactProps) {
    const { className } = props

    return <div className={classNames(styles.container, {}, [className])}></div>
}
