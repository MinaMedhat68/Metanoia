/** Shared Tailwind class recipes used across sections. */

/** Glassmorphism surface. */
export const glass = "bg-ink-2/75 backdrop-blur-xl border border-neon/20";

/** shadcn <Card/> restyled as a glass panel (resets Card's default spacing/ring). */
export const panelCard = `${glass} rounded-2xl ring-0 gap-0 py-0 text-card-foreground`;

/** Hover lift + glow for clickable cards. */
export const cardHover =
  "cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/60 hover:bg-[#0d1e3e]/85 hover:shadow-[0_18px_44px_-10px_rgba(0,240,255,0.28)]";

/** Section vertical rhythm. */
export const sectionPad = "relative py-20 md:py-28";

/** Neon mono chip (tags, status). */
export const chip =
  "rounded-md border border-neon/25 bg-neon/10 px-2.5 py-1 font-mono text-xs text-neon-light";
