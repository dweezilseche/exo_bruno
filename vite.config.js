import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      formats: ["iife"],
      name: "ExoBrunoBundle",
      fileName: () => "bundle.min.js",
      cssFileName: "styles.min",
    },
    rollupOptions: {
      external: ["gsap", "ScrollTrigger", "Swiper", "Lenis", "SplitType"],
      output: {
        globals: {
          gsap: "gsap",
          ScrollTrigger: "ScrollTrigger",
          Swiper: "Swiper",
          Lenis: "Lenis",
          SplitType: "SplitType",
        },
      },
    },
    minify: "esbuild",
  },
});
