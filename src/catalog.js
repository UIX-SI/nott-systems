// ─────────────────────────────────────────────────────────────────────────────
// nott — module catalog
//
// The real Phase-1 systems we are building (mirrors C:\Dev\nott-infra ·
// src/shell/systems.ts). nott issues each of these as a client-themed starter:
// the preview re-skins the system with the selected client's brand tokens.
//
// Module contract:
//   id        short stable key (also the preview screen id)
//   no        '01'..'06'
//   form      "pc"  → desktop console mockup (monitor/window frame)
//             "mobile" → phone mockup
//   pkg       npm-style package name
//   name      display name
//   tagline   form-factor caption
//   desc      one-line summary
//   menu      left-nav items (pc) — also used by the generated starter
//   kpis      [{ label, value }] headline metrics
//   extra     per-system data the mockup needs (protocols, units, steps…)
//   endpoint  optional API endpoint string
// ─────────────────────────────────────────────────────────────────────────────

export const categories = [
  { id: "infra", name: "스마트빌딩 인프라", desc: "Phase 1 · 6대 시스템" },
];

export const modules = [
  {
    id: "superapp",
    no: "01",
    form: "mobile",
    pkg: "nott-superapp",
    name: "Resident Super App",
    tagline: "Mobile App",
    desc: "원 ID · 스마트홈 · F&B · 예약 · 컨시어지 · 모바일 결제 — 입주민 모바일 경험",
    menu: ["홈", "예약", "F&B", "결제", "마이"],
    kpis: [
      { label: "미확인 알림", value: "5" },
      { label: "예약 가능 클래스", value: "3" },
    ],
    extra: {
      smart: [
        { name: "도어락", state: "잠김" },
        { name: "조명", state: "ON 80%" },
        { name: "커튼", state: "열림" },
        { name: "에어컨", state: "냉방 24°" },
      ],
      services: ["F&B 주문", "시설 예약", "컨시어지", "모바일 결제", "공지", "마이페이지"],
    },
    endpoint: "POST /api/app/session",
  },
  {
    id: "network",
    no: "02",
    form: "pc",
    pkg: "nott-network",
    name: "Network & IoT Infrastructure",
    tagline: "NMS Console",
    desc: "전층 메시 · 5종 IoT 프로토콜 허브 · NMS · WAF/IDS/SIEM 보안 콘솔",
    menu: ["대시보드", "토폴로지", "IoT 허브", "대역폭", "보안"],
    kpis: [
      { label: "Devices Online", value: "1,284" },
      { label: "Access Points", value: "96/98" },
      { label: "Core Traffic", value: "3.1 Gbps" },
      { label: "Security Events", value: "12" },
      { label: "Uptime 30d", value: "99.98%" },
    ],
    extra: {
      protocols: [
        { name: "KNX", n: 412 },
        { name: "Zigbee", n: 388 },
        { name: "BLE", n: 204 },
        { name: "WiFi 6", n: 236 },
        { name: "MQTT", n: 44 },
      ],
      apCols: ["AP", "Zone", "Clients", "ch", "Status"],
    },
    endpoint: "GET /api/nms/overview",
  },
  {
    id: "monitoring",
    no: "03",
    form: "pc",
    pkg: "nott-monitoring",
    name: "24/7 Unified Monitoring Center",
    tagline: "Control Room",
    desc: "관제실 대시보드 · BMS/CCTV 통합 · 알람 우선순위 · 자동 로깅",
    menu: ["홈", "BMS", "CCTV", "출입·알람", "방문자", "주차", "설정"],
    kpis: [
      { label: "화재 알람", value: "8" },
      { label: "출입 알람", value: "2" },
      { label: "HVAC 경고", value: "3" },
      { label: "CCTV 경고", value: "12" },
      { label: "오늘 방문자", value: "5" },
    ],
    extra: {
      rooms: ["ok", "ok", "warn", "ok", "alarm", "ok", "ok", "ok"],
      cams: 9,
    },
    endpoint: "GET /api/monitoring/alarms",
  },
  {
    id: "safety",
    no: "04",
    form: "pc",
    pkg: "nott-safety",
    name: "Safety / Emergency Systems",
    tagline: "Response Console",
    desc: "객실 SOS · 자동 에스컬레이션 · RTLS 실시간 위치 · CCTV 자동 연동",
    menu: ["대응 현황", "RTLS 지도", "에스컬레이션", "장치", "이벤트 로그"],
    kpis: [
      { label: "활성 경보", value: "1" },
      { label: "평균 대응", value: "2m 14s" },
      { label: "장치 온라인", value: "1,286/1,288" },
      { label: "분기 훈련", value: "3" },
    ],
    extra: {
      steps: ["경보 발생", "층 담당", "관제실", "외부 연계"],
      sos: { unit: "Unit 0907 · 9F", timer: "01:42" },
    },
    endpoint: "POST /api/safety/sos",
  },
  {
    id: "pms",
    no: "05",
    form: "pc",
    pkg: "nott-pms",
    name: "Operations Management · Core PMS",
    tagline: "Ops Console",
    desc: "388세대 레지스트리 · 청구/정산 · 입·퇴거 파이프라인 — 호텔식 PMS",
    menu: ["대시보드", "세대 관리", "청구·정산", "입·퇴거", "리포트"],
    kpis: [
      { label: "총 세대", value: "388" },
      { label: "입주율", value: "84%" },
      { label: "6월 청구", value: "₫4.1B" },
      { label: "연체", value: "4" },
      { label: "이사 in/out", value: "6 / 2" },
    ],
    extra: {
      unitCols: ["세대", "타입", "입주민", "관리비", "상태"],
      units: [
        { u: "1203", t: "2BR Suite", r: "Nguyen Thi Mai", fee: "₫18.5M", s: "입주" },
        { u: "0907", t: "1BR", r: "Tran Van H.", fee: "₫14.2M", s: "입주" },
        { u: "1502", t: "3BR Sky", r: "—", fee: "—", s: "공실" },
        { u: "0412", t: "2BR", r: "Le Thi P.", fee: "₫18.5M", s: "연체" },
      ],
      pipeline: ["계약", "보증금", "입주", "퇴거"],
    },
    endpoint: "GET /api/pms/units",
  },
  {
    id: "cmskiosk",
    no: "06",
    form: "pc",
    pkg: "nott-cms-kiosk",
    name: "Content CMS & Smart Kiosk",
    tagline: "Admin + Kiosk",
    desc: "사이니지/클래스/이벤트 관리 + 로비 키오스크 실시간 미리보기 · 통합 푸시",
    menu: ["콘텐츠", "키오스크", "클래스", "푸시"],
    kpis: [
      { label: "온라인 키오스크", value: "3 / 4" },
      { label: "게시 콘텐츠", value: "5" },
      { label: "초안", value: "1" },
    ],
    extra: {
      contentCols: ["제목", "유형", "대상", "상태"],
      contents: [
        { t: "Summer Pool Party", k: "이벤트", s: "게시" },
        { t: "Morning Tai-chi", k: "클래스", s: "게시" },
        { t: "Sunset Yoga — Pool Deck", k: "클래스", s: "초안" },
      ],
      kiosks: ["K-01 로비", "K-02 스카이라운지", "K-03 풀데크"],
    },
    endpoint: "POST /api/cms/publish",
  },
];

export const modulesByCategory = categories.map((c) => ({
  ...c,
  items: modules.filter((m) => (c.id === "infra" ? true : m.category === c.id)),
}));

export const getModule = (id) => modules.find((m) => m.id === id) ?? modules[0];
