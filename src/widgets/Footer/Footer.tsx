import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { SiFoodpanda } from "react-icons/si"
import styles from "./Footer.module.css"
import { socialIcons } from "shared/constants/links/socialIcons/socialIcons"
import { linksData } from "shared/constants/links/menuLinks/linksData"
import { contacts } from "shared/constants/footer/contactLinks/link"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { route } from "preact-router"

export function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Typography
                        className={styles.logo}
                        variant={TypographyVariant.H2}
                        onClick={() => route("/")}
                    >
                        <SiFoodpanda />
                        PandaReno
                    </Typography>
                    <Typography color={TypographyColor.DARK_GRAY}>
                        Dreams come true with our talented architects
                    </Typography>
                </div>

                <div className={styles.quickContact}>
                    <Typography variant={TypographyVariant.P} isBold className={styles.title}>
                        Quick Contact:
                    </Typography>
                    {contacts.map(item => {
                        return (
                            <AppLink to={item.link} className={styles.links}>
                                {item.title}
                            </AppLink>
                        )
                    })}
                </div>
                <div className={styles.projects}>
                    <Typography variant={TypographyVariant.P} isBold className={styles.title}>
                        Projects:
                    </Typography>
                    {["First", "Second", "Third", "Fourth"].map(item => {
                        return (
                            <AppLink to="/projects/1" className={styles.links}>
                                {item}
                            </AppLink>
                        )
                    })}
                </div>
                <div className={styles.menu}>
                    <Typography variant={TypographyVariant.P} isBold className={styles.title}>
                        navigation:
                    </Typography>
                    {linksData.map(item => {
                        return (
                            <AppLink className={styles.links} key={item.id} to={item.link}>
                                {item.text}
                            </AppLink>
                        )
                    })}
                </div>
                <div className={styles.copyright}>
                    <Typography>© 2023 All Rights Reserved</Typography>
                    <div className={styles.socialIcons}>
                        {socialIcons.map((item, index) => {
                            return (
                                <a
                                    key={index}
                                    className={styles.item}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item.icon}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}
