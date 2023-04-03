import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { SiFoodpanda } from "react-icons/si"
import { Burger } from "./components/Burger/Burger"
import { Contacts } from "./components/Contacts/Contacts"
import styles from "./Header.module.css"

export function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <Typography className={styles.logo} variant={TypographyVariant.H3} isBold>
                    <SiFoodpanda />
                </Typography>
                <Contacts className={styles.contacts} />
                <Burger />
            </div>
        </header>
    )
}
