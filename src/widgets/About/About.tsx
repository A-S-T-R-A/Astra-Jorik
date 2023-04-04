import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import styles from "./About.module.css"
import { kitchen1, kitchen2 } from "shared/constants/about/pictures"
import { Section } from "shared/ui/Section/Section"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { ProjectLink } from "shared/ui/ProjectLink/ProjectLink"

export function About() {
    return (
        <Section>
            <div className={styles.container}>
                <div className={styles.firstSection}>
                    <SectionTitle
                        epigraph="ABOUT US"
                        title="We Over 15 Years to Design Thousand of Succesful Dreamst"
                    />
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                    <ProjectLink to="/projects" className={styles.link}>
                        our projects
                    </ProjectLink>
                </div>
                <img src={kitchen1} alt="about" className={styles.images1} />
                <img src={kitchen2} alt="facts" className={styles.images2} />
                <div className={styles.secondSection}>
                    <SectionTitle epigraph="fun facts" title="Our designers" />
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                    <div className={styles.achievmentContainer}>
                        <div className={styles.years}>
                            <Typography
                                variant={TypographyVariant.H1}
                                className={styles.numbers}
                                isBold
                            >
                                5
                            </Typography>
                            <Typography color={TypographyColor.DARK_GRAY} isBold>
                                Years
                            </Typography>
                        </div>
                        <div className={styles.projects}>
                            <Typography
                                variant={TypographyVariant.H1}
                                className={styles.numbers}
                                isBold
                            >
                                228
                            </Typography>
                            <Typography color={TypographyColor.DARK_GRAY} isBold>
                                Projects
                            </Typography>
                        </div>
                        <div className={styles.clients}>
                            <Typography
                                variant={TypographyVariant.H1}
                                className={styles.numbers}
                                isBold
                            >
                                300
                            </Typography>
                            <Typography color={TypographyColor.DARK_GRAY} isBold>
                                Clients
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
