import { createContext, ComponentChildren } from "preact"
import {
    useHeroSlice,
    useAboutSlice,
    useServicesSlice,
    useProjectRowSlice,
    useTestimonialsSlice,
    useContactSlice,
    useLogoSlice,
    useHeaderContactsSlice,
    useGallerySlice,
    useTitleSlice,
} from "shared/model/slice"

export interface AppContext {
    title?: any
    hero?: any
    about?: any
    ourSkills?: any
    services?: any[]
    projects?: any[]
    reviewers?: any[]
    contacts?: any[]
    logo?: any
    mobile?: any
    socialIcons?: any[]
    photos?: any[]
    children?: ComponentChildren
}

export const Context = createContext<AppContext>({})

export function ContextProvider({ children }: AppContext) {
    const { hero } = useHeroSlice()
    const { about, ourSkills } = useAboutSlice()
    const { services } = useServicesSlice()
    const { projects } = useProjectRowSlice()
    const { reviewers } = useTestimonialsSlice()
    const { contacts } = useContactSlice()
    const { logo } = useLogoSlice()
    const { mobile, socialIcons } = useHeaderContactsSlice()
    const { photos } = useGallerySlice()
    const { title } = useTitleSlice()

    return (
        <Context.Provider
            value={{
                hero,
                about,
                ourSkills,
                services,
                projects,
                reviewers,
                contacts,
                logo,
                mobile,
                socialIcons,
                photos,
                title,
            }}
        >
            {children}
        </Context.Provider>
    )
}
