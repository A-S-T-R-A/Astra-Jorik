import { Section } from "shared/ui/Section/Section"
import styles from "./ProjectDescription.module.css"
import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import { Typography } from "shared/ui/Typography/Typography"
import { heroImg } from "shared/constants/home"
import { TestimoialSlide } from "./TestimonialSlide/TestimonialSlide"
import { Epigraph } from "shared/ui/Epigraph/Epigraph"

export function ProjectDescription() {
    return (
        <Section containerClassName={styles.container}>
            <div className={styles.article}>
                <Epigraph className={styles.epigraph}>best</Epigraph>
                <SectionTitle title="The first Project" />
                <Typography className={styles.desc}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                </Typography>
            </div>
            <TestimoialSlide className={styles.testimonial} />
        </Section>
    )
}
