"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  eyebrow?: string;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

/** Cyber-styled shadcn Dialog used for service/project/team/article detail views. */
export default function DetailDialog({
  open,
  onOpenChange,
  title,
  eyebrow,
  icon,
  className,
  children,
}: DetailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "corners gap-0 overflow-hidden rounded-2xl border border-neon/25 bg-[#08142b] p-0 shadow-[0_0_50px_rgba(0,240,255,0.2)] ring-0 sm:max-w-[620px]",
          className
        )}
      >
        <DialogHeader className="gap-1 border-b border-neon/20 bg-ink/90 px-6 py-5 pr-14">
          {eyebrow && (
            <span className="font-mono text-[0.72rem] tracking-[0.15em] text-neon-light uppercase">
              {"// "}
              {eyebrow}
            </span>
          )}
          <DialogTitle className="flex items-center gap-2.5 text-lg leading-snug font-extrabold text-white sm:text-xl">
            {icon}
            {title}
          </DialogTitle>
          <DialogDescription className="sr-only">{title}</DialogDescription>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-y-auto p-6">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
