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
    if (!id) return null

    if (testimonialsData.filter(item => item.id === id).length > 0) {
        const { name, position, text, img } = {
            ...testimonialsData.filter(item => item.id === id)[0],
        }
        return (
            <div className={classNames(styles.container, {}, [className])}>
                <div className={styles.name}>
                    <Typography variant={TypographyVariant.H4} isBold>
                        {name}
                    </Typography>
                    <Typography color={TypographyColor.DARK_GRAY}>{position}</Typography>
                </div>
                <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
                <img src={img} alt="avatar" className={styles.avatar} />
                <Typography className={styles.testimonial}>{text}</Typography>
            </div>
        )
    } else {
        return null
    }
}
