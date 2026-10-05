"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FilterTabsProps {
  tabs: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}

/** Pill-style filter built on shadcn Tabs. */
export default function FilterTabs({ tabs, value, onChange }: FilterTabsProps) {
  return (
    <Tabs value={value} onValueChange={onChange} className="mb-10 items-center">
      <TabsList className="h-auto w-full flex-wrap justify-center gap-2.5 bg-transparent p-0">
        {tabs.map((t) => (
          <TabsTrigger
            key={t.id}
            value={t.id}
            className="h-auto flex-none rounded-full border-neon/20 bg-ink-2/70 px-4 py-2 font-mono text-xs font-bold text-muted-foreground transition-all hover:border-neon/50 hover:text-white data-active:border-neon data-active:bg-neon data-active:text-ink data-active:shadow-[0_0_18px_rgba(0,240,255,0.4)] dark:data-active:border-neon dark:data-active:bg-neon dark:data-active:text-ink"
          >
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
