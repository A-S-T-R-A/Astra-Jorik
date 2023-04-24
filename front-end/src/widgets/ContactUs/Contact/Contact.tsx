import { classNames } from "shared/lib/classNames"
import styles from "./Contact.module.css"
import { useContext } from "preact/hooks"
import { Context } from "app/ContextProvider"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { urlFor } from "shared/lib/client"

interface ContactProps {
    className?: string
}

export function Contact(props: ContactProps) {
    const { className } = props
    const { contacts } = useContext(Context)

    return (
        <div className={classNames(styles.container, {}, [className])}>
            {contacts?.map((item, index) => (
                <ListItem key={index} data={item} className={styles.gridItem} />
            ))}
        </div>
    )
}

function ListItem({ data, className }: any) {
    const { imageUrl, title, contactType, phone, email, custom } = data
    const digits = phone?.replace(/\D/g, "")
    const phoneNumber = `tel:${digits}`
    const mail = `mailto:${email}`
    const containerClassName = classNames(styles.itemContainer, {}, [className])

    return (
        <div className={containerClassName}>
            <img src={urlFor(imageUrl)?.url()} width={45} />
            <div className={styles.itemInfoContainer}>
                <Typography variant={TypographyVariant.H4} className={styles.itemTitle}>
                    {title}
                </Typography>
                <Typography variant={TypographyVariant.P} className={styles.itemDesc}>
                    {(() => {
                        switch (contactType) {
                            case "phone":
                                return (
                                    <a href={phoneNumber} className={styles.link}>
                                        {phone}
                                    </a>
                                )
                            case "email":
                                return (
                                    <a href={mail} className={styles.link}>
                                        {email}
                                    </a>
                                )
                            case "custom":
                                return <p>{custom}</p>
                            default:
                                return <p>{custom}</p>
                        }
                    })()}
                </Typography>
            </div>
        </div>
    )
}
