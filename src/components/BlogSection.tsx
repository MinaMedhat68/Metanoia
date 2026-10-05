"use client";

import React, { useState } from "react";
import { BookOpen, Clock, ArrowRight, User } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import DetailDialog from "@/components/DetailDialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string[];
}

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: "ai-in-saas",
      title: "The Future of AI in SaaS: Beyond Thin Wrappers to Autonomous Reasoning",
      category: "ARTIFICIAL INTELLIGENCE",
      readTime: "6 min read",
      date: "OCTOBER 2026",
      author: "Marcus Vance, PhD",
      authorRole: "Head of Distributed AI",
      excerpt:
        "Why simple OpenAI API wrappers are becoming obsolete, and how multi-agent self-correcting graphs are rewriting enterprise automation from the ground up.",
      content: [
        "The era of simple prompt wrappers is decisively over. Early SaaS products that merely wrapped public LLM API calls provided temporary utility, but had zero durable moat and suffered from chronic hallucinations and security vulnerabilities.",
        "At Metanoia, our enterprise deployments leverage dynamic graph orchestration with localized fine-tuned models (e.g., Llama and DeepSeek running inside isolated VPCs). By coupling vector databases with deterministic symbolic verification, we eliminate speculative hallucination.",
        "Crucially, the next frontier is agentic self-correction: when an AI pipeline formulates a code modification or business query, it must execute against sandboxed runtime tests before committing changes to production.",
      ],
    },
    {
      id: "code-scalability",
      title: "Optimizing Code for Scalability: Lessons from 10M Concurrent WebSockets",
      category: "HIGH-THROUGHPUT SYSTEMS",
      readTime: "9 min read",
      date: "SEPTEMBER 2026",
      author: "Alex Rivera",
      authorRole: "Chief Technology Architect",
      excerpt:
        "Handling massive concurrent WebSocket connections without memory thrashing, epoll bottlenecks, or cascading failover cascades.",
      content: [
        "Scaling WebSocket connections past 1,000,000 active clients per node requires rethinking traditional OS network stacks and application memory models.",
        "In our benchmarks, standard thread-per-connection architectures buckle under Linux file descriptor and memory overhead. By switching to epoll / kqueue with zero-copy ring buffers written in Rust and Go, we slashed per-socket RAM footprint from 45KB down to 1.8KB.",
        "Furthermore, distributing connection states via partitioned Redis clusters rather than global locks allows horizontal scaling across multiple geographic regions with zero connection drops during rolling deployments.",
      ],
    },
    {
      id: "cloud-multi-region",
      title: "Architecting Multi-Region Cloud for Zero Downtime and Sub-Second RTO",
      category: "CLOUD ARCHITECTURE",
      readTime: "8 min read",
      date: "AUGUST 2026",
      author: "Elena Rostova",
      authorRole: "Principal Cloud Engineer",
      excerpt:
        "How we construct multi-region Kubernetes clusters that survive catastrophic provider datacenter blackouts without dropping a single write.",
      content: [
        "A single cloud provider region is never truly 100% available. Power grid interruptions, fiber cuts, and control plane misconfigurations happen every year.",
        "Our active-active multi-region blueprint utilizes BGP Anycast routing coupled with Raft-replicated data layers. When US-East experiences degraded network ingress, traffic automatically re-routes to EU-West and US-West within 350 milliseconds.",
        "Data consistency is maintained through conflict-free replicated data types (CRDTs) and distributed transactions, ensuring that eventual consistency reconciles seamlessly without human intervention.",
      ],
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={BookOpen}
          badge="ENGINEERING PAPERS & INSIGHTS"
          title="BLOG /"
          highlight="INSIGHTS"
          description="Deep-dive technical articles written by our principal architects on high-scale systems, generative AI, and multi-cloud resilience."
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="corners border-neon/20 bg-ink-panel/85 hover:border-neon hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all duration-300 cursor-pointer group flex flex-col justify-between p-7"
            >
              <CardContent className="p-0 flex flex-col justify-between h-full">
                <div>
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="font-mono text-[10px] tracking-wider text-neon border-neon/30 bg-neon/10 uppercase"
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Clock className="size-3.5 text-neon" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white group-hover:text-neon transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Author & Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{article.author}</div>
                    <div className="text-[11px] text-slate-400">{article.authorRole}</div>
                  </div>

                  <span className="text-xs font-bold font-mono text-neon-light flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    READ PAPER
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Article Detail Dialog */}
      <DetailDialog
        open={Boolean(selectedArticle)}
        onOpenChange={(open) => !open && setSelectedArticle(null)}
        eyebrow="TECHNICAL ARCHITECTURE WHITE PAPER"
        title={selectedArticle?.title || ""}
      >
        {selectedArticle && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="font-mono text-xs text-neon border-neon/40 bg-neon/10 uppercase"
              >
                {selectedArticle.category}
              </Badge>
              <span className="text-xs text-slate-400 font-mono">
                {selectedArticle.date} • {selectedArticle.readTime}
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-ink-card border border-neon/20">
              <div className="w-10 h-10 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center text-neon shrink-0">
                <User className="size-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">By {selectedArticle.author}</div>
                <div className="text-xs text-slate-400">
                  {selectedArticle.authorRole} • Metanoia Softwarehouse
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm md:text-base text-slate-300 leading-relaxed max-h-[50vh] overflow-y-auto pr-2">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2">
              <Button
                variant="neon"
                size="lg"
                className="w-full"
                asChild
              >
                <a
                  href="#contact"
                  onClick={() => setSelectedArticle(null)}
                >
                  DISCUSS THIS ARCHITECTURE WITH OUR TEAM
                </a>
              </Button>
            </div>
          </div>
        )}
      </DetailDialog>
    </section>
  );
}
