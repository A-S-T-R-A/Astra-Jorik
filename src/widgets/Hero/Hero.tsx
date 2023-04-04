import { heroImg } from "shared/constants/home"
import styles from "./Hero.module.css"

export function Hero() {
    return (
        <div className={styles.wrapper}>
            <img src={heroImg} alt="hero banner" className={styles.img} />
        </div>
    )
}
