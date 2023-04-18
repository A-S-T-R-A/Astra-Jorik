import { useState, useEffect } from "preact/hooks"
import { Section } from "shared/ui/Section/Section"
import styles from "./GalleryProjects.module.css"
import projImg from "./proj.jpg"
import { classNames } from "shared/lib/classNames"
import { projectsData } from "shared/constants/projects"
import { urlFor, client } from "../../client"

export function GalleryProjects() {
    const [selectedImg, setSelectedImg] = useState("")
    const [photos, setPhotos] = useState<Array<any>>([])

    useEffect(() => {
        const query = "*[_type == 'gallery']"

        client.fetch(query).then(data => {
            setPhotos(data)
            console.log(photos)
        })
    }, [])

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
            {photos.map((photo, index) => {
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
