import { render } from "preact"
import { App } from "app/App"
import { ContextProvider } from "app/ContextProvider"

render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById("app") as HTMLElement
)
