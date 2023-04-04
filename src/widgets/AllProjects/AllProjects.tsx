import { Section } from "shared/ui/Section/Section"
import { useState } from "preact/hooks"
import styles from "./AllProjects.module.css"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import projImg from "./proj.jpg"
import { ProjectLink } from "shared/ui/ProjectLink/ProjectLink"
import { route } from "preact-router"
import { classNames } from "shared/lib/classNames"

export function AllProjects() {
    const [hovered, setHovered] = useState(-1)

    function clickHandler() {
        route("/projects/1")
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <Section containerClassName={styles.container}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                <div
                    key={index}
                    className={styles.slide}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(-1)}
                    onClick={clickHandler}
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
                                variant={TypographyVariant.H4}
                                color={TypographyColor.INVERTED}
                                className={styles.slideText}
                            >
                                Best First Project
                            </Typography>
                            <ProjectLink
                                to="/projects/1"
                                color={TypographyColor.DARK_GRAY}
                                variant={TypographyVariant.SMALL}
                            >
                                view project
                            </ProjectLink>
                        </div>
                    </div>
                </div>
            ))}
        </Section>
    )
}
