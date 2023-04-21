import { ContactUsPage } from "pages/ContactUsPage"
import { useEffect } from "preact/hooks"

export function AdminPage(props: { path: string }) {
    useEffect(() => {
        window.location.href = "https://pandareno.sanity.studio/"
    }, [])

    return <ContactUsPage path="/contact" />
}
