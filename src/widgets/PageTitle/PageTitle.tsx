import { Section } from "shared/ui/Section/Section"
import styles from "./PageTitle.module.css"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { Fragment } from "preact/jsx-runtime"
import { route, useRouter } from "preact-router"

interface PageTitle {
    title: string
    navigation: BreadcrupmsNavigation[]
}

export function PageTitle(props: PageTitle) {
    const { title, navigation } = props

    return (
        <Section containerClassName={styles.container}>
            <Typography variant={TypographyVariant.H1} className={styles.title} isBold>
                {title}
            </Typography>
            <Breadcrupms navigation={navigation} />
        </Section>
    )
}

interface BreadcrupmsNavigation {
    link: string
    text: string
}

interface BreadcrupmsProps {
    navigation: BreadcrupmsNavigation[]
}

function Breadcrupms({ navigation }: BreadcrupmsProps) {
    const router = useRouter()

    return (
        <div className={styles.breadcrumps}>
            {navigation.map((item, index) => {
                const { text, link } = item
                return (
                    <Fragment key={index}>
                        <Typography
                            variant={TypographyVariant.P}
                            color={
                                router[0].path === link
                                    ? TypographyColor.DARK_GRAY
                                    : TypographyColor.LIGHT_GRAY
                            }
                            className={styles.text}
                            isBold
                            onClick={() => {
                                route(link)
                            }}
                        >
                            {text}
                        </Typography>
                        {index !== navigation.length - 1 && (
                            <Typography
                                variant={TypographyVariant.P}
                                color={TypographyColor.LIGHT_GRAY}
                                className={styles.divider}
                                isBold
                            >
                                /
                            </Typography>
                        )}
                    </Fragment>
                )
            })}
        </div>
    )
}
