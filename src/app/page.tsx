"use client";

import React, { useState } from "react";
import CyberCanvas from "@/components/CyberCanvas";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import Reveal from "@/components/Reveal";
import AboutTimeline from "@/components/AboutTimeline";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleNavigate = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-ink text-white selection:bg-neon/30 selection:text-neon overflow-x-hidden">
      <CyberCanvas />
      <ScrollProgress />

      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      {/* Home: exactly 100% viewport height */}
      <HeroSection />
      <TechMarquee />

      <Reveal>
        <AboutTimeline />
      </Reveal>

      <div className="bg-ink-surface/50 border-y border-neon/10">
        <Reveal>
          <ServicesSection />
        </Reveal>
      </div>

      <Reveal>
        <PortfolioSection />
      </Reveal>

      <div className="bg-ink-surface/50 border-y border-neon/10">
        <Reveal>
          <TeamSection />
        </Reveal>
      </div>

      <Reveal>
        <BlogSection />
      </Reveal>

      <div className="bg-ink-surface/50 border-y border-neon/10">
        <Reveal>
          <ConnectSection />
        </Reveal>
      </div>

      <Footer />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </main>
  );
}
