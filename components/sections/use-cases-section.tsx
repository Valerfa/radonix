"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HardHat, Landmark, Factory, Building2 } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const icons = [HardHat, Landmark, Factory, Building2]

export function UseCasesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary">{t.useCasesBadge}</Badge>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {t.useCasesTitle}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.useCasesSubtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.useCases.map((useCase, index) => {
            const Icon = icons[index]
            return (
              <Card
                key={useCase.title}
                className="border-none bg-card text-center"
              >
                <CardContent className="flex flex-col items-center pt-2">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-card-foreground/60">
                    {useCase.description}
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
