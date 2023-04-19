import styles from "./BurgerIcon.module.css"

export interface BurgerIconProps {
    onClick?: (e: MouseEvent) => void
    isOpen?: boolean
}

export function BurgerIcon({ onClick, isOpen }: BurgerIconProps) {
    return (
        <div
            aria-label="toggle navigation"
            onClick={onClick}
            className={`${styles.container} ${isOpen ? styles.burgerOpen : ""}`}
        >
            <span className={styles.hamburger}></span>
        </div>
    )
}
