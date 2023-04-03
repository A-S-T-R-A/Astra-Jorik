import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { SiFoodpanda } from "react-icons/si"
import styles from "./Footer.module.css"
import { socialIcons } from "shared/constants/footer/socialIcons/socialIcons"
import { AppLink } from "shared/ui/AppLink/AppLink"

export function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <Typography className={styles.logo} variant={TypographyVariant.H1}>
                    <SiFoodpanda />
                </Typography>
                <div className={styles.quickContact}>
                    <Typography variant={TypographyVariant.H3}>Quick Contact:</Typography>
                    <AppLink to="tel:+1234567890" className={styles.links}>
                        +380952821010
                    </AppLink>
                    <AppLink to="mailto:myemailil@gmail.com" className={styles.links}>
                        myemailil@gmail.com
                    </AppLink>
                </div>
                <div className={styles.usefullLinks}>
                    <Typography variant={TypographyVariant.H3}>Usefull Link:</Typography>
                    <AppLink to="/" className={styles.links}>
                        Privacy Policy
                    </AppLink>
                    <AppLink to="/" className={styles.links}>
                        Terms of use
                    </AppLink>
                    <AppLink to="/" className={styles.links}>
                        Help & Contacts
                    </AppLink>
                    <AppLink to="/" className={styles.links}>
                        FAQ
                    </AppLink>
                </div>
                <div className={styles.company}>
                    <Typography variant={TypographyVariant.H3}>Company:</Typography>
                    <AppLink to="/" className={styles.links}>
                        Restore your Kitchen
                    </AppLink>
                    <AppLink to="/" className={styles.links}>
                        Facebook or Meta
                    </AppLink>
                    <AppLink to="/" className={styles.links}>
                        The Web
                    </AppLink>
                    <AppLink to="/" className={styles.links}>
                        The Web3.0
                    </AppLink>
                </div>
                <div className={styles.socialIconsContainer}>
                    <Typography variant={TypographyVariant.H3}>Our Socials:</Typography>
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
