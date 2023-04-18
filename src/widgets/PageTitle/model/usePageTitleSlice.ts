import { client } from "../../../client"
import { useEffect, useState } from "preact/hooks"

export function usePageTitleSlice() {
    const [home, setHome] = useState("")

    useEffect(() => {
        const query = "*[_type == 'home']"

        client.fetch(query).then(data => {
            setHome(data[0].title)
        })
    }, [])

    return { home }
}
