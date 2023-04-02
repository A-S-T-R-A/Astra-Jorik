import { useEffect, useState } from "preact/hooks"
import styles from "./Burger.module.css"
import { BurgerIcon } from "./BurgerIcon/BurgerIcon"
import { BurgerNav } from "./BurgerNav/BurgerNav"

export function Burger() {
    const [showBurger, setShowBurger] = useState(false)

    function BurgerClickHandler(e: MouseEvent) {
        e.stopPropagation()
        setShowBurger(prev => !prev)
        console.log(showBurger)
    }

    useEffect(() => {
        document.body.style.overflow = showBurger ? "hidden" : ""
    }, [showBurger])

    function clickHandler(e: MouseEvent) {
        e.stopPropagation()
        setShowBurger(false)
    }

    return (
        <div className={showBurger ? styles.wrapper : styles.displayNone} onClick={clickHandler}>
            <BurgerIcon onClick={BurgerClickHandler} isOpen={showBurger} />
            {/* <BurgerNav isOpen={showBurger} /> */}
        </div>
    )
}
