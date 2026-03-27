"use client"

import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplets, Gauge, Radiation } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const icons = [Thermometer, Droplets, Gauge, Radiation]

export function SolutionSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <Badge variant="secondary">{t.solutionBadge}</Badge>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {t.solutionTitle}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.solutionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {t.solutionFeatures.map((feature, index) => {
            const Icon = icons[index]
            return (
              <div
                key={feature.title}
                className="rounded-xl bg-card p-5"
              >
                <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-card-foreground/60">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-foreground">
          {t.solutionSlam}
        </p>
      </div>
    </section>
  )
}
