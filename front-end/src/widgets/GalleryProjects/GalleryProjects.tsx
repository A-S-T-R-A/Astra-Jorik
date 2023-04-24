import { Section } from "shared/ui/Section/Section"
import styles from "./GalleryProjects.module.css"
import placeholder from "shared/constants/placholder.png"
import { classNames } from "shared/lib/classNames"
import { useState, useEffect, useContext } from "preact/hooks"
import { urlFor } from "shared/lib/client"
import { Context } from "app/ContextProvider"
import { GallerySkeleton } from "./GallerySkeleton/GallerySkeleton"
import { AsyncImage, ImageFit } from "shared/ui/AsyncImage/AsyncImage"

export function GalleryProjects() {
    const [selectedImg, setSelectedImg] = useState("")
    const { photos } = useContext(Context)

    useEffect(() => {
        document.body.style.overflow = selectedImg ? "hidden" : ""
    }, [selectedImg])

    function handleClick(img: any) {
        setSelectedImg(img)
    }

    function handleClose() {
        setSelectedImg("")
    }
    if (photos) {
        return (
            <Section containerClassName={styles.container}>
                {photos?.map((photo, index) => {
                    return (
                        <div key={index} className={styles.slide}>
                            <AsyncImage
                                objectFit={ImageFit.COVER}
                                src={urlFor(photo?.imageUrl)?.url()}
                                alt="image"
                                className={classNames(styles.img, {}, [])}
                                onClick={() => handleClick(urlFor(photo?.imageUrl)?.url())}
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
    } else {
        return <GallerySkeleton />
    }
}
