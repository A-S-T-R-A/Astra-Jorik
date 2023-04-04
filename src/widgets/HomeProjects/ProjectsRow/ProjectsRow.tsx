import { useState } from "preact/hooks"
import { classNames } from "shared/lib/classNames"
import styles from "./ProjectsRow.module.css"
import "./ProjectRow.css"
import projImg from "./proj.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { ProjectLink } from "../../../shared/ui/ProjectLink/ProjectLink"
import { route } from "preact-router"
import { projectsData } from "shared/constants/projects"

interface ProjectsRow {
    className?: string
}

export function ProjectsRow({ className }: ProjectsRow) {
    const [hovered, setHovered] = useState(-1)

    function clickHandler(id: string) {
        route(`/projects/${id}`)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className={classNames(styles.container, {}, [className, "projects-swiper-container"])}>
            <Swiper
                slidesPerView={1}
                className={styles.swiper}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                spaceBetween={30}
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
                        slidesPerView: 5,
                    },
                }}
            >
                {projectsData.map((proj, index) => {
                    const { id, title } = proj
                    return (
                        <SwiperSlide
                            key={index}
                            className={styles.slide}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(-1)}
                            onClick={() => clickHandler(id)}
                        >
                            <img
                                src={projImg}
                                alt=""
                                className={classNames(
                                    styles.img,
                                    { [styles.imgBlurred]: index === hovered },
                                    []
                                )}
                            />
                            <div className={styles.infoOverlay}>
                                <div className={styles.slideInfo}>
                                    <Typography
                                        variant={TypographyVariant.H3}
                                        color={TypographyColor.INVERTED}
                                        className={styles.slideText}
                                    >
                                        {title}
                                    </Typography>
                                    <ProjectLink
                                        to={`/projects/${id}`}
                                        color={TypographyColor.DARK_GRAY}
                                        variant={TypographyVariant.SMALL}
                                    >
                                        view project
                                    </ProjectLink>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
