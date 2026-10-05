"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Code2, Cpu, Zap, Globe, Sparkles, ChevronDown, Bot, Layout, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const KPIS = [
  { value: "100+", label: "Apps & Sites Built", color: "#00f0ff" },
  { value: "60fps", label: "Ultra-Smooth UI", color: "#ffffff" },
  { value: "99.9%", label: "Client Satisfaction", color: "#5df8ff" },
  { value: "Full-Stack", label: "Front & Back End", color: "#60a5fa" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex h-[100vh] h-[100svh] overflow-hidden items-center pt-24 pb-12"
    >
      {/* Cyber Grid background overlay */}
      <div className="cyber-grid pointer-events-none absolute inset-0 z-1" />

      {/* Radial light orbs */}
      <div className="pointer-events-none absolute top-[10%] left-[2%] z-1 size-[480px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.14)_0%,transparent_70%)] blur-[60px]" />
      <div className="pointer-events-none absolute right-[4%] bottom-0 z-1 size-[560px] rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.2)_0%,transparent_70%)] blur-[80px]" />

      <div className="container relative z-2 mx-auto h-full max-w-7xl px-6 flex flex-col justify-center">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <div className="min-w-0">
            {/* Main Hero Headings */}
            <h1 className="mb-4 leading-[1.08]">
              <span className="mb-1.5 block font-mono text-[clamp(1.1rem,min(2.6vw,3.6vh),2.2rem)] font-black tracking-[4px] text-neon text-glow">
                METANOIA TEAM
              </span>
              <span className="text-gradient block text-[clamp(2.1rem,min(4.8vw,7.8vh),4.2rem)] font-extrabold tracking-tight">
                FULL-STACK APPS, WEBSITES, DASHBOARDS & AI AGENTS
              </span>
              <span className="mt-2 block text-[clamp(0.85rem,min(1.6vw,2.4vh),1.35rem)] font-bold tracking-[3px] text-slate-400 uppercase">
                FRONTEND & BACKEND MASTERY • REACT, NODE, NEST, .NET & SQL
              </span>
            </h1>

            <p className="mb-6 max-w-[620px] text-[clamp(0.9rem,1.9vh,1.08rem)] leading-relaxed text-muted-foreground">
              We are a dedicated full-stack development squad building scalable web & mobile applications,
              high-converting landing pages, interactive telemetry dashboards, and autonomous AI agents & chatbots
              powered by React, Next.js, Node.js, Express, NestJS, .NET, MongoDB, and SQL.
            </p>

            {/* CTA Buttons */}
            <div className="mb-7 flex flex-wrap items-center gap-3.5">
              <Button asChild variant="neon" size="pill">
                <a href="#services">
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowRight size={18} />
                </a>
              </Button>

              <Button asChild variant="neonOutline" size="pill">
                <a href="#portfolio">
                  <Layout size={18} />
                  <span>VIEW PROJECTS</span>
                </a>
              </Button>

              <Button asChild variant="neonGhost" size="pill">
                <a href="#contact">
                  <Code2 size={18} />
                  <span>START A PROJECT</span>
                </a>
              </Button>
            </div>

            {/* KPI Counter Strip */}
            <div className="hidden max-w-[580px] grid-cols-2 gap-3 rounded-xl border border-neon/20 bg-[#081329]/65 p-4 backdrop-blur-xl sm:grid sm:grid-cols-4">
              {KPIS.map((k) => (
                <div key={k.label}>
                  <div
                    className="font-mono text-[clamp(1.1rem,2.8vh,1.7rem)] font-extrabold"
                    style={{ color: k.color }}
                  >
                    {k.value}
                  </div>
                  <div className="text-[0.66rem] tracking-wider text-muted-foreground uppercase">
                    {k.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual with glowing 3D arrow */}
          <div className="relative hidden h-full max-h-[580px] lg:block">
            <div className="corners glass relative h-full overflow-hidden rounded-3xl p-2.5 shadow-[0_20px_60px_-10px_rgba(0,240,255,0.25),0_0_40px_rgba(0,102,255,0.2)]">
              {/* Scanline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-linear-to-r from-transparent via-neon to-transparent opacity-60 animate-scan" />

              <div className="relative h-full w-full overflow-hidden rounded-2xl min-h-[380px]">
                <Image
                  src="/images/hero_arrow.jpg"
                  alt="Metanoia full-stack software and AI development"
                  fill
                  priority
                  sizes="45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050a15]/85 via-[#050a15]/15 to-transparent" />

                {/* HUD chips */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-neon/30 bg-[#050c1c]/85 px-3.5 py-2 font-mono text-xs text-neon-light backdrop-blur-md">
                  <Bot size={14} className="text-neon" />
                  <span>AI AGENTS: ONLINE</span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-neon/30 bg-[#050c1c]/85 px-3.5 py-2 font-mono text-xs text-emerald-400 backdrop-blur-md">
                  <Zap size={14} />
                  <span>FULL-STACK: MERN • NEST • .NET</span>
                </div>

                {/* Bottom HUD bar */}
                <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl border border-neon/25 bg-[#050c1c]/90 p-3 backdrop-blur-xl">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-neon/25 bg-neon/15">
                    <Layers size={18} className="text-neon" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-mono text-xs font-bold text-white">
                      FULL-STACK & AI DEVELOPMENT
                    </div>
                    <div className="text-[0.7rem] text-muted-foreground">
                      React • Next.js • Node • NestJS • .NET • Mongo & SQL
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold tracking-wider text-neon">
                    READY
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-6 bottom-20 z-10 flex items-center gap-2.5 rounded-xl border border-neon/25 bg-[#061127]/95 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(0,240,255,0.25)] backdrop-blur-2xl animate-float">
              <Sparkles size={20} className="text-neon" />
              <div>
                <div className="text-xs font-bold text-white">
                  Intelligent AI Chatbots
                </div>
                <div className="font-mono text-[0.68rem] text-neon-light">
                  CUSTOM LLM WORKFLOWS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <a
        href="#about"
        className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-0.5 font-mono text-[0.62rem] tracking-[3px] text-slate-500 transition-colors hover:text-neon animate-hint"
        aria-label="Scroll to next section"
      >
        <span>SCROLL</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}
