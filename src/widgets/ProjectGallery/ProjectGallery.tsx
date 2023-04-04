import { Section } from "shared/ui/Section/Section"
import styles from "./ProjectGallery.module.css"
import { heroImg } from "shared/constants/home"
import { useState } from "preact/hooks"
import { classNames } from "shared/lib/classNames"

export function ProjectGallery() {
    const [active, setActive] = useState(0)

    return (
        <Section>
            {[1, 2, 3, 4].map((item, index) => {
                return (
                    active === index && (
                        <img key={index} src={heroImg} alt="" className={styles.img} />
                    )
                )
            })}

            <div className={styles.imgRow}>
                {[1, 2, 3, 4].map((item, index) => {
                    return (
                        <img
                            src={heroImg}
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
