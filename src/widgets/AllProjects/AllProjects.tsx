import { Section } from "shared/ui/Section/Section"
import styles from "./AllProjects.module.css"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import projImg from "./proj.jpg"
import { ProjectLink } from "shared/ui/ProjectLink/ProjectLink"

export function AllProjects() {
    return (
        <Section containerClassName={styles.container}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                <div key={index} className={styles.slide}>
                    <img src={projImg} alt="" className={styles.img} />
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
