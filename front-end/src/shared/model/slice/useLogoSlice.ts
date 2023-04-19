import { client } from "../../lib/client"
import { useEffect, useState } from "preact/hooks"

export function useLogoSlice() {
    const [logo, setLogo] = useState()

    useEffect(() => {
        const query = "*[_type == 'logo']"

        client.fetch(query).then(data => {
            setLogo(data?.[0])
        })
    }, [])

    return { logo }
}
