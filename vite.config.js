import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// nott — Vite config
//
// custom domain nott.systems 로 서빙 → 항상 root("/") base.
//   - dev/serve  : "/"  (localhost:5173)
//   - production : "/"  (https://nott.systems/)
//   - NOTT_BASE 로 override 가능 (예: 하위경로 배포 시)

export default defineConfig(({ mode }) => {
  const base = process.env.NOTT_BASE ?? "/";

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
