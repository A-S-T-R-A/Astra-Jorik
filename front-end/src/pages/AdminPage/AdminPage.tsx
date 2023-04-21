import { useEffect } from "preact/hooks"

export function AdminPage(props: { path: string }) {
    useEffect(() => {
        window.location.href = "https://pandareno.sanity.studio/"
    }, [])

    return <div />
}
