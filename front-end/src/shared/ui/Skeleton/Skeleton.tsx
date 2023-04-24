import { classNames } from "shared/lib/classNames"
import cls from "./Skeleton.module.css"
import { CSSProperties, memo } from "preact/compat"

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    border?: string
    style?: CSSProperties
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border, style } = props

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
        ...style,
    }

    return <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
})
