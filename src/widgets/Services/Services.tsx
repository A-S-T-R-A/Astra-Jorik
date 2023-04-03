import { Section } from "shared/ui/Section/Section"
import styles from "./Services.module.css"
import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import { classNames } from "shared/lib/classNames"
import { servicesData } from "./data"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"

export function Services() {
    return (
        <Section wrapperClassName={styles.wrapper} containerClassName={styles.container}>
            <SectionTitle
                title="Our Main Services"
                epigraph="why choose us"
                className={styles.title}
            />
            <ServicesList />
        </Section>
    )
}

interface ServicesListProps {
    className?: string
}

export function ServicesList(props: ServicesListProps) {
    const { className } = props

    return (
        <div className={classNames(styles.listContainer, {}, [className])}>
            {servicesData.map(item => (
                <ListItem key={item.id} data={item} className={styles.gridItem} />
            ))}
        </div>
    )
}

function ListItem({ data, className }: any) {
    const { img, title, desc } = data

    const containerClassName = classNames(styles.itemContainer, {}, [className])

    return (
        <div className={containerClassName}>
            <img src={img} alt="" className={styles.itemImg} />
            <div className={styles.itemInfoContainer}>
                <Typography variant={TypographyVariant.H4} className={styles.itemTitle}>
                    {title}
                </Typography>
                <Typography variant={TypographyVariant.SMALL} className={styles.itemDesc}>
                    {desc}
                </Typography>
            </div>
        </div>
    )
}
