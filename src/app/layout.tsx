import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050a15",
};

export const metadata: Metadata = {
  title: "Metanoia | Driving Digital Transformation",
  description:
    "Enterprise software engineering, cloud solutions, distributed microservices, and AI architecture. Innovation through code.",
  keywords: ["Metanoia", "Softwarehouse", "Digital Transformation", "Cloud Solutions", "Enterprise AI", "Kubernetes", "Next.js"],
  authors: [{ name: "Metanoia Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark font-sans", jakarta.variable, jetbrains.variable)}>
      <body>{children}</body>
    </html>
  );
}
