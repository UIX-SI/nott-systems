// ─────────────────────────────────────────────────────────────────────────────
// nott — brand tokens
//
// Single source of truth for per-client theming. Each client brand is expressed
// as a set of *semantic* design tokens instead of ad-hoc color fields scattered
// through the UI. Adding a new client = add one entry to `brands` below; the
// whole app and every generated starter picks it up automatically.
//
// Token contract — keep these keys stable, generated starter code depends on them:
//   primary     brand signature color (buttons, accents, logo chip)
//   onPrimary   foreground used on top of `primary`
//   surface     soft tinted background for preview canvases
//   onSurface   body-text color on `surface`
//   border      outline color when the brand is selected / active
//
// `logo` (optional): real brand logo as an imported SVG asset URL. When present,
// the live preview renders it in place of the text wordmark lockup. Vite resolves
// the URL (with the correct base path) at build time.
// ─────────────────────────────────────────────────────────────────────────────

import lgLogo from "./assets/brands/lg.svg";
import samsungLogo from "./assets/brands/samsung.svg";
import lotteLogo from "./assets/brands/lotte.svg";
import hanwhaLogo from "./assets/brands/hanwha.svg";
import skLogo from "./assets/brands/sk.svg";
import poscoLogo from "./assets/brands/posco.svg";
import shinhanLogo from "./assets/brands/shinhan.svg";

export const TOKEN_KEYS = ["primary", "onPrimary", "surface", "onSurface", "border"];

// Build a full token set from the two brand-defining inputs (signature color +
// tinted surface). Neutral tokens (onPrimary / onSurface) default sensibly and
// can be overridden per brand when a client needs it.
function tokens(primary, surface, overrides = {}) {
  return {
    primary,
    onPrimary: "#FFFFFF",
    surface,
    onSurface: "#0f172a",
    border: primary,
    ...overrides,
  };
}

export const brands = [
  { id: "lg",      name: "LG",         logoText: "LG",      logo: lgLogo,      tokens: tokens("#A50034", "#FFF5F8") },
  { id: "samsung", name: "삼성",       logoText: "SAMSUNG", logo: samsungLogo, tokens: tokens("#1428A0", "#F3F6FF") },
  { id: "hyundai", name: "현대자동차", logoText: "HYUNDAI", logo: null,        tokens: tokens("#002C5F", "#F1F6FB") },
  { id: "lotte",   name: "롯데",       logoText: "LOTTE",   logo: lotteLogo,   tokens: tokens("#E60012", "#FFF3F4") },
  { id: "hanwha",  name: "한화",       logoText: "HANWHA",  logo: hanwhaLogo,  tokens: tokens("#FF6600", "#FFF6EE") },
  { id: "sk",      name: "SK",         logoText: "SK",      logo: skLogo,      tokens: tokens("#EA002C", "#FFF2F4") },
  { id: "posco",   name: "포스코",     logoText: "POSCO",   logo: poscoLogo,   tokens: tokens("#0072CE", "#F0F7FF") },
  { id: "shinhan", name: "신한금융",   logoText: "SHINHAN", logo: shinhanLogo, tokens: tokens("#0046FF", "#EEF3FF") },
];

export const brandsById = Object.fromEntries(brands.map((b) => [b.id, b]));

// Resolve a brand by id, falling back to the first brand.
export const getBrand = (id) => brandsById[id] ?? brands[0];

// Map semantic tokens → CSS custom properties. Lets both the live preview and
// every generated starter theme themselves with `var(--brand-*)` instead of
// inlining hex values.
export const toCssVars = (t) => ({
  "--brand-primary": t.primary,
  "--brand-on-primary": t.onPrimary,
  "--brand-surface": t.surface,
  "--brand-on-surface": t.onSurface,
  "--brand-border": t.border,
});
