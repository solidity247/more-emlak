"use client"

import { useLocale } from "@/lib/locale-context"
import { Award, Users, Zap, Home, FileCheck, Heart } from "lucide-react"

export function WhyUsSection() {
  const { t } = useLocale()

  const stats = [
    { value: "15", label: t("whyus.years"), icon: Award },
    { value: "1000+", label: t("whyus.clients"), icon: Users },
    { value: "1", label: t("whyus.day"), icon: Zap },
    { value: "200+", label: t("whyus.objects"), icon: Home },
    { value: "", label: t("whyus.license"), desc: t("whyus.license.text"), icon: FileCheck },
    { value: "", label: t("whyus.individual"), desc: t("whyus.individual.text"), icon: Heart },
  ]

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          {t("whyus.title")}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              {stat.value && (
                <span className="text-4xl font-extrabold text-primary">{stat.value}</span>
              )}
              <span className="text-lg font-semibold text-card-foreground">{stat.label}</span>
              {stat.desc && (
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
