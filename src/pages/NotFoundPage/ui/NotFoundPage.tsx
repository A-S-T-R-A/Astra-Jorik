import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"
import { Section } from "shared/ui/Section/Section"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { AppLink } from "shared/ui/AppLink/AppLink"
import styles from "./NotFoundPage.module.css"

interface NotFoundPageProps {
    default: boolean
}

export function NotFoundPage(props: NotFoundPageProps) {
    return (
        <div>
            <PageTitle
                title="Dreams come true with our talented architects"
                navigation={navigationData}
            />
            <NotFound />
        </div>
    )
}

function NotFound() {
    return (
        <Section containerClassName={styles.notFoundContainer}>
            <div className={styles.error404}>404</div>
            <Typography variant={TypographyVariant.H1} className={styles.title} isBold>
                Page Not Found
            </Typography>
            <AppLink to="/" className={styles.link}>
                Go back to Home page
            </AppLink>
        </Section>
    )
}
