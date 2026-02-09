"use client"

import { useLocale } from "@/lib/locale-context"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  const { t } = useLocale()

  const services = [t("aboutus.3a"), t("aboutus.3b"), t("aboutus.3c"), t("aboutus.3d")]

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          {t("aboutus.title")}
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3 rounded-lg bg-background p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-foreground">{t("aboutus.1")}</p>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-background p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-foreground">{t("aboutus.2")}</p>
          </div>
          <div className="rounded-lg bg-background p-4">
            <div className="mb-3 flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-foreground">{t("aboutus.3")}</p>
            </div>
            <ul className="ml-8 flex flex-col gap-2">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
