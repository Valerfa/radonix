"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { LogoSechenovAITM } from "@/components/shared/logo-sechenov-ai-tm";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between bg-background">
      <AuroraBackground className="flex-1 flex items-center justify-center rounded-b-2xl relative">
        <div className="z-10 text-center">
         
          <p className={cn("text-black/70 text-lg md:text-5xl lg:text-7xl xl:text-9xl mt-4 w-full max-w-[600px] mx-auto")}>
            Radonix !!!
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-black/30" />
        </div>
      </AuroraBackground>
    </section>
  );
}
