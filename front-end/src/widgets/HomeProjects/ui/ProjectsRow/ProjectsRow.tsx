import { useState } from "preact/hooks"
import { classNames } from "shared/lib/classNames"
import styles from "./ProjectsRow.module.css"
import { useContext } from "preact/hooks"
import { Context } from "app/ContextProvider"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import placeholder from "shared/constants/placholder.png"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "./ProjectRow.css"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { ProjectLink } from "shared/ui/ProjectLink/ProjectLink"
import { route } from "preact-router"
import { urlFor } from "shared/lib/client"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { AsyncImage, ImageFit } from "shared/ui/AsyncImage/AsyncImage"

interface ProjectsRow {
    className?: string
}

export function ProjectsRow({ className }: ProjectsRow) {
    const [loading, setLoading] = useState(true)
    const [hovered, setHovered] = useState(-1)
    const { projects } = useContext(Context)

    const handleImageLoad = () => {
        setLoading(false)
    }

    function clickHandler() {
        route(`/gallery`)
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
                {projects
                    ? projects?.map((proj, index) => {
                          return (
                              <SwiperSlide
                                  key={index}
                                  className={styles.slide}
                                  onMouseEnter={() => setHovered(index)}
                                  onMouseLeave={() => setHovered(-1)}
                                  onClick={clickHandler}
                              >
                                  <AsyncImage
                                      objectFit={ImageFit.COVER}
                                      src={urlFor(proj.imageUrl)?.url()}
                                      alt="project"
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
                                              {proj.title}
                                          </Typography>
                                          <ProjectLink
                                              to={`/gallery`}
                                              color={TypographyColor.INVERTED}
                                              variant={TypographyVariant.SMALL}
                                          >
                                              view project
                                          </ProjectLink>
                                      </div>
                                  </div>
                              </SwiperSlide>
                          )
                      })
                    : [1, 2, 3, 4, 5].map(item => (
                          <SwiperSlide key={item} className={styles.slide}>
                              <Skeleton
                                  style={{
                                      width: "100%",
                                      height: "300px",
                                      position: "absolute",
                                  }}
                              />
                              <img
                                  src={placeholder}
                                  style={{
                                      zIndex: "1",
                                      position: "relative",
                                      height: "300px",
                                      objectFit: "contain",
                                  }}
                              />
                          </SwiperSlide>
                      ))}
            </Swiper>
        </div>
    )
}
