import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://new.laker.tech",
  integrations: [],
  image: {
    domains: ["cdn.laker.tech"]
  }
});