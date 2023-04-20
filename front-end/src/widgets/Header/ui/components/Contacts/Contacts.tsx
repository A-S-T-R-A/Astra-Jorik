import styles from "./Contacts.module.css"
import { classNames } from "shared/lib/classNames"
import { useContext } from "preact/hooks"
import { Context } from "app/ContextProvider"
import { urlFor } from "shared/lib/client"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"

interface ContactsProps {
    className?: string
}

export function Contacts({ className }: ContactsProps) {
    const { mobile, socialIcons } = useContext(Context)
    const digits = mobile?.[0]?.number?.replace(/\D/g, "")
    const phoneNumber = `tel:${digits}`

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.socialIcons}>
                {socialIcons
                    ? socialIcons.map((item, index) => {
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
                      })
                    : [1, 2, 3, 4].map(item => {
                          return (
                              <Skeleton
                                  key={item}
                                  style={{ width: "25px", height: "25px", borderRadius: "50px" }}
                              />
                          )
                      })}
            </div>
            <span className={styles.separator}></span>

            <div className={styles.phoneContainer}>
                {mobile ? (
                    <>
                        Call us:{" "}
                        <a href={phoneNumber} className={styles.link}>
                            {mobile[0].number}
                        </a>
                    </>
                ) : (
                    <Skeleton style={{ width: "150px", height: "20px", margin: "0 auto" }} />
                )}
            </div>
        </div>
    )
}
