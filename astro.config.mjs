import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from "astro-compress";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  // site: "localhost:3000",
  prefetch: true,
  integrations: [tailwind(), react(), compress(), playformCompress()]
});