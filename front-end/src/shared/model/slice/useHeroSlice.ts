import { client } from "../../lib/client"
import { useEffect, useState } from "preact/hooks"

export function useHeroSlice() {
    const [hero, setHero] = useState()

    useEffect(() => {
        const query = "*[_type == 'home']"

        client.fetch(query).then(data => {
            setHero(data?.[0])
        })
    }, [])

    return { hero }
}
