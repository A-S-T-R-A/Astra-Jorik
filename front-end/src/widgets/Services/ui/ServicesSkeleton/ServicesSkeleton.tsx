import { Section } from "shared/ui/Section/Section"
import styles from "./ServicesSkeleton.module.css"
import { classNames } from "shared/lib/classNames"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"

export function ServicesSkeleton() {
    return (
        <Section wrapperClassName={styles.wrapper} containerClassName={styles.container}>
            <Skeleton className={styles.epigraph} />
            <Skeleton className={styles.title} />
            <SkeletonList />
        </Section>
    )
}

interface SkeletonListProps {
    className?: string
}

export function SkeletonList() {
    return (
        <div className={styles.listContainer}>
            {[1, 2, 3].map(item => (
                <SkeletonItem key={item} className={styles.gridItem} />
            ))}
        </div>
    )
}

function SkeletonItem({ className }: SkeletonListProps) {
    return (
        <div className={classNames(styles.itemContainer, {}, [className])}>
            <Skeleton className={styles.itemImg} />
            <div className={styles.itemInfoContainer}>
                <Skeleton className={styles.itemTitle} />
                {[1, 2, 3, 4, 5].map(item => {
                    return <Skeleton key={item} className={styles.itemDesc} />
                })}
            </div>
        </div>
    )
}
