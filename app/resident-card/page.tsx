"use client"

import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Home, Shield, Clock, MessageCircle } from "lucide-react"

const steps = [
  { icon: Home, key: "Покупка недвижимости" },
  { icon: FileText, key: "Сбор документов" },
  { icon: Shield, key: "Подача заявки" },
  { icon: Clock, key: "Ожидание одобрения" },
  { icon: CheckCircle, key: "Получение ВНЖ" },
]

const benefits = [
  "Право на проживание в Турции до 2 лет с возможностью продления",
  "Доступ к медицинским услугам и системе здравоохранения",
  "Возможность открытия банковского счета",
  "Право на получение водительского удостоверения",
  "Возможность оформления налогового номера",
  "Упрощенная процедура при покупке недвижимости",
]

export default function ResidentCardPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary/5 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">{t("resident.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("resident.subtitle")}</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">Этапы оформления ВНЖ</h2>
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step, i) => (
              <div key={step.key} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="mb-1 text-xs font-bold text-primary">Шаг {i + 1}</span>
                <p className="text-sm font-medium text-foreground">{step.key}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-card-foreground">Преимущества ВНЖ в Турции</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <Card key={benefit} className="border-border bg-background">
                <CardContent className="flex items-start gap-3 p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Получите бесплатную консультацию</h2>
          <p className="mb-8 text-muted-foreground">Наши специалисты помогут вам с оформлением ВНЖ при покупке недвижимости в Мерсине</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://wa.me/905010031633" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Связаться с нами
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
