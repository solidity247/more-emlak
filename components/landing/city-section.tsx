"use client"

import { useLocale } from "@/lib/locale-context"
import { Waves, Sun, TrendingUp } from "lucide-react"

export function CitySection() {
  const { t } = useLocale()

  return (
    <section className="relative bg-card py-16 md:py-24">
      {/* Warm decorative corner accent */}
      <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-warm/5" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-1 w-8 rounded-full bg-warm" />
              <div className="h-1 w-4 rounded-full bg-warm/50" />
            </div>
            <h2 className="mb-6 text-3xl font-extrabold text-foreground md:text-4xl">
              {t("city.title")}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {t("city.description")}
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2 rounded-xl bg-accent p-4 text-center">
                <TrendingUp className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">{t("city.invest")}</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl bg-accent p-4 text-center">
                <Waves className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">{t("city.sea")}</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl bg-accent p-4 text-center">
                <Sun className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">{t("city.climate")}</span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/mersin-cityscape.jpg"
              alt="Mersin, Turkey"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
