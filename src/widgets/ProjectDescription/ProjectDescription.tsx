import { Section } from "shared/ui/Section/Section"
import styles from "./ProjectDescription.module.css"
import { SectionTitle } from "shared/ui/SectionTitle/SectionTitle"
import { Typography } from "shared/ui/Typography/Typography"
import { TestimoialSlide } from "./TestimonialSlide/TestimonialSlide"
import { Epigraph } from "shared/ui/Epigraph/Epigraph"

interface ProjectDescriptionProps {
    title: string
    epigraph: string
    description: string[]
    id: string
}

export function ProjectDescription({ id, title, epigraph, description }: ProjectDescriptionProps) {
    return (
        <Section containerClassName={styles.container}>
            <div className={styles.article}>
                <Epigraph className={styles.epigraph}>{epigraph}</Epigraph>
                <SectionTitle title={title} />
                <Typography className={styles.desc}>
                    {description.map((text, index) => (
                        <>
                            {text}
                            {index < description.length - 1 && (
                                <>
                                    <br />
                                    <br />
                                </>
                            )}
                        </>
                    ))}
                </Typography>
            </div>
            <TestimoialSlide className={styles.testimonial} id={id} />
        </Section>
    )
}
