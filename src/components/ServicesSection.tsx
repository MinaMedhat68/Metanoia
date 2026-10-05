"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Smartphone,
  Globe,
  LayoutDashboard,
  Bot,
  MessageSquareCode,
  Server,
  Check,
  ChevronRight,
  Info,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FilterTabs from "@/components/FilterTabs";
import DetailDialog from "@/components/DetailDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceItem {
  id: string;
  icon: any;
  title: string;
  category: "apps" | "web" | "dashboards" | "ai";
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: "web-mobile-apps",
      icon: Smartphone,
      title: "Full-Stack Web & Mobile Applications",
      category: "apps",
      description:
        "Full-cycle development of responsive web applications and mobile apps. We engineer robust frontends in React and Next.js paired with resilient backends in Node.js, Express, NestJS, or .NET with MongoDB and SQL databases.",
      features: [
        "Modern React & Next.js frontend with 60fps responsive UI",
        "Robust Node.js (Express / NestJS) and .NET Core backends",
        "Flexible database modeling in MongoDB, PostgreSQL, or SQL Server",
        "Cross-platform mobile apps with seamless API synchronization",
      ],
      specs: [
        { label: "Performance", value: "60 FPS" },
        { label: "Tech Stack", value: "MERN / .NET / Nest" },
        { label: "Deployment", value: "As You Want" },
      ],
    },
    {
      id: "landing-pages-websites",
      icon: Globe,
      title: "High-Converting Websites & Landing Pages",
      category: "web",
      description:
        "Captivating, modern web experiences designed to turn visitors into active clients. Incorporating interactive canvas visuals, sleek dark mode aesthetics, micro-animations, and 100/100 Google Lighthouse SEO performance.",
      features: [
        "Bespoke cyber aesthetic design tailored to your brand identity",
        "Sub-second page load times with 100/100 Lighthouse scores",
        "Conversion rate optimization (CRO) & engaging interactive animations",
        "Full technical SEO, OpenGraph metadata, and mobile responsiveness",
      ],
      specs: [
        { label: "Lighthouse Score", value: "100/100" },
        { label: "TTFB", value: "< 50ms" },
        { label: "Conversion Lift", value: "+45%" },
      ],
    },
    {
      id: "interactive-dashboards",
      icon: LayoutDashboard,
      title: "Interactive Dashboards & Admin Portals",
      category: "dashboards",
      description:
        "Real-time analytics platforms, internal admin panels, and telemetry dashboards. Featuring live WebSocket data streaming, custom chart libraries, and multi-tenant access control backed by Node.js or .NET.",
      features: [
        "Real-time WebSocket & SSE data stream visualization",
        "Granular role-based access control (RBAC) & audit logs",
        "High-density financial, business, and operational metric graphs",
        "Exportable PDF/Excel reports & automated event alerts",
      ],
      specs: [
        { label: "Data Latency", value: "Sub-50ms" },
        { label: "Backend", value: "Node / .NET / Nest" },
        { label: "Database", value: "SQL / Mongo" },
      ],
    },
    {
      id: "backend-apis",
      icon: Server,
      title: "Backend Engineering & REST/GraphQL APIs",
      category: "apps",
      description:
        "Scalable backend architectures built with Node.js (Express, NestJS) and .NET (C#). We design clean, modular microservices and APIs capable of handling heavy workloads with high uptime.",
      features: [
        "Enterprise NestJS & Express.js architecture with clean code",
        "High-throughput .NET (C#) Web APIs and microservices",
        "Relational (PostgreSQL, SQL Server, MySQL) & NoSQL (MongoDB) databases",
        "JWT / OAuth authentication, Redis caching, and rate limiting",
      ],
      specs: [
        { label: "Backend", value: "Nest / Node / .NET" },
        { label: "Database", value: "MongoDB / SQL" },
        { label: "Architecture", value: "Clean & Modular" },
      ],
    },
    {
      id: "ai-agents",
      icon: Bot,
      title: "Autonomous AI Agents & Workflows",
      category: "ai",
      description:
        "Custom autonomous multi-agent reasoning graphs and workflow automation engines. We deploy self-correcting AI systems that connect to your Node.js, .NET, or Python backends to automate complex operational tasks.",
      features: [
        "Multi-agent reasoning pipelines (LangGraph & Python)",
        "Automated tool-calling connected directly to your database & APIs",
        "Self-correcting verification loops with zero hallucinations",
        "Integration with OpenAI, Claude, and self-hosted open-source LLMs",
      ],
      specs: [
        { label: "Reasoning Accuracy", value: "99.2%" },
        { label: "Integrations", value: "APIs & DBs" },
        { label: "Execution", value: "Autonomous" },
      ],
    },
    {
      id: "ai-chatbots",
      icon: MessageSquareCode,
      title: "Intelligent AI Chatbots & Customer Assistants",
      category: "ai",
      description:
        "Context-aware 24/7 conversational chatbots trained on your company knowledge base. Utilizing high-speed vector search (RAG) to provide instant, hallucination-free support and lead qualification.",
      features: [
        "Hybrid RAG vector search over internal docs, PDFs, and databases",
        "Omnichannel integration (Web widget, WhatsApp, Slack, Telegram)",
        "Automated human escalation triggers & conversation history tracking",
        "Deterministic guardrails ensuring reliable, accurate answers",
      ],
      specs: [
        { label: "Response Time", value: "< 350ms" },
        { label: "Resolution Rate", value: "88%" },
        { label: "Availability", value: "24/7/365" },
      ],
    },
  ];

  const filterTabs = [
    { id: "all", label: "ALL SERVICES" },
    { id: "apps", label: "APPLICATIONS & BACKEND" },
    { id: "web", label: "WEBSITES & LANDING" },
    { id: "dashboards", label: "DASHBOARDS" },
    { id: "ai", label: "AI AGENTS & BOTS" },
  ];

  const filteredServices = services.filter((s) => {
    if (activeTab === "all") return true;
    return s.category === activeTab;
  });

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="cyber-grid pointer-events-none absolute inset-0 z-1" />

      <div className="container relative z-2 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <SectionHeader
          icon={Layers}
          badge="OUR CORE EXPERTISE"
          title="SERVICES —"
          highlight="WHAT WE BUILD"
          description="We are a complete full-stack team specializing in frontend (React, Next.js), backend (Node.js, Express, NestJS, .NET), databases (MongoDB, PostgreSQL, SQL Server), and autonomous AI agents & chatbots."
        />

        {/* Development Capabilities Visual Showcase */}
        <Card className="corners glass relative mb-12 overflow-hidden rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_35px_rgba(0,240,255,0.15)]">
          <CardContent className="p-0">
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[380px]">
              <Image
                src="/images/cloud_solutions.jpg"
                alt="Metanoia Full-stack and AI Architecture"
                fill
                sizes="90vw"
                className="object-cover"
              />

              {/* Gradient Mask */}
              <div className="absolute inset-0 bg-linear-to-t from-[#050c1c]/90 via-[#050c1c]/20 to-transparent" />

              {/* Top Banner Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-neon/30 bg-[#050c1e]/85 px-4 py-2 font-mono text-xs text-neon-light backdrop-blur-md">
                <Sparkles size={15} className="text-neon" />
                <span>FULL-STACK: FRONTEND, BACKEND, DATABASES & AI</span>
              </div>

              {/* Interactive Node Hotspots */}
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neon/25 bg-[#061128]/90 p-3.5 backdrop-blur-xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React & Next.js",
                      "Node & Express",
                      "NestJS",
                      ".NET / C#",
                      "MongoDB",
                      "SQL Server & Postgres",
                      "AI Agents",
                    ].map((node) => (
                      <button
                        key={node}
                        type="button"
                        onClick={() => setHoveredNode(hoveredNode === node ? null : node)}
                        className={cn(
                          "rounded-md px-2.5 py-1 font-mono text-xs transition-all",
                          hoveredNode === node
                            ? "border border-neon bg-neon/25 text-white"
                            : "border border-neon/20 bg-white/5 text-neon-light hover:border-neon hover:text-white"
                        )}
                      >
                        {node}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>FULL-STACK READY</span>
                </div>
              </div>
            </div>

            {/* Node detail callout when selected */}
            {hoveredNode && (
              <div className="mt-3.5 flex items-center justify-between rounded-lg border border-neon/30 bg-neon/10 px-4 py-3 text-sm text-white">
                <div className="flex items-center gap-2">
                  <Info size={16} className="text-neon" />
                  <span>
                    <strong>{hoveredNode}:</strong> Built by dedicated developers with clean architecture, high performance, and thorough testing.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setHoveredNode(null)}
                  className="font-mono text-xs text-neon-light hover:underline"
                >
                  Dismiss
                </button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Category Filter Tabs */}
        <FilterTabs
          tabs={filterTabs}
          value={activeTab}
          onChange={(v) => setActiveTab(v)}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;

            return (
              <Card
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="corners glass group flex flex-col justify-between p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/60 hover:bg-[#0d1e3e]/85 hover:shadow-[0_18px_44px_-10px_rgba(0,240,255,0.28)] cursor-pointer"
              >
                <CardContent className="flex h-full flex-col justify-between p-0">
                  <div>
                    {/* Top Icon & Category Tag */}
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-neon/30 bg-linear-to-br from-neon/15 to-electric/25 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                        <IconComponent size={24} className="text-neon" />
                      </div>

                      <Badge
                        variant="outline"
                        className="rounded-full border-neon/20 bg-neon/10 font-mono text-[0.68rem] tracking-wider text-neon-light uppercase"
                      >
                        {service.category}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-lg font-bold leading-snug text-white group-hover:text-neon-light transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6 flex flex-col gap-2">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check size={15} className="mt-0.5 shrink-0 text-neon" />
                          <span className="text-xs text-slate-300">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-neon-light transition-transform group-hover:translate-x-1">
                      DELIVERABLES
                      <ChevronRight size={15} />
                    </span>

                    <span className="font-mono text-[0.72rem] text-slate-400">
                      {service.specs[1].label}: {service.specs[1].value}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <DetailDialog
          open={Boolean(selectedService)}
          onOpenChange={(open) => !open && setSelectedService(null)}
          title={selectedService.title}
          eyebrow="SERVICE DELIVERABLES"
          icon={<selectedService.icon size={22} className="text-neon" />}
        >
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            {selectedService.description}
          </p>

          <h4 className="mb-3 font-mono text-xs font-bold tracking-wider text-neon-light uppercase">
            What You Get:
          </h4>

          <div className="mb-6 flex flex-col gap-2.5">
            {selectedService.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <Check size={16} className="shrink-0 text-neon" />
                <span className="text-sm text-slate-200">{feat}</span>
              </div>
            ))}
          </div>

          {/* Benchmarks Grid */}
          <div className="mb-6 grid grid-cols-3 gap-3 rounded-xl border border-neon/20 bg-[#0a1937]/60 p-4 text-center">
            {selectedService.specs.map((s, idx) => (
              <div key={idx}>
                <div className="text-[0.72rem] text-muted-foreground uppercase">
                  {s.label}
                </div>
                <div className="mt-1 font-mono text-sm font-bold text-neon">
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          <Button
            asChild
            variant="neon"
            size="pill"
            className="w-full"
            onClick={() => setSelectedService(null)}
          >
            <a href="#contact">START A PROJECT WITH OUR TEAM</a>
          </Button>
        </DetailDialog>
      )}
    </section>
  );
}
