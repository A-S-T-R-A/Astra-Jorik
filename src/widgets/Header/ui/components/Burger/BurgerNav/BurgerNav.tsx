import { useState, useEffect } from "preact/hooks"
import styles from "./BurgerNav.module.css"
import { linksData } from "shared/constants/links/menuLinks/linksData"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { Contacts } from "../../Contacts/Contacts"

interface BurgerNavProps {
    isOpen?: boolean
    closeBurger?: (e: MouseEvent) => void
}

export function BurgerNav({ isOpen, closeBurger }: BurgerNavProps) {
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        function handleResize() {
            setHeight(window.innerHeight)
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    function menuClickHandler(e: MouseEvent) {
        e.stopPropagation()
    }

    return (
        <div
            className={`${styles.wrapper} ${isOpen ? styles.navOpen : ""}`}
            onClick={menuClickHandler}
        >
            <div className={styles.container} style={{ height: `${height}px` }}>
                <ul className={styles.list}>
                    {linksData.map(item => {
                        return (
                            <AppLink
                                className={styles.link}
                                key={item.id}
                                to={item.link}
                                closeBurger={closeBurger}
                            >
                                {item.text}
                            </AppLink>
                        )
                    })}
                </ul>
                <Contacts />
            </div>
        </div>
    )
}
