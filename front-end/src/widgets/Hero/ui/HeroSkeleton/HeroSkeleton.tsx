import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import styles from "./HeroSkeleton.module.css"
import placeHolder from "shared/constants/placholder.png"

export function HeroSkeleton() {
    return (
        <div className={styles.wrapper}>
            <img src={placeHolder} alt="hero banner" className={styles.img} />
            <Skeleton />
        </div>
    )
}
