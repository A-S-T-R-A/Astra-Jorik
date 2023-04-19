import { useState, useEffect } from "preact/hooks"
import { client } from "../../lib/client"

export function useGallerySlice() {
    const [photos, setPhotos] = useState<Array<any>>([])

    useEffect(() => {
        const query = "*[_type == 'gallery']"

        client.fetch(query).then(data => {
            setPhotos(data)
        })
    }, [])
    return { photos }
}
