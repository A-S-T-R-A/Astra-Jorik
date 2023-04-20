import styles from "./Hero.module.css"
import { useContext } from "preact/hooks"
import { urlFor } from "shared/lib/client"
import { Context } from "app/ContextProvider"
import { HeroSkeleton } from "./HeroSkeleton/HeroSkeleton"

export function Hero() {
    const { hero } = useContext(Context)
    if (hero) {
        return (
            <div className={styles.wrapper}>
                <img src={urlFor(hero?.imageUrl)?.url()} alt="hero banner" className={styles.img} />
            </div>
        )
    } else {
        return <HeroSkeleton />
    }
}
