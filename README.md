<div align="center">

<img src="public/nott_logo_horizontal.svg" alt="nott" height="56" />

### Easy modules for every SI project.

대기업 로고를 고르고, 서비스를 고르면,  
해당 고객사 테마가 적용된 프리뷰와 소스코드 세트가 바로 생성됩니다.

[![Live demo](https://img.shields.io/badge/live-uix--si.github.io%2Fnott-0a62bb?style=flat-square)](https://uix-si.github.io/nott/)
[![Stack](https://img.shields.io/badge/stack-Vite_%C2%B7_React_18_%C2%B7_Tailwind-02aa5e?style=flat-square)](#기술-스택)
[![Status](https://img.shields.io/badge/status-WIP-ffc82b?style=flat-square)](#changelog)
[![Owner](https://img.shields.io/badge/org-UIX--SI-ff595f?style=flat-square)](https://github.com/UIX-SI)

</div>

---

## 🌐 Live

**👉 https://uix-si.github.io/nott/**

`main` 브랜치에 push 하면 GitHub Actions가 자동으로 빌드 → Pages 배포합니다.  
초기 1회만 GitHub Settings → Pages → Source를 **GitHub Actions** 로 바꿔주세요.

---

## What it does

20년차 SI 개발자가 매번 다시 짜는 게 지쳐서 만든, **고객사별 AI 모듈 스타터 발급기**.

```
[1] 고객사 선택        →   [2] 모듈 선택              →   [3] 미리보기 / 다운로드
LG/삼성/현대차/롯데/한화     AI: llm/slm/stt/rag/ocr/dash  • 테마 적용된 React 프리뷰
SK / 포스코 / 신한금융       UI: auth/table/form/pay       • Starter ZIP (바로 실행되는 미니 프로젝트)
```

## Modules

모듈 카탈로그는 [`src/catalog.js`](src/catalog.js)에서 관리합니다. AI에 한정하지 않고,
"고객사 테마를 입혀 바로 떨어뜨리는" 모든 모듈이 같은 생성기·ZIP 파이프라인을 탑니다.
각 모듈은 `kind`가 `api`(fetch 호출형) 또는 `ui`(테마 UI 스캐폴드형)입니다.

### AI 모듈

| Package          | Tagline        | Endpoint                          | What                                  |
| ---------------- | -------------- | --------------------------------- | ------------------------------------- |
| `nott-llm`       | Easy LLM       | `POST /api/llm/chat`              | 사내 문서·업무 데이터 연결 LLM        |
| `nott-slm`       | Easy SLM       | `POST /api/slm/chat`              | 현장/내부망용 경량 모델               |
| `nott-stt`       | Easy STT       | `POST /api/stt/transcribe`        | 음성 → 텍스트                         |
| `nott-rag`       | Easy RAG       | `POST /api/rag/query`             | PDF/매뉴얼 검색 기반 답변             |
| `nott-ocr`       | Easy OCR       | `POST /api/ocr/extract`           | 계약서·영수증·공문 텍스트 추출        |
| `nott-dashboard` | Easy Dashboard | `GET /api/dashboard/metrics`      | 고객사 테마 운영 대시보드             |

### UI · 업무 모듈

| Package       | Tagline     | Kind | What                                     |
| ------------- | ----------- | ---- | ---------------------------------------- |
| `nott-auth`   | Easy Auth   | ui   | 테마 적용 로그인 / SSO 진입 화면         |
| `nott-table`  | Easy Table  | ui   | 정렬·검색 붙는 업무용 데이터 테이블      |
| `nott-form`   | Easy Form   | ui   | 유효성 검사 들어간 신청·접수 폼          |
| `nott-pay`    | Easy Pay    | api  | 테마 적용 결제 / 정산 위젯 (`POST /api/pay/checkout`) |

## Companies (랜딩 데모용 · 총 8개)

LG · 삼성 · 현대자동차 · 롯데 · 한화 · SK · 포스코 · 신한금융

> 금융권 대표성(보안·업무시스템·AI 자동화 수요)을 반영해 KT → 신한금융으로 교체.

## 🚀 Quick start

```bash
git clone https://github.com/UIX-SI/nott.git
cd nott
npm install
npm run dev          # http://localhost:5173
```

빌드 & 미리보기:

```bash
npm run build
npm run preview
```

**npm 없이 바로 보고 싶다면** → `preview_05_23_v2.html` 더블클릭. 단일 HTML, 의존성 0.

## 기술 스택

- ⚡ **Vite 5** — dev server / build
- ⚛ **React 18**
- 🎨 **Tailwind CSS 3** — utility-first 스타일링
- 🎬 **framer-motion** — 헤더 인트로 모션
- 🧊 **lucide-react** — 아이콘
- 🗜 **JSZip** — Starter ZIP 다운로드 (App.jsx + main.jsx + index.html + package.json + vite.config.js + .gitignore + README → `npm install && npm run dev` 바로 실행)

## Repo layout

```
C:\Dev\nott\  (=  github.com/UIX-SI/nott)
├── .github\workflows\deploy.yml   ← GitHub Pages 자동 배포
├── package.json
├── vite.config.js                  ← base = "/nott/" (build 시)
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── .gitignore
├── README.md
├── preview_05_23.html              ← 단일 HTML v1 (보존, 11개사)
├── preview_05_23_v2.html           ← 단일 HTML v2 (8개사 + 로고)
├── public\
│   ├── nott_logo.svg               ← 원본 (가로형 + 조합형 같이)
│   ├── nott_logo_horizontal.svg    ← 가로형 (헤더용)
│   └── nott_symbol.svg             ← 심볼 (favicon · 작은 자리)
└── src\
    ├── main.jsx                    ← v8 import
    ├── index.css
    ├── brand-tokens.js             ← 고객사 브랜드 토큰 (single source of truth)
    ├── catalog.js                  ← 모듈 카탈로그 (AI + UI·업무, 카테고리/kind)
    ├── nott_05_23.jsx              ← v1 (보존)
    ├── nott_05_23_v2.jsx           ← v2 (보존)
    ├── nott_05_23_v3.jsx           ← v3 (보존)
    ├── nott_05_23_v4.jsx           ← v4 (보존)
    ├── nott_06_06.jsx              ← v5 (보존, 테마 토큰화)
    ├── nott_06_06_v2.jsx           ← v6 (보존, 카탈로그 확장 + 실행형 starter)
    ├── nott_06_06_v3.jsx           ← v7 (보존, 대화형 프리뷰 + 채팅 starter)
    └── nott_06_06_v4.jsx           ← v8 (현재 활성, 브랜드 로고 락업)
```

## 브랜드 토큰 (테마 시스템)

고객사 테마는 [`src/brand-tokens.js`](src/brand-tokens.js)가 **단일 진실 원천(SSOT)** 입니다.
각 고객사는 임의의 color/bg가 아니라 **시맨틱 토큰 세트**로 정의됩니다.

| Token       | 의미                                      |
| ----------- | ----------------------------------------- |
| `primary`   | 브랜드 시그니처 컬러 (버튼·강조·로고 칩)  |
| `onPrimary` | `primary` 위에 올라가는 전경색 (텍스트)   |
| `surface`   | 프리뷰 캔버스용 연한 틴트 배경            |
| `onSurface` | `surface` 위 본문 텍스트 색              |
| `border`    | 선택/활성 시 외곽선 컬러                  |

```js
// 새 고객사 추가 = 이 배열에 한 줄 → 앱 UI·생성 starter 코드 자동 반영
{ id: "newco", name: "뉴코", logoText: "NEWCO", tokens: tokens("#123456", "#F0F4FF") }
```

생성되는 starter 코드도 이 토큰을 CSS 변수(`var(--brand-primary)` 등)로 받아 테마를 입힙니다.
즉 "고객사 한 줄 추가 → 발급기 전체 반영"이 동작합니다.

## 모듈 카탈로그

발급 가능한 모듈은 [`src/catalog.js`](src/catalog.js)에서 관리합니다. 카테고리(`ai` / `ui`)로
묶이고, 각 모듈은 `kind`로 생성 방식이 갈립니다.

| kind  | 생성물                                              |
| ----- | --------------------------------------------------- |
| `api` | `fetch()` 기반 API 호출 컴포넌트 (endpoint + sample) |
| `ui`  | 백엔드 호출 없는 테마 UI 스캐폴드 (table / form 등)  |

```js
// 새 모듈 추가 = 이 배열에 한 줄 → 모듈 선택 화면·생성기·ZIP 자동 반영
{ id: "chart", category: "ui", kind: "ui", pkg: "nott-chart",
  name: "nott-chart", tagline: "Easy Chart", desc: "...", columns: [...], cta: "..." }
```

생성되는 Starter ZIP은 `vite.config.js` · `.gitignore`까지 포함된 **바로 실행 가능한 미니 프로젝트**입니다
(`npm install && npm run dev`). 생성기 출력은 실제 `npm install + vite build`로 검증되었습니다.

## 파일 / 버전 규칙

매일 새로 만들거나 같은 날 큰 변경이 있으면, 메인 컴포넌트는 **새 날짜 파일**로 추가합니다.  
이전 버전 파일은 **삭제하지 않고 보존**합니다.

```jsx
// src/main.jsx
// import App from "./nott_05_23.jsx";       // v1
// import App from "./nott_05_23_v2.jsx";    // v2
// import App from "./nott_06_06.jsx";       // v5
// import App from "./nott_06_06_v3.jsx";    // v7
import App from "./nott_06_06_v4.jsx";       // v8 ← 현재
// import App from "./nott_06_07.jsx";       // 내일 버전
```

## Git workflow

GitHub: https://github.com/UIX-SI/nott

처음 한 번 (로컬 초기 셋업):

```powershell
cd C:\Dev\nott
Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue

git init -b main
git config user.name "Kelly"
git config user.email "dev.cununa@gmail.com"
git add .
git commit -m "feat: nott v3 — Easy modules for every SI project"
git remote add origin https://github.com/UIX-SI/nott.git
git push -u origin main
```

이후 일일 커밋:

```powershell
git add .
git commit -m "메시지"
git push
```

push 직후 GitHub Actions가 자동으로 빌드/배포를 시작합니다 (1~2분 소요).

## Changelog

### 2026-06-06 v8.1 (브랜드 구성 조정)
- 고객사 교체: **KT → 신한금융** (금융권 대표성 · SI/AI/보안/업무자동화 수요 반영)
- 라벨 명확화: **현대 → 현대자동차**
- `brand-tokens.js` 데이터만 수정 (SSOT) — 컴포넌트 버전(v8)은 그대로

### 2026-06-06 v8 (현재 활성)
- **브랜드 로고 락업** — 단색 칩 → `[브랜드색 모노그램] + 워드마크` 형태로 다듬음 (`BrandMark`)
- 앱 프리뷰 + 생성 starter 헤더에 동일 적용 (상표 리스크 없는 안전 방식)
- `company.logoSvg` 들어오면 락업 대신 실제 로고 SVG 자동 렌더 (drop-in)

### 2026-06-06 v7 (보존)
- **대화형 프리뷰** — chat 모듈(`llm`/`slm`/`rag`)의 "Start" 버튼 → 그 자리에서 테마 채팅 데모가 열림
- 생성되는 starter도 단일 버튼 → **작동하는 채팅 UI** (`fetch` 호출 + 백엔드 없으면 mock 폴백)
- 채팅 생성물도 실제 `npm install + vite build`로 검증
- **로고 SVG 대비** — `company.logoSvg` 있으면 칩 대신 실제 로고 렌더 (`BrandMark`), 없으면 `logoText` 폴백

### 2026-06-06 v6 (보존)
- **모듈 카탈로그 확장** — 모듈 목록을 [`src/catalog.js`](src/catalog.js)로 분리, `ai` / `ui` 카테고리화
- AI 외 일반 모듈 추가: `nott-auth` / `nott-table` / `nott-form` / `nott-pay`
- 모듈 `kind`(`api` | `ui`)에 따라 생성 코드 분기 — API 호출형 / 테마 UI 스캐폴드형
- **Starter ZIP 실전화** — `vite.config.js` · `.gitignore` 포함, `npm install && npm run dev` 바로 실행
- 생성기 출력을 실제 `npm install + vite build`로 검증

### 2026-06-06 v5 (보존)
- **테마 토큰화** — 고객사 컬러/로고를 [`src/brand-tokens.js`](src/brand-tokens.js)로 분리 (SSOT)
- 하드코딩 `color`/`bg` → 시맨틱 토큰 `{primary, onPrimary, surface, onSurface, border}`
- 생성되는 starter 코드가 **CSS 변수(`var(--brand-*)`) 기반**으로 테마 적용
- 새 고객사 추가 = 토큰 한 줄 추가 → 앱·생성코드 자동 반영 (확장성의 핵심)

### 2026-05-23 v4 (보존)
- **디자인 절제 (톤다운)** — "랜딩 페이지"에서 "도구"로
- 폰트 크기 전반적으로 한~두 단계 축소 (text-6xl → text-3xl 등)
- font-black → font-semibold (강도 절제)
- 둥근 모서리 정리 (rounded-[32px] → rounded-2xl/xl)
- 패딩 정돈 (md:p-10 → p-6)
- 사이드 패널 폭 420 → 340
- 로고 헤더 크기 36 → 26

### 2026-05-23 v3 (보존)
- 신세계 / 카카오 / 네이버 제거 → **8개사**
- 우상단 헤더 알약(서비스 리스트) 제거
- **nott 로고 적용**: 헤더에 가로형 SVG, 사이드 푸터에 조합형 심볼
- favicon에 심볼 적용
- **GitHub Pages 자동 배포 셋업** (`.github/workflows/deploy.yml`, vite base path)

### 2026-05-23 v2 (보존)
- 고객사 6개 추가 (SK / KT / 포스코 / 신세계 / 카카오 / 네이버) — 총 11개
- 각 서비스에 API endpoint placeholder 추가
- 소스코드 다운로드 → **starter ZIP** 한 세트 (jszip)

### 2026-05-23 v1 (보존)
- 최초 작성. LG / 삼성 / 현대 / 롯데 / 한화 5개사, 6개 서비스

## License / Note

데모에 표시되는 대기업 로고 텍스트와 컬러는 **시연 / 프리뷰 목적의 placeholder**입니다.  
실제 영업/배포 시에는 각 사 BI 가이드를 따르고, 필요한 경우 별도 사용 허가를 받아 사용하세요.

<div align="center">
<br/>
<img src="public/nott_symbol.svg" alt="nott" height="36" />
<br/>
<sub>nott — Easy AI for every SI · 2026</sub>
</div>
