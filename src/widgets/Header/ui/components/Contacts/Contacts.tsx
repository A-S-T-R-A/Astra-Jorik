import { AppLink } from "shared/ui/AppLink/AppLink"
import styles from "./Contacts.module.css"
import { classNames } from "shared/lib/classNames"
import { useContext } from "preact/hooks"
import { Context } from "app/ContextProvider"
import { urlFor } from "../../../../../shared/lib/client"

interface ContactsProps {
    className?: string
}

export function Contacts({ className }: ContactsProps) {
    const { mobile, socialIcons } = useContext(Context)
    const digits = mobile?.[0]?.number?.replace(/\D/g, "")
    const phoneNumber = `tel:${digits}`

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.socialIcons}>
                {!!socialIcons &&
                    socialIcons.map((item, index) => {
                        return (
                            <a
                                key={index}
                                className={styles.item}
                                href={item.address}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={urlFor(item.icon).url()}
                                    style={{ width: "20px", minWidth: "20px" }}
                                />
                            </a>
                        )
                    })}
            </div>
            <span className={styles.separator}></span>
            <div className={styles.phoneContainer}>
                Call us:{" "}
                {!!mobile && (
                    <a href={phoneNumber} className={styles.link}>
                        {mobile[0].number}
                    </a>
                )}
            </div>
        </div>
    )
}
