import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config

export default defineConfig({
  site: "https://laker.tech",
  image: {
    domains: ["cdn.laker.tech"]
  },
  redirects: {
    "/feed.xml": "/blog/feed.rss",
    "/collections": "/me/collections",
    "/uses": "/me/uses"
  },
  integrations: [react()]
});