import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// nott — Vite config
// Version: 2026-05-23
//
// GitHub Pages 배포 대응:
//   - dev    : base = "/"        (localhost:5173)
//   - build  : base = "/nott/"   (https://uix-si.github.io/nott/)

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/nott/" : "/",
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
}));
