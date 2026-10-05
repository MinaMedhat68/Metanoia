"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Shield, ArrowUp, Clock, Bot, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-t from-black via-ink-surface to-ink border-t border-neon/20 pt-16 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-br from-neon to-electric flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              <Terminal className="size-5 text-ink stroke-[2.5]" />
            </div>

            <div>
              <div className="font-mono font-black text-xl tracking-[3px] text-white">
                METANOIA
              </div>
              <div className="font-mono text-[11px] tracking-widest text-neon-light">
                APPLICATIONS • WEBSITES • DASHBOARDS • AI AGENTS
              </div>
            </div>
          </div>

          {/* Telemetry info */}
          <div className="flex items-center gap-3 flex-wrap">
            <Badge
              variant="outline"
              className="font-mono text-xs text-neon-light border-neon/30 bg-neon/5 py-1.5 px-3 flex items-center gap-2"
            >
              <Clock className="size-3.5" />
              <span>TERMINAL: {utcTime || "12:00:00 UTC"}</span>
            </Badge>

            <Button
              variant="neonGhost"
              size="sm"
              onClick={scrollToTop}
              className="rounded-full flex items-center gap-1.5 font-mono text-xs"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="size-3.5" />
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-neon">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-slate-400">
              <a href="#hero" className="hover:text-neon transition-colors">HOMEPAGE</a>
              <a href="#about" className="hover:text-neon transition-colors">ABOUT US & TIMELINE</a>
              <a href="#services" className="hover:text-neon transition-colors">SERVICES & SOLUTIONS</a>
              <a href="#portfolio" className="hover:text-neon transition-colors">PROJECTS PORTFOLIO</a>
              <a href="#team" className="hover:text-neon transition-colors">ENGINEERING TEAM</a>
              <a href="#blog" className="hover:text-neon transition-colors">INSIGHTS & BLOG</a>
              <a href="#contact" className="hover:text-neon transition-colors">CONTACT US</a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-neon">
              What We Build
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-slate-400">
              <span>Web & Mobile Applications</span>
              <span>Landing Pages & Websites</span>
              <span>Interactive Dashboards</span>
              <span>Autonomous AI Agents</span>
              <span>Intelligent Chatbots</span>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-neon">
              Work With Us
            </h4>
            <div className="flex flex-col space-y-3 text-xs sm:text-sm text-slate-400">
              <Button
                asChild
                variant="neonOutline"
                size="sm"
                className="w-fit font-mono text-xs"
              >
                <a href="#contact">START A PROJECT</a>
              </Button>
      
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-neon">
              Quality Standards
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-neon" />
                <span>60 FPS Fluid User Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="size-4 text-neon" />
                <span>100% IP & Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="size-4 text-neon" />
                <span>Enterprise AI Privacy & Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 METANOIA TEAM. ALL RIGHTS RESERVED. FULL-STACK & AI DEVELOPMENT.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-neon cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-neon cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-neon cursor-pointer transition-colors">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
