import { createContext } from "preact"

export const Context = createContext()

export function ContextProvider({ children }) {
    return <Context.Provider value="2">{children}</Context.Provider>
}
