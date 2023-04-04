import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { SiFoodpanda } from "react-icons/si"
import styles from "./Footer.module.css"
import { socialIcons } from "shared/constants/links/socialIcons/socialIcons"
import { linksData } from "shared/constants/links/menuLinks/linksData"
import { useFullLinks } from "shared/constants/footer/usefullLinks/links"
import { contacts } from "shared/constants/footer/contactLinks/link"
import { company } from "shared/constants/footer/companyLinks/link"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { route } from "preact-router"

export function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <Typography
                    className={styles.logo}
                    variant={TypographyVariant.H1}
                    onClick={() => route("/")}
                >
                    <SiFoodpanda />
                </Typography>
                <div className={styles.quickContact}>
                    <Typography variant={TypographyVariant.H4} isBold>
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
                <div className={styles.usefullLinks}>
                    <Typography variant={TypographyVariant.H4} isBold>
                        Usefull Link:
                    </Typography>
                    {useFullLinks.map(item => {
                        return (
                            <AppLink to={item.link} className={styles.links}>
                                {item.title}
                            </AppLink>
                        )
                    })}
                </div>
                <div className={styles.company}>
                    <Typography variant={TypographyVariant.H4} isBold>
                        Company:
                    </Typography>
                    {company.map(item => {
                        return (
                            <AppLink to={item.link} className={styles.links}>
                                {item.title}
                            </AppLink>
                        )
                    })}
                </div>
                <div className={styles.menu}>
                    <Typography variant={TypographyVariant.H4} isBold>
                        Menu
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
                    <Typography>© 04.04.2023 All Rights Reserved</Typography>
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
