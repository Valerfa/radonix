"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function EconomicsSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary">{t.economicsBadge}</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.economicsTitle}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.economicsSubtitle}
          </p>
        </div>

        <div className="mt-14 space-y-4">
          <div className="hidden grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 pb-2 md:grid">
            <span className="text-sm font-medium text-muted-foreground">
              {t.economicsTraditional}
            </span>
            <div className="w-8" />
            <span className="text-sm font-medium text-primary">
              {t.economicsWith}
            </span>
          </div>

          {t.comparisons.map((item) => (
            <div
              key={item.label}
              className="grid items-center gap-4 rounded-xl border border-border/50 bg-card p-5 md:grid-cols-[1fr_auto_1fr]"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground md:hidden">
                  {t.economicsBefore}
                </span>
                <p className="text-sm text-muted-foreground">{item.before}</p>
              </div>

              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-medium text-foreground">
                  {item.label}
                </span>
                <ArrowRight className="size-4 text-primary" />
              </div>

              <div>
                <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-primary md:hidden">
                  {t.economicsAfter}
                </span>
                <p className="text-sm font-medium text-foreground">
                  {item.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
