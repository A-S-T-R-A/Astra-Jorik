import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import styles from "./HomeProjectsSceleton.module.css"
import placeHolder from "shared/constants/placholder.png"
import { classNames } from "shared/lib/classNames"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "./SkeletonRow.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

export function HomeProjectsSkeleton() {
    return (
        <div className={styles.wrapper}>
            <Skeleton className={styles.epigraph} />
            <Skeleton className={styles.title} />
            <SkeletonRow className={styles.projects} />
        </div>
    )
}

interface SkeletonRowProps {
    className?: string
}

export function SkeletonRow({ className }: SkeletonRowProps) {
    return (
        <div className={classNames(styles.container, {}, [className, "projects-swiper-container"])}>
            <Swiper
                slidesPerView={1}
                className={styles.swiper}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                breakpoints={{
                    520: {
                        slidesPerView: 2,
                    },
                    920: {
                        slidesPerView: 3,
                    },
                    1120: {
                        slidesPerView: 4,
                    },
                    1420: {
                        slidesPerView: 5,
                    },
                }}
            >
                {[1, 2, 3, 4, 5].map(item => {
                    return (
                        <SwiperSlide key={item} className={styles.slide}>
                            <img src={placeHolder} alt="" className={styles.img} />
                            <Skeleton />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
