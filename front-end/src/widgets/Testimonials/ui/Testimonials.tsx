import styles from "./Testimoials.module.css"
import { useContext } from "preact/hooks"
import { Context } from "app/ContextProvider"
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
import { urlFor } from "shared/lib/client"
import { TestimonialSkeleton } from "./TestimonialSkeleton/TestimonialSkeleton"

export function Testimoials() {
    const { reviewers, title, hero } = useContext(Context)

    if (reviewers) {
        return (
            <div className={styles.wrapper}>
                {!!hero && (
                    <img
                        src={urlFor(hero?.imageUrl)?.url()}
                        alt="hero banner"
                        className={styles.img}
                    />
                )}
                <Epigraph className={styles.epigrpah}>{title?.[6].epigraph}</Epigraph>
                <div className={styles.container}>
                    <SectionTitle
                        title={title?.[6].title}
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
                        {reviewers?.map((reviewer, index) => (
                            <SwiperSlide key={index} className={styles.slide}>
                                <TestimoialSlide data={reviewer} />
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
    } else {
        return <TestimonialSkeleton />
    }
}
