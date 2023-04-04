import { Section } from "shared/ui/Section/Section"
import styles from "./ProjectGallery.module.css"
import { heroImg } from "shared/constants/home"
import { useState } from "preact/hooks"
import { classNames } from "shared/lib/classNames"

interface ProjectGalleryProps {
    imgGallery: string[]
}

export function ProjectGallery({ imgGallery }: ProjectGalleryProps) {
    const [active, setActive] = useState(0)

    if (!imgGallery || !imgGallery.length) {
        return null
    }

    return (
        <Section>
            {imgGallery.map((img, index) => {
                return (
                    active === index && <img key={index} src={img} alt="" className={styles.img} />
                )
            })}

            <div className={styles.imgRow}>
                {imgGallery.map((img, index) => {
                    return (
                        <img
                            src={img}
                            key={index}
                            alt=""
                            className={classNames(
                                styles.imgRowItem,
                                { [styles.active]: index === active },
                                []
                            )}
                            onClick={() => setActive(index)}
                        />
                    )
                })}
            </div>
        </Section>
    )
}
