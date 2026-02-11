"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const { t } = useLocale();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full-width parallax hero image */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div
          className="absolute inset-0 w-full"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src="/images/team-welcome.webp"
            alt="More Emlak Group team welcoming you"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text overlay - centered and vertically centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <div className="mb-4">
            <span className="inline-block h-1.5 w-8 rounded-full bg-warm" />
          </div>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            MORE EMLAK GROUP
          </h1>
          <p className="mt-4 text-lg font-semibold text-white/90 md:text-2xl">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Branding section below parallax */}
      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row md:gap-12">
            {/* Left: Text content */}
            <div className="flex flex-col justify-center md:w-1/2">
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-12 rounded-full bg-warm" />
                  <span className="text-sm font-semibold tracking-wider text-warm uppercase">
                    Mersin, Turkey
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-card-foreground md:text-4xl lg:text-5xl">
                  MORE EMLAK GROUP
                </h2>

                <p className="text-lg font-semibold text-muted-foreground md:text-xl">
                  {t("hero.subtitle")}
                </p>

                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t("city.description")}
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
                <div className="mt-4 flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-extrabold text-card-foreground">6+</span>
                    <span className="text-xs text-muted-foreground">{t("whyus.years")}</span>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-extrabold text-card-foreground">200+</span>
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

            {/* Right: Secondary image or accent */}
            <div className="relative mt-8 h-64 md:mt-0 md:h-auto md:w-1/2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-warm/10 rounded-xl" />
              <div className="h-full w-full rounded-xl border border-border/50" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
