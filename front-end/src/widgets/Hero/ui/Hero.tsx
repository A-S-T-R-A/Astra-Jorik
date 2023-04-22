import styles from "./Hero.module.css"
import { useContext } from "preact/hooks"
import { urlFor } from "shared/lib/client"
import { Context } from "app/ContextProvider"
import { HeroSkeleton } from "./HeroSkeleton/HeroSkeleton"
import { AsyncImage } from "shared/ui/AsyncImage/AsyncImage"
import placeHolder from "shared/constants/placholder.png"

export function Hero() {
    const { hero } = useContext(Context)

    return (
        <div className={styles.wrapper}>
            <AsyncImage
                src={urlFor(hero?.imageUrl)?.url()}
                alt="hero banner"
                className={styles.img}
            />
        </div>
    )
}
