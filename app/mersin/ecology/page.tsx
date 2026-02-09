"use client"

import { useLocale } from "@/lib/locale-context"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Droplets, Wind, TreePine, Sun, Recycle } from "lucide-react"

const ecoFacts = [
  {
    icon: Droplets,
    title: "Чистое море",
    text: "Средиземное море у берегов Мерсина отличается кристальной чистотой. Береговая линия убирается ежедневно, что обеспечивает чистоту пляжей круглый год.",
  },
  {
    icon: Wind,
    title: "Чистый воздух",
    text: "Благодаря огромному количеству экзотических растений и отсутствию крупных загрязняющих предприятий, воздух в Мерсине невероятно чист.",
  },
  {
    icon: TreePine,
    title: "Парки и зеленые зоны",
    text: "В городе множество парков, садов и зеленых зон. Городские власти активно занимаются озеленением и созданием новых рекреационных пространств.",
  },
  {
    icon: Sun,
    title: "Солнечная энергия",
    text: "Мерсин является одним из лидеров в Турции по использованию солнечной энергии. Более 300 солнечных дней в году способствуют развитию возобновляемой энергетики.",
  },
  {
    icon: Leaf,
    title: "Сельское хозяйство",
    text: "Мерсин славится производством цитрусовых. Экологически чистые фермы поставляют свежие фрукты и овощи на местные рынки круглый год.",
  },
  {
    icon: Recycle,
    title: "Программы переработки",
    text: "Город активно внедряет программы переработки отходов и стремится к устойчивому развитию, сохраняя природное богатство региона.",
  },
]

export default function EcologyPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">{t("nav.mersin.ecology")}</h1>
          <p className="text-lg text-muted-foreground">
            Мерсин - один из самых экологически чистых городов Турции на Средиземноморском побережье
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ecoFacts.map((item) => (
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
