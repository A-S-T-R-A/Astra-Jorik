import { Section } from "shared/ui/Section/Section"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import placeHolder from "shared/constants/placholder.png"
import styles from "./AboutSkeleton.module.css"
import { classNames } from "shared/lib/classNames"

export function AboutSkeleton({ className }: any) {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Skeleton className={styles.epigraph} />
            <Skeleton className={styles.title} />
            {[1, 2, 3, 4, 5, 6].map(item => (
                <Skeleton className={styles.description} key={item} />
            ))}
            <Skeleton />
        </div>
    )
}
