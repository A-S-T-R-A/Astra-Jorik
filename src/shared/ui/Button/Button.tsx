import { HTMLAttributes } from "preact/compat"
import styles from "./Button.module.css"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string
}

export function Button(props: ButtonProps) {
    return <button></button>
}
