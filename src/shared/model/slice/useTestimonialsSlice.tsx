import { client } from "../../lib/client"
import { useEffect, useState } from "preact/hooks"

export function useTestimonialsSlice() {
    const [reviewers, setReviewers] = useState()

    useEffect(() => {
        const query = "*[_type == 'testimonials']"

        client.fetch(query).then(data => {
            setReviewers(data)
        })
    }, [])

    return { reviewers }
}
