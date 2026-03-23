"use client"

import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/hooks/use-language"

export function FooterSection() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <h3 className="text-lg font-bold text-foreground">Radonix</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t.footerDescription}
            </p>
          </div>

          <nav className="flex gap-8">
            {t.footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} {t.footerCopyright}</p>
          <p>
            {t.footerContact}{" "}
            <a
              href="mailto:hello@radonix.io"
              className="text-foreground transition-colors hover:text-primary"
            >
              hello@radonix.io
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
