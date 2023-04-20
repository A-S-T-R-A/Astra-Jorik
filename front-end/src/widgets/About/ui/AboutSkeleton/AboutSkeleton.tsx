import { Section } from "shared/ui/Section/Section"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import placeHolder from "shared/constants/placholder.png"
import styles from "./AboutSkeleton.module.css"

export function AboutSkeleton() {
    return (
        <Section>
            <div className={styles.container}>
                <div className={styles.firstSection}>
                    <Skeleton className={styles.epigraph} />
                    <Skeleton className={styles.title} />
                    {[1, 2, 3, 4, 5, 6].map(item => (
                        <Skeleton className={styles.description} key={item} />
                    ))}
                    <Skeleton />
                </div>
                <div className={styles.img1}>
                    <img src={placeHolder} alt="about" className={styles.images1} />
                    <Skeleton />
                </div>
                <div className={styles.img2}>
                    <img src={placeHolder} alt="about" className={styles.images2} />
                    <Skeleton />
                </div>

                <div className={styles.secondSection}>
                    <Skeleton className={styles.epigraph} />
                    <Skeleton className={styles.title} />
                    {[1, 2, 3, 4, 5, 6].map(item => (
                        <Skeleton className={styles.description} key={item} />
                    ))}
                    <Skeleton />
                </div>
            </div>
        </Section>
    )
}
