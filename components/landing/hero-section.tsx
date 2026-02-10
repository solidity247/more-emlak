"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden bg-card">
      {/* Full-width team photo background */}
      <div className="absolute inset-0">
        <img
          src="/images/team-welcome.webp"
          alt="More Emlak Group team welcoming you"
          className="h-full w-full object-cover object-top"
        />
        {/* Mobile: dark scrim so text is readable but people stay visible */}
        <div className="absolute inset-0 bg-black/50 md:hidden" />
        {/* Desktop: left-to-right gradient overlay for text readability */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-background via-background/80 to-transparent md:block" />
        {/* Bottom fade for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-4 py-16 md:py-32 lg:py-36">
        <div className="flex max-w-xl flex-col gap-4 md:gap-5">
          {/* Warm welcome badge */}
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-8 rounded-full bg-warm" />
            <span className="text-sm font-semibold tracking-wider text-white uppercase md:text-warm">
              Mersin, Turkey
            </span>
          </div>

          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-white md:text-5xl md:text-foreground lg:text-6xl">
            MORE EMLAK GROUP
          </h1>

          <p className="text-lg font-semibold text-white/80 md:text-2xl md:text-muted-foreground">
            {t("hero.subtitle")}
          </p>

          <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-base md:text-muted-foreground">
            {t("city.description").slice(0, 120)}...
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/catalog">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 md:border-primary md:bg-background/60 md:text-primary md:hover:bg-primary/10"
            >
              <a
                href="https://wa.me/905010031633"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("founder.cta")}
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-2 flex items-center gap-4 md:gap-6">
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white md:text-2xl md:text-foreground">6+</span>
              <span className="text-xs text-white/60 md:text-muted-foreground">{t("whyus.years")}</span>
            </div>
            <div className="h-8 w-px bg-white/20 md:bg-border" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white md:text-2xl md:text-foreground">200+</span>
              <span className="text-xs text-white/60 md:text-muted-foreground">{t("whyus.objects")}</span>
            </div>
            <div className="h-8 w-px bg-white/20 md:bg-border" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-warm md:text-2xl">30%</span>
              <span className="text-xs text-white/60 md:text-muted-foreground">{t("city.invest")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
