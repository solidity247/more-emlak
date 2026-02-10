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
        {/* Subtle dark scrim so text is readable but people stay visible */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Bottom fade for smooth transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-4 py-16 md:py-32 lg:py-36">
        <div className="flex max-w-xl flex-col gap-4 rounded-2xl bg-black/30 p-6 backdrop-blur-sm md:gap-5 md:p-8">
          {/* Warm welcome badge */}
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-8 rounded-full bg-warm" />
            <span className="text-sm font-semibold tracking-wider text-warm uppercase">
              Mersin, Turkey
            </span>
          </div>

          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            MORE EMLAK GROUP
          </h1>

          <p className="text-lg font-semibold text-white/90 md:text-2xl">
            {t("hero.subtitle")}
          </p>

          <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-base">
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
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
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
              <span className="text-xl font-extrabold text-white md:text-2xl">6+</span>
              <span className="text-xs text-white/60">{t("whyus.years")}</span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white md:text-2xl">200+</span>
              <span className="text-xs text-white/60">{t("whyus.objects")}</span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-warm md:text-2xl">30%</span>
              <span className="text-xs text-white/60">{t("city.invest")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
