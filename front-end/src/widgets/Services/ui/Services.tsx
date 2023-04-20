import { Section } from "shared/ui/Section/Section"
import styles from "./Services.module.css"
import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import { classNames } from "shared/lib/classNames"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { useContext } from "preact/hooks"
import { Context } from "app/ContextProvider"
import { urlFor } from "shared/lib/client"
import { ServicesSkeleton } from "./ServicesSkeleton/ServicesSkeleton"

export function Services() {
    const { title, services } = useContext(Context)

    if (services) {
        return (
            <Section wrapperClassName={styles.wrapper} containerClassName={styles.container}>
                <SectionTitle
                    title={title?.[2].title}
                    epigraph={title?.[2].epigraph}
                    className={styles.title}
                />
                <ServicesList />
            </Section>
        )
    } else {
        return <ServicesSkeleton />
    }
}

interface ServicesListProps {
    className?: string
    data?: any
}

export function ServicesList(props: ServicesListProps) {
    const { className } = props
    const { services } = useContext(Context)
    return (
        <div className={classNames(styles.listContainer, {}, [className])}>
            {!!services &&
                services.map((item, index) => (
                    <ListItem key={index} data={item} className={styles.gridItem} />
                ))}
        </div>
    )
}

function ListItem({ data, className }: ServicesListProps) {
    const { service, description } = data

    const containerClassName = classNames(styles.itemContainer, {}, [className])

    return (
        <div className={containerClassName}>
            <img src={urlFor(data.imageUrl).url()} alt="" className={styles.itemImg} />
            <div className={styles.itemInfoContainer}>
                <Typography variant={TypographyVariant.H4} className={styles.itemTitle}>
                    {service}
                </Typography>
                <Typography variant={TypographyVariant.SMALL} className={styles.itemDesc}>
                    {description}
                </Typography>
            </div>
        </div>
    )
}
