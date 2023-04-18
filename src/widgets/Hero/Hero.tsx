import { heroImg } from "shared/constants/home"
import styles from "./Hero.module.css"
import { useContext, useEffect, useState } from "preact/hooks"
import { urlFor, client } from "../../client"
import { Context } from "app/ContextProvider"

export function Hero() {
    const [hero, setHero] = useState()

    useEffect(() => {
        const query = "*[_type == 'home']"

        client.fetch(query).then(data => {
            setHero(data?.[0])
        })
    }, [])

    const value = useContext(Context)

    console.log(value)

    return (
        <div className={styles.wrapper}>
            {!!hero && (
                <img src={urlFor(hero?.imageUrl).url()} alt="hero banner" className={styles.img} />
            )}
        </div>
    )
}
