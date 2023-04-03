import styles from "./Testimoials.module.css"
import { heroImg } from "shared/constants/home"
import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import { TypographyColor } from "shared/ui/Typography/Typography"
import { Epigraph } from "shared/ui/Epigraph/Epigraph"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { TestimoialSlide } from "./TestimonialSlide/TestimonialSlide"

export function Testimoials() {
    return (
        <div className={styles.wrapper}>
            <img src={heroImg} alt="hero banner" className={styles.img} />
            <Epigraph className={styles.epigrpah}>Reviews</Epigraph>
            <div className={styles.container}>
                <SectionTitle
                    title="Testimonials"
                    titleColor={TypographyColor.INVERTED}
                    className={styles.title}
                />
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: "#nextProject",
                        prevEl: "#prevProject",
                    }}
                    pagination={{
                        el: "#swiper-progressbar",
                        type: "progressbar",
                    }}
                    centeredSlides={true}
                    className={styles.swiper}
                >
                    {[1, 2, 3, 4].map((proj, index) => (
                        <SwiperSlide key={index} className={styles.slide}>
                            <TestimoialSlide />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.swiperProgressbar} id="swiper-progressbar"></div>
                <div className={styles.navPrev} id="prevProject">
                    {/* @ts-ignore */}
                    <HiOutlineChevronLeft className={styles.chevrons} />
                </div>
                <div className={styles.navNext} id="nextProject">
                    {/* @ts-ignore */}
                    <HiOutlineChevronRight className={styles.chevrons} />
                </div>
            </div>
        </div>
    )
}
