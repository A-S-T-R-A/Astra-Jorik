import { classNames } from "shared/lib/classNames"
import { Link, route, useRouter } from "preact-router"
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

    function clickHandler(e: MouseEvent) {
        route(to)
        closeBurger?.(e)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <a className={classNames(styles.AppLink, {}, [className])} onClick={clickHandler}>
            {children}
        </a>
    )
}
