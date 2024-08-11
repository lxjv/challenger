import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://new.laker.tech",
  integrations: [],
  image: {
    domains: ["cdn.laker.tech"]
  }
});