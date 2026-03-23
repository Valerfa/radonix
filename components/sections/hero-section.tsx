"use client"

import { AuroraBackground } from "@/components/ui/aurora-background"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, CheckCircle } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "@/hooks/use-language"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen">
      <AuroraBackground className="flex min-h-screen items-center justify-center rounded-b-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8"
        >
          <Badge variant="secondary" className="mb-6">
            {t.heroBadge}
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t.heroTitle}{" "}
            <span className="text-primary">{t.heroTitleAccent}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t.heroSubtitle}
          </p>

          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left">
            {t.heroBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-sm text-muted-foreground md:text-base"
              >
                <CheckCircle className="size-5 shrink-0 text-primary" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="px-6 text-base">
              {t.heroCta}
            </Button>
            <Button variant="outline" size="lg" className="px-6 text-base">
              {t.heroCtaSecondary}
            </Button>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <ChevronDown className="size-7 text-muted-foreground/50" />
        </div>
      </AuroraBackground>
    </section>
  )
}
