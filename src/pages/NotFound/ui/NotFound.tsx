import { PageTitle } from "widgets/PageTitle"
import { navigationData } from "../model"

interface NotFoundProps {
    default: boolean
}

export function NotFound(props: NotFoundProps) {
    return (
        <div>
            <PageTitle
                title="Dreams come true with our talented architects"
                navigation={navigationData}
            />
        </div>
    )
}
