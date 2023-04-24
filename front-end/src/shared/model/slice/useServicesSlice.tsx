import { useState, useEffect } from "preact/hooks"
import { client } from "shared/lib/client"

export function useServicesSlice() {
    const [services, setServices] = useState()

    useEffect(() => {
        const query = "*[_type == 'services']"

        client.fetch(query).then(data => {
            setServices(data)
        })
    }, [])

    return { services }
}
