"use client"

import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Send, Award, Users, Clock, Building2 } from "lucide-react"

const stats = [
  { icon: Clock, value: "15+", label: "лет опыта" },
  { icon: Users, value: "1000+", label: "довольных клиентов" },
  { icon: Building2, value: "200+", label: "объектов" },
  { icon: Award, value: "1", label: "день для покупки" },
]

const services = [
  "Консультация по покупке недвижимости",
  "Подбор объектов по вашим критериям",
  "Юридическое сопровождение сделки",
  "Оформление ВНЖ при покупке",
  "Постпродажный сервис и управление",
  "Помощь с обустройством после покупки",
]

export default function AboutPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">{t("nav.about.company")}</h1>
          <p className="text-lg text-muted-foreground">{t("aboutus.title")}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
                <stat.icon className="mb-3 h-8 w-8 text-primary" />
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-card-foreground">О компании</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Агентство недвижимости More Emlak Group было основано в Мерсине и является одним из первых агентств
                  недвижимости в регионе, специализирующихся на работе с русскоязычными клиентами.
                </p>
                <p>
                  Мы реализуем как новостройки, так и готовое жилье с оформлением вида на жительство.
                  Работаем только с проверенными застройщиками и гарантируем юридическую чистоту каждой сделки.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-card-foreground">Наши услуги</h2>
              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-muted-foreground">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <img
              src="https://static.tildacdn.com/tild3832-6232-4131-b664-326638323165/_.png"
              alt="Юлия - Директор"
              className="h-64 w-64 rounded-2xl object-cover shadow-lg"
            />
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Юлия - Основатель и Директор</h2>
              <p className="whitespace-pre-line text-muted-foreground leading-relaxed">{t("founder.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">{t("cta.title")}</h2>
          <p className="mb-8 text-muted-foreground">{t("cta.description")}</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-[#25D366] text-[#fff] hover:bg-[#25D366]/90">
              <a href="https://wa.me/905010031633" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("cta.whatsapp")}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-[#0088cc] text-[#fff] hover:bg-[#0088cc]/90">
              <a href="https://t.me/ArinaMoreEmlak" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                {t("cta.telegram")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
