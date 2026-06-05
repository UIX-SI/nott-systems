import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./nott_05_23.jsx";       // v1 (2026-05-23) — 보존
// import App from "./nott_05_23_v2.jsx";    // v2 (2026-05-23) — 보존
// import App from "./nott_05_23_v3.jsx";    // v3 (2026-05-23) — 보존
// import App from "./nott_05_23_v4.jsx";    // v4 (2026-05-23) — 보존: 디자인 절제 (폰트/패딩/모서리)
// import App from "./nott_06_06.jsx";       // v5 (2026-06-06) — 보존: 테마 토큰화 (brand-tokens.js)
// import App from "./nott_06_06_v2.jsx";    // v6 (2026-06-06) — 보존: 모듈 카탈로그 확장 + 실행형 starter
// import App from "./nott_06_06_v3.jsx";    // v7 (2026-06-06) — 보존: 대화형 프리뷰 + 채팅 starter
// import App from "./nott_06_06_v4.jsx";    // v8 (2026-06-06) — 보존: 브랜드 로고
// import App from "./nott_06_06_v5.jsx";    // v9~v10 (2026-06-06) — 보존: 단일 페이지 + 실시간 모바일 미리보기
import App from "./nott_06_06_v6.jsx";       // v11 (2026-06-06) — 활성: 실제 인프라 모듈 + PC 콘솔 미리보기
import "./index.css";

// nott — entry point
// 메인 컴포넌트는 날짜 버전 파일을 import 합니다.
// 새 버전을 만들면 위 import 경로만 교체하고, 이전 버전은 주석으로 남겨두세요.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
