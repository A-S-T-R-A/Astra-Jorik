import { createContext } from "preact"
import { usePageTitleSlice } from "widgets/PageTitle"
import { ComponentChildren } from "preact"
import { useHeroSlice } from "widgets/Hero"
import { useAboutSlice } from "widgets/About/model/useAboutSlice"

export interface AppContext {
    home?: string | undefined
    hero?: any | undefined
    about?: any | undefined
    ourSkills?: any | undefined
    children?: ComponentChildren
}

export const Context = createContext<AppContext>({})

export function ContextProvider({ children }: AppContext) {
    const { home } = usePageTitleSlice()
    const { hero } = useHeroSlice()
    const { about, ourSkills } = useAboutSlice()

    return <Context.Provider value={{ home, hero, about, ourSkills }}>{children}</Context.Provider>
}
