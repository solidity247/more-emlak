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
        {/* Warm gradient overlay from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20 md:via-background/80 md:to-transparent" />
        {/* Bottom fade for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 md:py-32 lg:py-36">
        <div className="flex max-w-xl flex-col gap-5">
          {/* Warm welcome badge */}
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-8 rounded-full bg-warm" />
            <span className="text-sm font-semibold tracking-wider text-warm uppercase">
              Mersin, Turkey
            </span>
          </div>

          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            MORE EMLAK GROUP 777
          </h1>

          <p className="text-xl font-semibold text-muted-foreground md:text-2xl">
            {t("hero.subtitle")}
          </p>

          <p className="max-w-md leading-relaxed text-muted-foreground">
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
              className="border-primary bg-background/60 text-primary backdrop-blur-sm hover:bg-primary/10"
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
          <div className="mt-2 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-foreground">6+</span>
              <span className="text-xs text-muted-foreground">{t("whyus.years")}</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-foreground">200+</span>
              <span className="text-xs text-muted-foreground">{t("whyus.objects")}</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-warm">30%</span>
              <span className="text-xs text-muted-foreground">{t("city.invest")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
