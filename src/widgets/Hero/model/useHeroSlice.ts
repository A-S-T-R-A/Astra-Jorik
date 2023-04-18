import { client } from "../../../client"
import { useEffect, useState } from "preact/hooks"

export function useHeroSlice() {
    const [hero, setHero] = useState()

    useEffect(() => {
        if (hero) return
        const query = "*[_type == 'home']"

        client.fetch(query).then(data => {
            setHero(data?.[0])
        })
    }, [])

    return { hero }
}
