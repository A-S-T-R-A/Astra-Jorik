import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { useState, useEffect } from "preact/hooks"

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-04-17",
    useCdn: true,
    token: import.meta.env.VITE_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: string) => builder.image(source)

export const useImageUrl = (source: string) => {
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("")

    useEffect(() => {
        const getImageUrl = async () => {
            setLoading(true)
            const imageUrl = await builder.image(source).url()
            setUrl(imageUrl)
            setLoading(false)
        }

        getImageUrl()
    }, [source])

    return { loading, url }
}
