import Router from "preact-router"
import "./index.css"
import { Header } from "widgets/Header"
import { AboutPage } from "pages/AboutPage"
import { ProjectsPage } from "pages/ProjectsPage"
import { Suspense } from "preact/compat"
import { Footer } from "widgets/Footer"
import { ContactUsPage } from "pages/ContactUsPage"
import { HomePage } from "pages/HomePage"
import { ProjectDetailsPage } from "pages/ProjectDetailsPage"
import { NotFoundPage } from "pages/NotFoundPage"

export function App() {
    return (
        <Suspense fallback="">
            <div>
                <Header />
                <div className="page-wrapper">
                    <Router onChange={e => console.log(e)}>
                        <HomePage path="/" />
                        <AboutPage path="/about" />
                        <ProjectsPage path="/projects" />
                        <ProjectDetailsPage path="/projects/:id" />
                        <ContactUsPage path="/contact" />
                        <NotFoundPage default />
                    </Router>
                </div>
                <Footer />
            </div>
        </Suspense>
    )
}
