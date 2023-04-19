import { client } from "shared/lib/client"
import { useEffect, useState } from "preact/hooks"

export function useAboutSlice() {
    const [about, setAbout] = useState("")
    const [ourSkills, setOurSkills] = useState("")

    useEffect(() => {
        const query = "*[_type == 'about']"

        client.fetch(query).then(data => {
            setAbout(data?.[1])
            setOurSkills(data?.[0])
        })
    }, [])

    return { about, ourSkills }
}
