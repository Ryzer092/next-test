// src/app/page.tsx
import { SiteHeader } from "@/components/site-header";
import { SectionHero } from "@/components/section-hero";
import { SectionFeatures } from "@/components/section-features";
import { SectionCommunity } from "@/components/section-community";
import { SectionFAQ } from "@/components/section-faq";
import { SectionCTA } from "@/components/section-cta";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <SectionHero />
      <SectionFeatures />
      <SectionCommunity />
      <SectionFAQ />
      <SectionCTA />
    </main>
  );
}


