import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./Footer.module.css"
import { useContext } from "preact/hooks"
import { linksData } from "shared/constants/links/menuLinks/linksData"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { route } from "preact-router"
import { projectsData } from "shared/constants/projects"
import { Context } from "app/ContextProvider"
import { urlFor } from "../../shared/lib/client"

export function Footer() {
    const { contacts, socialIcons } = useContext(Context)
    const currentYear = new Date().getFullYear()

    function clickHandler() {
        route("/")
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Typography
                        className={styles.logo}
                        variant={TypographyVariant.H2}
                        onClick={clickHandler}
                    >
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
                    {contacts?.map(item => {
                        const { phone, email } = item
                        const digits = phone?.replace(/\D/g, "")
                        const phoneNumber = `tel:${digits}`
                        const mail = `mailto:${email}`

                        return item.contactType === "phone" ? (
                            <a href={phoneNumber} className={styles.links}>
                                {item.phone}
                            </a>
                        ) : (
                            <a href={mail} className={styles.links}>
                                {email}
                            </a>
                        )
                    })}
                </div>
                <div className={styles.projects}>
                    <Typography variant={TypographyVariant.P} isBold className={styles.title}>
                        Projects:
                    </Typography>
                    {projectsData.slice(0, 5).map(proj => {
                        const { linkTitle } = proj
                        return (
                            <AppLink to={`/gallery`} className={styles.links}>
                                {linkTitle}
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
                    <Typography>© {currentYear} All Rights Reserved</Typography>
                    <div className={styles.socialIcons}>
                        {socialIcons?.map((item, index) => {
                            return (
                                <a
                                    key={index}
                                    className={styles.item}
                                    href={item.address}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={urlFor(item.icon).url()}
                                        style={{ width: "20px", minWidth: "20px" }}
                                    />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}
