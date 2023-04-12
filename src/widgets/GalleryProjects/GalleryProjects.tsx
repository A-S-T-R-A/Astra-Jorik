import { useState, useEffect } from "preact/hooks"
import { Section } from "shared/ui/Section/Section"
import styles from "./GalleryProjects.module.css"
import projImg from "./proj.jpg"
import { classNames } from "shared/lib/classNames"
import { projectsData } from "shared/constants/projects"

export function GalleryProjects() {
    const [selectedImg, setSelectedImg] = useState("")

    useEffect(() => {
        document.body.style.overflow = selectedImg ? "hidden" : ""
    }, [selectedImg])

    function handleClick(img: string) {
        setSelectedImg(img)
    }

    function handleClose() {
        setSelectedImg("")
    }

    return (
        <Section containerClassName={styles.container}>
            {projectsData.map((proj, index) => {
                const { img } = proj
                return (
                    <div key={index} className={styles.slide}>
                        <img
                            src={img || projImg}
                            alt="image"
                            className={classNames(styles.img, {}, [])}
                            onClick={() => handleClick(img)}
                        />
                    </div>
                )
            })}
            <div
                className={classNames(styles.modal, { [styles.active]: selectedImg }, [])}
                onClick={handleClose}
            >
                <img src={selectedImg} alt="image" className={styles.modalImg} />
            </div>
        </Section>
    )
}
