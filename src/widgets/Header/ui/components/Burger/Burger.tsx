import { StateUpdater, useEffect, useState } from "preact/hooks"
import styles from "./Burger.module.css"
import { BurgerIcon } from "./BurgerIcon/BurgerIcon"
import { BurgerNav } from "./BurgerNav/BurgerNav"

interface BurgerProps {
    setNavbarVisible?: StateUpdater<boolean>
}

export function Burger({ setNavbarVisible }: BurgerProps) {
    const [showBurger, setShowBurger] = useState(false)

    function BurgerClickHandler(e: MouseEvent) {
        e.stopPropagation()
        setShowBurger(prev => !prev)
        if (showBurger) {
            setTimeout(() => setNavbarVisible?.(showBurger), 250)
        } else {
            setNavbarVisible?.(showBurger)
        }
    }

    useEffect(() => {
        document.body.style.overflow = showBurger ? "hidden" : ""
    }, [showBurger])

    function clickHandler(e: MouseEvent) {
        e.stopPropagation()
        setShowBurger(false)
    }

    return (
        <div className={styles.wrapper} onClick={clickHandler}>
            <BurgerIcon onClick={BurgerClickHandler} isOpen={showBurger} />
            <BurgerNav isOpen={showBurger} closeBurger={clickHandler} />
        </div>
    )
}
