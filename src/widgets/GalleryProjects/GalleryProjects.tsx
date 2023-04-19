import { Section } from "shared/ui/Section/Section"
import styles from "./GalleryProjects.module.css"
import projImg from "./proj.jpg"
import { classNames } from "shared/lib/classNames"
import { useState, useEffect, useContext } from "preact/hooks"
import { urlFor } from "../../shared/lib/client"
import { Context } from "app/ContextProvider"

export function GalleryProjects() {
    const [selectedImg, setSelectedImg] = useState("")
    const { photos } = useContext(Context)

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
            {photos?.map((photo, index) => {
                return (
                    <div key={index} className={styles.slide}>
                        <img
                            src={urlFor(photo?.imageUrl).url() || projImg}
                            alt="image"
                            className={classNames(styles.img, {}, [])}
                            onClick={() => handleClick(urlFor(photo?.imageUrl).url())}
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
