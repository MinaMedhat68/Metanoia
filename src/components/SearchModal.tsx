"use client";

import React, { useState, useEffect } from "react";
import { Search, ArrowRight, Terminal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export default function SearchModal({ isOpen, onClose, onNavigate }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery("");
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const searchData = [
    { type: "service", title: "Web & Mobile Applications (Next.js & React)", href: "#services", tag: "APPS" },
    { type: "service", title: "High-Converting Websites & Landing Pages", href: "#services", tag: "WEBSITES" },
    { type: "service", title: "Interactive Dashboards & Telemetry Portals", href: "#services", tag: "DASHBOARDS" },
    { type: "service", title: "Autonomous AI Agents & Workflows", href: "#services", tag: "AI AGENTS" },
    { type: "service", title: "Intelligent AI Chatbots & Customer Assistants", href: "#services", tag: "CHATBOTS" },
    { type: "portfolio", title: "Autonomous AI Agent & Customer Chatbot Hub", href: "#portfolio", tag: "CASE STUDY" },
    { type: "portfolio", title: "Real-Time SaaS Executive Analytics Dashboard", href: "#portfolio", tag: "DASHBOARD" },
    { type: "portfolio", title: "Headless E-Commerce & Full-Stack Web Application", href: "#portfolio", tag: "WEB APP" },
    { type: "portfolio", title: "Interactive 3D Product Website & Landing Page", href: "#portfolio", tag: "LANDING" },
    { type: "team", title: "Alex Rivera — Chief Technology Architect", href: "#team", tag: "TEAM" },
    { type: "team", title: "Marcus Vance, PhD — Head of Distributed AI", href: "#team", tag: "AI TEAM" },
    { type: "blog", title: "The Future of AI in SaaS: Beyond Thin Wrappers", href: "#blog", tag: "ARTICLE" },
    { type: "timeline", title: "Company Evolution & Milestones (2020-2026)", href: "#about", tag: "TIMELINE" },
  ];

  const filtered = query.trim()
    ? searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.tag.toLowerCase().includes(query.toLowerCase())
      )
    : searchData.slice(0, 6);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="corners bg-ink-panel/95 border-neon/30 text-white backdrop-blur-xl max-w-xl p-0 overflow-hidden">
        <DialogTitle className="sr-only">Search Metanoia Services & Work</DialogTitle>

        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 sm:p-5 border-b border-neon/20 bg-ink-surface/80">
          <Search className="size-5 text-neon shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search applications, websites, dashboards, AI agents... (Press Esc to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-white text-sm sm:text-base placeholder:text-slate-500 font-sans"
          />
        </div>

        {/* Search Results List */}
        <div className="p-4 sm:p-5 max-h-96 overflow-y-auto space-y-3">
          <div className="text-[11px] text-slate-400 font-mono tracking-wider">
            {query.trim() ? `FOUND ${filtered.length} MATCHING RESULTS` : "RECOMMENDED TARGETS"}
          </div>

          <div className="space-y-2">
            {filtered.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => {
                  onClose();
                  onNavigate(item.href);
                }}
                className="flex items-center justify-between p-3 rounded-lg bg-ink-card border border-neon/15 hover:border-neon hover:bg-neon/10 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <Terminal className="size-4 text-neon shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 group-hover:text-white font-medium">
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="font-mono text-[10px] text-neon-light border-neon/30 bg-neon/5"
                  >
                    {item.tag}
                  </Badge>
                  <ArrowRight className="size-3.5 text-slate-400 group-hover:text-neon group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
