"use client";

import React, { useState } from "react";
import {
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Code2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FilterTabs from "@/components/FilterTabs";
import DetailDialog from "@/components/DetailDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectItem {
  id: string;
  title: string;
  category: "apps" | "web" | "dashboards" | "ai";
  categoryLabel: string;
  badgeLabel: string;
  shortDesc: string;
  fullDesc: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  features: string[];
  techStack: string[];
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "ai-support-hub",
      title: "Autonomous AI Chatbot & Knowledge Assistant",
      category: "ai",
      categoryLabel: "AI & CHATBOTS",
      badgeLabel: "LAB PROTOTYPE",
      shortDesc: "Interactive RAG support chatbot demo with custom knowledge retrieval and automated ticket actions.",
      fullDesc:
        "A live intelligent chatbot prototype engineered with Python, LangGraph, and vector search. Connects to company knowledge bases (PDFs, docs, databases) to provide instant, hallucination-free answers and automated tool executions.",
      metrics: [
        { label: "Response Speed", value: "320ms" },
        { label: "Answer Accuracy", value: "99.2%" },
        { label: "Deployment", value: "Multi-Platform" },
      ],
      tags: ["Python", "FastAPI", "Milvus Vector DB", "LangGraph", "React"],
      features: [
        "Hybrid RAG vector retrieval over documents and knowledge bases",
        "Deterministic guardrails eliminating hallucinations",
        "Ready integration for Web Widgets, WhatsApp, Telegram, and Discord",
      ],
      techStack: ["Next.js", "Python", "Milvus", "FastAPI", "Tailwind CSS"],
    },
    {
      id: "saas-analytics-dashboard",
      title: "Real-Time SaaS Analytics & Telemetry Dashboard",
      category: "dashboards",
      categoryLabel: "DASHBOARDS & ADMIN",
      badgeLabel: "INTERACTIVE DEMO",
      shortDesc: "High-density real-time financial, revenue, and user activity monitoring dashboard demo.",
      fullDesc:
        "A responsive executive dashboard prototype featuring sub-50ms live data updates via WebSockets, customizable analytics charts, and role-based permissions designed for modern SaaS businesses.",
      metrics: [
        { label: "Render Rate", value: "60 FPS" },
        { label: "Data Stream", value: "WebSocket" },
        { label: "Query Speed", value: "< 20ms" },
      ],
      tags: ["React 19", "Node.js", "Express", "MongoDB", "Chart.js"],
      features: [
        "Real-time WebSocket data streaming with zero UI lag",
        "Customizable drag-and-drop analytics widget layout",
        "Role-based permission gating (Admin, Manager, Viewer)",
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
    {
      id: "ecommerce-web-app",
      title: "Modern E-Commerce Storefront & Web App",
      category: "apps",
      categoryLabel: "WEB APPLICATIONS",
      badgeLabel: "CORE BLUEPRINT",
      shortDesc: "Ultra-fast headless e-commerce store with instant product search and smooth checkout flow.",
      fullDesc:
        "A production-ready e-commerce web application blueprint built with React/Next.js and a robust backend. Features instantaneous category filtering, shopping cart state management, and seamless Stripe payment integration.",
      metrics: [
        { label: "Lighthouse Score", value: "100/100" },
        { label: "Load Time", value: "0.4s" },
        { label: "Stack", value: "MERN / Next" },
      ],
      tags: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Edge-cached product catalog with instant search autocomplete",
        "Stripe payment gateway integration with webhooks",
        "Mobile-responsive PWA design for seamless mobile shopping",
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      id: "cyber-landing-page",
      title: "Interactive 3D Product Website & Landing Page",
      category: "web",
      categoryLabel: "WEBSITES & LANDING",
      badgeLabel: "FEATURED BUILD",
      shortDesc: "Conversion-optimized cyber aesthetic landing page with 60fps canvas particles and modern UI.",
      fullDesc:
        "An eye-catching landing page architecture designed to maximize lead conversion. Features smooth GPU-accelerated canvas background particles, dark mode cyber aesthetics, and responsive pricing tables.",
      metrics: [
        { label: "Animation FPS", value: "60 FPS" },
        { label: "Page Load", value: "< 0.3s" },
        { label: "SEO Score", value: "100/100" },
      ],
      tags: ["HTML5 Canvas", "Next.js", "Tailwind CSS", "TypeScript", "SEO"],
      features: [
        "Interactive 60fps GPU-accelerated canvas particle effect",
        "Interactive pricing & quote estimator calculator",
        "Optimized OpenGraph social preview tags and rich schema",
      ],
      techStack: ["Next.js", "Tailwind CSS", "HTML5 Canvas", "TypeScript"],
    },
    {
      id: "dotnet-management-portal",
      title: "Enterprise Management Portal & .NET Web API",
      category: "apps",
      categoryLabel: "BACKEND & .NET",
      badgeLabel: "CORE BLUEPRINT",
      shortDesc: "High-performance .NET Core and SQL Server admin platform with clean architecture.",
      fullDesc:
        "A robust full-stack management portal powered by an ASP.NET Core Web API backend and SQL Server, connected to a modern React frontend with JWT authentication and audit trails.",
      metrics: [
        { label: "Architecture", value: "Clean Arch" },
        { label: "Backend", value: ".NET Core" },
        { label: "Database", value: "SQL Server" },
      ],
      tags: [".NET Core", "C#", "SQL Server", "React", "REST API"],
      features: [
        "Modular Clean Architecture with Repository Pattern",
        "Secure JWT authentication and role-based authorization",
        "Automated Swagger / OpenAPI interactive documentation",
      ],
      techStack: [".NET Core", "C#", "SQL Server", "React", "Tailwind CSS"],
    },
    {
      id: "ai-code-workflow",
      title: "AI Autonomous Workflow Automation Engine",
      category: "ai",
      categoryLabel: "AI & AGENTS",
      badgeLabel: "LAB PROTOTYPE",
      shortDesc: "Autonomous multi-agent workflow prototype executing multi-step business logic via APIs.",
      fullDesc:
        "An autonomous AI agent prototype designed to demonstrate multi-step task execution. Agents break down user requests, query databases, invoke APIs, and generate verified structured reports.",
      metrics: [
        { label: "Task Execution", value: "Autonomous" },
        { label: "Integrations", value: "APIs & DBs" },
        { label: "LLM Support", value: "OpenAI / Open" },
      ],
      tags: ["Python", "LangGraph", "FastAPI", "AI Agents", "Docker"],
      features: [
        "Dynamic tool-calling API integrations",
        "Self-correcting semantic verification loops",
        "Customizable system prompts tailored to client business logic",
      ],
      techStack: ["Python", "LangGraph", "FastAPI", "Docker", "Next.js"],
    },
  ];

  const filterTabs = [
    { id: "all", label: "ALL BUILDS" },
    { id: "apps", label: "APPLICATIONS" },
    { id: "web", label: "WEBSITES & LANDING" },
    { id: "dashboards", label: "DASHBOARDS" },
    { id: "ai", label: "AI AGENTS & BOTS" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="portfolio" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <SectionHeader
          icon={Layers}
          badge="FEATURED BUILDS & CAPABILITIES"
          title="PORTFOLIO —"
          highlight="DEMO BUILDS & PROTOTYPES"
          description="Explore our interactive architecture prototypes, real-time dashboards, e-commerce web apps, and autonomous AI agents built to showcase our engineering quality."
        />

        {/* Filter Pills */}
        <FilterTabs
          tabs={filterTabs}
          value={activeFilter}
          onChange={(v) => setActiveFilter(v)}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="corners glass group flex flex-col justify-between p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/60 hover:bg-[#0d1e3e]/85 hover:shadow-[0_18px_44px_-10px_rgba(0,240,255,0.28)] cursor-pointer"
            >
              <CardContent className="flex h-full flex-col justify-between p-0">
                <div>
                  {/* Category & Status */}
                  <div className="mb-4 flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="border-neon/25 bg-neon/10 font-mono text-[0.72rem] tracking-wider text-neon-light uppercase"
                    >
                      {project.categoryLabel}
                    </Badge>

                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-neon animate-pulse" />
                      <span className="font-mono text-[0.68rem] text-neon-light font-bold">
                        {project.badgeLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-extrabold leading-snug text-white group-hover:text-neon-light transition-colors">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {project.shortDesc}
                  </p>

                  {/* Metric Strip */}
                  <div className="mb-5 grid grid-cols-3 gap-2 rounded-lg border border-neon/15 bg-[#040b1c]/75 p-3 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-mono text-sm font-extrabold text-neon">
                          {m.value}
                        </div>
                        <div className="text-[0.68rem] text-slate-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-white/5 bg-white/5 px-2 py-0.5 font-mono text-[0.72rem] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="border-t border-white/10 pt-3.5">
                  <span className="flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-neon-light transition-transform group-hover:translate-x-1">
                    EXPLORE PROTOTYPE DETAILS
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <DetailDialog
          open={Boolean(selectedProject)}
          onOpenChange={(open) => !open && setSelectedProject(null)}
          title={selectedProject.title}
          eyebrow="ARCHITECTURE & PROTOTYPE SPECS"
        >
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            {selectedProject.fullDesc}
          </p>

          {/* Metrics Grid */}
          <div className="mb-6 grid grid-cols-3 gap-3 rounded-xl border border-neon/25 bg-[#0a1937]/65 p-4 text-center">
            {selectedProject.metrics.map((m, i) => (
              <div key={i}>
                <div className="font-mono text-xl font-black text-neon text-glow sm:text-2xl">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <h4 className="mb-3 font-mono text-xs font-bold tracking-wider text-neon-light uppercase">
            Architecture Features & Capabilities:
          </h4>

          <div className="mb-6 flex flex-col gap-2.5">
            {selectedProject.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-neon" />
                <span className="text-sm text-slate-200">{feat}</span>
              </div>
            ))}
          </div>

          {/* Complete Stack */}
          <h4 className="mb-3 font-mono text-xs font-bold tracking-wider text-neon-light uppercase">
            Technology Stack:
          </h4>

          <div className="mb-6 flex flex-wrap gap-2">
            {selectedProject.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-md border-neon/30 bg-neon/10 font-mono text-xs text-neon-light"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <Button
            asChild
            variant="neon"
            size="pill"
            className="w-full"
            onClick={() => setSelectedProject(null)}
          >
            <a href="#contact">REQUEST A CUSTOM BUILD FOR YOUR PRODUCT</a>
          </Button>
        </DetailDialog>
      )}
    </section>
  );
}
