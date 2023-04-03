import Router from "preact-router"
import { useState } from "preact/hooks"
import "./index.css"
import { Home } from "pages/Home"
import { About } from "pages/About"
import { Projects } from "pages/Projects"
import { NotFound } from "pages/NotFound"
import { ProjectDetails } from "pages/ProjectDetails"
import { Suspense } from "preact/compat"

export function App() {
    return (
        <Suspense fallback="">
            <Router>
                <Home path="/" />
                <About path="/about" />
                <Projects path="/projects" />
                <ProjectDetails path="/projects/1" />
                <NotFound default />
            </Router>
        </Suspense>
    )
}
