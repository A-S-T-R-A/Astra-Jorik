import { Section } from "shared/ui/Section/Section"
import { useState } from "preact/hooks"
import styles from "./AllProjects.module.css"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import projImg from "./proj.jpg"
import { ProjectLink } from "shared/ui/ProjectLink/ProjectLink"
import { route } from "preact-router"
import { classNames } from "shared/lib/classNames"
import { projectsData } from "shared/constants/projects"

export function AllProjects() {
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
        <Section containerClassName={styles.container}>
            {projectsData.map((proj, index) => {
                const { id, title, img } = proj
                return (
                    <div
                        key={index}
                        className={styles.slide}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(-1)}
                        onClick={() => clickHandler(id)}
                    >
                        <img
                            src={img || projImg}
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
                                    variant={TypographyVariant.H4}
                                    color={TypographyColor.INVERTED}
                                    className={styles.slideText}
                                >
                                    {title}
                                </Typography>
                                <ProjectLink
                                    to="/projects/1"
                                    color={TypographyColor.INVERTED}
                                    variant={TypographyVariant.SMALL}
                                >
                                    view project
                                </ProjectLink>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Section>
    )
}
