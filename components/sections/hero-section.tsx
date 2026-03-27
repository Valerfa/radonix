"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, CheckCircle } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "@/hooks/use-language"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen overflow-hidden rounded-b-2xl">
      <Image
        src="/image/photo3-2.png"
        alt="Radonix robot"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0" />

      <div className="relative z-10 flex min-h-screen items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-6xl px-4 text-left md:px-8 lg:px-12"
        >
          <Badge variant="secondary" className="mb-6">
            {t.heroBadge}
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">
            {t.heroTitle}{" "}
            <span className="text-primary">{t.heroTitleAccent}</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base text-black/70 sm:mt-6 md:text-xl">
            {t.heroSubtitle}
          </p>

          <ul className="mt-6 flex max-w-md flex-col gap-2 sm:mt-8 sm:gap-3">
            {t.heroBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-sm text-black/70 md:text-base"
              >
                <CheckCircle className="size-5 shrink-0 text-primary" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3 overflow-x-auto sm:mt-10 sm:gap-4">
            <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-42">
              <Image src="/image/photo1.png" alt="Radonix photo 1" fill className="object-cover" />
            </div>
            <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-42">
              <Image src="/image/photo2.png" alt="Radonix photo 2" fill className="object-cover" />
            </div>
            <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-42">
              <Image src="/image/photo3.png" alt="Radonix photo 3" fill className="object-cover" />
            </div>
          </div>

        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="size-7 text-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
