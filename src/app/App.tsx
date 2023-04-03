import Router from "preact-router"
import "./index.css"
import { Header } from "widgets/Header"
import { Home } from "pages/Home"
import { About } from "pages/About"
import { Projects } from "pages/Projects"
import { NotFound } from "pages/NotFound"
import { ProjectDetails } from "pages/ProjectDetails"

export function App() {
    return (
        <div>
            <Header />
            <Router>
                <Home path="/" />
                <About path="/about" />
                <Projects path="/projects" />
                <ProjectDetails path="/projects/1" />
                <NotFound default />
            </Router>
        </div>
    )
}
