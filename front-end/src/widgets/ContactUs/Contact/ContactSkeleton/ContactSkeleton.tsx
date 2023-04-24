import { classNames } from "shared/lib/classNames"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import styles from "./ContactSkeleton.module.css"

interface SkeletonListProps {
    className?: string
}

export function ContactSkeleton() {
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
                <Skeleton className={styles.itemDesc} />
            </div>
        </div>
    )
}
