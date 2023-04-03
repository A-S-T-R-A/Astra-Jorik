/* import { AnimatedLoadingIcon } from "modules/common/ui/AnimatedLoadingIcon"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi" */
import { FailContent } from "./components/FailContent/FailContent"
import { GratitudeContent } from "./components/GratitudeContent/GratitudeContent"
import { LoadingContent } from "./components/LoadingContent/LoadingContent"

import styles from "./FormLoading.module.css"

export function FormLoading({ loading, isSuccess }) {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                {loading ? (
                    <div>Loading</div>
                ) : // <AnimatedLoadingIcon className={styles.loadingIcon} />
                isSuccess ? (
                    <div>ok</div>
                ) : (
                    // <AiOutlineCheckCircle className={styles.successIcon} />
                    <div>not ok</div>
                    // <BiErrorCircle className={styles.failIcon} />
                )}
            </div>
            <div className={styles.contentContainer}>
                {loading ? <LoadingContent /> : isSuccess ? <GratitudeContent /> : <FailContent />}
            </div>
        </div>
    )
}
