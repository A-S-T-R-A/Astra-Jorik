import { client } from "../../lib/client"
import { useEffect, useState } from "preact/hooks"

export function useContactSlice() {
    const [contacts, setContacts] = useState()

    useEffect(() => {
        const query = "*[_type == 'contacts']"

        client.fetch(query).then(data => {
            setContacts(data)
        })
    }, [])

    return { contacts }
}
