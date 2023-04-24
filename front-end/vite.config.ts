import { defineConfig } from "vite"
import preact from "@preact/preset-vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact()],
    resolve: {
        alias: {
            src: "/src",
            app: "/src/app",
            pages: "/src/pages",
            widgets: "/src/widgets",
            shared: "/src/shared",
        },
    },
})
