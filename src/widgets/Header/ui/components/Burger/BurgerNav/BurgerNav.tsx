import { useState, useEffect } from "react"
import { menuData } from "../../../../data"
import { BurgerCta } from "../BurgerCta"
import { NavigationList } from "../../../common/NavigationList"
import styles from "./BurgerNav.module.css"
import { classNames } from "modules/common/helpers/classNames"
import { VideoBg } from "modules/common/components/VideoBg"

export function BurgerNav({ showBurger, setShowBurger }) {
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

    function menuClickHandler(e) {
        e.stopPropagation()
    }

    function closeClickHandler() {
        setTimeout(() => {
            setShowBurger(false)
        }, 20)
    }

    return (
        <div
            className={classNames(styles.overlay, {
                [styles.video]: showBurger,
            })}
            onClick={closeClickHandler}
        >
            <VideoBg />
            <div
                className={classNames(styles.wrapper, {
                    [styles.navOpen]: showBurger,
                })}
                onClick={menuClickHandler}
            >
                <div
                    className={styles.container}
                    style={{ height: `${height}px` }}
                >
                    <NavigationList
                        closeClickHandler={closeClickHandler}
                        menuData={menuData}
                        className={styles.list}
                    />
                    <BurgerCta closeClickHandler={closeClickHandler} />
                </div>
            </div>
        </div>
    )
}
