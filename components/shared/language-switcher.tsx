"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/translations"

const locales: { value: Locale; label: string }[] = [
  { value: "ru", label: "RU" },
  { value: "en", label: "EN" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border/50 bg-muted/50 p-0.5">
      {locales.map((item) => (
        <Button
          key={item.value}
          variant="ghost"
          size="xs"
          onClick={() => setLocale(item.value)}
          className={cn(
            "min-w-8 px-2 text-xs font-medium transition-all",
            locale === item.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {item.label}
        </Button>
      ))}
    </div>
  )
}
