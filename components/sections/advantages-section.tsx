"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Minimize2,
  HandMetal,
  TrendingDown,
  ScanEye,
  Radiation,
  Zap,
} from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const icons = [Minimize2, HandMetal, TrendingDown, ScanEye, Radiation, Zap]

export function AdvantagesSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary">{t.advantagesBadge}</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.advantagesTitle}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.advantagesSubtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.advantages.map((advantage, index) => {
            const Icon = icons[index]
            return (
              <Card
                key={advantage.title}
                className="border-border/50 bg-card transition-colors hover:border-primary/20"
              >
                <CardContent className="pt-1">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
