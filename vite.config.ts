import path from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/modal-challenge/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@stores": path.resolve(__dirname, "./src/stores"),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setup-vitest.ts"],
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
  },
});
