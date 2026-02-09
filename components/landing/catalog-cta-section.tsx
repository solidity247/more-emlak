"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building } from "lucide-react"

export function CatalogCtaSection() {
  const { t } = useLocale()

  return (
    <section className="relative overflow-hidden bg-primary py-16">
      {/* Warm diagonal stripe accent */}
      <div className="absolute -right-20 -top-10 h-40 w-80 rotate-12 bg-warm/15 blur-2xl" />
      <div className="absolute -bottom-10 -left-20 h-40 w-80 -rotate-12 bg-warm/10 blur-2xl" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center">
        <Building className="h-12 w-12 text-primary-foreground/80" />
        <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
          {t("catalog.cta")}
        </h2>
        <p className="text-lg text-primary-foreground/80">{t("catalog.subtitle")}</p>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-2 border-primary-foreground bg-transparent px-10 py-6 text-lg font-bold text-primary-foreground hover:bg-primary-foreground/10"
        >
          <Link href="/catalog">
            {t("hero.cta")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
