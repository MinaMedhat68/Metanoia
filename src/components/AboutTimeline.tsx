"use client";

import React, { useState } from "react";
import {
  Calendar,
  CheckCircle,
  TrendingUp,
  Zap,
  Code2,
  Users,
  Sparkles,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  techStack: string[];
  metric: { value: string; label: string };
}

export default function AboutTimeline() {
  const milestones: Milestone[] = [
    {
      year: "2024",
      title: "The Gathering & First Milestones",
      subtitle: "The Genesis of Metanoia",
      description:
        "A group of ambitious young Egyptian developers and UI/UX designers decided to join forces after years of freelancing. We united under the name Metanoia with one shared passion: creating modern, high-quality digital products that stand out.",
      achievements: [
        "United our core team of passionate Egyptian full-stack engineers and designers",
        "Shipped our first 15 custom web applications and conversion landing pages",
        "Standardized our modern stack around Next.js, React, and Tailwind CSS",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      metric: { value: "15+", label: "Projects Shipped in Year 1" },
    },
    {
      year: "2025",
      title: "Dashboards & AI Agents Expansion",
      subtitle: "Elevating Our Technical Capabilities",
      description:
        "As client trust grew, we expanded into building complex real-time telemetry dashboards, full-stack SaaS portals, and intelligent autonomous AI agents & chatbots to help businesses automate their operations.",
      achievements: [
        "Built interactive real-time analytics dashboards with sub-50ms data streaming",
        "Engineered custom RAG AI chatbots and multi-agent workflow automations",
        "Maintained 100% on-time delivery and glowing 5-star client testimonials",
      ],
      techStack: ["React 19", "Python", "FastAPI", "Milvus Vector DB", "LangGraph"],
      metric: { value: "99.4%", label: "Client Satisfaction Score" },
    },
    {
      year: "2026",
      title: "The Next-Gen Development Studio",
      subtitle: "Building the Future of Digital Experiences",
      description:
        "Today, Metanoia is a hungry, dedicated tech squad delivering silky-smooth 60fps web applications, high-converting landing pages, live dashboards, and autonomous AI agents for clients across Egypt, the MENA region, and worldwide.",
      achievements: [
        "Delivering end-to-end full-stack web apps and 60fps responsive interfaces",
        "Deploying autonomous 24/7 AI agents and smart customer support assistants",
        "Serving as dedicated tech squads and partners for fast-growing startups",
      ],
      techStack: ["Next.js 15", "Tailwind CSS", "Autonomous AI Agents", "WebSockets", "Docker"],
      metric: { value: "45+", label: "Digital Products & Clients" },
    },
  ];

  const [activeYearIndex, setActiveYearIndex] = useState(2);
  const activeMilestone = milestones[activeYearIndex];

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <SectionHeader
          icon={Calendar}
          badge="OUR STORY & JOURNEY"
          title="ABOUT US —"
          highlight="WHO WE ARE"
          description="We are an ambitious team of passionate Egyptian developers and designers who decided to build a modern software studio dedicated to crafting world-class web applications, landing pages, interactive dashboards, and AI agents."
        />

        {/* Interactive Timeline Bar */}
        <div className="relative mx-auto mb-12 max-w-3xl px-4 py-5">
          {/* Background Line */}
          <div className="absolute top-1/2 right-12 left-12 h-0.5 -translate-y-1/2 bg-neon/15" />

          {/* Active Highlight Line */}
          <div
            style={{ width: `${(activeYearIndex / (milestones.length - 1)) * 88}%` }}
            className="absolute top-1/2 left-12 h-0.5 -translate-y-1/2 bg-linear-to-r from-electric to-neon shadow-[0_0_12px_#00f0ff] transition-all duration-500"
          />

          {/* Milestone Nodes */}
          <div className="relative z-10 flex justify-between">
            {milestones.map((m, idx) => {
              const isSelected = activeYearIndex === idx;
              const isPast = activeYearIndex >= idx;

              return (
                <button
                  key={m.year}
                  type="button"
                  onClick={() => setActiveYearIndex(idx)}
                  className="group flex flex-col items-center gap-2.5 transition-transform duration-200 hover:scale-105"
                >
                  <div
                    className={cn(
                      "flex items-center justify-center rounded-full transition-all duration-300",
                      isSelected
                        ? "size-11 border-2 border-white bg-linear-to-br from-neon to-electric shadow-[0_0_25px_#00f0ff]"
                        : isPast
                        ? "size-9 border-2 border-neon bg-[#0e2246]"
                        : "size-9 border-2 border-white/15 bg-[#08142b]"
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono font-extrabold",
                        isSelected
                          ? "text-xs text-[#050a15]"
                          : isPast
                          ? "text-xs text-neon-light"
                          : "text-xs text-slate-500"
                      )}
                    >
                      {m.year}
                    </span>
                  </div>

                  <span
                    className={cn(
                      "font-mono text-sm font-bold tracking-wider",
                      isSelected
                        ? "text-neon"
                        : isPast
                        ? "text-white"
                        : "text-slate-500"
                    )}
                  >
                    {m.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Detail Card */}
        <Card className="corners glass mx-auto max-w-4xl p-7 md:p-9 shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(0,240,255,0.12)]">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.8fr_1fr]">
              {/* Left Content */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="border-neon/30 bg-neon/15 font-mono font-bold text-neon"
                  >
                    YEAR {activeMilestone.year}
                  </Badge>
                  <span className="text-sm font-semibold text-neon-light">
                    {activeMilestone.subtitle}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-extrabold leading-snug text-white md:text-3xl">
                  {activeMilestone.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {activeMilestone.description}
                </p>

                {/* Achievements List */}
                <div className="mb-6 flex flex-col gap-2.5">
                  {activeMilestone.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={18}
                        className="mt-0.5 shrink-0 text-neon"
                      />
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>


              </div>

              {/* Right Metric Box */}
              <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-neon/25 bg-linear-to-br from-[#081838]/70 to-[#040c1e]/90 p-8 text-center">
                <div className="absolute size-28 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.25)_0%,transparent_70%)] blur-xl" />
                <TrendingUp size={32} className="relative mb-3 text-neon" />
                <div className="relative font-mono text-4xl font-black text-white text-glow">
                  {activeMilestone.metric.value}
                </div>
                <div className="relative mt-2 font-mono text-xs font-semibold tracking-wider text-neon-light uppercase">
                  {activeMilestone.metric.label}
                </div>
                <div className="mt-5 w-full border-t border-white/10 pt-3 text-[0.75rem] text-muted-foreground">
                  Genuine Passion & Real Results
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Core Values Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Card className="glass rounded-2xl p-6 transition-all duration-300 hover:border-neon/50 hover:bg-[#0d1e3e]/85">
            <CardContent className="p-0">
              <Zap size={24} className="mb-3.5 text-neon" />
              <h4 className="mb-2 text-lg font-bold text-white">
                Youth Energy & Passion
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                We treat every client project like our own product — obsessing over details, speed, clean code, and delivering results we take pride in.
              </p>
            </CardContent>
          </Card>

          <Card className="glass rounded-2xl p-6 transition-all duration-300 hover:border-neon/50 hover:bg-[#0d1e3e]/85">
            <CardContent className="p-0">
              <Code2 size={24} className="mb-3.5 text-neon" />
              <h4 className="mb-2 text-lg font-bold text-white">
                Modern Stack & Craftsmanship
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                We build with Next.js, React, Tailwind, and cutting-edge AI. No outdated templates or sluggish code — only smooth 60fps experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="glass rounded-2xl p-6 transition-all duration-300 hover:border-neon/50 hover:bg-[#0d1e3e]/85">
            <CardContent className="p-0">
              <Users size={24} className="mb-3.5 text-neon" />
              <h4 className="mb-2 text-lg font-bold text-white">
                Direct & Transparent Partnership
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                No corporate layers or slow communication. You work directly with the developers and designers building your application.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
