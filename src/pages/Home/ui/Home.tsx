import { Epigraph } from "shared/ui/Epigraph/Epigraph"
import { Section } from "shared/ui/Section/Section"

interface HomeProps {
    path: string
}

export function Home(props: HomeProps) {
    return (
        <>
            <Epigraph>About us</Epigraph>
        </>
    )
}
