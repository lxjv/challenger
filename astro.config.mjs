import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://laker.tech",
    image: {
        domains: ["cdn.laker.tech"],
    },
    redirects: {
        "/feed.xml": "/blog/feed.rss",
    },
});
