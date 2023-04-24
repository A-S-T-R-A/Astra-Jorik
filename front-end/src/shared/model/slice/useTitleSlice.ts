import { useState, useEffect } from "preact/hooks"
import { client } from "shared/lib/client"

export function useTitleSlice() {
    const [title, setTitle] = useState()

    useEffect(() => {
        const query = "*[_type == 'title']"

        client.fetch(query).then(data => {
            setTitle(data)
        })
    }, [])

    return { title }
}
