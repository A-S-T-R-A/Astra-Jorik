import { client } from "../../lib/client"
import { useEffect, useState } from "preact/hooks"

export function useProjectRowSlice() {
    const [projects, setProjects] = useState()

    useEffect(() => {
        const query = "*[_type == 'gallery']"

        client.fetch(query).then(data => {
            setProjects(data)
        })
    }, [])

    return { projects }
}
