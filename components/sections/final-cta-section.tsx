"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function FinalCTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center md:px-12 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              {t.ctaSubtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 text-base font-semibold"
              >
                {t.ctaButton}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 px-8 text-base text-primary-foreground hover:bg-primary-foreground/10"
              >
                {t.ctaButtonSecondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
