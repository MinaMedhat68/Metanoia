"use client";

import React, { useState, useEffect } from "react";
import { Search, Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "services", "portfolio", "team", "blog", "contact"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About Us", href: "#about", id: "about" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
    { label: "Team", href: "#team", id: "team" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Contact Us", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#050c1b]/95 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] border-b border-neon/10"
          : "bg-linear-to-b from-[#050a15]/90 to-transparent backdrop-blur-xs"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 no-underline group">
          <div className="flex size-9 items-center justify-center rounded-lg bg-linear-to-br from-neon to-electric shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-transform duration-300 group-hover:scale-105">
            <Terminal size={20} className="text-[#050a15] stroke-[2.5]" />
          </div>
          <span className="font-mono text-xl font-black tracking-[3px] text-white">
            METANOIA
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "font-mono text-[0.82rem] font-semibold uppercase tracking-[1.2px] transition-colors duration-200 hover:text-white",
                activeSection === link.id ? "text-neon" : "text-muted-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3.5">
          {/* Search Trigger */}
          <Button
            variant="outline"
            size="icon"
            onClick={onOpenSearch}
            aria-label="Search"
            className="rounded-full border-neon/25 bg-[#0c1a34]/80 text-neon hover:border-neon hover:bg-neon/15 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          >
            <Search size={17} />
          </Button>

          {/* Mobile Menu Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:bg-neon/10 hover:text-neon"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="flex flex-col gap-4 border-b border-neon/20 bg-[#050b18]/98 px-6 py-6 backdrop-blur-2xl lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between border-b border-white/5 py-2.5 font-mono text-base font-semibold tracking-wider transition-colors",
                activeSection === link.id ? "text-neon" : "text-white hover:text-neon"
              )}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} className="text-neon" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
