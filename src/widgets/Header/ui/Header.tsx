import { useEffect, useState } from "preact/hooks"
import { classNames } from "shared/lib/classNames"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { SiFoodpanda } from "react-icons/si"
import { Burger } from "./components/Burger/Burger"
import { Contacts } from "./components/Contacts/Contacts"
import styles from "./Header.module.css"

export function Header() {
    const [navbarVisible, setNavbarVisible] = useState(false)

    useEffect(() => {
        function scrolled() {
            window.scrollY > 11 ? setNavbarVisible(true) : setNavbarVisible(false)
        }
        window.addEventListener("scroll", scrolled)
        return () => {
            window.removeEventListener("scroll", scrolled)
        }
    }, [])

    const wrapperClassName = classNames(styles.wrapper, { [styles.isScrolled]: navbarVisible }, [])
    return (
        <header className={wrapperClassName}>
            <div className={styles.container}>
                <Typography className={styles.logo} variant={TypographyVariant.H3}>
                    <SiFoodpanda />
                </Typography>
                <Contacts className={styles.contacts} />
                <Burger setNavbarVisible={setNavbarVisible} />
            </div>
        </header>
    )
}
