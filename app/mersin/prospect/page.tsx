"use client"

import { useLocale } from "@/lib/locale-context"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Plane, Building2, Train, Factory, GraduationCap } from "lucide-react"

const prospects = [
  {
    icon: Plane,
    title: "Новый аэропорт",
    text: "Строительство международного аэропорта в 45 км от Мерсина значительно повысит доступность региона и привлечет новых инвесторов.",
  },
  {
    icon: Train,
    title: "Скоростная железная дорога",
    text: "Планируется строительство высокоскоростной железной дороги, связывающей Мерсин с крупнейшими городами Турции.",
  },
  {
    icon: Building2,
    title: "Развитие жилищного строительства",
    text: "Активное строительство новых жилых комплексов с современной инфраструктурой, бассейнами и детскими площадками.",
  },
  {
    icon: Factory,
    title: "Промышленная зона",
    text: "Свободная экономическая зона Мерсина привлекает международные компании, что создает рабочие места и стимулирует экономику.",
  },
  {
    icon: GraduationCap,
    title: "Образовательные учреждения",
    text: "Открытие новых международных школ и расширение университета Мерсина повышает привлекательность региона для семей.",
  },
  {
    icon: TrendingUp,
    title: "Рост стоимости недвижимости",
    text: "Ежегодный рост цен на недвижимость составляет около 30%, что делает инвестиции в Мерсин одними из самых выгодных в Турции.",
  },
]

export default function ProspectPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">{t("nav.mersin.prospect")}</h1>
          <p className="text-lg text-muted-foreground">
            Мерсин активно развивается и предлагает множество возможностей для инвесторов
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {prospects.map((item) => (
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
        </div>
      </section>
    </div>
  )
}
