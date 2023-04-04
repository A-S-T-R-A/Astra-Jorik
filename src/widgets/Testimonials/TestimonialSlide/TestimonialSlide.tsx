import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./TestimonialSlide.module.css"
import { heroImg } from "shared/constants/home"

interface TestimonialSlideItem {
    id: string
    text: string
    name: string
    position: string
}

interface TestimoialSlideProps {
    data: TestimonialSlideItem
}

export function TestimoialSlide({ data }: TestimoialSlideProps) {
    const { text, name, position } = data

    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <Typography color={TypographyColor.INVERTED} variant={TypographyVariant.H4} isBold>
                    {name}
                </Typography>
                <Typography color={TypographyColor.LIGHT_GRAY}>{position}</Typography>
            </div>
            <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
            <img src={heroImg} alt="avatar" className={styles.avatar} />
            <Typography className={styles.testimonial} color={TypographyColor.INVERTED}>
                {text}
            </Typography>
        </div>
    )
}
