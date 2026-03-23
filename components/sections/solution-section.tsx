"use client"

import { Badge } from "@/components/ui/badge"
import { Bot, Navigation, Thermometer, Wifi } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const icons = [Bot, Navigation, Thermometer, Wifi]

export function SolutionSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge variant="secondary">{t.solutionBadge}</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.solutionTitle}
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              {t.solutionSubtitle}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {t.solutionFeatures.map((feature, index) => {
              const Icon = icons[index]
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border/50 bg-card p-5 transition-colors hover:border-primary/20"
                >
                  <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
