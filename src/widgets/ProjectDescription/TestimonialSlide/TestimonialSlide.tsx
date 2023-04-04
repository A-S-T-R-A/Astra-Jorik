import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./TestimonialSlide.module.css"
import { heroImg } from "shared/constants/home"
import { classNames } from "shared/lib/classNames"
import { testimonialsData } from "shared/constants/testimonials"

interface TestimonialSlideProps {
    className?: string
    id: string
}

export function TestimoialSlide({ className, id }: TestimonialSlideProps) {
    const { name, position, text } = { ...testimonialsData.filter(item => item.id === id)[0] }

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.name}>
                <Typography variant={TypographyVariant.H4} isBold>
                    {name}
                </Typography>
                <Typography color={TypographyColor.DARK_GRAY}>{position}</Typography>
            </div>
            <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
            <img src={heroImg} alt="avatar" className={styles.avatar} />
            <Typography className={styles.testimonial}>{text}</Typography>
        </div>
    )
}
