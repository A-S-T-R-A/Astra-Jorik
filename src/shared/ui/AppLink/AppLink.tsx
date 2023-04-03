import { classNames } from "shared/lib/classNames"
import { Link } from "preact-router"
import { ComponentChildren } from "preact"
import styles from "./AppLink.module.css"

interface AppLinkProps {
    className?: string
    children: ComponentChildren
    to: string
    closeBurger?: (e: MouseEvent) => void
}

export function AppLink(props: AppLinkProps) {
    const { to, className, children, closeBurger } = props

    return (
        <Link
            href={to}
            className={classNames(styles.AppLink, {}, [className])}
            onClick={closeBurger}
        >
            {children}
        </Link>
    )
}
