import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import styles from "./TestimonialSkeleton.module.css"

export function TestimonialSkeleton() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Skeleton className={styles.title} />
                <div className={styles.containerTestimonials}>
                    <div className={styles.name}>
                        <Skeleton />
                        <Skeleton />
                    </div>
                    <Skeleton className={styles.rating} />
                    <Skeleton className={styles.avatar} />
                    <div className={styles.testimonials}>
                        {[1, 2, 3, 4, 5].map(item => {
                            return <Skeleton key={item} className={styles.testimonial} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
