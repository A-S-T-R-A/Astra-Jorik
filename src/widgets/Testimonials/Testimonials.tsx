import { Section } from "shared/ui/Section/Section"
import styles from "./Testimoials.module.css"
import { heroImg } from "shared/constants/home"
import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import { Epigraph } from "shared/ui/Epigraph/Epigraph"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "./Testimonials.css"
import { TestimoialSlide } from "./TestimonialSlide/TestimonialSlide"
import { classNames } from "shared/lib/classNames"

export function Testimoials() {
    return (
        <div className={styles.wrapper}>
            <img src={heroImg} alt="hero banner" className={styles.img} />
            <Epigraph className={styles.epigrpah}>Reviews</Epigraph>
            <div className={classNames(styles.container, {}, [".testimonials-swiper-container"])}>
                <SectionTitle title="Testimonials" titleColor={TypographyColor.INVERTED} />
                <Swiper
                    slidesPerView={1}
                    direction="vertical"
                    autoHeight
                    spaceBetween={30}
                    /* modules={[Pagination, Navigation]}
                    className={styles.swiper}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        620: {
                            slidesPerView: 2,
                        },
                        920: {
                            slidesPerView: 3,
                        },
                        1120: {
                            slidesPerView: 4,
                        },
                        1420: {
                            slidesPerView: 2,
                        },
                    }} */
                >
                    {[1, 2, 3, 4].map((proj, index) => (
                        <SwiperSlide key={index} className={styles.slide}>
                            <TestimoialSlide />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
