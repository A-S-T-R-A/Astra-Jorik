import { route } from "preact-router"
import { useEffect, useState } from "preact/hooks"
import { classNames } from "shared/lib/classNames"
import { useContext } from "preact/hooks"
import { urlFor } from "shared/lib/client"
import { Context } from "app/ContextProvider"
import { Burger } from "./components/Burger/Burger"
import { Contacts } from "./components/Contacts/Contacts"
import styles from "./Header.module.css"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"

export function Header() {
    const [navbarVisible, setNavbarVisible] = useState(false)
    const { logo } = useContext(Context)

    useEffect(() => {
        function scrolled() {
            window.scrollY > 11 ? setNavbarVisible(true) : setNavbarVisible(false)
        }
        window.addEventListener("scroll", scrolled)
        return () => {
            window.removeEventListener("scroll", scrolled)
        }
    }, [])

    function clickHandler() {
        route("/")
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    const wrapperClassName = classNames(styles.wrapper, { [styles.isScrolled]: navbarVisible }, [])
    return (
        <header className={wrapperClassName}>
            <div className={styles.container}>
                <div className={styles.logoContainer} onClick={clickHandler}>
                    {logo ? (
                        <img
                            src={urlFor(logo?.imageUrl).url()}
                            alt="logo"
                            className={styles.logo}
                        />
                    ) : (
                        <Skeleton style={{ width: "50px", borderRadius: "50px" }} />
                    )}
                </div>

                <Contacts className={styles.contacts} />
                <Burger setNavbarVisible={setNavbarVisible} />
            </div>
        </header>
    )
}
