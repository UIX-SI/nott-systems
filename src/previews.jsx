import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// nott — module preview mockups
//
// Simplified, brand-themed recreations of the 6 nott-infra Phase-1 systems
// (see C:\Dev\nott-infra). Every system is re-skinned with the selected
// client's brand tokens — that's the nott value prop: "테마 입혀서 발급".
//
//   ModuleDevice  → wraps the screen in a device frame chosen by module.form
//                   ("pc" → DesktopFrame window, "mobile" → PhoneFrame)
//   ModuleScreen  → the themed screen content for a module (no frame)
// ─────────────────────────────────────────────────────────────────────────────

function Kpis({ kpis, tokens }) {
  return (
    <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${kpis.length}, minmax(0,1fr))` }}>
      {kpis.map((k) => (
        <div key={k.label} className="rounded-lg border border-slate-200 bg-white p-1.5">
          <div className="truncate text-[8px] text-slate-400">{k.label}</div>
          <div className="mt-0.5 text-xs font-bold tabular-nums" style={{ color: tokens.primary }}>{k.value}</div>
        </div>
      ))}
    </div>
  );
}

function MiniTable({ cols, rows }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <table className="w-full text-[9px]">
        <thead>
          <tr>
            {cols.map((c) => (
              <th key={c} className="border-b border-slate-200 px-2 py-1 text-left font-semibold text-slate-500">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((cell, ci) => (
                <td key={ci} className="border-b border-slate-100 px-2 py-1 text-slate-600">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Desktop console shell: dark left sidebar (nav) + topbar + content.
function ConsoleShell({ module, tokens, children }) {
  return (
    <div className="flex h-full bg-slate-100 text-slate-800">
      <div className="flex w-[74px] shrink-0 flex-col gap-0.5 p-1.5" style={{ background: "#1b1b1b" }}>
        <div className="mb-1.5 px-1 text-[8px] font-bold uppercase tracking-wide text-white/50">{module.tagline}</div>
        {module.menu.map((m, i) => (
          <div
            key={m}
            className="truncate rounded px-1.5 py-1 text-[9px]"
            style={i === 0 ? { background: tokens.primary, color: tokens.onPrimary } : { color: "rgba(255,255,255,0.55)" }}
          >
            {m}
          </div>
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-1.5">
          <div className="min-w-0">
            <div className="truncate text-[11px] font-bold">{module.name}</div>
            <div className="text-[8px] text-slate-400">WaterPoint HCMC · Category {module.no}</div>
          </div>
          <span className="flex items-center gap-1 text-[8px] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#2E7D32" }} /> live
          </span>
        </div>
        <div className="flex-1 overflow-auto p-2.5">{children}</div>
      </div>
    </div>
  );
}

function MonitoringContent({ module, tokens }) {
  const stateColor = { ok: "#2E7D32", warn: "#E65100", alarm: tokens.primary };
  return (
    <div className="space-y-2.5">
      <Kpis kpis={module.kpis} tokens={tokens} />
      <div className="grid gap-2.5 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-2">
          <div className="mb-1.5 text-[9px] font-semibold">Floor Map · 12F</div>
          <div className="grid grid-cols-4 gap-1">
            {module.extra.rooms.map((s, i) => (
              <div key={i} className="flex h-8 items-center justify-center rounded text-[8px] font-semibold text-white" style={{ background: stateColor[s] }}>
                {1201 + i}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-2">
          <div className="mb-1.5 text-[9px] font-semibold">CCTV · {module.extra.cams} cams</div>
          <div className="grid grid-cols-3 gap-1">
            {Array.from({ length: module.extra.cams }).map((_, i) => (
              <div key={i} className="relative flex h-8 items-center justify-center rounded bg-slate-900 text-[7px] text-slate-400">
                CAM-{String(i + 1).padStart(2, "0")}
                <span className="absolute right-0.5 top-0.5 rounded-sm bg-red-600 px-0.5 text-[6px] text-white">REC</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NetworkContent({ module, tokens }) {
  return (
    <div className="space-y-2.5">
      <Kpis kpis={module.kpis} tokens={tokens} />
      <div className="grid gap-2.5 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-2">
          <div className="mb-1 text-[9px] font-semibold">Topology</div>
          <svg viewBox="0 0 200 84" className="w-full">
            {[20, 60, 100, 140, 180].map((x, i) => (
              <g key={i}>
                <line x1="100" y1="22" x2={x} y2="68" stroke="#cbd5e1" strokeWidth="1" />
                <circle cx={x} cy="68" r="5" fill="#94a3b8" />
              </g>
            ))}
            <circle cx="100" cy="22" r="9" fill={tokens.primary} />
          </svg>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-2">
          <div className="mb-1.5 text-[9px] font-semibold">IoT Protocol Hub</div>
          <div className="flex flex-wrap gap-1">
            {module.extra.protocols.map((p) => (
              <span key={p.name} className="rounded-full px-1.5 py-0.5 text-[8px] font-semibold" style={{ background: tokens.surface, color: tokens.primary }}>
                {p.name} · {p.n}
              </span>
            ))}
          </div>
        </div>
      </div>
      <MiniTable
        cols={module.extra.apCols}
        rows={[
          ["AP-12F-A", "12F Resident", "48", "36", "online"],
          ["AP-21F-S", "Sky Lounge", "31", "44", "online"],
          ["AP-B1-P", "Parking", "12", "6", "online"],
        ]}
      />
    </div>
  );
}

function SafetyContent({ module, tokens }) {
  return (
    <div className="space-y-2.5">
      <div className="flex animate-pulse items-center justify-between rounded-lg px-3 py-2 text-white" style={{ background: tokens.primary }}>
        <div>
          <div className="text-[10px] font-bold">● SOS · {module.extra.sos.unit}</div>
          <div className="text-[8px] opacity-80">자동 에스컬레이션까지 03:00</div>
        </div>
        <div className="text-base font-bold tabular-nums">{module.extra.sos.timer}</div>
      </div>
      <Kpis kpis={module.kpis} tokens={tokens} />
      <div className="rounded-lg border border-slate-200 bg-white p-2">
        <div className="mb-1.5 text-[9px] font-semibold">Auto-escalation</div>
        <div className="flex items-center gap-1">
          {module.extra.steps.map((s, i) => (
            <React.Fragment key={s}>
              <div
                className="flex-1 truncate rounded px-1 py-1 text-center text-[8px] font-semibold"
                style={
                  i === 0
                    ? { background: "#2E7D32", color: "white" }
                    : i === 1
                    ? { background: tokens.primary, color: "white" }
                    : { background: "#f1f5f9", color: "#94a3b8" }
                }
              >
                {s}
              </div>
              {i < module.extra.steps.length - 1 && <span className="text-slate-300">›</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <MiniTable
        cols={["시간", "위치", "이벤트", "상태"]}
        rows={[
          ["09:41", "9F · 0907", "SOS 호출", "대응중"],
          ["08:12", "12F · 1203", "낙상 감지", "해제"],
        ]}
      />
    </div>
  );
}

function PmsContent({ module, tokens }) {
  const badge = { 입주: "#2E7D32", 공실: "#94a3b8", 연체: tokens.primary };
  return (
    <div className="space-y-2.5">
      <Kpis kpis={module.kpis} tokens={tokens} />
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-[9px]">
          <thead>
            <tr>
              {module.extra.unitCols.map((c) => (
                <th key={c} className="border-b border-slate-200 px-2 py-1 text-left font-semibold text-slate-500">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {module.extra.units.map((u) => (
              <tr key={u.u}>
                <td className="border-b border-slate-100 px-2 py-1 font-semibold">{u.u}</td>
                <td className="border-b border-slate-100 px-2 py-1 text-slate-600">{u.t}</td>
                <td className="border-b border-slate-100 px-2 py-1 text-slate-600">{u.r}</td>
                <td className="border-b border-slate-100 px-2 py-1 tabular-nums text-slate-600">{u.fee}</td>
                <td className="border-b border-slate-100 px-2 py-1">
                  <span className="rounded px-1 py-0.5 text-[8px] font-semibold text-white" style={{ background: badge[u.s] }}>{u.s}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-2">
        <div className="mb-1.5 text-[9px] font-semibold">입·퇴거 파이프라인</div>
        <div className="grid grid-cols-4 gap-1">
          {module.extra.pipeline.map((p) => (
            <div key={p} className="rounded p-1" style={{ background: tokens.surface }}>
              <div className="text-[8px] font-semibold" style={{ color: tokens.primary }}>{p}</div>
              <div className="mt-1 rounded bg-white p-1 text-[7px] text-slate-500 shadow-sm">Nguyen · 6/15</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KioskContent({ module, tokens }) {
  const badge = { 게시: "#2E7D32", 초안: "#94a3b8" };
  return (
    <div className="grid gap-2.5 md:grid-cols-[1fr_116px]">
      <div className="space-y-2.5">
        <Kpis kpis={module.kpis} tokens={tokens} />
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <table className="w-full text-[9px]">
            <thead>
              <tr>
                {module.extra.contentCols.map((c) => (
                  <th key={c} className="border-b border-slate-200 px-2 py-1 text-left font-semibold text-slate-500">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {module.extra.contents.map((ct) => (
                <tr key={ct.t}>
                  <td className="border-b border-slate-100 px-2 py-1 text-slate-600">{ct.t}</td>
                  <td className="border-b border-slate-100 px-2 py-1 text-slate-600">{ct.k}</td>
                  <td className="border-b border-slate-100 px-2 py-1 text-slate-600">전체</td>
                  <td className="border-b border-slate-100 px-2 py-1">
                    <span className="rounded px-1 py-0.5 text-[8px] font-semibold text-white" style={{ background: badge[ct.s] }}>{ct.s}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="rounded-lg border-2 border-slate-300 bg-white p-1">
        <div className="rounded p-1.5 text-center text-[8px] font-bold text-white" style={{ background: tokens.primary }}>WaterPoint</div>
        <div className="mt-1 h-9 rounded" style={{ background: tokens.surface }} />
        <div className="mt-1 space-y-1">
          {["Aqua Fitness", "Tea Ceremony"].map((c) => (
            <div key={c} className="flex items-center justify-between rounded bg-slate-50 px-1 py-0.5 text-[7px]">
              <span className="text-slate-600">{c}</span>
              <span className="font-semibold" style={{ color: tokens.primary }}>예약</span>
            </div>
          ))}
        </div>
        <div className="mt-1 text-center text-[6px] text-slate-400">K-01 Lobby · online</div>
      </div>
    </div>
  );
}

function SuperAppScreen({ module, tokens }) {
  const feed = [
    { t: "Aqua Fitness Class", s: "10:00 · 6석 남음", c: tokens.primary },
    { t: "Chef's Vietnamese Lunch", s: "12:30 · F&B 예약", c: "#2E7D32" },
    { t: "단수 점검 공지", s: "14:00–15:00 · 12F", c: "#E65100" },
  ];
  return (
    <div className="flex h-full flex-col" style={{ background: "#f3f4f6" }}>
      {/* app bar */}
      <div className="px-4 pb-4 pt-2.5 text-white" style={{ background: tokens.primary }}>
        <div className="flex items-center justify-between text-[9px] font-medium opacity-90">
          <span>9:41</span>
          <span className="flex items-center gap-1">5G ▮▮▮ <span className="rounded-sm bg-white/30 px-1">100%</span></span>
        </div>
        <div className="mt-2.5 flex items-center justify-between">
          <div>
            <div className="text-[15px] font-bold leading-tight">Good morning, Mai 👋</div>
            <div className="mt-1 flex items-center gap-1 text-[9px] opacity-90">
              <span className="rounded-full bg-white/20 px-1.5 py-0.5 font-semibold">One ID</span>
              Unit 1203 · Tower A
            </div>
          </div>
          <div className="relative">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm">🔔</div>
            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[7px] font-bold" style={{ color: tokens.primary }}>5</span>
          </div>
        </div>
      </div>

      <div className="-mt-3 flex-1 space-y-2.5 overflow-auto rounded-t-2xl px-3 pb-2 pt-3" style={{ background: "#f3f4f6" }}>
        {/* smart home */}
        <div className="rounded-2xl bg-white p-2.5 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-[11px] font-bold">스마트홈</div>
            <span className="text-[8px] text-slate-400">Unit 1203</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {module.extra.smart.map((s, i) => {
              const on = i !== 0;
              return (
                <div key={s.name} className="rounded-xl p-1.5 text-center" style={{ background: on ? tokens.surface : "#f1f5f9" }}>
                  <div className="mx-auto mb-1 h-5 w-5 rounded-lg" style={{ background: on ? tokens.primary : "#cbd5e1" }} />
                  <div className="text-[8px] font-semibold text-slate-700">{s.name}</div>
                  <div className="text-[7px]" style={{ color: on ? tokens.primary : "#94a3b8" }}>{s.state}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* quick services */}
        <div className="rounded-2xl bg-white p-2.5 shadow-sm">
          <div className="mb-2 text-[11px] font-bold">빠른 서비스</div>
          <div className="grid grid-cols-3 gap-2">
            {module.extra.services.map((s) => (
              <div key={s} className="flex flex-col items-center gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: tokens.surface }}>
                  <div className="h-4 w-4 rounded" style={{ background: tokens.primary }} />
                </div>
                <div className="text-center text-[8px] font-medium text-slate-600">{s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* today feed */}
        <div className="rounded-2xl bg-white p-2.5 shadow-sm">
          <div className="mb-2 text-[11px] font-bold">오늘의 일정</div>
          {feed.map((f) => (
            <div key={f.t} className="mb-1.5 flex items-center gap-2 rounded-xl bg-slate-50 p-1.5 last:mb-0">
              <span className="h-7 w-7 shrink-0 rounded-lg" style={{ background: f.c }} />
              <div className="min-w-0">
                <div className="truncate text-[9px] font-semibold text-slate-700">{f.t}</div>
                <div className="text-[8px] text-slate-400">{f.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* tab bar */}
      <div className="flex items-center justify-around border-t border-slate-200 bg-white pb-2 pt-1.5">
        {module.menu.map((m, i) => (
          <div key={m} className="flex flex-col items-center gap-0.5">
            <div className="h-4 w-4 rounded" style={{ background: i === 0 ? tokens.primary : "#cbd5e1" }} />
            <div className="text-[7px] font-semibold" style={{ color: i === 0 ? tokens.primary : "#94a3b8" }}>{m}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ModuleScreen({ module, tokens }) {
  if (module.form === "mobile") return <SuperAppScreen module={module} tokens={tokens} />;
  const content =
    module.id === "monitoring" ? <MonitoringContent module={module} tokens={tokens} />
    : module.id === "network" ? <NetworkContent module={module} tokens={tokens} />
    : module.id === "safety" ? <SafetyContent module={module} tokens={tokens} />
    : module.id === "pms" ? <PmsContent module={module} tokens={tokens} />
    : <KioskContent module={module} tokens={tokens} />;
  return <ConsoleShell module={module} tokens={tokens}>{content}</ConsoleShell>;
}

export function DesktopFrame({ label, children, height = 420 }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-white shadow-2xl">
      <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 truncate font-mono text-[9px] text-slate-400">{label}</span>
      </div>
      <div className="overflow-hidden bg-slate-100" style={{ height }}>{children}</div>
    </div>
  );
}

export function PhoneFrame({ children, height = 460 }) {
  return (
    <div className="mx-auto w-full max-w-[256px]">
      <div className="rounded-[2rem] border-[10px] border-slate-800 bg-slate-800 shadow-2xl">
        <div className="relative overflow-hidden rounded-[1.4rem] bg-white">
          <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-2xl bg-slate-800" />
          <div className="overflow-hidden" style={{ height }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

// Device frame chosen by module.form, themed with the client's tokens.
export function ModuleDevice({ module, tokens, pc = 420, mobile = 460 }) {
  if (module.form === "mobile") {
    return (
      <PhoneFrame height={mobile}>
        <ModuleScreen module={module} tokens={tokens} />
      </PhoneFrame>
    );
  }
  return (
    <DesktopFrame label={`${module.pkg} · ${module.tagline}`} height={pc}>
      <ModuleScreen module={module} tokens={tokens} />
    </DesktopFrame>
  );
}
