import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths(),
    tanstackStart({
      server: {
        // Redirects TanStack Start's bundled server entry to your custom SSR wrapper
        entry: "server", 
      },
    }),
    // React's Vite plugin must always be placed after the TanStack Start plugin
    viteReact(),
  ],
});