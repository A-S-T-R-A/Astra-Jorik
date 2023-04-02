import { HTMLAttributes, memo } from "preact/compat"
import { ComponentChildren } from "preact"
import { classNames } from "shared/lib/classNames"
import styles from "./Typography.module.css"

export enum TypographyColor {
    BASE = "base",
    DARK_GRAY = "darkGray",
    LIGHT_GRAY = "lightGray",
    INVERTED = "inverted",
    ACCENT = "accent",
}

export enum TypographyVariant {
    H1 = "variantH1",
    H2 = "variantH2",
    H3 = "variantH3",
    H4 = "variantH4",
    P = "variantP",
}

interface TextProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ComponentChildren
    variant?: TypographyVariant
    color?: TypographyColor
    isBold?: boolean
}

export const Typography = memo((props: TextProps) => {
    const {
        className,
        children,
        variant = TypographyVariant.P,
        color = TypographyColor.BASE,
        isBold = false,
        ...restProps
    } = props

    return (
        <div
            data-testid="typography"
            className={classNames(styles.Text, { [styles[color]]: color, [styles.bold]: isBold }, [
                className,
                styles[variant],
            ])}
            {...restProps}
        >
            {children}
        </div>
    )
})
