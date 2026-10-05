"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Lock,
  User,
  AlertCircle,
  Eye,
  EyeOff,
  Server,
  Activity,
  Key,
  ExternalLink,
  Shield,
  LogOut,
  RefreshCw,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientPortalModal({ isOpen, onClose }: ClientPortalModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [status, setStatus] = useState<"idle" | "authenticating" | "authenticated" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage("Please enter both username/email and access token/password");
      setStatus("error");
      return;
    }

    setErrorMessage("");
    setStatus("authenticating");

    setTimeout(() => {
      setStatus("authenticated");
    }, 1200);
  };

  const handleFillDemo = () => {
    setUsername("enterprise.partner@metanoia.dev");
    setPassword("meta_live_access_2026_tok");
    setErrorMessage("");
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText("metanoia_live_key_99fa71b802e38c4d1109a");
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        className={`corners bg-ink-panel/95 border-neon/30 text-white backdrop-blur-xl ${
          status === "authenticated" ? "max-w-3xl" : "max-w-lg"
        } p-0 overflow-hidden`}
      >
        {/* Header */}
        <DialogHeader className="p-6 border-b border-neon/20 bg-ink-surface/80 flex flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-neon/15 border border-neon/30 flex items-center justify-center">
              <Shield className="size-4 text-neon" />
            </div>
            <div>
              <DialogTitle className="font-mono text-sm sm:text-base font-black tracking-wider text-white">
                CLIENT PORTAL LOGIN
              </DialogTitle>
              <span className="font-mono text-xs text-neon-light">
                // SECURE_GATEWAY_V2.6
              </span>
            </div>
          </div>
        </DialogHeader>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {status !== "authenticated" ? (
            <div className="space-y-6">
              {/* Graphic Banner */}
              <div className="relative h-28 rounded-xl overflow-hidden border border-neon/20">
                <Image
                  src="/images/portal_bg.jpg"
                  alt="Client Portal Network"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/75 flex flex-col items-center justify-center p-3 text-center">
                  <span className="font-mono text-xs font-bold text-neon-light tracking-wider">
                    ENTERPRISE TELEMETRY ACCESS
                  </span>
                  <span className="text-[11px] text-slate-300 mt-1">
                    Monitor real-time microservices, staging environments, and deployments
                  </span>
                </div>
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs">
                  <AlertCircle className="size-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-mono text-neon-light uppercase">
                    Username or Corporate Email
                  </Label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="alex.chen@enterprise.com"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="pl-10 bg-ink/90 border-neon/30 text-white placeholder:text-slate-500 focus-visible:border-neon focus-visible:ring-neon/30"
                    />
                    <User className="size-4 text-neon absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <Label className="text-xs font-mono text-neon-light uppercase">
                      Password / Terminal Token
                    </Label>
                    <button
                      type="button"
                      onClick={() => alert("Password reset token dispatched to verified enterprise admin.")}
                      className="text-[11px] text-neon-light hover:underline font-mono"
                    >
                      Forgot token?
                    </button>
                  </div>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 bg-ink/90 border-neon/30 text-white placeholder:text-slate-500 focus-visible:border-neon focus-visible:ring-neon/30"
                    />
                    <Lock className="size-4 text-neon absolute left-3 top-1/2 -translate-y-1/2" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-slate-400 hover:text-white absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="accent-neon rounded"
                    />
                    Remember session
                  </label>

                  <button
                    type="button"
                    onClick={handleFillDemo}
                    className="font-mono text-[11px] text-neon-light bg-neon/10 border border-neon/30 rounded px-2.5 py-1 hover:bg-neon/20 transition-colors"
                  >
                    Quick Demo Credentials
                  </button>
                </div>

                <Button
                  type="submit"
                  disabled={status === "authenticating"}
                  variant="neon"
                  size="lg"
                  className="w-full mt-2"
                >
                  {status === "authenticating" ? (
                    <span className="flex items-center gap-2">
                      <RefreshCw className="size-4 animate-spin" />
                      AUTHENTICATING HANDSHAKE...
                    </span>
                  ) : (
                    <span>LOGIN TO SECURE PORTAL</span>
                  )}
                </Button>
              </form>
            </div>
          ) : (
            /* Authenticated Dashboard */
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neon/20">
                <div>
                  <span className="font-mono text-xs text-neon-light">
                    AUTHENTICATED CLIENT WORKSPACE
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Global Cloud Architecture Cluster
                  </h3>
                </div>

                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setStatus("idle")}
                  className="font-mono text-xs"
                >
                  <LogOut className="size-3.5 mr-1" />
                  LOGOUT
                </Button>
              </div>

              {/* Status grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-ink-card border border-neon/20">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Server className="size-4 text-neon" />
                    <span className="text-xs text-slate-400">Cluster Health</span>
                  </div>
                  <div className="font-mono text-lg font-bold text-emerald-400">
                    OPTIMAL (100%)
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">16/16 Node Workers Responsive</div>
                </div>

                <div className="p-4 rounded-xl bg-ink-card border border-neon/20">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Activity className="size-4 text-neon" />
                    <span className="text-xs text-slate-400">Current Sprint</span>
                  </div>
                  <div className="font-mono text-lg font-bold text-neon-light">
                    SPRINT 24 (94%)
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Next Deploy: Today at 18:00 UTC</div>
                </div>
              </div>

              {/* Staging URL */}
              <div className="p-4 rounded-xl bg-ink-card border border-neon/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                    Isolated Staging Environment
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-neon-light mt-0.5">
                    https://cluster-preview.metanoia-team.dev
                  </div>
                </div>
                <Button
                  variant="neonOutline"
                  size="sm"
                  asChild
                  className="font-mono text-xs"
                >
                  <a href="#services" onClick={handleClose}>
                    <span>Launch Preview</span>
                    <ExternalLink className="size-3.5 ml-1" />
                  </a>
                </Button>
              </div>

              {/* API Token Box */}
              <div className="p-4 rounded-xl bg-ink-card border border-neon/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Key className="size-5 text-neon shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Active Telemetry API Token</div>
                    <div className="font-mono text-xs text-white">
                      metanoia_live_key_99fa71b802e38c4d...
                    </div>
                  </div>
                </div>
                <Button
                  variant={copiedKey ? "secondary" : "neonGhost"}
                  size="sm"
                  onClick={handleCopyKey}
                  className="font-mono text-xs shrink-0"
                >
                  {copiedKey ? "COPIED!" : "COPY TOKEN"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
