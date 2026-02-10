"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="bg-card">
      <div className="flex flex-col md:flex-row">
        {/* Left: Text content on solid background */}
        <div className="flex flex-col justify-center bg-card px-6 py-12 md:w-1/2 md:px-10 md:py-20 lg:px-16 lg:py-28">
          <div className="mx-auto flex max-w-lg flex-col gap-4 md:gap-5">
            {/* Warm welcome badge */}
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-8 rounded-full bg-warm" />
              <span className="text-sm font-semibold tracking-wider text-warm uppercase">
                Mersin, Turkey
              </span>
            </div>

            <h1 className="text-balance text-3xl font-extrabold tracking-tight text-card-foreground md:text-4xl lg:text-5xl">
              MORE EMLAK GROUP
            </h1>

            <p className="text-lg font-semibold text-muted-foreground md:text-xl">
              {t("hero.subtitle")}
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
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
                className="border-primary text-primary hover:bg-primary/10"
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
                <span className="text-xl font-extrabold text-card-foreground md:text-2xl">6+</span>
                <span className="text-xs text-muted-foreground">{t("whyus.years")}</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-card-foreground md:text-2xl">200+</span>
                <span className="text-xs text-muted-foreground">{t("whyus.objects")}</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-warm md:text-2xl">30%</span>
                <span className="text-xs text-muted-foreground">{t("city.invest")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Team photo, fully visible, no overlay */}
        <div className="relative h-64 md:h-auto md:w-1/2">
          <img
            src="/images/team-welcome.webp"
            alt="More Emlak Group team welcoming you"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
