import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/modal-challenge/",
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
