"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const { t } = useLocale()

  return (
    <section className="relative overflow-hidden bg-card">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(178_55%_40%/0.08),transparent_60%)]" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 md:flex-row md:py-28">
        <div className="relative z-10 flex flex-1 flex-col gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://static.tildacdn.com/tild6437-3362-4437-a137-303535643562/_.png"
              alt="More Emlak Group logo"
              className="h-16 w-auto md:h-20"
            />
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            MORE EMLAK GROUP
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            {t("hero.subtitle")}
          </p>
          <p className="max-w-lg text-muted-foreground leading-relaxed">
            Mersin, Turkey
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/catalog">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
              <a href="https://wa.me/905010031633" target="_blank" rel="noopener noreferrer">
                {t("founder.cta")}
              </a>
            </Button>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/mersin-cityscape.jpg"
              alt="Mersin, Turkey coastline"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-primary p-4 text-primary-foreground shadow-lg">
            <p className="text-2xl font-bold">30%</p>
            <p className="text-xs">{t("city.invest")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
