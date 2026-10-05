import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

export default function SectionHeader({ icon: Icon, badge, title, highlight, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <Badge
        variant="outline"
        className="mb-3.5 h-7 border-neon/30 bg-neon/10 px-3.5 text-[0.72rem] font-semibold tracking-[0.15em] text-neon uppercase shadow-[0_0_10px_rgba(0,240,255,0.15)]"
      >
        <Icon />
        {badge}
      </Badge>
      <h2 className="title-accent mb-4 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-wide">
        {title} <span className="text-glow text-neon">{highlight}</span>
      </h2>
      <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>
    </div>
  );
}
