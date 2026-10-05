"use client";

import React, { useState } from "react";
import { Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FilterTabs from "@/components/FilterTabs";
import DetailDialog from "@/components/DetailDialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  dept: "frontend" | "backend" | "ai" | "fullstack" | "business development" | "mobile";
  deptLabel: string;
  avatarBg: string;
  initials: string;
  bio: string;
  specialties: string[];
  recentProject: string;
  stats: { label: string; value: string };
}

export default function TeamSection() {
  const [activeDept, setActiveDept] = useState<string>("all");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
      {
      id: "Mina Medhat",
      name: "Mina Medhat RT",
      role: "Senior Full-Stack Developer",
      dept: "fullstack",
      deptLabel: "FULL-STACK",
      avatarBg: "from-blue-400 via-blue-600 to-sky-700",
      initials: "MM",
      bio: "Versatile MERN & Next.js full-stack developer connecting modern React UIs with robust Node/Express and MongoDB backends.",
      specialties: ["MERN Stack", "Next.js", "TypeScript", "MongoDB", "Stripe API"],
      recentProject: "Multi-Tenant SaaS Management Platform",
      stats: { label: "Projects Shipped", value: "25+" },
    },
    {
      id: "ammera-amr",
      name: "Amera Amr",
      role: "Lead .NET & Cloud Architect",
      dept: "backend",
      deptLabel: "BACKEND & .NET",
      avatarBg: "from-sky-400 via-blue-600 to-indigo-700",
      initials: "AA",
      bio: "Expert backend engineer specializing in .NET Core (C#), ASP.NET Web APIs, and SQL Server. Designs clean architecture microservices with high reliability.",
      specialties: [".NET Core", "C#", "SQL Server", "Clean Architecture", "REST APIs"],
      recentProject: "High-Throughput Enterprise Backend Core",
      stats: { label: "API Uptime", value: "99.99%" },
    },
    {
      id: "karim-hassan",
      name: "Karim Hassan",
      role: "Node.js & NestJS Backend Lead",
      dept: "backend",
      deptLabel: "BACKEND & NODE",
      avatarBg: "from-emerald-400 via-teal-600 to-green-900",
      initials: "KH",
      bio: "Node.js ecosystem specialist crafting scalable backend APIs with Express.js and NestJS. Expert in MongoDB, PostgreSQL, and real-time WebSockets.",
      specialties: ["NestJS", "Express.js", "Node.js", "MongoDB", "PostgreSQL", "Redis"],
      recentProject: "Real-Time Telemetry Dashboard API & WebSockets",
      stats: { label: "Event Ingestion", value: "50k/sec" },
    },
    {
      id: "tarek-ali",
      name: "Tarek Ali",
      role: "AI & Multi-Agent Engineer",
      dept: "ai",
      deptLabel: "AI & AGENTS",
      avatarBg: "from-indigo-400 via-purple-600 to-indigo-900",
      initials: "TA",
      bio: "Builds intelligent multi-agent reasoning workflows, custom RAG vector search pipelines, and 24/7 autonomous customer support chatbots.",
      specialties: ["Python", "LangGraph", "FastAPI", "Milvus Vector DB", "OpenAI / Claude APIs"],
      recentProject: "Autonomous AI Customer Support Chatbot Hub",
      stats: { label: "Chatbot Accuracy", value: "99.2%" },
    },
    {
      id: "omar-mamdouh",
      name: "Omar Mamdouh",
      role: "Mobile Developer",
      dept: "mobile",
      deptLabel: "MOBILE DEVELOPMENT",
      avatarBg: "from-blue-400 via-blue-600 to-sky-700",
      initials: "OM",
      bio: "Mobile developer with experience in Flutter, Dart.",
      specialties: ["Flutter", "Dart"],
      recentProject: "AI Customer Support Chatbot",
      stats: { label: "Projects Shipped", value: "5+" },
    },
 
    {
      id: "nour-el-din",
      name: "Nour El-Din",
      role: "UI/UX & Product Designer",
      dept: "frontend",
      deptLabel: "UI/UX DESIGN",
      avatarBg: "from-pink-400 via-rose-600 to-purple-900",
      initials: "NE",
      bio: "Translates ambitious product ideas into breathtaking, conversion-focused user interfaces and sleek cyber aesthetic designs.",
      specialties: ["Figma", "UI/UX Design", "Design Systems", "Prototyping", "Micro-Interactions"],
      recentProject: "Metanoia Cyber Design System & Brand Identity",
      stats: { label: "User Satisfaction", value: "100%" },
    },
    {
      id: "Sarah-Saad",
      name: "Sarah Saad",
      role: "Scrum Master",
      dept: "business development",
      deptLabel: "BUSINESS DEVELOPMENT",
      avatarBg: "from-green-400 via-emerald-600 to-green-900",
      initials: "SS",
      bio: "As a Scrum Master, my mission is to orchestrate seamless project delivery, fostering collaboration and driving the team towards our goals with agility and efficiency.",
      specialties: ["Agile Methodologies", "Project Management", "Team Leadership", "Cross-functional Collaboration", "Process Optimization"],
      recentProject: "Successfully coordinated the end-to-end delivery of the Metanoia platform, ensuring on-time deployment and stakeholder satisfaction.",
      stats: { label: "Projects Delivered", value: "10+" },
    },
  ];

  const deptFilters = [
    { id: "all", label: "ALL DEVELOPERS" },
    { id: "frontend", label: "FRONTEND & UI" },
    { id: "backend", label: "BACKEND (NODE & .NET)" },
    { id: "ai", label: "AI & AGENTS" },
    { id: "fullstack", label: "FULL-STACK" },
  ];

  const filteredTeam = team.filter((m) => {
    if (activeDept === "all") return true;
    return m.dept === activeDept;
  });

  return (
    <section id="team" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Users}
          badge="OUR DEVELOPMENT SQUAD"
          title="TEAM —"
          highlight="ENGINEERING SQUAD"
          description="Meet our passionate full-stack developers, .NET and Node backend architects, UI/UX designers, and AI specialists building tomorrow's digital solutions."
        />

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <FilterTabs tabs={deptFilters} value={activeDept} onChange={setActiveDept} />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeam.map((member) => (
            <Card
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="corners border-neon/20 bg-ink-panel/85 hover:border-neon hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all duration-300 cursor-pointer group flex flex-col items-center text-center p-6"
            >
              <CardContent className="p-0 flex flex-col items-center w-full h-full">
                {/* Glowing Avatar Portrait */}
                <div className="relative mb-5">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.avatarBg} flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.35)] border-2 border-white/20 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <span className="font-mono text-2xl font-black text-white drop-shadow-md">
                      {member.initials}
                    </span>
                  </div>
                  {/* Status Dot */}
                  <div className="absolute bottom-0 right-0 size-4 rounded-full bg-emerald-500 border-2 border-ink-surface shadow-[0_0_8px_#10b981]" />
                </div>

                {/* Dept Tag */}
                <Badge
                  variant="outline"
                  className="font-mono text-[10px] tracking-wider text-neon border-neon/30 bg-neon/5 mb-2 uppercase"
                >
                  {member.deptLabel}
                </Badge>

                {/* Name */}
                <h3 className="text-lg font-extrabold text-white group-hover:text-neon transition-colors mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <div className="text-xs text-neon-light font-semibold mb-3">
                  {member.role}
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {member.bio}
                </p>

                {/* Key Metric */}
                <div className="w-full mt-auto p-2.5 rounded-lg bg-ink/70 border border-neon/15 flex justify-between items-center text-xs">
                  <span className="text-slate-400 text-[11px]">{member.stats.label}</span>
                  <span className="font-mono font-bold text-neon-light">
                    {member.stats.value}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Member Detail Dialog */}
      <DetailDialog
        open={Boolean(selectedMember)}
        onOpenChange={(open) => !open && setSelectedMember(null)}
        eyebrow={selectedMember?.deptLabel || "PROFILE"}
        title={selectedMember?.name || ""}
      >
        {selectedMember && (
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${selectedMember.avatarBg} flex items-center justify-center text-xl font-mono font-black text-white shadow-[0_0_20px_rgba(0,240,255,0.35)] shrink-0`}
              >
                {selectedMember.initials}
              </div>
              <div>
                <div className="text-lg font-extrabold text-white">{selectedMember.name}</div>
                <div className="text-sm text-neon font-medium">{selectedMember.role}</div>
                <div className="text-xs text-slate-400">Division: {selectedMember.deptLabel}</div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{selectedMember.bio}</p>

            <div className="p-4 rounded-xl bg-ink-card border border-neon/20">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                Recent Project Shipped
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                {selectedMember.recentProject}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-neon-light tracking-wider uppercase mb-2">
                Technical Specialties & Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedMember.specialties.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="font-mono text-xs text-neon-light border-neon/30 bg-neon/5"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

       
          </div>
        )}
      </DetailDialog>
    </section>
  );
}
