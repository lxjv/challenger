import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    site: "https://laker.tech",
    image: {
        domains: ["cdn.laker.tech"],
    },
    integrations: [mdx(), preact()],
    prefetch: {
        prefetchAll: true
    }
});