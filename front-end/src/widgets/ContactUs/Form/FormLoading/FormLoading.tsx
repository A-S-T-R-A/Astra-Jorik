import { AiOutlineCheckCircle, AiOutlineLoading3Quarters } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi"
import styles from "./FormLoading.module.css"

interface FormLoadingProps {
    loading: boolean
    isSuccess: boolean
}

export function FormLoading({ loading, isSuccess }: FormLoadingProps) {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                {loading ? (
                    /* @ts-ignore */
                    <AiOutlineLoading3Quarters className={styles.loadingIcon} />
                ) : isSuccess ? (
                    /* @ts-ignore */
                    <AiOutlineCheckCircle className={styles.successIcon} />
                ) : (
                    /* @ts-ignore */
                    <BiErrorCircle className={styles.failIcon} />
                )}
            </div>
            <div className={styles.contentContainer}>
                {loading ? <LoadingContent /> : isSuccess ? <GratitudeContent /> : <FailContent />}
            </div>
        </div>
    )
}

function LoadingContent() {
    return <div className={styles.loading}>Loading...</div>
}

function GratitudeContent() {
    return (
        <p className={styles.gratitudeInfo}>
            Thank You
            <br />
            We will contact You soon
        </p>
    )
}

function FailContent() {
    return (
        <p className={styles.failInfo}>
            Error
            <br /> Please try again later
        </p>
    )
}
