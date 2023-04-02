import { heroImg } from "shared/constants/home"
import { Section } from "shared/ui/Section/Section"
import styles from "./Hero.module.css"

export function Hero() {
    return (
        <Section>
            <img src={heroImg} alt="hero banner" className={styles.img} />
        </Section>
    )
}
