import { classNames } from "shared/lib/classNames"
import styles from "./Contact.module.css"
import { contactData } from "./data"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"

interface ContactProps {
    className?: string
}

export function Contact(props: ContactProps) {
    const { className } = props

    return (
        <div className={classNames(styles.container, {}, [className])}>
            {contactData.map(item => (
                <ListItem key={item.id} data={item} className={styles.gridItem} />
            ))}
        </div>
    )
}

function ListItem({ data, className }: any) {
    const { Icon, title, desc } = data

    const containerClassName = classNames(styles.itemContainer, {}, [className])

    return (
        <div className={containerClassName}>
            {!!Icon && Icon}
            <div className={styles.itemInfoContainer}>
                <Typography variant={TypographyVariant.H3} className={styles.itemTitle}>
                    {title}
                </Typography>
                {!!desc && (
                    <Typography variant={TypographyVariant.P} className={styles.itemDesc}>
                        {desc}
                    </Typography>
                )}
            </div>
        </div>
    )
}
