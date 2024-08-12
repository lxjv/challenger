import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://new.laker.tech",
  image: {
    domains: ["cdn.laker.tech"]
  },
  redirects: {
    '/prj/[...slug]': '/projects/[...slug]',
    '/n/[...slug]': '/notes/[...slug]',
    '/b/[...slug]': '/blog/[...slug]',
    '/feed.xml': '/blog/feed.rss'
  }
});