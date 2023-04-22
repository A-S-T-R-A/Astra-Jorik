import { HTMLAttributes } from "preact/compat"
import { useState, useEffect } from "preact/hooks"
import { Skeleton } from "../Skeleton/Skeleton"
import placeholder from "shared/constants/placholder.png"
import styles from "./AsyncImage.module.css"
import { classNames } from "shared/lib/classNames"

type HTMLImageAttributes = Omit<
    HTMLAttributes<HTMLImageElement>,
    "onLoad" | "className" | "onError" | "src"
>

interface AsyncImageProps extends HTMLImageAttributes {
    src?: string
    className?: string
}

export function AsyncImage(props: AsyncImageProps) {
    const { src, className = "", ...otherProps } = props

    const [isloading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    function handleImageLoad() {
        setIsLoading(false)
    }

    console.log(src)

    return (
        <div className={styles.imageContainer}>
            {isloading && !isError && (
                <>
                    <Skeleton className={styles.placeholder} />
                    <img src={placeholder} className={styles.placeholder} />
                </>
            )}

            {!isError && (
                <img
                    src={placeholder}
                    className={classNames(styles.placeholderError, {}, [className])}
                />
            )}

            <img
                onLoad={handleImageLoad}
                onError={() => {
                    console.log("error")
                    setIsError(true)
                }}
                className={classNames(
                    className,
                    {
                        [styles.opacity]: isError || src === undefined,
                    },
                    [className]
                )}
                src={src || placeholder}
                {...otherProps}
            />
        </div>
    )
}
