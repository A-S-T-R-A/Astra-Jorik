import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./TestimonialSlide.module.css"
import { heroImg } from "shared/constants/home"
import { classNames } from "shared/lib/classNames"

interface TestimonialSlideProps {
    className?: string
}

export function TestimoialSlide({ className }: TestimonialSlideProps) {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.name}>
                <Typography variant={TypographyVariant.H4} isBold>
                    Sonia Roy
                </Typography>
                <Typography color={TypographyColor.LIGHT_GRAY}>CEO INTERNATIONAL</Typography>
            </div>
            <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
            <img src={heroImg} alt="avatar" className={styles.avatar} />
            <Typography className={styles.testimonial}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim risus eget
                augue dignissim consectetur. Donec et nisl id ante tempor congue vitae a metus.
                Curabitur a quam eu elit scelerisque laoreet. Suspendisse vel orci sed sapien
                faucibus consectetur. Integer in nunc eu mauris maximus blandit. Sed lacinia enim
                vel ipsum consectetur, at ullamcorper lorem dignissim.
            </Typography>
        </div>
    )
}
