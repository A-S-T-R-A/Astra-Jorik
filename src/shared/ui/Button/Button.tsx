import { HTMLAttributes } from "preact/compat"
import styles from "./Button.module.css"
import { ComponentChildren } from "preact"
import { classNames } from "shared/lib/classNames"

export enum ButtonVariant {
    FILLED = "filled",
    OUTLINED = "outlines",
    CLEAR = "clear",
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ComponentChildren
    variant: ButtonVariant
}

export function Button(props: ButtonProps) {
    const { children, className, variant } = props

    const btnClassName = classNames(styles.button, {}, [className, styles[variant]])

    return <button className={btnClassName}>{children}</button>
}
