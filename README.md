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
[1] 고객사 선택        →   [2] 서비스 선택            →   [3] 미리보기 / 다운로드
LG/삼성/현대/롯데/한화      nott-llm / slm / stt          • 테마 적용된 React 프리뷰
SK / KT / 포스코            nott-rag / ocr / dashboard     • Starter ZIP (실행 가능한 미니 프로젝트)
```

## Modules

| Package          | Tagline        | Endpoint                          | What                                  |
| ---------------- | -------------- | --------------------------------- | ------------------------------------- |
| `nott-llm`       | Easy LLM       | `POST /api/llm/chat`              | 사내 문서·업무 데이터 연결 LLM        |
| `nott-slm`       | Easy SLM       | `POST /api/slm/chat`              | 현장/내부망용 경량 모델               |
| `nott-stt`       | Easy STT       | `POST /api/stt/transcribe`        | 음성 → 텍스트                         |
| `nott-rag`       | Easy RAG       | `POST /api/rag/query`             | PDF/매뉴얼 검색 기반 답변             |
| `nott-ocr`       | Easy OCR       | `POST /api/ocr/extract`           | 계약서·영수증·공문 텍스트 추출        |
| `nott-dashboard` | Easy Dashboard | `GET /api/dashboard/metrics`      | 고객사 테마 운영 대시보드             |

## Companies (랜딩 데모용 · 총 8개)

LG · 삼성 · 현대 · 롯데 · 한화 · SK · KT · 포스코

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
- 🗜 **JSZip** — Starter ZIP 다운로드 (jsx + package.json + README + main.jsx + index.html 한 세트)

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
    ├── main.jsx                    ← v5 import
    ├── index.css
    ├── brand-tokens.js             ← 고객사 브랜드 토큰 (single source of truth)
    ├── nott_05_23.jsx              ← v1 (보존)
    ├── nott_05_23_v2.jsx           ← v2 (보존)
    ├── nott_05_23_v3.jsx           ← v3 (보존)
    ├── nott_05_23_v4.jsx           ← v4 (보존)
    └── nott_06_06.jsx              ← v5 (현재 활성, 테마 토큰화)
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

## 파일 / 버전 규칙

매일 새로 만들거나 같은 날 큰 변경이 있으면, 메인 컴포넌트는 **새 날짜 파일**로 추가합니다.  
이전 버전 파일은 **삭제하지 않고 보존**합니다.

```jsx
// src/main.jsx
// import App from "./nott_05_23.jsx";       // v1
// import App from "./nott_05_23_v2.jsx";    // v2
// import App from "./nott_05_23_v3.jsx";    // v3
// import App from "./nott_05_23_v4.jsx";    // v4
import App from "./nott_06_06.jsx";          // v5 ← 현재
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

### 2026-06-06 v5 (현재 활성)
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
