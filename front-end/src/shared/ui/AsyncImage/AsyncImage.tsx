import { HTMLAttributes } from "preact/compat"
import { useState } from "preact/hooks"
import { Skeleton } from "../Skeleton/Skeleton"
import placeholder from "shared/constants/placholder.png"
import styles from "./AsyncImage.module.css"

type AsyncImageProps = Omit<HTMLAttributes<HTMLImageElement>, "onLoad">

export function AsyncImage(props: AsyncImageProps) {
    const [loading, setLoading] = useState(true)

    function handleImageLoad() {
        setLoading(false)
    }

    return (
        <div className={styles.imageContainer}>
            {loading && (
                <>
                    <Skeleton className={styles.placeholder} />
                    <img src={placeholder} className={styles.placeholder} />
                </>
            )}
            <img onLoad={handleImageLoad} {...props} />
        </div>
    )
}
