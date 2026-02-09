"use client"

import { useLocale } from "@/lib/locale-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Award, Users, FileCheck, Heart, MessageCircle } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "15+ лет опыта",
    text: "Мы работаем на рынке недвижимости с 2009 года и знаем все тонкости покупки жилья в Турции.",
  },
  {
    icon: Users,
    title: "1000+ довольных клиентов",
    text: "Сотни семей уже нашли свой дом мечты в Мерсине благодаря нашей работе.",
  },
  {
    icon: Shield,
    title: "Лицензированное агентство",
    text: "Мы работаем в Мерсине официально, с полным пакетом лицензий и разрешений.",
  },
  {
    icon: Award,
    title: "Покупка за 1 день",
    text: "Благодаря отлаженным процессам мы можем оформить покупку объекта всего за 1 день.",
  },
  {
    icon: FileCheck,
    title: "200+ объектов",
    text: "Широкий выбор недвижимости от студий до вилл в лучших районах Мерсина.",
  },
  {
    icon: Heart,
    title: "Индивидуальный подход",
    text: "Наша задача - сделать вам лучшее предложение. Вы получите квартиру, подходящую по всем критериям специально для вас.",
  },
]

export default function WhyUsPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">{t("whyus.title")}</h1>
          <p className="text-lg text-muted-foreground">
            Узнайте почему клиенты доверяют нам самое важное - покупку своего нового дома
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <Card key={item.title} className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://wa.me/905010031633" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Связаться с нами
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
