// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Localhost-style Landing",
  description: "Built with Next.js + shadcn/ui + Tailwind",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-zinc-100`}>{children}</body>
    </html>
  );
}


