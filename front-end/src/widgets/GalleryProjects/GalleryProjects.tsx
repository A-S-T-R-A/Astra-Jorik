import { Section } from "shared/ui/Section/Section"
import styles from "./GalleryProjects.module.css"
import { classNames } from "shared/lib/classNames"
import { useState, useEffect, useContext } from "preact/hooks"
import { urlFor } from "shared/lib/client"
import { Context } from "app/ContextProvider"
import { GallerySkeleton } from "./GallerySkeleton/GallerySkeleton"
import placeHolder from "shared/constants/placholder.png"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"

export function GalleryProjects() {
    const [selectedImg, setSelectedImg] = useState("")
    const [loading, setLoading] = useState(true)
    const { photos } = useContext(Context)

    const handleImageLoad = () => {
        setLoading(false)
    }

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
                        {!!photos && (
                            <img
                                onLoad={handleImageLoad}
                                src={urlFor(photo?.imageUrl).url()}
                                alt="image"
                                className={classNames(styles.img, {}, [])}
                                onClick={() => handleClick(urlFor(photo?.imageUrl).url())}
                            />
                        )}
                    </div>
                )
            })}
            <div
                className={classNames(styles.modal, { [styles.active]: selectedImg }, [])}
                onClick={handleClose}
            >
                <img src={selectedImg} alt="image" className={styles.modalImg} />
            </div>
            {loading && <GallerySkeleton />}
        </Section>
    )
}
