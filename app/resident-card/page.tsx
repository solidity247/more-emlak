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

      {/* Can you buy without VNZ */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl text-balance">
            {"Можно ли купить недвижимость в Турции без вида на жительство?"}
          </h2>
          <img src="/separator-ltl.svg" alt="" className="mx-auto mb-8 h-10 w-auto" />

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{"Чтобы купить квартиру в Турции вам понадобятся:"}</p>
            <ul className="ml-6 space-y-1">
              <li>{"а) загран паспорт"}</li>
              <li>{"б) деньги"}</li>
            </ul>
            <p>{"Все остальное можно оформить уже здесь, в Мерсине."}</p>
            <p>
              {"Получаем налоговый номер, открываем счет в турецком банке, при необходимости. Вид на жительство оформляется по желанию, на основании покупки недвижимости. ВНЖ необходим, например, если вы планируете жить в Турции дольше, чем позволяет безвизовый между странами. Предоставляется он на 1 или 2 года, в зависимости от вашего желания. Мы, конечно же, с удовольствием поможем вам при оформлении ВНЖ. Расскажем и объясним, что как и в каком порядке нужно сделать."}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-lg font-bold text-foreground">{"Документы на получение ВНЖ в Турции:"}</h3>
            <div className="space-y-3">
              {[
                "Заграничный паспорт + копии страниц с печатью о въезде в Турцию.",
                "Свидетельство о рождении детей со штампом апостиль (если есть несовершеннолетние дети).",
                "Свидетельство о браке со штампом апостиль (если недвижимость оформляется на одного из супругов).",
                "Пенсионное свидетельство с апостилем (если родители собственника также подают на ВНЖ). Данные документы необходимо перевести на турецкий язык и заверить в нотариусе. Стоимость перевода 25-40 лир за страницу, заверение 90 лир за страницу.",
                "Медицинская страховка – Sigorta в турецкой страховой компании на срок запрашиваемой визы. Взрослым от 18 до 65 лет (детям до 18 лет – не обязательно, старше 65 лет не страхуют). Стоимость формальной страховки около 400 лир / год на человека.",
                "Квитанция об уплате госпошлины в налоговой. 110 лир – пошлина на человека перед подачей заявки на сайте, после подачи стоимость карточки икамет - 140 лир на взрослого и 70 лир на детей до 18 лет.",
              ].map((doc, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-card p-4 border border-border">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-foreground leading-relaxed">{doc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-card-foreground">Этапы оформления ВНЖ</h2>
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

      {/* Videos */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-2 text-center text-2xl font-bold text-foreground">{"Видео про ВНЖ"}</h2>
          <img src="/separator-ltl.svg" alt="" className="mx-auto mb-10 h-10 w-auto" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "https://www.youtube.com/embed/dQw4w9WgXcQ",
              "https://www.youtube.com/embed/dQw4w9WgXcQ",
              "https://www.youtube.com/embed/dQw4w9WgXcQ",
            ].map((url, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <iframe
                  src={url}
                  title={`ВНЖ видео ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-16">
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
