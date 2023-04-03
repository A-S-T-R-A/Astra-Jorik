import Router from "preact-router"
import "./index.css"
import { Header } from "widgets/Header"
import { Home } from "pages/Home"
import { AboutPage } from "pages/AboutPage"
import { ProjectsPage } from "pages/ProjectsPage"
import { NotFound } from "pages/NotFound"
import { ProjectDetails } from "pages/ProjectDetails"
import { Suspense } from "preact/compat"
import { ContactUsPage } from "pages/ContactUsPage"

export function App() {
    return (
        <Suspense fallback="">
            <div>
                <Header />
                <div className="page-wrapper">
                    <Router>
                        <Home path="/" />
                        <AboutPage path="/about" />
                        <ProjectsPage path="/projects" />
                        <ProjectDetails path="/projects/1" />
                        <ContactUsPage path="/contact" />
                        <NotFound default />
                    </Router>
                </div>
            </div>
        </Suspense>
    )
}
