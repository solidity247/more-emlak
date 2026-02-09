"use client"

import { useLocale } from "@/lib/locale-context"
import { Leaf, Users, Construction, Thermometer, Banknote, Shield } from "lucide-react"

export function WhyMersinSection() {
  const { t } = useLocale()

  const advantages = [
    {
      icon: Leaf,
      iconUrl: "https://static.tildacdn.com/tild3338-6238-4065-b462-343932633430/pngwingcom.png",
      title: t("why.eco.title"),
      text: t("why.eco.text"),
    },
    {
      icon: Users,
      iconUrl: "https://static.tildacdn.com/tild3530-3639-4462-a439-653232373739/pngwingcom_10.png",
      title: t("why.tourists.title"),
      text: t("why.tourists.text"),
    },
    {
      icon: Construction,
      iconUrl: "https://optim.tildacdn.com/tild6539-3434-4637-b438-656135386562/-/resize/60x/-/format/webp/photo.png.webp",
      title: t("why.infra.title"),
      text: t("why.infra.text"),
    },
    {
      icon: Thermometer,
      iconUrl: "https://optim.tildacdn.com/tild3164-6266-4066-b838-363330646537/-/resize/66x/-/format/webp/pngwingcom_4.png.webp",
      title: t("why.climate.title"),
      text: t("why.climate.text"),
    },
    {
      icon: Banknote,
      iconUrl: "https://optim.tildacdn.com/tild3336-3862-4135-a434-646136336561/-/resize/60x/-/format/webp/pngwingcom_8.png.webp",
      title: t("why.prices.title"),
      text: t("why.prices.text"),
    },
    {
      icon: Shield,
      iconUrl: "https://optim.tildacdn.com/tild3431-3331-4637-b364-336634363330/-/resize/63x/-/format/webp/photo.png.webp",
      title: t("why.seismic.title"),
      text: t("why.seismic.text"),
    },
  ]

  return (
    <section className="relative bg-card py-16 md:py-24">
      {/* Warm corner accents */}
      <div className="absolute left-0 top-0 h-32 w-32 rounded-br-full bg-warm/5" />
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          {t("why.title")}
        </h2>
        <img src="/separator-ltl.svg" alt="" className="mx-auto mb-12 h-8 w-auto" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="flex gap-4 rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <img
                  src={adv.iconUrl || "/placeholder.svg"}
                  alt=""
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                    const parent = e.currentTarget.parentElement
                    if (parent) {
                      const fallback = document.createElement("div")
                      fallback.className = "flex items-center justify-center"
                      parent.appendChild(fallback)
                    }
                  }}
                />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">{adv.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{adv.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
