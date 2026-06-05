// ─────────────────────────────────────────────────────────────────────────────
// nott — module catalog
//
// The catalog of modules nott can issue. Each module is themed at generation
// time with a client's brand tokens (see src/brand-tokens.js). The catalog is
// intentionally NOT limited to AI: anything that benefits from "drop in, themed
// to the client" lives here and rides the same generator + ZIP pipeline.
//
// Module contract:
//   id        short stable key (used in package name, component name)
//   category  grouping id (see `categories`)
//   kind      "api" → ships a fetch()-based caller component
//             "ui"  → ships a themed UI scaffold (no backend call)
//   pkg       npm-style package name (nott-*)
//   name      display name
//   tagline   one-liner ("Easy X")
//   desc      what it does
//   endpoint  (api only) "METHOD /path"
//   sample    (api only) example request body
// ─────────────────────────────────────────────────────────────────────────────

export const categories = [
  { id: "ai", name: "AI 모듈", desc: "사내 데이터·문서·음성을 붙이는 AI 스타터" },
  { id: "ui", name: "UI · 업무 모듈", desc: "로그인·테이블·폼·결제 등 화면 스타터" },
];

export const modules = [
  // ── AI ────────────────────────────────────────────────────────────────────
  {
    id: "llm",
    category: "ai",
    kind: "api",
    pkg: "nott-llm",
    name: "nott-llm",
    tagline: "Easy LLM",
    desc: "사내 문서, 업무 데이터, 프로젝트 지식을 연결하는 기본 LLM 모듈",
    endpoint: "POST /api/llm/chat",
    sample: { messages: [{ role: "user", content: "안녕" }] },
  },
  {
    id: "slm",
    category: "ai",
    kind: "api",
    pkg: "nott-slm",
    name: "nott-slm",
    tagline: "Easy SLM",
    desc: "현장/내부망/저비용 환경에 붙이기 쉬운 경량 AI 모델 모듈",
    endpoint: "POST /api/slm/chat",
    sample: { prompt: "현장 점검 결과 요약" },
  },
  {
    id: "stt",
    category: "ai",
    kind: "api",
    pkg: "nott-stt",
    name: "nott-stt",
    tagline: "Easy STT",
    desc: "회의록, 상담, 현장 음성을 텍스트로 바꾸는 음성인식 모듈",
    endpoint: "POST /api/stt/transcribe",
    sample: { audio: "<base64>", language: "ko" },
  },
  {
    id: "rag",
    category: "ai",
    kind: "api",
    pkg: "nott-rag",
    name: "nott-rag",
    tagline: "Easy RAG",
    desc: "PDF, 문서, 매뉴얼 검색 기반 답변을 위한 RAG 모듈",
    endpoint: "POST /api/rag/query",
    sample: { query: "환불 규정", topK: 5 },
  },
  {
    id: "ocr",
    category: "ai",
    kind: "api",
    pkg: "nott-ocr",
    name: "nott-ocr",
    tagline: "Easy OCR",
    desc: "계약서, 영수증, 공문, 이미지 속 텍스트 추출 모듈",
    endpoint: "POST /api/ocr/extract",
    sample: { image: "<base64>", fields: ["date", "amount"] },
  },
  {
    id: "dashboard",
    category: "ai",
    kind: "api",
    pkg: "nott-dashboard",
    name: "nott-dashboard",
    tagline: "Easy Dashboard",
    desc: "고객사 컬러와 로고가 적용되는 운영 대시보드 모듈",
    endpoint: "GET /api/dashboard/metrics",
    sample: { range: "7d" },
  },

  // ── UI · 업무 ───────────────────────────────────────────────────────────────
  {
    id: "auth",
    category: "ui",
    kind: "ui",
    pkg: "nott-auth",
    name: "nott-auth",
    tagline: "Easy Auth",
    desc: "고객사 테마가 적용된 로그인 / SSO 진입 화면 모듈",
    fields: ["사번 또는 이메일", "비밀번호"],
    cta: "로그인",
  },
  {
    id: "table",
    category: "ui",
    kind: "ui",
    pkg: "nott-table",
    name: "nott-table",
    tagline: "Easy Table",
    desc: "정렬·검색이 붙는 업무용 데이터 테이블 화면 모듈",
    columns: ["문서번호", "제목", "담당", "상태"],
    cta: "행 추가",
  },
  {
    id: "form",
    category: "ui",
    kind: "ui",
    pkg: "nott-form",
    name: "nott-form",
    tagline: "Easy Form",
    desc: "유효성 검사가 들어간 신청·접수 폼 화면 모듈",
    fields: ["신청자", "부서", "요청 내용"],
    cta: "제출",
  },
  {
    id: "pay",
    category: "ui",
    kind: "api",
    pkg: "nott-pay",
    name: "nott-pay",
    tagline: "Easy Pay",
    desc: "고객사 테마가 적용된 결제 / 정산 위젯 모듈",
    endpoint: "POST /api/pay/checkout",
    sample: { orderId: "ORD-1001", amount: 49000, currency: "KRW" },
  },
];

export const modulesByCategory = categories.map((c) => ({
  ...c,
  items: modules.filter((m) => m.category === c.id),
}));

export const getModule = (id) => modules.find((m) => m.id === id) ?? modules[0];
