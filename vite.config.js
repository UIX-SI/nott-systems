import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// nott — Vite config
// Version: 2026-05-23
//
// GitHub Pages 배포 대응:
//   - dev/serve  : base = "/"        (localhost:5173)
//   - production : base = "/nott/"   (https://uix-si.github.io/nott/)
//
// 환경변수로도 override 가능:
//   NOTT_BASE=/ npm run build  → root 경로 빌드 (Vercel/Netlify 같은 환경용)

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const base = process.env.NOTT_BASE ?? (isProd ? "/nott/" : "/");

  // 빌드 시 어떤 base가 적용됐는지 로그로 확인 (Actions 로그에서 보임)
  // eslint-disable-next-line no-console
  console.log(`[nott] vite mode=${mode}  base=${base}`);

  return {
    base,
    plugins: [react()],
    server: {
      port: 5173,
      open: true,
    },
    build: {
      outDir: "dist",
      sourcemap: false,
    },
  };
});
