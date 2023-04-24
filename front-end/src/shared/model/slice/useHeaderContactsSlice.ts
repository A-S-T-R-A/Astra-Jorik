import { client } from "shared/lib/client"
import { useEffect, useState } from "preact/hooks"

export function useHeaderContactsSlice() {
    const [mobile, setMobile] = useState()
    const [socialIcons, setSocialIcons] = useState()

    useEffect(() => {
        const queryMobile = "*[_type == 'mobile']"
        const queryIcons = "*[_type == 'socialIcon']"

        client.fetch(queryMobile).then(data => {
            setMobile(data)
        })
        client.fetch(queryIcons).then(data => {
            setSocialIcons(data)
        })
    }, [])

    return { mobile, socialIcons }
}
