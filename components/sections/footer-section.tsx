"use client"

import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/hooks/use-language"

export function FooterSection() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="text-center">
          <h3 className="text-lg font-bold text-card-foreground">Radonix</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-card-foreground/60">
            {t.footerDescription}
          </p>
        </div>

        <Separator className="my-8 bg-white/20" />

        <p className="text-center text-sm text-card-foreground/60">
          {t.footerNote}
        </p>
      </div>
    </footer>
  )
}
