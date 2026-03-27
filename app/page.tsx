"use client"

import { SiteHeader } from "@/components/shared/site-header"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { AdvantagesSection } from "@/components/sections/advantages-section"
import { UseCasesSection } from "@/components/sections/use-cases-section"
import { EconomicsSection } from "@/components/sections/economics-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <SolutionSection />
        <HowItWorksSection />
        <UseCasesSection />
      </main>
      <FooterSection />
    </>
  )
}
