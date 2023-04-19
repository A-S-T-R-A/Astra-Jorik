import styles from "./Hero.module.css"
import { useContext } from "preact/hooks"
import { urlFor } from "../../../shared/lib/client"
import { Context } from "app/ContextProvider"

export function Hero() {
    const { hero } = useContext(Context)

    return (
        <div className={styles.wrapper}>
            {!!hero && (
                <img src={urlFor(hero?.imageUrl).url()} alt="hero banner" className={styles.img} />
            )}
        </div>
    )
}
