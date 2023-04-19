import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./TestimonialSlide.module.css"
import { urlFor } from "shared/lib/client"

interface TestimonialSlideItem {
    feedback: string
    name: string
    company: string
    imageUrl: string
}

interface TestimoialSlideProps {
    data: TestimonialSlideItem
}

export function TestimoialSlide({ data }: TestimoialSlideProps) {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <Typography color={TypographyColor.INVERTED} variant={TypographyVariant.H4} isBold>
                    {data.name}
                </Typography>
                <Typography color={TypographyColor.LIGHT_GRAY}>{data.company}</Typography>
            </div>
            <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
            <img src={urlFor(data.imageUrl).url()} alt="avatar" className={styles.avatar} />
            <Typography className={styles.testimonial} color={TypographyColor.INVERTED}>
                {data.feedback}
            </Typography>
        </div>
    )
}
