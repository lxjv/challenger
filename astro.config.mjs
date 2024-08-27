import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://laker.tech",
    redirects: {
    },
    image: {
        domains: ["cdn.laker.tech"],
    },
    integrations: [react(), mdx()],
});
