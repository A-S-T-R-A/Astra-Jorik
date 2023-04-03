import { classNames } from "shared/lib/classNames"
import styles from "./Contact.module.css"

interface ContactProps {
    className?: string
}

export function Contact(props: ContactProps) {
    const { className } = props

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <p>phone</p>
            <p>228322</p>
        </div>
    )
}
