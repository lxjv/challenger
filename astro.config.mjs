import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://new.laker.tech",
    integrations: [preact(), mdx()],
    image: {
        domains: ["cdn.laker.tech"],
    }
});