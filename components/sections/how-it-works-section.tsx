"use client"

import { Badge } from "@/components/ui/badge"
import { Route, BarChart3, Send } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const icons = [Route, BarChart3, Send]
const numbers = ["01", "02", "03"]

export function HowItWorksSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="rounded-2xl bg-card p-5 sm:p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary">{t.howBadge}</Badge>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl md:text-4xl">
              {t.howTitle}
            </h2>
            <p className="mt-4 text-card-foreground/60">
              {t.howSubtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {t.howSteps.map((step, index) => {
              const Icon = icons[index]
              return (
                <div key={numbers[index]} className="relative text-center">
                  {index < t.howSteps.length - 1 && (
                    <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-white/20 md:block" />
                  )}
                  <div className="relative mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="size-7 text-primary" />
                    <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {numbers[index]}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-card-foreground/60">
                    {step.description}
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
