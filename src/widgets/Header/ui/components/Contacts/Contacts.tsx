import { AppLink } from "shared/ui/AppLink/AppLink"
import styles from "./Contacts.module.css"
import { socialIcons } from "shared/constants/links/socialIcons/socialIcons"
import { classNames } from "shared/lib/classNames"

interface ContactsProps {
    className?: string
}

export function Contacts({ className }: ContactsProps) {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.socialIcons}>
                {socialIcons.map((item, index) => {
                    return (
                        <a
                            key={index}
                            className={styles.item}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {item.icon}
                        </a>
                    )
                })}
            </div>
            <span className={styles.separator}></span>
            <div className={styles.phoneContainer}>
                Contact us:{" "}
                <AppLink to="tel:+1234567890" className={styles.phone}>
                    +380952821010
                </AppLink>
            </div>
        </div>
    )
}
