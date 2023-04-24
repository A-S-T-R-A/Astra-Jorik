import { Section } from "shared/ui/Section/Section"
import styles from "./GallerySkeleton.module.css"
import placeHolder from "shared/constants/placholder.png"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"

export function GallerySkeleton() {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
                return (
                    <div key={item} className={styles.slide}>
                        <img src={placeHolder} alt="image" className={styles.img} />
                        <Skeleton />
                    </div>
                )
            })}
        </>
    )
}
