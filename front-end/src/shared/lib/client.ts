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

export const urlFor = (source: string) => {
    if (source) {
        return builder.image(source)
    }
}
