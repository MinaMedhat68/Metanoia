import React from "react";

const TECH = [
  "REACT",
  "NEXT.JS",
  "NODE.JS",
  "EXPRESS.JS",
  "NESTJS",
  ".NET / C#",
  "MONGODB",
  "POSTGRESQL",
  "SQL SERVER",
  "TYPESCRIPT",
  "PYTHON & AI",
  "TAILWIND CSS",
  "DOCKER",
  "REDIS",
  "REST & GRAPHQL",
];

export default function TechMarquee() {
  const items = [...TECH, ...TECH];
  return (
    <div
      aria-hidden="true"
      className="marquee-mask group relative z-[2] overflow-hidden border-y border-neon/15 bg-ink/70 py-4 backdrop-blur-sm"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3.5 px-7 font-mono text-[0.82rem] font-semibold tracking-[2px] whitespace-nowrap text-muted-foreground hover:text-neon transition-colors"
          >
            <i className="size-1.5 rounded-full bg-neon shadow-[0_0_8px_#00f0ff]" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
