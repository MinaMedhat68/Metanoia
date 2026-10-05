"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Shield,
  MapPin,
  Sparkles,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ConnectSection() {
  const [projectType, setProjectType] = useState("Web Application & Full-Stack SaaS");
  const [timeline, setTimeline] = useState("1-3 Months");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("$25,000 - $50,000");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="cyber-grid absolute inset-0 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          icon={Mail}
          badge="DISPATCH PROJECT BRIEF"
          title="START YOUR"
          highlight="PROJECT"
          description="Ready to build your next web application, website, dashboard, or AI agent? Contact our lead engineers directly for a rapid architecture review and project estimate."
        />

        {/* Contact Container Card */}
        <Card className="corners max-w-5xl mx-auto border-neon/30 bg-ink-panel/90 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_35px_rgba(0,240,255,0.15)] p-6 sm:p-10">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Form */}
              <div className="lg:col-span-7">
                {submitted ? (
                  <div className="p-8 sm:p-12 text-center bg-ink-card/80 rounded-2xl border border-neon/30 animate-in fade-in duration-300">
                    <div className="size-16 rounded-full bg-neon/15 border-2 border-neon flex items-center justify-center mx-auto mb-5 shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                      <CheckCircle2 className="size-9 text-neon" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      BRIEF RECEIVED
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                      Your project brief has been routed directly to our Lead Engineering Team. We will review your requirements and reach out within 4 business hours.
                    </p>
                    <Button
                      variant="neonOutline"
                      onClick={() => {
                        setSubmitted(false);
                        setMessage("");
                      }}
                    >
                      SUBMIT ANOTHER BRIEF
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Project Type & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-mono tracking-wider text-neon-light uppercase">
                          Project Type
                        </Label>
                        <select
                          className="w-full h-10 px-3 rounded-lg bg-ink/90 border border-neon/30 text-xs sm:text-sm text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon font-sans"
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                        >
                          <option value="Web Application & Full-Stack SaaS">Web Application & Full-Stack SaaS</option>
                          <option value="High-Converting Website & Landing Page">High-Converting Website & Landing Page</option>
                          <option value="Interactive Dashboard & Admin Portal">Interactive Dashboard & Admin Portal</option>
                          <option value="Autonomous AI Agent & Workflows">Autonomous AI Agent & Workflows</option>
                          <option value="Intelligent AI Chatbot & Assistant">Intelligent AI Chatbot & Assistant</option>
                          <option value="Dedicated Full-Stack Team">Dedicated Full-Stack Team</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-xs font-mono tracking-wider text-neon-light uppercase">
                          Timeline
                        </Label>
                        <select
                          className="w-full h-10 px-3 rounded-lg bg-ink/90 border border-neon/30 text-xs sm:text-sm text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon font-sans"
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                        >
                          <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                          <option value="1-3 Months">1-3 Months</option>
                          <option value="3-6 Months">3-6 Months</option>
                          <option value="Ongoing Development Retainer">Ongoing Development Retainer</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 2: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-mono tracking-wider text-neon-light uppercase">
                          Your Name / Company
                        </Label>
                        <Input
                          required
                          placeholder="e.g. Alex Morgan, Founder / CTO"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-ink/90 border-neon/30 text-white placeholder:text-slate-500 focus-visible:border-neon focus-visible:ring-neon/30"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-xs font-mono tracking-wider text-neon-light uppercase">
                          Email Address
                        </Label>
                        <Input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-ink/90 border-neon/30 text-white placeholder:text-slate-500 focus-visible:border-neon focus-visible:ring-neon/30"
                        />
                      </div>
                    </div>

                    {/* Row 3: Budget Range */}
                    <div className="space-y-1.5">
                      <Label className="text-xs font-mono tracking-wider text-neon-light uppercase">
                        Estimated Budget Range
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["$5k - $15k", "$15k - $30k", "$30k - $60k", "$60k+"].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(b)}
                            className={`p-2.5 rounded-lg text-xs font-mono transition-all border ${
                              budget === b
                                ? "bg-neon/20 border-neon text-neon-light shadow-[0_0_12px_rgba(0,240,255,0.3)] font-bold"
                                : "bg-ink/80 border-neon/15 text-slate-400 hover:border-neon/40 hover:text-white"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div className="space-y-1.5">
                      <Label className="text-xs font-mono tracking-wider text-neon-light uppercase">
                        Project Details & Vision
                      </Label>
                      <Textarea
                        required
                        rows={4}
                        placeholder="Tell us about the application, website, dashboard, or AI agent/chatbot you want to build..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-ink/90 border-neon/30 text-white placeholder:text-slate-500 focus-visible:border-neon focus-visible:ring-neon/30 resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={submitting}
                      variant="neon"
                      size="lg"
                      className="w-full py-6 text-sm tracking-wider font-bold"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <Sparkles className="size-4 animate-spin text-ink" />
                          SENDING PROJECT BRIEF...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="size-4" />
                          SEND PROJECT BRIEF
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Right Column: Visual Artwork & Contact Info */}
              <div className="lg:col-span-5 space-y-5">
                <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-neon/30 shadow-2xl">
                  <Image
                    src="/images/hero_arrow.jpg"
                    alt="Metanoia Connect Visual"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-xs text-neon-light tracking-wider uppercase">
                      // METANOIA DEVELOPMENT TEAM
                    </div>
                    <div className="text-lg font-bold text-white mt-0.5">
                      Rapid Turnaround & Premium Quality
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-ink-card border border-neon/20 space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="size-5 text-neon shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Full IP & Code Ownership</div>
                      <div className="text-[11px] text-slate-400">
                        You retain 100% of the code, intellectual property, and design assets.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-neon shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Dedicated Development Squad</div>
                      <div className="text-[11px] text-slate-400">
                        Full-stack engineers, UI/UX designers, and AI specialists.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="size-5 text-neon shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">4-Hour Response SLA</div>
                      <div className="text-[11px] text-slate-400">
                        Get direct feedback and scope clarification from our technical leads.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
