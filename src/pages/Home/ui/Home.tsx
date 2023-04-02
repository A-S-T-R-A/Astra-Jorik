import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Section } from "shared/ui/Section/Section"

interface HomeProps {
    path: string
}

export function Home(props: HomeProps) {
    return (
        <>
            <Button variant={ButtonVariant.CLEAR}>First</Button>
            <Button variant={ButtonVariant.FILLED}>First</Button>
            <Button variant={ButtonVariant.OUTLINED}>First</Button>
        </>
    )
}
