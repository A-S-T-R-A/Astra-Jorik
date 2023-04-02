import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./Header.module.css"
import { Burger } from "./components/Burger/Burger"

export function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <Typography className={styles.logo} variant={TypographyVariant.H3}>
                    PandaReno
                </Typography>
                <div className={styles.contact}>+380963322102</div>
                <Burger />
            </div>
        </header>
    )
}
